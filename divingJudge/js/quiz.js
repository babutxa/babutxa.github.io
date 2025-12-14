// Current language
let currentLanguage = 'en';

// Translations
const translations = {
    en: {
        title: "Diving Judge Practice",
        subtitle: "FINA Rules Quiz",
        intro1: "Test your knowledge of FINA diving rules!",
        intro2: "Answer questions about scoring, dive positions, degrees of difficulty, and judge responsibilities.",
        startButton: "Start Quiz",
        rulesLinkText: "Need to review the rules first?",
        rulesLinkButton: "📖 View Official FINA Diving Rules",
        nextButton: "Next Question",
        quizComplete: "Quiz Complete!",
        yourScore: "Your Score:",
        tryAgain: "Try Again",
        questionOf: "Question",
        of: "of",
        score: "Score:",
        correct: "Correct!",
        incorrect: "Incorrect.",
        finaRule: "FINA Rule Reference:",
        performanceMessages: {
            perfect: "Perfect! You have excellent knowledge of FINA diving rules!",
            great: "Great job! You have a strong understanding of diving rules.",
            good: "Good effort! Keep studying to improve your knowledge.",
            fair: "You're getting there. Review the FINA rules and try again.",
            needsWork: "Keep practicing! Study the FINA diving rules more carefully."
        }
    },
    ca: {
        title: "Pràctica de Jutge de Salts",
        subtitle: "Qüestionari de Regles FINA",
        intro1: "Posa a prova el teu coneixement de les regles FINA de salts!",
        intro2: "Respon preguntes sobre puntuació, posicions de salt, graus de dificultat i responsabilitats dels jutges.",
        startButton: "Començar Qüestionari",
        rulesLinkText: "Necessites revisar les regles primer?",
        rulesLinkButton: "📖 Veure Regles Oficials FINA de Salts",
        nextButton: "Següent Pregunta",
        quizComplete: "Qüestionari Completat!",
        yourScore: "La Teva Puntuació:",
        tryAgain: "Tornar a Provar",
        questionOf: "Pregunta",
        of: "de",
        score: "Puntuació:",
        correct: "Correcte!",
        incorrect: "Incorrecte.",
        finaRule: "Referència Regla FINA:",
        performanceMessages: {
            perfect: "Perfecte! Tens un excel·lent coneixement de les regles FINA de salts!",
            great: "Molt bé! Tens una bona comprensió de les regles de salts.",
            good: "Bon esforç! Continua estudiant per millorar el teu coneixement.",
            fair: "Hi estàs arribant. Revisa les regles FINA i torna-ho a intentar.",
            needsWork: "Continua practicant! Estudia les regles FINA de salts amb més atenció."
        }
    }
};

