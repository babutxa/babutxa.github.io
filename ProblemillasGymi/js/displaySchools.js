// Fetch and store your school data (e.g., from a JSON file or an API).
const schoolsData = [
  {
    "schoolName": "Kantonsschule Stadelhofen",
    "city": "Zürich",
    "profiles": [
      {"profileName": "A",  "subjects": ["L"], "from": ["2or3Sek"]},
      {"profileName": "N",  "subjects": ["It", "E", "Sp"], "from": ["2Gymi", "2or3Sek"]},
      {"profileName": "MN", "subjects": ["BC"], "from": ["2Gymi", "2or3Sek"]},
      {"profileName": "M",  "subjects": ["BG", "Mu"], "from": ["2Gymi", "2or3Sek"]}
    ]
  },
  {
    "schoolName": "MNG Rämibühl",
    "city": "Zürich",
    "profiles": [
      {"profileName": "MN", "subjects": ["PM", "BC"], "from": ["2Gymi", "2or3Sek"]},
    ]
  },
  {
    "schoolName": "Kantonsschule Freudenberg",
    "city": "Zürich",
    "profiles": [
      {"profileName": "U",  "subjects": [], "from": ["6Prima"]},
      {"profileName": "A",  "subjects": ["L", "Gr"], "from": ["2Gymi"]}, 
      {"profileName": "N",  "subjects": ["It", "E", "Sp"], "from": ["2Gymi"]}, 
      {"profileName": "MN", "subjects": ["PM", "BC"], "from": ["2Gymi", "2or3Sek"]}
    ]
  },  
  {
    "schoolName": "Kantonsschule Zimmerberg",
    "city": "Au",
    "profiles": [
      {"profileName": "U",  "subjects": [], "from": ["6Prima"]},
      {"profileName": "A",  "subjects": ["L", "E"], "from": ["2Gymi"]}, 
      {"profileName": "N",  "subjects": ["It", "E", "Sp"], "from": ["2Gymi", "2or3Sek"]}, 
      {"profileName": "MN", "subjects": ["PM", "BC"], "from": ["2Gymi", "2or3Sek"]}, 
      {"profileName": "WR", "subjects": ["WR"], "from": ["2Gymi", "2or3Sek"]} 
    ]
  },  
  {
    "schoolName": "Kantonsschule Zürich Nord",
    "city": "Zürich",
    "profiles": [
      {"profileName": "U",  "subjects": [], "from": ["6Prima"]},
      {"profileName": "A",  "subjects": ["L", "Gr", "E"], "from": ["2Gymi"]}, 
      {"profileName": "N",  "subjects": ["It", "E", "Sp", "Ru"], "from": ["2Gymi", "2or3Sek"]}, 
      {"profileName": "MN", "subjects": ["PM", "BC"], "from": ["2Gymi", "2or3Sek"]}, 
      {"profileName": "WR", "subjects": ["WR"], "from": ["2Gymi", "2or3Sek"]}, 
      {"profileName": "M", "subjects": ["BG", "Mu"], "from": ["2Gymi", "2or3Sek"]}
    ]
  }, 
  {
    "schoolName": "Realgymnasium Rämibühl",
    "city": "Zürich",
    "profiles": [
      {"profileName": "U",  "subjects": [], "from": ["6Prima"]},
      {"profileName": "A",  "subjects": ["L", "Gr", "E"], "from": ["2Gymi"]}, 
      {"profileName": "N",  "subjects": ["It", "E", "Sp"], "from": ["2Gymi"]}
    ]
  }, 
  {
    "schoolName": "Literargymnasium Rämibühl",
    "city": "Zürich",
    "profiles": [
      {"profileName": "U",  "subjects": [], "from": ["6Prima"]},
      {"profileName": "A",  "subjects": ["L", "Gr", "It", "E", "Sp"], "from": ["2Gymi"]}, 
      {"profileName": "N",  "subjects": ["It", "E", "Sp"], "from": ["2Gymi"]}
    ]
  }, 
  {
    "schoolName": "Kantonsschule Küsnacht",
    "city": "Zürich",
    "profiles": [
      {"profileName": "U",  "subjects": [], "from": ["6Prima"]},
      {"profileName": "N",  "subjects": ["It", "E", "Sp"], "from": ["2Gymi", "2or3Sek"]}, 
      {"profileName": "M", "subjects": ["BG", "Mu"], "from": ["2Gymi", "2or3Sek"]}
    ]
  }, 
  {
    "schoolName": "Kantonsschule Wiedikon",
    "city": "Zürich",
    "profiles": [
      {"profileName": "U",  "subjects": [], "from": ["6Prima"]},
      {"profileName": "A",  "subjects": ["L", "It", "E"], "from": ["2Gymi"]}, 
      {"profileName": "N",  "subjects": ["It", "E", "Sp"], "from": ["2Gymi"]}, 
      {"profileName": "M", "subjects": ["BG", "Mu"], "from": ["2Gymi", "2or3Sek"]}
    ]
  },
  {
    "schoolName": "Kantonsschule Hohe Promenade",
    "city": "Zürich",
    "profiles": [
      {"profileName": "U",  "subjects": [], "from": ["6Prima"]},
      {"profileName": "A",  "subjects": ["L", "Gr", "It", "E", "Sp", "Ru"], "from": ["2Gymi"]}, 
      {"profileName": "N",  "subjects": ["It", "E", "Sp", "Ru"], "from": ["2Gymi"]}, 
    ]
  }, 
  {
    "schoolName": "Kantonsschule Enge",
    "city": "Zürich",
    "profiles": [
      {"profileName": "N",  "subjects": ["It", "E", "Sp", "Ru"], "from": ["2Gymi", "2or3Sek"]}, 
      {"profileName": "WR", "subjects": ["WR"], "from": ["2Gymi", "2or3Sek"]}, 
    ]
  },
  {
    "schoolName": "Kantonsschule Hottingen",
    "city": "Zürich",
    "profiles": [ 
      {"profileName": "WR", "subjects": ["WR"], "from": ["2Gymi", "2or3Sek"]}, 
    ]
  },
  {
    "schoolName": "Liceo Artistico",
    "city": "Zürich",
    "profiles": [
      {"profileName": "M", "subjects": ["BG"], "from": ["2Gymi", "2or3Sek"]}
    ]
  }, 
  {
    "schoolName": "Kunst und Sportgymnasium am MNG Rämibül",
    "city": "Zürich",
    "profiles": [
      {"profileName": "U",  "subjects": [], "from": ["6Prima"]},
      {"profileName": "N",  "subjects": ["It", "F", "E"], "from": ["2Gymi", "2or3Sek"]}, 
      {"profileName": "MN", "subjects": ["BC"], "from": ["2Gymi", "2or3Sek"]}, 
      {"profileName": "M", "subjects": ["Mu"], "from": ["2Gymi", "2or3Sek"]}
    ]
  }, 
  // Add more schools and profiles as needed
];

