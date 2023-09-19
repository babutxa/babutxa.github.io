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

// filter schools reacheable form a certain point
function getSchoolsFrom(fromFilter) {
  let result = [];
  schoolsData.forEach((school) => {
    if (school.profiles.some((profile) => profile.from.includes(fromFilter))) {
      result.push(school);
    } 
  });
  return result;
}

function getSubjectsOfACertainProfile(school, profi) {
  for (const profile of school.profiles) {
    if (profile.profileName === profi) {
      const listAsString = profile.subjects.join(", ");
      console.log("in function getSubjectsOfACertainProfile: " + listAsString);
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

function displayKurzPlan(schoolList) {
  const currentOptionsLabel = document.getElementById("currentOptionsLabel");
  currentOptionsLabel.textContent = ""; // Clear previous text
  const currentOptionsList = document.getElementById("currentOptionsList");
  currentOptionsList.innerHTML = ""; // Clear the previous list

  const profileFilter = document.getElementById("profileFilter").value;
  const subjectFilter = document.getElementById("subjectFilter").value;
  
  schoolList.forEach((school) => {
  
    let addItem = false;
    if (!profileFilter && !subjectFilter) { // no filters
        // TODO: improve the display 
        // we just display the name of the school
        const listItem = document.createElement("li");
        listItem.textContent = `${school.schoolName}`;
        currentOptionsLabel.textContent = "Optionen für das nächste Jahr:";
        currentOptionsList.appendChild(listItem);
    } else if (profileFilter && !subjectFilter) { // only profile filter
      // we display the name of the school with the selected profile and the list of subject it offers
      const subjectsList = getSubjectsOfACertainProfile(school, profileFilter);
      console.log("returned subjectsList.length: " + subjectsList.length);
      if (subjectsList.length > 0) {
          const listItem = document.createElement("li");
          const listAsString = subjectsList.join(", ");
          listItem.textContent = `${school.schoolName} (Schwerpunktfächer: ${listAsString})`;
          currentOptionsLabel.textContent = "Optionen für das nächste Jahr:";
          currentOptionsList.appendChild(listItem); 
      }
    } else if (!profileFilter && subjectFilter) { // only subject filter
      // we display the name of the school with the list of profiles that offer the selected subject
      const profilesList = getProfilesWithACertainSubject(school, subjectFilter);
      if (profilesList.length > 0) {
          const listItem = document.createElement("li");
          const listAsString = profilesList.join(", ");
          listItem.textContent = `${school.schoolName} (Profile: ${listAsString})`;
          currentOptionsLabel.textContent = "Optionen für das nächste Jahr:";
          currentOptionsList.appendChild(listItem); 
      }
    } else {
      if (profile.profileName === profileFilter && profile.subjects.includes(subjectFilter)))) {
        // we just display the name of the school
          const listItem = document.createElement("li");
          listItem.textContent = `${school.schoolName}`;
          currentOptionsLabel.textContent = "Optionen für das nächste Jahr:";
          currentOptionsList.appendChild(listItem);
      }   
    }
  }); 
}

function filterAndDisplayDataAdvanced() {
  const fromFilter = document.getElementById("fromFilter").value; 
  if (!fromFilter) {
    const currentOptionsLabel = document.getElementById("currentOptionsLabel");
    currentOptionsLabel.textContent = "select fromFilter!!";
    return;
  }

  // here we have fromFilter selecteds
  schoolList = getSchoolsFrom(fromFilter);
  if (fromFilter === "2Gymi" || fromFilter === "2or3Sek") {
    displayKurzPlan(schoolList);
  }
}

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


