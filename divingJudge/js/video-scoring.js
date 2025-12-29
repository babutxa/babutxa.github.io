// Video Scoring Practice Module

let currentVideoIndex = 0;
let userScores = [];
let videoData = [];
let diveReference = {};
let player = null;
let playerReady = false;

// Load YouTube IFrame API
const tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// YouTube API callback when ready
function onYouTubeIframeAPIReady() {
    playerReady = true;
}

// Load dive reference table (descriptions and difficulties)
async function loadDiveReference() {
    try {
        const response = await fetch('js/dive-reference.json');
        const data = await response.json();
        diveReference = data;
        return true;
    } catch (error) {
        console.error('Error loading dive reference:', error);
        return false;
    }
}

// Get description for a dive code
function getDescription(diveCode) {
    const description = diveReference.descriptions?.[diveCode];

    if (!description) {
        console.warn(`Description not found for ${diveCode}. Using code as fallback.`);
        return diveCode;
    }

    return description;
}

// Get degree of difficulty for a dive
function getDifficulty(diveCode, height) {
    const key = `${diveCode}-${height}`;
    const difficulty = diveReference.difficulties?.[key];

    if (difficulty === undefined) {
        console.warn(`Difficulty not found for ${key}. Using default value.`);
        return 0.0; // Default fallback
    }

    return difficulty;
}

// Calculate official average from judges' scores
function calculateOfficialAverage(scores) {
    if (!scores || scores.length === 0) {
        return 0;
    }

    // Sort scores in ascending order
    const sorted = [...scores].sort((a, b) => a - b);

    // Determine how many scores to drop from each end
    let dropCount;
    if (sorted.length === 7) {
        dropCount = 2; // Drop 2 highest and 2 lowest
    } else if (sorted.length === 5) {
        dropCount = 1; // Drop 1 highest and 1 lowest
    } else {
        // For other counts, drop proportionally (floor)
        dropCount = Math.floor((sorted.length - 3) / 2);
    }

    // Get the middle scores
    const middleScores = sorted.slice(dropCount, sorted.length - dropCount);

    // Calculate average
    const sum = middleScores.reduce((acc, score) => acc + score, 0);
    const average = sum / middleScores.length;

    return average;
}

// Load video data
async function loadVideoData() {
    try {
        // Load both videos and dive reference table
        const [videosResponse, refLoaded] = await Promise.all([
            fetch('js/videos.json'),
            loadDiveReference()
        ]);

        if (!refLoaded) {
            console.warn('Could not load dive reference');
        }

        const data = await videosResponse.json();
        videoData = data.dives;
        return true;
    } catch (error) {
        console.error('Error loading video data:', error);
        return false;
    }
}

// Start video scoring practice
async function startVideoScoring() {
    const loaded = await loadVideoData();
    if (!loaded) {
        alert('Error loading videos. Please try again.');
        return;
    }

    currentVideoIndex = 0;
    userScores = [];

    // Shuffle videos for variety
    shuffleArray(videoData);

    // Limit to 10 videos per session
    videoData = videoData.slice(0, Math.min(10, videoData.length));

    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('video-scoring-screen').style.display = 'block';

    showVideo();
}

