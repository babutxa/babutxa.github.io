// Fetch and store your school data (e.g., from a JSON file or an API).
const schoolsData = [
    {
    "schoolName": "Kantonsschule Büerlain",
    "city": "Winterthur",
    "profiles": [
      {"profileName": "WR",  "subjects": ["WR"], "from": ["2Gymi", "2or3Sek"], "sprache2": ["F"], "sprache3": ["It", "E"]},
    ],
    "immersion": ["Ze"],
    "position": [47.49611906798705, 8.730307342393047],
  },
  {
    "schoolName": "Kantonsschule Enge",
    "city": "Zürich",
    "profiles": [
      {"profileName": "N",  "subjects": ["It", "E", "Sp", "Ru"], "from": ["2Gymi", "2or3Sek"], "sprache2": ["F"], "sprache3": ["It", "E"]}, 
      {"profileName": "WR", "subjects": ["WR"], "from": ["2Gymi", "2or3Sek"], "sprache2": ["F", "It"], "sprache3": ["E"]} 
    ],
    "immersion": ["Ze"],
    "position": [47.36488210103682, 8.527873980888542],
  },
  {
    "schoolName": "Kantonsschule Freudenberg (KFR)",
    "city": "Zürich",
    "profiles": [
      {"profileName": "U",  "subjects": [], "from": ["6Prima"], "sprache2": [], "sprache3": []},
      {"profileName": "A",  "subjects": ["L", "Gr"], "from": ["2Gymi"], "sprache2": ["F"], "sprache3": ["It", "E", "Gr", "L"]}, 
      {"profileName": "N",  "subjects": ["It", "E", "Sp"], "from": ["2Gymi"], "sprache2": ["F"], "sprache3": ["It", "E"]}, 
      {"profileName": "MN", "subjects": ["PM", "BC"], "from": ["2Gymi", "2or3Sek"], "sprache2": ["F"], "sprache3": ["E"]}
    ],
    "immersion": ["Zf"],
    "position": [47.36513848417601, 8.527926144825612],
  },
  {
    "schoolName": "(*) Liceo Artistico at KFR",
    "city": "Zürich",
    "profiles": [
      {"profileName": "M", "subjects": ["BG"], "from": ["2Gymi", "2or3Sek"], "sprache2": ["It"], "sprache3": ["F", "E"]}
    ],
    "immersion": ["Zi"],
    "position": [47.36609038863689, 8.53005056939869],
  },
  {
    "schoolName": "Kantonsschule Hohe Promenade",
    "city": "Zürich",
    "profiles": [
      {"profileName": "U",  "subjects": [], "from": ["6Prima"], "sprache2": [], "sprache3": []},
      {"profileName": "A",  "subjects": ["L", "Gr", "It", "E", "Sp", "Ru"], "from": ["2Gymi"], "sprache2": ["F"], "sprache3": ["It", "E", "Gr", "L"]}, 
      {"profileName": "N",  "subjects": ["It", "E", "Sp", "Ru"], "from": ["2Gymi"], "sprache2": ["F"], "sprache3": ["It", "E"]}, 
    ],
    "immersion": ["Ze"],
    "position": [47.36900436670727, 8.548606840387116],
  }, 
  {
    "schoolName": "Kantonsschule Hottingen",
    "city": "Zürich",
    "profiles": [ 
      {"profileName": "WR", "subjects": ["WR"], "from": ["2Gymi", "2or3Sek"], "sprache2": ["F"], "sprache3": ["E"]}, 
    ],
    "immersion": ["Ze"],
    "position": [47.3687854714518, 8.552840705890937],
  },
  {
    "schoolName": "Kantonsschule Im Lee",
    "city": "Wintherthur",
    "profiles": [
      {"profileName": "A",  "subjects": ["L", "E"], "from": ["2or3Sek"], "sprache2": ["F"], "sprache3": ["E", "L"]},
      {"profileName": "N",  "subjects": ["It", "E", "Sp", "Ru"], "from": ["2or3Sek"], "sprache2": ["F"], "sprache3": ["It", "E"]},
      {"profileName": "MN", "subjects": ["PM", "BC"], "from": ["2Gymi", "2or3Sek"], "sprache2": ["F"], "sprache3": ["E"]},
      {"profileName": "M",  "subjects": ["BG", "Mu"], "from": ["2Gymi", "2or3Sek"], "sprache2": ["F"], "sprache3": ["E"]}
    ],
    "immersion": ["Ze"],
    "position": [47.50444668070266, 8.739521959165634],
  },
  {
    "schoolName": "Kantonsschule Küsnacht",
    "city": "Zürich",
    "profiles": [
      {"profileName": "U",  "subjects": [], "from": ["6Prima"], "sprache2": [], "sprache3": []},
      {"profileName": "N",  "subjects": ["It", "E", "Sp"], "from": ["2Gymi", "2or3Sek"], "sprache2": ["F"], "sprache3": ["It", "E"]}, 
      {"profileName": "M", "subjects": ["BG", "Mu"], "from": ["2Gymi", "2or3Sek"], "sprache2": ["F"], "sprache3": ["It", "E"]}
    ],
    "immersion": ["Ze"],
    "position": [47.316833911136506, 8.582539324879274],  
  }, 
  {
    "schoolName": "Kantonsschule Limmattal",
    "city": "Urdorf",
    "profiles": [
      {"profileName": "U",  "subjects": [], "from": ["6Prima"], "sprache2": [], "sprache3": []},
      {"profileName": "A",  "subjects": ["L", "Gr", "E"], "from": ["2or3Sek"], "sprache2": ["F", "It"], "sprache3": ["E", "Gr", "L"]},
      {"profileName": "N",  "subjects": ["It", "F", "E", "Sp"], "from": ["2Gymi", "2or3Sek"], "sprache2": ["F", "It"], "sprache3": ["It", "F", "E"]},
      {"profileName": "MN", "subjects": ["PM", "BC"], "from": ["2Gymi", "2or3Sek"], "sprache2": ["F", "It"], "sprache3": ["E"]},
      {"profileName": "WR",  "subjects": ["WR"], "from": ["2Gymi", "2or3Sek"], "sprache2": ["F", "It"], "sprache3": ["E"]},
      {"profileName": "M",  "subjects": ["BG", "Mu"], "from": ["2Gymi", "2or3Sek"], "sprache2": ["F", "It"], "sprache3": ["E"]}
    ],
    "immersion": ["Ze"],
    "position": [47.393111665608856, 8.424939351836551],  
  },
  {
    "schoolName": "Literargymnasium Rämibühl",
    "city": "Zürich",
    "profiles": [
      {"profileName": "U",  "subjects": [], "from": ["6Prima"], "sprache2": [], "sprache3": []},
      {"profileName": "A",  "subjects": ["L", "Gr", "It", "E", "Sp"], "from": ["2Gymi"], "sprache2": ["F"], "sprache3": ["It", "E", "Gr", "L"]}, 
      {"profileName": "N",  "subjects": ["It", "E", "Sp"], "from": ["2Gymi"], "sprache2": ["F"], "sprache3": ["E"]}
    ],
    "immersion": ["Ze", "IB"],
    "position": [47.371417157104915, 8.553804930734753],  
  }, 
  {
    "schoolName": "MNG Rämibühl",
    "city": "Zürich",
    "profiles": [
      {"profileName": "MN", "subjects": ["PM", "BC"], "from": ["2Gymi", "2or3Sek"], "sprache2": ["F", "It"], "sprache3": ["E"]},
    ],
    "immersion": ["Ze"],
    "position": [47.37220019772362, 8.552156476636824],
  }, 
  {
    "schoolName": "(*) Kunst und Sportgymnasium am MNG Rämibül",
    "city": "Zürich",
    "profiles": [
      {"profileName": "U",  "subjects": [], "from": ["6Prima"], "sprache2": [], "sprache3": []},
      {"profileName": "N",  "subjects": ["It", "F", "E"], "from": ["2Gymi", "2or3Sek"], "sprache2": ["F", "It"], "sprache3": ["It", "F", "E"]}, 
      {"profileName": "MN", "subjects": ["BC"], "from": ["2Gymi", "2or3Sek"], "sprache2": ["F"], "sprache3": ["E"]}, 
      {"profileName": "M", "subjects": ["Mu"], "from": ["2Gymi", "2or3Sek"], "sprache2": ["F"], "sprache3": ["E"]}
    ],
    "immersion": [],
    "position": [47.37220019772362, 8.552156476636824],
  }, 
  {
    "schoolName": "Realgymnasium Rämibühl",
    "city": "Zürich",
    "profiles": [
      {"profileName": "U",  "subjects": [], "from": ["6Prima"], "sprache2": [], "sprache3": []},
      {"profileName": "A",  "subjects": ["L", "Gr", "E"], "from": ["2Gymi"], "sprache2": ["F"], "sprache3": ["It", "E", "L"]}, 
      {"profileName": "N",  "subjects": ["It", "E", "Sp"], "from": ["2Gymi"], "sprache2": ["F"], "sprache3": ["It", "E"]}
    ],
    "immersion": ["Ze", "IB"],
    "position": [47.37171981853398, 8.55354394883393],  
  }, 
  {
    "schoolName": "Kantonsschule Rychenberg",
    "city": "Winterthur",
    "profiles": [
      {"profileName": "U",  "subjects": [], "from": ["6Prima"], "sprache2": [], "sprache3": []},
      {"profileName": "A",  "subjects": ["L", "Gr", "It", "E", "Sp", "Ru"], "from": ["2Gymi"], "sprache2": ["F"], "sprache3": ["It", "E", "L"]}, 
      {"profileName": "N",  "subjects": ["It", "E", "Sp", "Ru"], "from": ["2Gymi"], "sprache2": ["F"], "sprache3": ["It", "E"]}
    ],
    "immersion": ["Ze"],
    "position": [47.505273092772306, 8.737250728802746],  
  },   
  {
    "schoolName": "Kantonsschule Stadelhofen",
    "city": "Zürich",
    "profiles": [
      {"profileName": "A",  "subjects": ["L"], "from": ["2or3Sek"], "sprache2": ["F"], "sprache3": ["E"]},
      {"profileName": "N",  "subjects": ["It", "E", "Sp"], "from": ["2Gymi", "2or3Sek"], "sprache2": ["F"], "sprache3": ["It", "E"]},
      {"profileName": "MN", "subjects": ["BC"], "from": ["2Gymi", "2or3Sek"], "sprache2": ["F"], "sprache3": ["E"]},
      {"profileName": "M",  "subjects": ["BG", "Mu"], "from": ["2Gymi", "2or3Sek"], "sprache2": ["F"], "sprache3": ["E"]}
    ],
    "immersion": ["Ze"],
    "position": [47.36767277359999, 8.5492972193073],  
  },
  {
    "schoolName": "Kantonsschule Uetikon am See",
    "city": "Uetikon",
    "profiles": [
      {"profileName": "U",  "subjects": [], "from": ["6Prima"], "sprache2": [], "sprache3": []},
      {"profileName": "A",  "subjects": ["L"], "from": ["2or3Sek"], "sprache2": ["F"], "sprache3": ["It", "E"]},
      {"profileName": "N",  "subjects": ["It", "E", "Sp"], "from": ["2Gymi", "2or3Sek"], "sprache2": ["F"], "sprache3": ["It", "E"]},
      {"profileName": "MN", "subjects": ["PM", "BC"], "from": ["2Gymi", "2or3Sek"], "sprache2": ["F"], "sprache3": ["E"]},
      {"profileName": "WR",  "subjects": ["WR"], "from": ["2Gymi", "2or3Sek"], "sprache2": ["F"], "sprache3": ["E"]}
    ],
    "immersion": [],
    "position": [47.264155074893054, 8.67897476701721],  
  },
  {
    "schoolName": "Kantonsschule Uster",
    "city": "Uster",
    "profiles": [
      {"profileName": "U",  "subjects": [], "from": ["6Prima"], "sprache2": [], "sprache3": []},
      {"profileName": "A",  "subjects": ["L"], "from": ["2or3Sek"], "sprache2": ["F", "It"], "sprache3": ["E"]},
      {"profileName": "N",  "subjects": ["It", "E", "Sp"], "from": ["2Gymi", "2or3Sek"], "sprache2": ["F"], "sprache3": ["It", "E"]},
      {"profileName": "MN", "subjects": ["PM", "BC"], "from": ["2Gymi", "2or3Sek"], "sprache2": ["F", "It"], "sprache3": ["E"]},
      {"profileName": "WR",  "subjects": ["WR"], "from": ["2Gymi", "2or3Sek"], "sprache2": ["F", "It"], "sprache3": ["E"]},
      {"profileName": "M",  "subjects": ["BG", "Mu"], "from": ["2Gymi", "2or3Sek"], "sprache2": ["F", "It"], "sprache3": ["E"]}
    ],
    "immersion": ["Ze"],
    "position": [47.34883948673819, 8.708346732349666],  
  },
  {
    "schoolName": "Kantonsschule Wiedikon",
    "city": "Zürich",
    "profiles": [
      {"profileName": "U",  "subjects": [], "from": ["6Prima"], "sprache2": [], "sprache3": []},
      {"profileName": "A",  "subjects": ["L", "It", "E"], "from": ["2Gymi"], "sprache2": ["F", "It"], "sprache3": ["It", "E", "Gr", "L"]}, 
      {"profileName": "N",  "subjects": ["It", "E", "Sp"], "from": ["2Gymi"], "sprache2": ["F", "It"], "sprache3": ["It", "E"]}, 
      {"profileName": "M", "subjects": ["BG", "Mu"], "from": ["2Gymi", "2or3Sek"], "sprache2": ["F", "It"], "sprache3": ["It", "E"]}
    ],
    "immersion": ["Ze"],
    "position": [47.36894516062086, 8.515584547469924],
  }, 
  {
    "schoolName": "Kantonsschule Zimmerberg",
    "city": "Au",
    "profiles": [
      {"profileName": "U",  "subjects": [], "from": ["6Prima"], "sprache2": ["F"], "sprache3": []},
      {"profileName": "A",  "subjects": ["L", "E"], "from": ["2Gymi"], "sprache2": ["F"], "sprache3": ["E", "L"]}, 
      {"profileName": "N",  "subjects": ["It", "E", "Sp"], "from": ["2Gymi", "2or3Sek"], "sprache2": ["F"], "sprache3": ["It", "E"]}, 
      {"profileName": "MN", "subjects": ["PM", "BC"], "from": ["2Gymi", "2or3Sek"], "sprache2": ["F"], "sprache3": ["E"]}, 
      {"profileName": "WR", "subjects": ["WR"], "from": ["2Gymi", "2or3Sek"], "sprache2": ["F"], "sprache3": ["E"]} 
    ],
    "immersion": [],
    "position": [47.24032823893281, 8.639488502618745],
  }, 
  {
    "schoolName": "Kantonsschule Zürcher Oberland",
    "city": "Wetzikon",
    "profiles": [
      {"profileName": "U",  "subjects": [], "from": ["6Prima"], "sprache2": [], "sprache3": []},
      {"profileName": "A",  "subjects": ["L", "Gr"], "from": ["2Gymi", "2or3Sek"], "sprache2": ["F"], "sprache3": ["E"]},
      {"profileName": "N",  "subjects": ["It", "E", "Sp"], "from": ["2Gymi", "2or3Sek"], "sprache2": ["F"], "sprache3": ["It", "E"]},
      {"profileName": "MN", "subjects": ["PM", "BC"], "from": ["2Gymi", "2or3Sek"], "sprache2": ["F"], "sprache3": ["E"]},
      {"profileName": "WR",  "subjects": ["WR"], "from": ["2Gymi", "2or3Sek"], "sprache2": ["F"], "sprache3": ["E"]},
      {"profileName": "M",  "subjects": ["BG", "Mu"], "from": ["2Gymi", "2or3Sek"], "sprache2": ["F"], "sprache3": ["E"]}
    ],
    "immersion": [],
    "position": [47.31821061414312, 8.796618308308469],
  },
  {
    "schoolName": "Kantonsschule Zürcher Unterland",
    "city": "Bülach",
    "profiles": [
      {"profileName": "U",  "subjects": [], "from": ["6Prima"], "sprache2": [], "sprache3": []},
      {"profileName": "A",  "subjects": ["L", "Gr", "E"], "from": ["2Gymi", "2or3Sek"], "sprache2": ["F"], "sprache3": ["E", "L"]},
      {"profileName": "N",  "subjects": ["It", "Sp"], "from": ["2Gymi", "2or3Sek"], "sprache2": ["F"], "sprache3": ["It", "F", "E"]},
      {"profileName": "MN", "subjects": ["PM", "BC"], "from": ["2Gymi", "2or3Sek"], "sprache2": ["F"], "sprache3": ["E"]},
      {"profileName": "WR",  "subjects": ["WR"], "from": ["2Gymi", "2or3Sek"], "sprache2": ["F"], "sprache3": ["E"]},
      {"profileName": "M",  "subjects": ["BG", "Mu"], "from": ["2Gymi", "2or3Sek"], "sprache2": ["F"], "sprache3": ["E"]}
    ],
    "immersion": ["Ze"],
    "position": [47.518412388466345, 8.547765404450336],
  }, 
  {
    "schoolName": "Kantonsschule Zürich Nord",
    "city": "Zürich",
    "profiles": [
      {"profileName": "U",  "subjects": [], "from": ["6Prima"], "sprache2": [], "sprache3": []},
      {"profileName": "A",  "subjects": ["L", "Gr", "E"], "from": ["2Gymi"], "sprache2": ["F"], "sprache3": ["E", "L"]}, 
      {"profileName": "N",  "subjects": ["It", "E", "Sp", "Ru"], "from": ["2Gymi", "2or3Sek"], "sprache2": ["F"], "sprache3": ["It", "E"]}, 
      {"profileName": "MN", "subjects": ["PM", "BC"], "from": ["2Gymi", "2or3Sek"], "sprache2": ["F"], "sprache3": ["E"]}, 
      {"profileName": "WR", "subjects": ["WR"], "from": ["2Gymi", "2or3Sek"], "sprache2": ["F"], "sprache3": ["E"]}, 
      {"profileName": "M", "subjects": ["BG", "Mu"], "from": ["2Gymi", "2or3Sek"], "sprache2": ["F"], "sprache3": ["E"]}
    ],
    "immersion": ["Ze", "Zf"],
    "position": [47.408407322673284, 8.535663533765137],
  }, 


  // Add more schools and profiles as needed
];
