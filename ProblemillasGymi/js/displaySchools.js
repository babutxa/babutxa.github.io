// Fetch and store your school data (e.g., from a JSON file or an API).
const schoolsData = [
  {
    "schoolName": "Kantonsschule Stadelhofen",
    "city": "Zürich",
    "profiles": [
      {"profileName": "A",  "subjects": ["L"], "from": [""]},
      {"profileName": "N",  "subjects": ["It", "E", "Sp"]},
      {"profileName": "MN", "subjects": ["BC"]},
      {"profileName": "M",  "subjects": ["BG", "Mu"]}
    ],
  },
  {
    "schoolName": "MNG Rämibühl",
    "city": "Zürich",
    "profiles": [
      {"profileName": "MN", "subjects": ["PM", "BC"]},
    ],
  },
  {
    "schoolName": "Kantonsschule Freudenberg",
    "city": "Zürich",
    "profiles": [
      {"profileName": "U",  "subjects": [], "from": ["6Prima"]},
      {"profileName": "A",  "subjects": ["L", "Gr"]}, 
      {"profileName": "N",  "subjects": ["It", "E", "Sp"]}, 
      {"profileName": "MN", "subjects": ["PM", "BC"]}
    ],
  },  
  {
    "schoolName": "Kantonsschule Zimmerberg",
    "city": "Au",
    "profiles": [
      {"profileName": "U",  "subjects": [], "from": ["6Prima"]},
      {"profileName": "A",  "subjects": ["L", "E"]}, 
      {"profileName": "N",  "subjects": ["It", "E", "Sp"]}, 
      {"profileName": "MN", "subjects": ["PM", "BC"]}, 
      {"profileName": "WR", "subjects": ["WR"]} 
    ],
  },  
  {
    "schoolName": "Kantonsschule Zürich Nord",
    "city": "Zürich",
    "profiles": [
      {"profileName": "U",  "subjects": [], "from": ["6Prima"]},
      {"profileName": "A",  "subjects": ["L", "Gr", "E"]}, 
      {"profileName": "N",  "subjects": ["It", "E", "Sp", "Ru"]}, 
      {"profileName": "MN", "subjects": ["PM", "BC"]}, 
      {"profileName": "WR", "subjects": ["WR"]}, 
      {"profileName": "M", "subjects": ["BG", "Mu"]}
    ],
  }, 
  {
    "schoolName": "Realgymnasium Rämibühl",
    "city": "Zürich",
    "profiles": [
      {"profileName": "U",  "subjects": [], "from": ["6Prima"]},
      {"profileName": "A",  "subjects": ["L", "Gr", "E"]}, 
      {"profileName": "N",  "subjects": ["It", "E", "Sp"]}
    ],
  }, 
  {
    "schoolName": "Kantonsschule Küsnacht",
    "city": "Zürich",
    "profiles": [
      {"profileName": "U",  "subjects": [], "from": ["6Prima"]},
      {"profileName": "N",  "subjects": ["It", "E", "Sp"]}, 
      {"profileName": "M", "subjects": ["BG", "Mu"]}
    ],
  }, 
  {
    "schoolName": "Kantonsschule Wiedikon",
    "city": "Zürich",
    "profiles": [
      {"profileName": "U",  "subjects": [], "from": ["6Prima"]},
      {"profileName": "A",  "subjects": ["L", "It", "E"]}, 
      {"profileName": "N",  "subjects": ["It", "E", "Sp"]}, 
      {"profileName": "M", "subjects": ["BG", "Mu"]}
    ],
  },
  {
    "schoolName": "Kantonsschule Hohe Promenade",
    "city": "Zürich",
    "profiles": [
      {"profileName": "U",  "subjects": [], "from": ["6Prima"]},
      {"profileName": "A",  "subjects": ["L", "Gr", "It", "E", "Sp", "Ru"]}, 
      {"profileName": "N",  "subjects": ["It", "E", "Sp", "Ru"]}, 
    ],
  }, 
  {
    "schoolName": "Kantonsschule Enge",
    "city": "Zürich",
    "profiles": [
      {"profileName": "N",  "subjects": ["It", "E", "Sp", "Ru"]}, 
      {"profileName": "WR", "subjects": ["WR"]}, 
    ],
  },
  {
    "schoolName": "Kantonsschule Hottingen",
    "city": "Zürich",
    "profiles": [ 
      {"profileName": "WR", "subjects": ["WR"]}, 
    ],
  },
  {
    "schoolName": "Liceo Artistico",
    "city": "Zürich",
    "profiles": [
      {"profileName": "M", "subjects": ["BG"]}
    ],
  }, 
  {
    "schoolName": "Kunst und Sportgymnasium am MNG Rämibül",
    "city": "Zürich",
    "profiles": [
      {"profileName": "U",  "subjects": [], "from": ["6Prima"]},
      {"profileName": "N",  "subjects": ["It", "F", "E"]}, 
      {"profileName": "MN", "subjects": ["BC"]}, 
      {"profileName": "M", "subjects": ["Mu"]}
    ],
  }, 
  // Add more schools and profiles as needed
];

// Function to display the filtered schoolsData on the web page
function filterAndDisplayData() {
  const schoolListFull = document.getElementById("schoolListFull");
  schoolListFull.innerHTML = ""; // Clear the previous list

  const fromFilter = document.getElementById("fromFilter").value;  
  const profileFilter = document.getElementById("profileFilter").value;
  const subjectFilter = document.getElementById("subjectFilter").value;

  if(!fromFilter) {
    return;
  }

  schoolsData.forEach((school) => {
  
    let addItem = false;
    if (!profileFilter && !subjectFilter) { // no filters
      addItem = true;
    } else if (profileFilter && !subjectFilter) { // only profile filter
      if (school.profiles.some((profile) => profile.from.includes(fromFilter) && profile.profileName === profileFilter)) {
        addItem = true;
      }    
    } else if (!profileFilter && subjectFilter) { // only subject filter
      if (school.profiles.some((profile) => profile.from.includes(fromFilter) && profile.subjects.includes(subjectFilter))) {
        addItem = true;
      }   
    } else {
      if (school.profiles.some((profile) => (profile.from.includes(fromFilter) && profile.profileName === profileFilter && profile.subjects.includes(subjectFilter)))) {
        addItem = true;
      }   
    }
    
    if (addItem){
      const listItem = document.createElement("li");
      listItem.textContent = `${school.schoolName}`;
      schoolListFull.appendChild(listItem);
    }
  });
}


// Function to display the list of schools based on the selected profile filter.
function displaySchools(profileFilter) {
  const schoolList = document.getElementById("schoolList");
  schoolList.innerHTML = ""; // Clear the previous list

  schoolsData.forEach((school) => {
    if (!profileFilter || school.profiles.some((profile) => profile.profileName === profileFilter)) {
      const listItem = document.createElement("li");
      listItem.textContent = `${school.schoolName} - Profiles: ${school.profiles.map(profile => profile.profileName).join(", ")}`;
      schoolList.appendChild(listItem);
    }
  });
}