// Display current video
function showVideo() {
    const video = videoData[currentVideoIndex];
    const t = translations[currentLanguage];

    // Get description and degree of difficulty from reference table
    const description = getDescription(video.diveCode);
    const difficulty = getDifficulty(video.diveCode, video.height);

    // Update progress
    document.getElementById('video-progress').textContent =
        `${t.videoPractice || 'Video'} ${currentVideoIndex + 1} ${t.of} ${videoData.length}`;

    // Update dive information
    document.getElementById('dive-code').textContent = video.diveCode;
    document.getElementById('dive-height').textContent = video.height;
    document.getElementById('dive-description').textContent = description;
    document.getElementById('dive-difficulty').textContent = difficulty;
    document.getElementById('competition-name').textContent = video.competition;
    document.getElementById('dive-round').textContent = video.round;

    // Show video, hide scoring
    document.getElementById('video-container').style.display = 'block';
    document.getElementById('scoring-section').style.display = 'none';

    // Extract video ID from URL
    const videoId = video.videoUrl.split('/embed/')[1];

    // Destroy previous player if exists
    if (player) {
        player.destroy();
    }

    // Create container for player
    const videoContainer = document.getElementById('video-container');
    videoContainer.innerHTML = '<div id="youtube-player"></div>';

    // Wait for API to be ready
    const initPlayer = () => {
        player = new YT.Player('youtube-player', {
            width: '100%',
            height: '100%',
            videoId: videoId,
            playerVars: {
                start: video.videoStartTime || 0,
                end: video.videoEndTime || 0,
                autoplay: 0,
                rel: 0
            },
            events: {
                onStateChange: onPlayerStateChange
            }
        });
    };

    if (playerReady) {
        initPlayer();
    } else {
        // Wait for API to load
        const checkReady = setInterval(() => {
            if (playerReady) {
                clearInterval(checkReady);
                initPlayer();
            }
        }, 100);
    }

    // Reset scoring interface
    document.querySelectorAll('.score-buttons-compact button').forEach(btn => {
        btn.classList.remove('selected');
    });
    document.getElementById('video-feedback').style.display = 'none';
}

// Handle video state changes
function onPlayerStateChange(event) {
    // Video ended
    if (event.data === YT.PlayerState.ENDED) {
        // Hide video, show scoring
        document.getElementById('video-container').style.display = 'none';
        document.getElementById('scoring-section').style.display = 'block';
    }
}

// Select score
let selectedScore = null;

function selectScore(score) {
    selectedScore = score;

    // Update button states
    document.querySelectorAll('.score-buttons-compact button').forEach(btn => {
        btn.classList.remove('selected');
    });
    event.target.classList.add('selected');

    // Automatically submit the score
    submitVideoScore();
}

// Submit score and show feedback
function submitVideoScore() {
    if (selectedScore === null) return;

    const video = videoData[currentVideoIndex];
    const officialAvg = calculateOfficialAverage(video.officialScores);
    const difference = Math.abs(selectedScore - officialAvg);

    // Store user score
    userScores.push({
        videoId: video.id,
        userScore: selectedScore,
        officialAverage: officialAvg,
        difference: difference
    });

    // Show feedback
    showVideoFeedback(video, selectedScore, difference);
}

// Display feedback
function showVideoFeedback(video, userScore, difference) {
    const t = translations[currentLanguage];
    const feedbackDiv = document.getElementById('video-feedback');
    const feedbackText = document.getElementById('video-feedback-text');
    const officialScoresDiv = document.getElementById('official-scores');

    // Hide scoring section when showing feedback
    document.getElementById('scoring-section').style.display = 'none';

    // Determine feedback message and class
    let message = '';
    let feedbackClass = '';

    if (difference <= 0.5) {
        message = t.videoFeedback?.excellent || "Excellent! You're scoring like an official judge";
        feedbackClass = 'excellent';
    } else if (difference <= 1.0) {
        message = t.videoFeedback?.veryGood || "Very Good! Close to official scores";
        feedbackClass = 'very-good';
    } else if (difference <= 1.5) {
        message = t.videoFeedback?.good || "Good effort. Keep practicing to improve consistency";
        feedbackClass = 'good';
    } else if (difference <= 2.0) {
        message = t.videoFeedback?.fair || "Keep studying the scoring criteria";
        feedbackClass = 'fair';
    } else {
        message = t.videoFeedback?.needsWork || "Review FINA scoring standards and try again";
        feedbackClass = 'needs-work';
    }

    // Calculate official average for display
    const officialAvg = calculateOfficialAverage(video.officialScores);

    // Display scores
    const scoresHTML = `
        <div class="score-comparison">
            <div class="user-score-display">
                <strong>${t.yourScore || 'Your Score'}:</strong> ${userScore.toFixed(1)}
            </div>
            <div class="official-scores-display">
                <strong>${t.officialScores || 'Official Judges\' Scores'}:</strong><br>
                ${video.officialScores.map(s => s.toFixed(1)).join(', ')}
            </div>
            <div class="average-score">
                <strong>${t.average || 'Average'}:</strong> ${officialAvg.toFixed(2)}
            </div>
            <div class="difference ${difference <= 1.0 ? 'good-diff' : 'needs-improvement'}">
                <strong>${t.difference || 'Difference'}:</strong> ${difference.toFixed(2)}
            </div>
        </div>
    `;

    officialScoresDiv.innerHTML = scoresHTML;
    feedbackText.innerHTML = `<strong class="${feedbackClass}">${message}</strong>`;
    feedbackDiv.style.display = 'block';

    // Show next/watch again buttons
    document.getElementById('video-actions').style.display = 'block';
}