// Quiz questions with FINA rule references
const questions = {
    en: [
        {
            question: "What is the range of scores a diving judge can award?",
            answers: [
                "0 to 10 in increments of 0.5",
                "1 to 10 in increments of 0.5",
                "0 to 10 in increments of 1",
                "1 to 10 in increments of 1"
            ],
            correct: 0,
            explanation: "Judges award scores from 0 to 10 in half-point (0.5) increments. A score of 0 indicates a completely failed dive.",
            finaRule: {
                section: "8.1.1",
                text: "A judge shall award from 0 to 10 points for a dive according to their overall impression.",
                page: 144
            }
        },
        {
            question: "How many groups of dives are there in FINA diving?",
            answers: [
                "4 groups",
                "5 groups",
                "6 groups",
                "7 groups"
            ],
            correct: 2,
            explanation: "There are 6 groups: Forward (1), Back (2), Reverse (3), Inward (4), Twisting (5), and Armstand (6).",
            finaRule: {
                section: "1.5.2",
                text: "The first digit shall indicate the group to which the dive belongs: 1 = Front, 2 = Back, 3 = Reverse, 4 = Inward, 5 = Twisting, 6 = Armstand.",
                page: 136
            }
        },
        {
            question: "What does the position code 'B' represent in a dive code?",
            answers: [
                "Back position",
                "Pike position",
                "Backward dive",
                "Bent position"
            ],
            correct: 1,
            explanation: "Position codes are: A = Straight, B = Pike, C = Tuck, D = Free (for twisting dives).",
            finaRule: {
                section: "1.5.8",
                text: "The letter at the end of the dive number shall indicate the position in which the dive is performed: A = Straight, B = Pike, C = Tuck, D = Free.",
                page: 136
            }
        },
        {
            question: "In competitions with 5 or 7 judges, which scores are used for the final score?",
            answers: [
                "All scores are averaged",
                "Highest and lowest are dropped, rest are summed",
                "Only the middle 3 scores",
                "Two highest and two lowest are dropped"
            ],
            correct: 2,
            explanation: "The highest and lowest scores are eliminated, and the remaining scores are summed and multiplied by the degree of difficulty.",
            finaRule: {
                section: "7.5",
                text: "When seven (7) judges are used, the secretaries shall cancel the two (2) highest and the two (2) lowest judges' awards. If only five (5) judges are used, the secretaries shall cancel the highest and the lowest award.",
                page: 143
            }
        },
        {
            question: "What does a score of 8.5-9.5 represent?",
            answers: [
                "Perfect dive",
                "Excellent dive",
                "Very good dive",
                "Good dive"
            ],
            correct: 2,
            explanation: "According to FINA scoring standards: 10 = Excellent, 8.5-9.5 = Very Good, 7-8 = Good, 5-6.5 = Satisfactory, 2.5-4.5 = Deficient, 0.5-2 = Unsatisfactory, 0 = Completely Failed.",
            finaRule: {
                section: "8.1.1",
                text: "Scoring criteria: Excellent = 10, Very Good = 8.5 to 9.5, Good = 7.0 to 8.0, Satisfactory = 5.0 to 6.5, Deficient = 2.5 to 4.5, Very Deficient = 0.5 to 2.0, Completely failed = 0.",
                page: 144
            }
        },
        {
            question: "What is the dive code for a forward 2½ somersault in pike position?",
            answers: [
                "105B",
                "205B",
                "305B",
                "405B"
            ],
            correct: 0,
            explanation: "First digit = group (1 = Forward), next digits = somersaults (05 = 2½), letter = position (B = Pike). So 105B is correct.",
            finaRule: {
                section: "1.5",
                text: "The first digit shows the group; the second and third digits show the number of half somersaults; the letter at the end shows the position.",
                page: 136
            }
        },
        {
            question: "What does the degree of difficulty (DD) represent?",
            answers: [
                "How difficult it is to judge the dive",
                "The technical difficulty and risk of the dive",
                "The height of the dive",
                "The number of judges required"
            ],
            correct: 1,
            explanation: "The DD is a number that represents the technical difficulty, risk, and complexity of performing the dive. It multiplies the judges' scores.",
            finaRule: {
                section: "1.6.1",
                text: "The degree of difficulty of each dive is calculated using the following formula: A + B + C + D + E = DEGREE OF DIFFICULTY.",
                page: 136
            }
        },
        {
            question: "In springboard diving, which group uses armstand position?",
            answers: [
                "Armstand dives are only for platform",
                "Group 5 (Twisting)",
                "Group 6 (Armstand)",
                "All groups can use armstand"
            ],
            correct: 0,
            explanation: "Armstand dives (Group 6) are only performed on platform diving, not on springboard.",
            finaRule: {
                section: "3.4-3.5",
                text: "Men's springboard competitions shall comprise six (6) dives from five (5) different groups. Men's platform competitions shall comprise six (6) dives from six (6) different groups.",
                page: 138
            }
        },
        {
            question: "What should judges evaluate when scoring a dive?",
            answers: [
                "Only the entry into the water",
                "Only the takeoff and flight",
                "The entire dive from approach to entry",
                "Only the somersaults and twists"
            ],
            correct: 2,
            explanation: "Judges must evaluate the entire dive: starting position/approach, takeoff, elevation and execution during flight, and entry into the water.",
            finaRule: {
                section: "8.1.3",
                text: "The points to be considered in judging the overall impression of a dive are the technique and grace of: the starting position and the approach, the take-off, the flight, the entry.",
                page: 144
            }
        },
        {
            question: "If a diver performs the wrong dive, what score do they receive?",
            answers: [
                "0 points from all judges",
                "The judges score what was performed",
                "5 points maximum",
                "The dive is redone"
            ],
            correct: 0,
            explanation: "If a diver performs a dive other than the one announced, all judges award 0 points and the dive cannot be repeated.",
            finaRule: {
                section: "6.4.12",
                text: "When the Referee is certain that a diver has performed a dive of a number other than that announced, the Referee shall declare it a failed dive.",
                page: 142
            }
        },
        {
            question: "What is a 'balk' in diving?",
            answers: [
                "A perfect entry",
                "Starting a dive but stopping before takeoff",
                "Touching the board during flight",
                "Landing flat on the water"
            ],
            correct: 1,
            explanation: "A balk is when a diver starts their approach or movement but stops before takeoff. One balk is allowed without penalty, but a second balk results in a failed dive (0 points).",
            finaRule: {
                section: "6.5.1-6.5.3",
                text: "When a diver takes a step and stops or stops the movement for the take-off after the legs have commenced to press, the Referee shall declare a re-start and 2 points are to be deducted. When a second attempt is unsuccessful, the Referee shall declare a failed dive.",
                page: 142
            }
        },
        {
            question: "How is the final score for a dive calculated with 5 judges?",
            answers: [
                "Sum all 5 scores × DD",
                "Average of 5 scores × DD",
                "Sum of middle 3 scores × DD × 0.6",
                "Sum of middle 3 scores × DD"
            ],
            correct: 3,
            explanation: "Drop highest and lowest scores, sum the remaining 3 scores, and multiply by the degree of difficulty (DD) to get the final score.",
            finaRule: {
                section: "7.5 & 7.8",
                text: "When five (5) judges are used, the secretaries shall cancel the highest and the lowest award. The remaining awards are added and multiplied by the degree of difficulty.",
                page: 143
            }
        },
        {
            question: "In the dive code '5253B', what does the '5' at the beginning represent?",
            answers: [
                "Five somersaults",
                "Group 5 (Twisting dives)",
                "Platform height of 5 meters",
                "Degree of difficulty of 5.0"
            ],
            correct: 1,
            explanation: "The first digit indicates the dive group. 5 = Twisting dives, 2 = Back, 5 = 2½ somersaults, 3 = 1½ twists, B = Pike position.",
            finaRule: {
                section: "1.5.2",
                text: "The first digit shall indicate the group to which the dive belongs: 1 = Front, 2 = Back, 3 = Reverse, 4 = Inward, 5 = Twisting, 6 = Armstand.",
                page: 136
            }
        },
        {
            question: "What is the 'free' position (D) used for?",
            answers: [
                "Dives with no required position",
                "Twisting dives combining different positions",
                "Only armstand dives",
                "Dives where the diver chooses their position"
            ],
            correct: 1,
            explanation: "The free position (D) is used for twisting dives where the diver may use a combination of positions (straight, pike, tuck) during the dive.",
            finaRule: {
                section: "1.5.9",
                text: "Free position means any combination of the other positions and is restricted in its use in some twisting dives.",
                page: 136
            }
        },
        {
            question: "What happens if a diver touches the end of the springboard or platform during flight?",
            answers: [
                "Automatic 0 points",
                "2 points deducted from each judge's score",
                "The dive is scored normally with deductions",
                "The dive must be repeated"
            ],
            correct: 0,
            explanation: "If any part of the diver's body touches the end of the springboard or platform during the dive, all judges must award 0 points.",
            finaRule: {
                section: "8.5.3",
                text: "If during the execution of a dive, a diver touches the end of the springboard or platform with their feet or hands, each judge shall deduct according to their opinion.",
                page: 146
            }
        }
    ],
    ca: [
        {
            question: "Quin és el rang de puntuacions que pot atorgar un jutge de salts?",
            answers: [
                "0 a 10 en increments de 0,5",
                "1 a 10 en increments de 0,5",
                "0 a 10 en increments d'1",
                "1 a 10 en increments d'1"
            ],
            correct: 0,
            explanation: "Els jutges atorguen puntuacions de 0 a 10 en increments de mig punt (0,5). Una puntuació de 0 indica un salt completament fallit.",
            finaRule: {
                section: "8.1.1",
                text: "Un jutge ha d'atorgar de 0 a 10 punts per un salt segons la seva impressió general.",
                page: 144
            }
        },
        {
            question: "Quants grups de salts hi ha en els salts FINA?",
            answers: [
                "4 grups",
                "5 grups",
                "6 grups",
                "7 grups"
            ],
            correct: 2,
            explanation: "Hi ha 6 grups: Endavant (1), Enrere (2), Invers (3), Cap endins (4), Amb pirueta (5) i Equilibri (6).",
            finaRule: {
                section: "1.5.2",
                text: "El primer dígit indica el grup al qual pertany el salt: 1 = Endavant, 2 = Enrere, 3 = Invers, 4 = Cap endins, 5 = Amb pirueta, 6 = Equilibri.",
                page: 136
            }
        },
        {
            question: "Què representa el codi de posició 'B' en un codi de salt?",
            answers: [
                "Posició d'esquena",
                "Posició carpada",
                "Salt enrere",
                "Posició doblegada"
            ],
            correct: 1,
            explanation: "Els codis de posició són: A = Estirat, B = Carpat, C = Agrupat, D = Lliure (per salts amb pirueta).",
            finaRule: {
                section: "1.5.8",
                text: "La lletra al final del número de salt indica la posició en què es realitza el salt: A = Estirat, B = Carpat, C = Agrupat, D = Lliure.",
                page: 136
            }
        },
        {
            question: "En competicions amb 5 o 7 jutges, quines puntuacions s'utilitzen per a la puntuació final?",
            answers: [
                "Totes les puntuacions es fan la mitjana",
                "S'eliminen la més alta i la més baixa, es sumen la resta",
                "Només les 3 puntuacions del mig",
                "S'eliminen les dues més altes i les dues més baixes"
            ],
            correct: 2,
            explanation: "S'eliminen les puntuacions més alta i més baixa, i les puntuacions restants se sumen i es multipliquen pel grau de dificultat.",
            finaRule: {
                section: "7.5",
                text: "Quan s'utilitzen set (7) jutges, els secretaris han de cancel·lar les dues (2) puntuacions més altes i les dues (2) més baixes. Si només s'utilitzen cinc (5) jutges, els secretaris han de cancel·lar la puntuació més alta i la més baixa.",
                page: 143
            }
        },
        {
            question: "Què representa una puntuació de 8,5-9,5?",
            answers: [
                "Salt perfecte",
                "Salt excel·lent",
                "Salt molt bo",
                "Salt bo"
            ],
            correct: 2,
            explanation: "Segons els estàndards de puntuació FINA: 10 = Excel·lent, 8,5-9,5 = Molt Bo, 7-8 = Bo, 5-6,5 = Satisfactori, 2,5-4,5 = Deficient, 0,5-2 = Insatisfactori, 0 = Completament Fallit.",
            finaRule: {
                section: "8.1.1",
                text: "Criteris de puntuació: Excel·lent = 10, Molt Bo = 8,5 a 9,5, Bo = 7,0 a 8,0, Satisfactori = 5,0 a 6,5, Deficient = 2,5 a 4,5, Molt Deficient = 0,5 a 2,0, Completament fallit = 0.",
                page: 144
            }
        },
        {
            question: "Quin és el codi de salt per a un salt mortal endavant 2½ en posició carpada?",
            answers: [
                "105B",
                "205B",
                "305B",
                "405B"
            ],
            correct: 0,
            explanation: "Primer dígit = grup (1 = Endavant), següents dígits = salts mortals (05 = 2½), lletra = posició (B = Carpat). Així que 105B és correcte.",
            finaRule: {
                section: "1.5",
                text: "El primer dígit mostra el grup; el segon i tercer dígits mostren el nombre de migs salts mortals; la lletra al final mostra la posició.",
                page: 136
            }
        },
        {
            question: "Què representa el grau de dificultat (DD)?",
            answers: [
                "La dificultat de jutjar el salt",
                "La dificultat tècnica i el risc del salt",
                "L'altura del salt",
                "El nombre de jutges requerits"
            ],
            correct: 1,
            explanation: "El DD és un número que representa la dificultat tècnica, el risc i la complexitat de realitzar el salt. Multiplica les puntuacions dels jutges.",
            finaRule: {
                section: "1.6.1",
                text: "El grau de dificultat de cada salt es calcula utilitzant la següent fórmula: A + B + C + D + E = GRAU DE DIFICULTAT.",
                page: 136
            }
        },
        {
            question: "En salts de trampolí, quin grup utilitza posició d'equilibri?",
            answers: [
                "Els salts d'equilibri són només per a plataforma",
                "Grup 5 (Amb pirueta)",
                "Grup 6 (Equilibri)",
                "Tots els grups poden utilitzar equilibri"
            ],
            correct: 0,
            explanation: "Els salts d'equilibri (Grup 6) només es realitzen en salts de plataforma, no en trampolí.",
            finaRule: {
                section: "3.4-3.5",
                text: "Les competicions de trampolí masculí comprenen sis (6) salts de cinc (5) grups diferents. Les competicions de plataforma masculí comprenen sis (6) salts de sis (6) grups diferents.",
                page: 138
            }
        },
        {
            question: "Què han d'avaluar els jutges quan puntuen un salt?",
            answers: [
                "Només l'entrada a l'aigua",
                "Només l'impuls i el vol",
                "Tot el salt des de l'aproximació fins a l'entrada",
                "Només els salts mortals i les piruetes"
            ],
            correct: 2,
            explanation: "Els jutges han d'avaluar tot el salt: posició inicial/aproximació, impuls, elevació i execució durant el vol, i entrada a l'aigua.",
            finaRule: {
                section: "8.1.3",
                text: "Els punts a considerar en jutjar la impressió general d'un salt són la tècnica i la gràcia de: la posició inicial i l'aproximació, l'impuls, el vol, l'entrada.",
                page: 144
            }
        },
        {
            question: "Si un saltador realitza un salt equivocat, quina puntuació rep?",
            answers: [
                "0 punts de tots els jutges",
                "Els jutges puntuen el que s'ha realitzat",
                "Màxim 5 punts",
                "El salt es repeteix"
            ],
            correct: 0,
            explanation: "Si un saltador realitza un salt diferent del que s'ha anunciat, tots els jutges atorguen 0 punts i el salt no es pot repetir.",
            finaRule: {
                section: "6.4.12",
                text: "Quan l'àrbitre està segur que un saltador ha realitzat un salt d'un número diferent del que s'ha anunciat, l'àrbitre el declararà salt fallit.",
                page: 142
            }
        },
        {
            question: "Què és un 'balk' en salts?",
            answers: [
                "Una entrada perfecta",
                "Començar un salt però aturar-se abans de l'impuls",
                "Tocar el trampolí durant el vol",
                "Aterrar pla a l'aigua"
            ],
            correct: 1,
            explanation: "Un balk és quan un saltador comença la seva aproximació o moviment però s'atura abans de l'impuls. Es permet un balk sense penalització, però un segon balk resulta en un salt fallit (0 punts).",
            finaRule: {
                section: "6.5.1-6.5.3",
                text: "Quan un saltador fa un pas i s'atura o atura el moviment per a l'impuls després que les cames hagin començat a prémer, l'àrbitre declararà un reinici i es deduiran 2 punts. Quan un segon intent no té èxit, l'àrbitre declararà un salt fallit.",
                page: 142
            }
        },
        {
            question: "Com es calcula la puntuació final d'un salt amb 5 jutges?",
            answers: [
                "Suma de totes les 5 puntuacions × DD",
                "Mitjana de les 5 puntuacions × DD",
                "Suma de les 3 puntuacions del mig × DD × 0,6",
                "Suma de les 3 puntuacions del mig × DD"
            ],
            correct: 3,
            explanation: "S'eliminen les puntuacions més alta i més baixa, se sumen les 3 restants, i es multipliquen pel grau de dificultat (DD) per obtenir la puntuació final.",
            finaRule: {
                section: "7.5 & 7.8",
                text: "Quan s'utilitzen cinc (5) jutges, els secretaris han de cancel·lar la puntuació més alta i la més baixa. Les puntuacions restants s'afegeixen i es multipliquen pel grau de dificultat.",
                page: 143
            }
        },
        {
            question: "En el codi de salt '5253B', què representa el '5' del principi?",
            answers: [
                "Cinc salts mortals",
                "Grup 5 (Salts amb pirueta)",
                "Altura de plataforma de 5 metres",
                "Grau de dificultat de 5,0"
            ],
            correct: 1,
            explanation: "El primer dígit indica el grup de salt. 5 = Salts amb pirueta, 2 = Enrere, 5 = 2½ salts mortals, 3 = 1½ piruetes, B = Posició carpada.",
            finaRule: {
                section: "1.5.2",
                text: "El primer dígit indica el grup al qual pertany el salt: 1 = Endavant, 2 = Enrere, 3 = Invers, 4 = Cap endins, 5 = Amb pirueta, 6 = Equilibri.",
                page: 136
            }
        },
        {
            question: "Per a què s'utilitza la posició 'lliure' (D)?",
            answers: [
                "Salts sense posició requerida",
                "Salts amb pirueta combinant diferents posicions",
                "Només salts d'equilibri",
                "Salts on el saltador tria la seva posició"
            ],
            correct: 1,
            explanation: "La posició lliure (D) s'utilitza per a salts amb pirueta on el saltador pot utilitzar una combinació de posicions (estirat, carpat, agrupat) durant el salt.",
            finaRule: {
                section: "1.5.9",
                text: "La posició lliure significa qualsevol combinació de les altres posicions i el seu ús està restringit en alguns salts amb pirueta.",
                page: 136
            }
        },
        {
            question: "Què passa si un saltador toca l'extrem del trampolí o plataforma durant el vol?",
            answers: [
                "0 punts automàtic",
                "Es dedueixen 2 punts de cada puntuació del jutge",
                "El salt es puntua normalment amb deduccions",
                "El salt s'ha de repetir"
            ],
            correct: 0,
            explanation: "Si qualsevol part del cos del saltador toca l'extrem del trampolí o plataforma durant el salt, tots els jutges han d'atorgar 0 punts.",
            finaRule: {
                section: "8.5.3",
                text: "Si durant l'execució d'un salt, un saltador toca l'extrem del trampolí o plataforma amb els seus peus o mans, cada jutge deduirà segons la seva opinió.",
                page: 146
            }
        }
    ]
};

