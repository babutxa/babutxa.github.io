// Fetch and store your school data (e.g., from a JSON file or an API).
const schoolsData = [
    {
    "schoolName": "Kantonsschule Büerlain",
    "city": "Winterthur",
    "profiles": [
      {"profileName": "WR",  "subjects": ["WR"], "from": ["2Gymi", "2or3Sek"], "sprache2": ["F"], "sprache3": ["It", "E"]},
    ],
    "immersion": ["Ze"],  
  },
  {
    "schoolName": "Kantonsschule Enge",
    "city": "Zürich",
    "profiles": [
      {"profileName": "N",  "subjects": ["It", "E", "Sp", "Ru"], "from": ["2Gymi", "2or3Sek"], "sprache2": ["F"], "sprache3": ["It", "E"]}, 
      {"profileName": "WR", "subjects": ["WR"], "from": ["2Gymi", "2or3Sek"], "sprache2": ["F", "It"], "sprache3": ["E"]} 
    ],
    "immersion": ["Ze"], 
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
    "immersion": ["Zf"] 
  },
  {
    "schoolName": "(*) Liceo Artistico at KFR",
    "city": "Zürich",
    "profiles": [
      {"profileName": "M", "subjects": ["BG"], "from": ["2Gymi", "2or3Sek"], "sprache2": ["It"], "sprache3": ["F", "E"]}
    ],
    "immersion": ["Zi"]
  },
  {
    "schoolName": "Kantonsschule Hohe Promenade",
    "city": "Zürich",
    "profiles": [
      {"profileName": "U",  "subjects": [], "from": ["6Prima"], "sprache2": [], "sprache3": []},
      {"profileName": "A",  "subjects": ["L", "Gr", "It", "E", "Sp", "Ru"], "from": ["2Gymi"], "sprache2": ["F"], "sprache3": ["It", "E", "Gr", "L"]}, 
      {"profileName": "N",  "subjects": ["It", "E", "Sp", "Ru"], "from": ["2Gymi"], "sprache2": ["F"], "sprache3": ["It", "E"]}, 
    ],
    "immersion": ["Ze"] 
  }, 
  {
    "schoolName": "Kantonsschule Hottingen",
    "city": "Zürich",
    "profiles": [ 
      {"profileName": "WR", "subjects": ["WR"], "from": ["2Gymi", "2or3Sek"], "sprache2": ["F"], "sprache3": ["E"]}, 
    ],
    "immersion": ["Ze"]
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
    "immersion": ["Ze"]
  },
  {
    "schoolName": "Kantonsschule Küsnacht",
    "city": "Zürich",
    "profiles": [
      {"profileName": "U",  "subjects": [], "from": ["6Prima"], "sprache2": [], "sprache3": []},
      {"profileName": "N",  "subjects": ["It", "E", "Sp"], "from": ["2Gymi", "2or3Sek"], "sprache2": ["F"], "sprache3": ["It", "E"]}, 
      {"profileName": "M", "subjects": ["BG", "Mu"], "from": ["2Gymi", "2or3Sek"], "sprache2": ["F"], "sprache3": ["It", "E"]}
    ],
    "immersion": ["Ze"]
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
    "immersion": ["Ze"]
  },
  {
    "schoolName": "Literargymnasium Rämibühl",
    "city": "Zürich",
    "profiles": [
      {"profileName": "U",  "subjects": [], "from": ["6Prima"], "sprache2": [], "sprache3": []},
      {"profileName": "A",  "subjects": ["L", "Gr", "It", "E", "Sp"], "from": ["2Gymi"], "sprache2": ["F"], "sprache3": ["It", "E", "Gr", "L"]}, 
      {"profileName": "N",  "subjects": ["It", "E", "Sp"], "from": ["2Gymi"], "sprache2": ["F"], "sprache3": ["E"]}
    ],
    "immersion": ["Ze", "IB"] 
  }, 
  {
    "schoolName": "MNG Rämibühl",
    "city": "Zürich",
    "profiles": [
      {"profileName": "MN", "subjects": ["PM", "BC"], "from": ["2Gymi", "2or3Sek"], "sprache2": ["F", "It"], "sprache3": ["E"]},
    ],
    "immersion": ["Ze"] 
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
    "immersion": []
  }, 
  {
    "schoolName": "Realgymnasium Rämibühl",
    "city": "Zürich",
    "profiles": [
      {"profileName": "U",  "subjects": [], "from": ["6Prima"], "sprache2": [], "sprache3": []},
      {"profileName": "A",  "subjects": ["L", "Gr", "E"], "from": ["2Gymi"], "sprache2": ["F"], "sprache3": ["It", "E", "L"]}, 
      {"profileName": "N",  "subjects": ["It", "E", "Sp"], "from": ["2Gymi"], "sprache2": ["F"], "sprache3": ["It", "E"]}
    ],
    "immersion": ["Ze", "IB"] 
  }, 
  {
    "schoolName": "Kantonsschule Rychenberg",
    "city": "Winterthur",
    "profiles": [
      {"profileName": "U",  "subjects": [], "from": ["6Prima"], "sprache2": [], "sprache3": []},
      {"profileName": "A",  "subjects": ["L", "Gr", "It", "E", "Sp", "Ru"], "from": ["2Gymi"], "sprache2": ["F"], "sprache3": ["It", "E", "L"]}, 
      {"profileName": "N",  "subjects": ["It", "E", "Sp", "Ru"], "from": ["2Gymi"], "sprache2": ["F"], "sprache3": ["It", "E"]}
    ],
    "immersion": ["Ze"] 
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
    "immersion": ["Ze"]
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
    "immersion": []
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
    "immersion": ["Ze"]
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
    "immersion": ["Ze"] 
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
    "immersion": []
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
    "immersion": []
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
    "immersion": ["Ze"]
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
    "immersion": ["Ze", "Zf"] 
  }, 


  // Add more schools and profiles as needed
];