// Watch video again
function watchAgain() {
    const video = videoData[currentVideoIndex];

    // Show video, hide scoring and feedback
    document.getElementById('video-container').style.display = 'block';
    document.getElementById('scoring-section').style.display = 'none';
    document.getElementById('video-feedback').style.display = 'none';

    // Seek to start time and play
    if (player && player.seekTo) {
        player.seekTo(video.videoStartTime || 0);
        player.playVideo();
    }
}

// Next video
function nextVideo() {
    currentVideoIndex++;

    if (currentVideoIndex < videoData.length) {
        // Reset for next video
        selectedScore = null;
        document.getElementById('video-actions').style.display = 'none';
        showVideo();
    } else {
        showVideoResults();
    }
}

// Show final results
function showVideoResults() {
    document.getElementById('video-scoring-screen').style.display = 'none';
    document.getElementById('video-results-screen').style.display = 'block';

    const t = translations[currentLanguage];
    const totalVideos = userScores.length;
    const avgDifference = userScores.reduce((sum, s) => sum + s.difference, 0) / totalVideos;

    // Calculate accuracy stats
    const excellent = userScores.filter(s => s.difference <= 0.5).length;
    const veryGood = userScores.filter(s => s.difference > 0.5 && s.difference <= 1.0).length;
    const good = userScores.filter(s => s.difference > 1.0 && s.difference <= 1.5).length;

    let performanceMessage = '';
    if (avgDifference <= 0.5) {
        performanceMessage = t.videoResults?.expertLevel || "Expert Level! You have excellent judging skills!";
    } else if (avgDifference <= 1.0) {
        performanceMessage = t.videoResults?.advanced || "Advanced! You're developing strong judging consistency";
    } else if (avgDifference <= 1.5) {
        performanceMessage = t.videoResults?.intermediate || "Intermediate. Keep practicing to improve accuracy";
    } else {
        performanceMessage = t.videoResults?.beginner || "Beginner. Review FINA rules and practice more";
    }

    document.getElementById('video-final-message').textContent = performanceMessage;
    document.getElementById('video-stats').innerHTML = `
        <p><strong>${t.averageDifference || 'Average Difference'}:</strong> ${avgDifference.toFixed(2)} ${t.points || 'points'}</p>
        <p><strong>${t.accuracy || 'Accuracy Breakdown'}:</strong></p>
        <ul>
            <li>${t.excellent || 'Excellent'} (≤0.5): ${excellent}/${totalVideos}</li>
            <li>${t.veryGood || 'Very Good'} (0.5-1.0): ${veryGood}/${totalVideos}</li>
            <li>${t.good || 'Good'} (1.0-1.5): ${good}/${totalVideos}</li>
        </ul>
    `;
}

// Restart video scoring
function restartVideoScoring() {
    document.getElementById('video-results-screen').style.display = 'none';
    document.getElementById('start-screen').style.display = 'block';
}