let currentQuestionIndex = 0;
let score = 0;
let answeredQuestions = 0;
let usedQuestions = [];

// Language switching
function changeLanguage(lang) {
    currentLanguage = lang;

    // Update active button
    document.querySelectorAll('.lang-button').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    // Update all translated elements
    updateTranslations();
}

function updateTranslations() {
    const t = translations[currentLanguage];

    // Update all elements with data-i18n attributes
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (t[key]) {
            element.textContent = t[key];
        }
    });

    // Update progress text if quiz is active
    if (document.getElementById('question-screen').style.display !== 'none') {
        updateProgressText();
    }
}

function updateProgressText() {
    const t = translations[currentLanguage];
    document.getElementById('question-number').textContent =
        `${t.questionOf} ${currentQuestionIndex + 1} ${t.of} ${usedQuestions.length}`;
    document.getElementById('score').textContent =
        `${t.score} ${score}/${answeredQuestions}`;
}

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    answeredQuestions = 0;
    usedQuestions = [];

    // Get questions for current language and shuffle
    const langQuestions = [...questions[currentLanguage]];
    shuffleArray(langQuestions);
    usedQuestions = langQuestions.slice(0, 10);

    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('question-screen').style.display = 'block';

    showQuestion();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function showQuestion() {
    const question = usedQuestions[currentQuestionIndex];
    const t = translations[currentLanguage];

    updateProgressText();

    document.getElementById('question-text').textContent = question.question;

    const answersContainer = document.getElementById('answers-container');
    answersContainer.innerHTML = '';

    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.className = 'answer-button';
        button.textContent = answer;
        button.onclick = () => selectAnswer(index);
        answersContainer.appendChild(button);
    });

    document.getElementById('feedback').style.display = 'none';
    document.getElementById('fina-rule-reference').innerHTML = '';
}

