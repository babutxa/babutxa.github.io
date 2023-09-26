// Fetch and store your school data (e.g., from a JSON file or an API).
const schoolsData = [
    {
    "schoolName": "Kantonsschule Büelrain",
    "city": "Winterthur",
    "profiles": [
      {"profileName": "WR",  "subjects": ["WR"], "from": ["2Gymi", "2or3Sek"], "sprache2": ["F"], "sprache3": ["It", "E"]},
    ],
    "immersion": ["Ze"],
    "position": [47.49611906798705, 8.730307342393047],
    "address": "Rosenstrasse 1, 8400 Winterthur",
    "telephone": "052 260 03 03",
    "email": "admin@kbw.ch",
    "web": "kbw.ch",
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
    "address": "Steinentischstrasse 10, 8002 Zürich",
    "telephone": "044 286 76 11",
    "email": "sekretariat@ken.ch",
    "web": "ken.ch",
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
    "address": "Gutenbergstrasse 15, 8002 Zürich",
    "telephone": "044 286 77 11",
    "email": "sekretariat@kfr.ch",
    "web": "kfr.ch",
  },
  {
    "schoolName": "(*) Liceo Artistico at KFR",
    "city": "Zürich",
    "profiles": [
      {"profileName": "M", "subjects": ["BG"], "from": ["2Gymi", "2or3Sek"], "sprache2": ["It"], "sprache3": ["F", "E"]}
    ],
    "immersion": ["Zi"],
    "position": [47.36609038863689, 8.53005056939869],
    "address": "Parkring 30, 8027 Zürich",
    "telephone": "044 202 80 40",
    "email": "sekretariat@liceo.ch",
    "web": "kfr.ch",
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
    "address": "Promenadengasse 11, 8090 Zürich",
    "telephone": "044 224 64 64",
    "email": "sekretariat@kshp.ch",
    "web": "kshp.ch",
  }, 
  {
    "schoolName": "Kantonsschule Hottingen",
    "city": "Zürich",
    "profiles": [ 
      {"profileName": "WR", "subjects": ["WR"], "from": ["2Gymi", "2or3Sek"], "sprache2": ["F"], "sprache3": ["E"]}, 
    ],
    "immersion": ["Ze"],
    "position": [47.3687854714518, 8.552840705890937],
    "address": "Minervastrasse 14, 8090 Zürich",
    "telephone": "044 266 57 57",
    "email": "hottingen@ksh.ch",
    "web": "ksh.ch",
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
    "address": "Rychenbergstrasse 140, 8400 Winterthur",
    "telephone": "052 244 05 05",
    "email": "sekretariat@ksimlee.ch",
    "web": "ksimlee.ch",
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
    "address": "Dorfstrasse 30, 8700 Küsnacht",
    "telephone": "044 913 17 17",
    "email": "info@kkn.ch",
    "web": "kkn.ch",  
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
    "address": "In der Luberzen 34, 8902 Urdorf",
    "telephone": "044 736 14 14",
    "email": "rektorat@kslzh.ch",
    "web": "kslzh.ch",
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
    "address": "Rämistrasse 56, 8001 Zürich",
    "telephone": "044 265 63 12",
    "email": "sekretariat@rgzh.ch",
    "web": "rgzh.ch",
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
    "address": "Rämistrasse 56, 8001 Zürich",
    "telephone": "044 265 62 11",
    "email": "info@lgr.ch",
    "web": "lgr.ch",
  }, 
  {
    "schoolName": "MNG Rämibühl",
    "city": "Zürich",
    "profiles": [
      {"profileName": "MN", "subjects": ["PM", "BC"], "from": ["2Gymi", "2or3Sek"], "sprache2": ["F", "It"], "sprache3": ["E"]},
    ],
    "immersion": ["Ze"],
    "position": [47.37220019772362, 8.552156476636824],
    "address": "Rämistrasse 58, 8001 Zürich",
    "telephone": "044 265 64 64",
    "email": "rektorat@mng.ch",
    "web": "mng.ch",
  }, 
  {
    "schoolName": "(*) Kunst und Sportgymnasium am MNG Rämibühl",
    "city": "Zürich",
    "profiles": [
      {"profileName": "U",  "subjects": [], "from": ["6Prima"], "sprache2": [], "sprache3": []},
      {"profileName": "N",  "subjects": ["It", "F", "E"], "from": ["2Gymi", "2or3Sek"], "sprache2": ["F", "It"], "sprache3": ["It", "F", "E"]}, 
      {"profileName": "MN", "subjects": ["BC"], "from": ["2Gymi", "2or3Sek"], "sprache2": ["F"], "sprache3": ["E"]}, 
      {"profileName": "M", "subjects": ["Mu"], "from": ["2Gymi", "2or3Sek"], "sprache2": ["F"], "sprache3": ["E"]}
    ],
    "immersion": [],
    "position": [47.37220019772362, 8.55185381522],
    "address": "Rämistrasse 58, 8001 Zürich",
    "telephone": "044 265 64 64",
    "email": "rektorat@mng.ch",
    "web": "ksgymnasium.ch",
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
    "address": "Rychenbergstrasse 110, 8400 Winterthur",
    "telephone": "052 244 04 04",
    "email": "sekretariat@krw.ch",
    "web": "krw.ch",
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
    "address": "Schanzengasse 17, 8001 Zürich",
    "telephone": "044 268 36 60",
    "email": "sekretariat@ksstadelhofen.ch",
    "web": "ksstadelhofen.ch",
  },
  {
    "schoolName": "Kantonsschule Uetikon am See",
    "city": "Uetikon am See",
    "profiles": [
      {"profileName": "U",  "subjects": [], "from": ["6Prima"], "sprache2": [], "sprache3": []},
      {"profileName": "A",  "subjects": ["L"], "from": ["2or3Sek"], "sprache2": ["F"], "sprache3": ["It", "E"]},
      {"profileName": "N",  "subjects": ["It", "E", "Sp"], "from": ["2Gymi", "2or3Sek"], "sprache2": ["F"], "sprache3": ["It", "E"]},
      {"profileName": "MN", "subjects": ["PM", "BC"], "from": ["2Gymi", "2or3Sek"], "sprache2": ["F"], "sprache3": ["E"]},
      {"profileName": "WR",  "subjects": ["WR"], "from": ["2Gymi", "2or3Sek"], "sprache2": ["F"], "sprache3": ["E"]}
    ],
    "immersion": [],
    "position": [47.264155074893054, 8.67897476701721],
    "address": "Bergstrasse 113, 8707 Uetikon am See",
    "telephone": "044 921 55 55",
    "email": "info@kuezh.ch",
    "web": "kuezh.ch",
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
    "address": "Krämerackerstrasse 15, 8610 Uster",
    "telephone": "043 444 27 27",
    "email": "sekretariat@ksuster.ch",
    "web": "ksuster.ch",
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
    "address": "Goldbrunnenstrasse 80, 8055 Zürich",
    "telephone": "044 457 71 11",
    "email": "rektorat@kwi.ch",
    "web": "kwi.ch",
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
    "address": "Steinacherstrasse 101, 8804 Au",
    "telephone": "044 783 11 11",
    "email": "info@kszi.ch",
    "web": "kszi.ch",
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
    "address": "Bühlstrasse 36, 8620 Wetzikon",
    "telephone": "044 933 08 11",
    "email": "info@kzo.ch",
    "web": "kzo.ch",
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
    "address": "Kantonsschulstrasse 23, 8180 Bülach",
    "telephone": "044 872 31 31",
    "email": "info@kzu.ch",
    "web": "kzu.ch",
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
    "address": "Birchstrasse 107, 8050 Zürich",
    "telephone": "044 317 23 00",
    "email": "sekretariat@kzn.ch",
    "web": "kzn.ch",
  }, 


  // Add more schools and profiles as needed
];


function getSchoolsFrom(fromFilter) {
  let result = [];
  schoolsData.forEach((school) => {
    if (school.profiles.some((profile) => profile.from.includes(fromFilter))) {
      result.push(school);
    } 
  });
  return result;
}

function getProfiles(school) {
  let result = [];
  school.profiles.forEach((profile) => {
    result.push(profile.profileName);
  });
  return result;
}

function getSubjectsOfACertainProfile(school, profi) {
  for (const profile of school.profiles) {
    if (profile.profileName === profi) {
      const listAsString = profile.subjects.join(", ");
      return profile.subjects;
    }
  }
  return []; // empty if the school does not have the profi                
}

function getProfilesWithACertainSubject(school, subject) {
  let result = [];
  school.profiles.forEach((profile) => {
    if (profile.subjects.includes(subject)) {
      result.push(profile.profileName);
    }
  });
  return result; // empty if the school does not provide the subject in any profile
}
