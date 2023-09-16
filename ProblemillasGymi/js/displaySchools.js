// Fetch and store your school data (e.g., from a JSON file or an API).
const schoolsData = [
  {
    "schoolName": "Kantonsschule Stadelhofen",
    "city": "Zürich",
    "profiles": [
      {"profileName": "A",  "subjects": ["L"]},
      {"profileName": "N",  "subjects": ["It", "E", "Sp"]},
      {"profileName": "MN", "subjects": ["BC"]},
      {"profileName": "M",  "subjects": ["BG", "Mu"]}
    ],
    "lOrK": ["K"]
  },
  {
    "schoolName": "MNG Rämibühl",
    "city": "Zürich",
    "profiles": [
      {"profileName": "MN", "subjects": ["PM", "BC"]},
    ],
    "lOrK": ["K"]
  },
  {
    "schoolName": "Kantonsschule Freudenberg",
    "city": "Zürich",
    "profiles": [
      {"profileName": "A",  "subjects": ["L", "Gr"]}, 
      {"profileName": "N",  "subjects": ["It", "E", "Sp"]}, 
      {"profileName": "MN", "subjects": ["PM", "BC"]}
    ],
    "lOrK": ["L", "K"]
  },  
  {
    "schoolName": "Kantonsschule Zimmerberg",
    "city": "Au",
    "profiles": [
      {"profileName": "A",  "subjects": ["L", "E"]}, 
      {"profileName": "N",  "subjects": ["It", "E", "Sp"]}, 
      {"profileName": "MN", "subjects": ["PM", "BC"]}, 
      {"profileName": "WR", "subjects": ["WR"]} 
    ],
    "lOrK": ["L", "K"]
  },  
  {
    "schoolName": "Kantonsschule Zürich Nord",
    "city": "Zürich",
    "profiles": [
      {"profileName": "A",  "subjects": ["L", "Gr", "E"]}, 
      {"profileName": "N",  "subjects": ["It", "E", "Sp", "Ru"]}, 
      {"profileName": "MN", "subjects": ["PM", "BC"]}, 
      {"profileName": "WR", "subjects": ["WR"]}, 
      {"profileName": "M", "subjects": ["BG", "Mu"]}
    ],
    "lOrK": ["L", "K"]
  }, 
  {
    "schoolName": "Realgymnasium Rämibühl",
    "city": "Zürich",
    "profiles": [
      {"profileName": "A",  "subjects": ["L", "Gr", "E"]}, 
      {"profileName": "N",  "subjects": ["It", "E", "Sp"]}
    ],
    "lOrK": ["L"]
  }, 
  {
    "schoolName": "Kantonsschule Küsnacht",
    "city": "Zürich",
    "profiles": [
      {"profileName": "N",  "subjects": ["It", "E", "Sp"]}, 
      {"profileName": "M", "subjects": ["BG", "Mu"]}
    ],
    "lOrK": ["L", "K"]
  }, 
  {
    "schoolName": "Kantonsschule Wiedikon",
    "city": "Zürich",
    "profiles": [
      {"profileName": "A",  "subjects": ["L", "It", "E"]}, 
      {"profileName": "N",  "subjects": ["It", "E", "Sp"]}, 
      {"profileName": "M", "subjects": ["BG", "Mu"]}
    ],
    "lOrK": ["L", "K"]
  },
  {
    "schoolName": "Kantonsschule Hohe Promenade",
    "city": "Zürich",
    "profiles": [
      {"profileName": "A",  "subjects": ["L", "Gr", "It", "E", "Sp", "Ru"]}, 
      {"profileName": "N",  "subjects": ["It", "E", "Sp", "Ru"]}, 
    ],
    "lOrK": ["L"]
  }, 
  {
    "schoolName": "Kantonsschule Enge",
    "city": "Zürich",
    "profiles": [
      {"profileName": "N",  "subjects": ["It", "E", "Sp", "Ru"]}, 
      {"profileName": "WR", "subjects": ["WR"]}, 
    ],
    "lOrK": ["K"]
  },
  {
    "schoolName": "Kantonsschule Hottingen",
    "city": "Zürich",
    "profiles": [ 
      {"profileName": "WR", "subjects": ["WR"]}, 
    ],
    "lOrK": ["K"]
  },
  {
    "schoolName": "Liceo Artistico",
    "city": "Zürich",
    "profiles": [
      {"profileName": "M", "subjects": ["BG"]}
    ],
    "lOrK": ["K"]
  }, 
  {
    "schoolName": "Kunst und Sportgymnasium am MNG Rämibül",
    "city": "Zürich",
    "profiles": [
      {"profileName": "N",  "subjects": ["It", "F", "E"]}, 
      {"profileName": "MN", "subjects": ["BC"]}, 
      {"profileName": "M", "subjects": ["Mu"]}
    ],
    "lOrK": ["L", "K"]
  }, 
  // Add more schools and profiles as needed
];

// Function to display the filtered schoolsData on the web page
function filterAndDisplayData() {
  const schoolListFull = document.getElementById("schoolListFull");
  schoolListFull.innerHTML = ""; // Clear the previous list

  
  const profileFilter = document.getElementById("profileFilter").value;
  const subjectFilter = document.getElementById("subjectFilter").value;

  schoolsData.forEach((school) => {
    if ((!profileFilter || school.profiles.some((profile) => profile.profileName === profileFilter)) &&
        (!subjectFilter || school.profiles.some((profile) => profile.subjects.includes(subjectFilter)))
       ){
      const listItem = document.createElement("li");
      listItem.textContent = `${school.schoolName} - Profiles: ${school.profiles.map(profile => profile.profileName).join(", ")}`;
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