function selectAnswer(selectedIndex) {
    const question = usedQuestions[currentQuestionIndex];
    const buttons = document.querySelectorAll('.answer-button');
    const feedbackDiv = document.getElementById('feedback');
    const feedbackText = document.getElementById('feedback-text');
    const finaRuleDiv = document.getElementById('fina-rule-reference');
    const t = translations[currentLanguage];

    answeredQuestions++;

    buttons.forEach((button, index) => {
        button.disabled = true;
        if (index === question.correct) {
            button.classList.add('correct');
        } else if (index === selectedIndex) {
            button.classList.add('incorrect');
        }
    });

    if (selectedIndex === question.correct) {
        score++;
        feedbackDiv.className = 'correct';
        feedbackText.innerHTML = `<strong>${t.correct}</strong><br>${question.explanation}`;
    } else {
        feedbackDiv.className = 'incorrect';
        feedbackText.innerHTML = `<strong>${t.incorrect}</strong><br>${question.explanation}`;
    }

    // Show FINA rule reference
    if (question.finaRule) {
        finaRuleDiv.innerHTML = `
            <strong>${t.finaRule} ${question.finaRule.section}</strong>
            <p>"${question.finaRule.text}"</p>
            <a href="https://resources.fina.org/fina/document/2025/07/01/ed3110a4-2291-411d-8526-6f641bd9237a/Competition-Regulations_June-2025_Clean-updated-01.07.2025-.pdf#page=${question.finaRule.page}" target="_blank">
                FINA Diving Rules - Page ${question.finaRule.page}
            </a>
        `;
    }

    feedbackDiv.style.display = 'block';

    updateProgressText();
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < usedQuestions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById('question-screen').style.display = 'none';
    document.getElementById('results-screen').style.display = 'block';

    const percentage = (score / usedQuestions.length) * 100;
    document.getElementById('final-score').textContent =
        `${score}/${usedQuestions.length} (${percentage.toFixed(0)}%)`;

    const t = translations[currentLanguage];
    let message = '';
    if (percentage === 100) {
        message = t.performanceMessages.perfect;
    } else if (percentage >= 80) {
        message = t.performanceMessages.great;
    } else if (percentage >= 60) {
        message = t.performanceMessages.good;
    } else if (percentage >= 40) {
        message = t.performanceMessages.fair;
    } else {
        message = t.performanceMessages.needsWork;
    }

    document.getElementById('performance-message').textContent = message;
}

function restartQuiz() {
    document.getElementById('results-screen').style.display = 'none';
    document.getElementById('start-screen').style.display = 'block';
}

// Initialize translations on page load
document.addEventListener('DOMContentLoaded', function() {
    updateTranslations();
});
