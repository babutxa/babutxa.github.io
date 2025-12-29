# Guide: Adding Diving Videos to the Practice App

This guide explains how to manually add diving videos with official scores to your Video Scoring Practice feature.

## Overview

Each dive requires:
1. YouTube video URL
2. Video start timestamp (when the dive begins)
3. Diver information
4. Dive details (code, description, difficulty)
5. Official judges' scores

---

## Step 1: Find a Suitable Video

### Where to Look:
- [World Aquatics YouTube Channel](https://www.youtube.com/@WorldAquatics/videos)
- [Olympics YouTube Channel](https://www.youtube.com/@Olympics/videos)
- Search for: "diving final world championships" or "olympic diving"

### What to Look For:
- ✅ Clear view of the dive
- ✅ Official judges' scores visible on screen
- ✅ Competition name and diver name shown
- ✅ Good video quality
- ✅ Full dive from approach to entry

---

## Step 2: Get the YouTube Video ID

### From the URL:
```
YouTube URL: https://www.youtube.com/watch?v=dQw4w9WgXcQ
Video ID:    dQw4w9WgXcQ (the part after "v=")
```

### Create Embed URL:
```
Format: https://www.youtube.com/embed/VIDEO_ID
Example: https://www.youtube.com/embed/dQw4w9WgXcQ
```

---

## Step 3: Get the Dive Start Timestamp

### Method 1: YouTube's Built-in Feature
1. Play the video to the moment the diver starts their approach
2. **Right-click on the video**
3. Select **"Copy video URL at current time"**
4. The URL will look like: `youtube.com/watch?v=VIDEO_ID&t=125s`
5. The timestamp is **125** seconds (2 minutes 5 seconds)

### Method 2: Manual Timing
1. Note the time shown in the video player (e.g., 2:05)
2. Convert to seconds: `2 × 60 + 5 = 125 seconds`

---

## Step 4: Collect Dive Information

While watching the video, note:

### Required Information:
- **Competition**: Event name (e.g., "World Championships 2024")
- **Round**: Preliminary, Semifinal, or Final
- **Dive Code**: The 3-4 character code (e.g., "207C", "5253B")
- **Height**: Platform/springboard height (e.g., "3m", "10m", "5m", "7.5m", "1m")

**Note:** The dive description and degree of difficulty (DD) are automatically looked up from a reference table based on the dive code and height. You only need to enter the dive code!

### Dive Code Reference:
- First digit = Group (1=Forward, 2=Back, 3=Reverse, 4=Inward, 5=Twisting, 6=Armstand)
- Middle digits = Number of half somersaults
- Last letter = Position (A=Straight, B=Pike, C=Tuck, D=Free)

Example: **207C** = Back (2) + 3½ somersaults (07) + Tuck (C)

---

## Step 5: Record Official Judges' Scores

### What to Look For:
Judges' scores appear on screen after each dive, usually showing 5 or 7 scores.

### Example from Screen:
```
Judges' Scores: 9.0  9.5  9.5  9.0  9.5  9.0  9.5
```

### Calculating the Average:
The app automatically calculates the official average:
1. **7 judges**: Drop highest 2 and lowest 2, average the middle 3
2. **5 judges**: Drop highest 1 and lowest 1, average the middle 3

**You don't need to calculate or enter the average** - just collect all the judges' scores!

---

## Step 6: Add to videos.json

### Open the File:
```
divingJudge/js/videos.json
```

### Add New Entry:
Copy this template and fill in your data:

```json
{
  "id": 4,
  "videoUrl": "https://www.youtube.com/embed/YOUR_VIDEO_ID",
  "competition": "Competition Name 2024",
  "round": "Final",
  "diveCode": "207C",
  "height": "3m",
  "officialScores": [9.0, 9.5, 9.5, 9.0, 9.5, 9.0, 9.5],
  "videoStartTime": 125,
  "videoEndTime": 140
}
```

### Field Explanations:

| Field | Description | Example |
|-------|-------------|---------|
| `id` | Unique number (increment from last) | `4` |
| `videoUrl` | YouTube embed URL | `"https://www.youtube.com/embed/dQw4w9WgXcQ"` |
| `competition` | Event name | `"World Championships 2024"` |
| `round` | Competition round | `"Final"`, `"Semifinal"`, or `"Preliminary"` |
| `diveCode` | Official dive code (auto-generates description & DD) | `"207C"` → "Back 3½ Somersaults Tuck" |
| `height` | Platform/springboard height | `"3m"`, `"10m"`, `"5m"`, `"7.5m"`, or `"1m"` |
| `officialScores` | Array of all judges' scores (auto-calculates average) | `[9.0, 9.5, 9.5, 9.0, 9.5, 9.0, 9.5]` |
| `videoStartTime` | Start time in seconds | `125` |
| `videoEndTime` | End time in seconds | `140` |

### Full Example with Multiple Dives:

```json
{
  "dives": [
    {
      "id": 1,
      "videoUrl": "https://www.youtube.com/embed/VIDEO_ID_1",
      "competition": "Paris Olympics 2024",
      "round": "Final",
      "diveCode": "207C",
      "height": "10m",
      "officialScores": [9.0, 9.5, 9.5, 9.0, 9.5, 9.0, 9.5],
      "videoStartTime": 125,
      "videoEndTime": 140
    },
    {
      "id": 2,
      "videoUrl": "https://www.youtube.com/embed/VIDEO_ID_2",
      "competition": "World Championships 2024",
      "round": "Final",
      "diveCode": "107B",
      "height": "3m",
      "officialScores": [8.5, 8.5, 9.0, 8.5, 9.0, 8.5, 9.0],
      "videoStartTime": 87,
      "videoEndTime": 102
    }
  ]
}
```

### Important Notes:
- ⚠️ Don't forget the comma (`,`) between dive entries!
- ⚠️ The last dive should NOT have a comma after it
- ⚠️ All text fields must be in quotes (`"like this"`)
- ⚠️ Numbers should NOT be in quotes (correct: `3.3`, wrong: `"3.3"`)

---

## Step 7: Test Your Changes

### Local Testing:
1. Make sure the local server is running:
   ```bash
   cd /Users/babutxa/Documents/babutxa.github.io
   python3 -m http.server 8000
   ```

2. Open in browser:
   ```
   http://localhost:8000/divingJudge/
   ```

3. Click "Video Scoring Practice"

4. Verify:
   - ✅ Video loads correctly
   - ✅ Video starts at the right moment (diver's approach)
   - ✅ Dive information displays correctly
   - ✅ Scoring works
   - ✅ Official scores show correctly in feedback

### If Video Doesn't Start at Right Time:
- The `videoStartTime` might need adjustment
- YouTube URLs use the format: `?start=SECONDS`
- Try ±5 seconds if timing is off

---

## Step 8: Deploy to GitHub Pages

Once you've tested locally and everything works:

```bash
git add divingJudge/js/videos.json
git commit -m "Add new diving videos for practice"
git push
```

Wait 1-2 minutes for GitHub Pages to rebuild, then test on:
```
https://babutxa.github.io/divingJudge/
```

---

## Quick Reference Checklist

When adding a new dive, collect:
- [ ] YouTube video ID
- [ ] Start and end timestamps (in seconds)
- [ ] Competition name and year
- [ ] Round (Final/Semifinal/Preliminary)
- [ ] Dive code (e.g., 207C)
- [ ] Platform/springboard height (1m, 3m, 5m, 7.5m, 10m)
- [ ] All judges' scores (5 or 7 scores)

**Note:** These are automatically calculated - no need to enter manually:
- Dive description (from dive code)
- Degree of difficulty (from dive code + height)
- Official average (from judges' scores)

---

## Tips for Finding Good Videos

### Best Sources:
1. **World Aquatics Championships** - Full competition coverage
2. **Olympic Games** - High quality, well-documented
3. **World Cup Events** - Recent competitions

### Search Terms:
- "diving final [year]"
- "10m platform final"
- "3m springboard final"
- "[diver name] dive"

### What Makes a Good Practice Video:
- Clear scoreboard with judges' scores
- Single dive (not a compilation)
- Good camera angle
- Diver name clearly visible
- Recent competition (2020+)

---

## Common Issues & Solutions

### Problem: Video won't load
**Solution:** Check the embed URL format - should be `/embed/` not `/watch?v=`

### Problem: Video starts at wrong time
**Solution:** Adjust `videoStartTime` by ±5-10 seconds

### Problem: JSON syntax error
**Solution:**
- Check for missing commas
- Verify all quotes are closed
- Use a JSON validator: https://jsonlint.com

### Problem: Scores don't match
**Solution:**
- Verify you copied all judges' scores
- Recalculate the average
- Check the scoring dropped the correct highest/lowest scores

---

## Example: Complete Process

**1. Found Video:**
```
URL: https://www.youtube.com/watch?v=ABC123XYZ
Title: "Quan Hongchan Perfect Dive - Paris 2024"
```

**2. Got Timestamp:**
```
Right-clicked at 2:15 → Got: &t=135s
videoStartTime: 135
```

**3. Noted Information:**
```
Competition: Paris Olympics 2024
Round: Final
Dive Code: 207C
Height: 10m
Scores on screen: 9.5, 9.5, 10.0, 9.5, 10.0, 9.5, 10.0
```
(Diver name visible in video, description and average will be auto-generated!)

**4. Added to videos.json:**
```json
{
  "id": 4,
  "videoUrl": "https://www.youtube.com/embed/ABC123XYZ",
  "competition": "Paris Olympics 2024",
  "round": "Final",
  "diveCode": "207C",
  "height": "10m",
  "officialScores": [9.5, 9.5, 10.0, 9.5, 10.0, 9.5, 10.0],
  "videoStartTime": 135,
  "videoEndTime": 150
}
```

**5. Tested locally ✓**

**6. Deployed to GitHub Pages ✓**

---

## Need Help?

If you encounter issues:
1. Validate your JSON at https://jsonlint.com
2. Check browser console for errors (F12 → Console tab)
3. Verify video plays on YouTube before adding
4. Test locally before deploying

---

**Happy video hunting! 🏊‍♀️**
