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
  // Add more schools and profiles as needed
];

// Function to display the list of schools based on the selected profile filter.
function displaySchools(profileFilter) {
  const schoolList = document.getElementById("schoolList");
  schoolList.innerHTML = ""; // Clear the previous list

  schoolsData.forEach((school) => {
    if (!profileFilter || school.profiles.includes(profileFilter)) {
      const listItem = document.createElement("li");
      listItem.textContent = `${school.schoolName} - Profiles: ${school.profiles.join(", ")}`;
      schoolList.appendChild(listItem);
    }
  });
}

// Event listener for filter selection changes.
document.getElementById("profileFilter").addEventListener("change", (event) => {
  const selectedProfile = event.target.value;
  displaySchools(selectedProfile);
});