// Function to display the filtered schoolsData on the web page
function filterAndDisplayData() {
  const currentOptionsLabel = document.getElementById("currentOptionsLabel");
  currentOptionsLabel.textContent = ""; // Clear previous text
  const currentOptionsList = document.getElementById("currentOptionsList");
  currentOptionsList.innerHTML = ""; // Clear the previous list

  const futureOptionsLabel = document.getElementById("futureOptionsLabel");
  futureOptionsLabel.textContent = ""; // Clear previous text
  const futureOptionsList = document.getElementById("futureOptionsList");
  futureOptionsList.innerHTML = ""; // Clear the previous list

  let fromFilter = document.getElementById("fromFilter").value;  
  const profileFilter = document.getElementById("profileFilter").value;
  const subjectFilter = document.getElementById("subjectFilter").value;
  
  schoolsData.forEach((school) => {
  
    let addItem = false;
    let futureOption = false;
    if (!fromFilter) {
      addItem = true;
    } else {
      if (fromFilter === "6Prima") {
        if (school.profiles.some((profile) => profile.from.includes(fromFilter))) {
          addItem = true; // long gymi school
        } 

        // we also want to add the future options taking account the profile and subjects
        if (!profileFilter && !subjectFilter) { // no filters
          futureOption = false;
        } else if (profileFilter && !subjectFilter) { // only profile filter
          if (school.profiles.some((profile) => profile.from.includes("2Gymi")) &&
              school.profiles.some((profile) => profile.profileName === profileFilter)) {
            futureOption = true;
          }    
        } else if (!profileFilter && subjectFilter) { // only subject filter
          if (school.profiles.some((profile) => profile.from.includes("2Gymi")) &&
              school.profiles.some((profile) => profile.subjects.includes(subjectFilter))) {
            futureOption = true;
          }   
        } else {
          if (school.profiles.some((profile) => profile.from.includes("2Gymi")) &&
              school.profiles.some((profile) => profile.profileName === profileFilter && profile.subjects.includes(subjectFilter))) {
            futureOption = true;
          }   
        }
      } else {
        if (!profileFilter && !subjectFilter) { // no filters
          if (school.profiles.some((profile) => profile.from.includes(fromFilter))) {
            addItem = true;
          } 
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
      }
    }
    
    if (addItem){
      const listItem = document.createElement("li");
      listItem.textContent = `${school.schoolName}`;
      if (futureOption) {
        listItem.textContent = `${school.schoolName} (SO)`;
      }
      currentOptionsLabel.textContent = "Optionen für das nächste Jahr:";
      currentOptionsList.appendChild(listItem);
    } else if (futureOption) {
      const listItem = document.createElement("li");
      listItem.textContent = `${school.schoolName}`;
      futureOptionsLabel.textContent = "Optionen nach 2 Jahren Langgymnasium:";
      futureOptionsList.appendChild(listItem);
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


