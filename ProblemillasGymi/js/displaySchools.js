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
    "schoolName": "Kantonsschule Freudenberg",
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
      {"profileName": "N",  "subjects": ["It", "E", "Sp", "Ru"], "from": ["2Gymi", "2or3Sek"], "sprache2": ["F"], "sprache3": ["It", "E"]},
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
    "schoolName": "Liceo Artistico",
    "city": "Zürich",
    "profiles": [
      {"profileName": "M", "subjects": ["BG"], "from": ["2Gymi", "2or3Sek"], "sprache2": ["It"], "sprache3": ["F", "E"]}
    ],
    "immersion": ["Zi"]
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
      {"profileName": "WR",  "subjects": ["WR"], "from": ["2Gymi", "2or3Sek"], "sprache2": ["F", "It"], "sprache3": ["E"]}
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
      {"profileName": "A",  "subjects": ["L", "Gr"], "from": ["2or3Sek"], "sprache2": ["F"], "sprache3": ["E"]},
      {"profileName": "N",  "subjects": ["It", "E", "Sp"], "from": ["2Gymi", "2or3Sek"], "sprache2": ["F"], "sprache3": ["It", "E"]},
      {"profileName": "MN", "subjects": ["PM", "BC"], "from": ["2Gymi", "2or3Sek"], "sprache2": ["F"], "sprache3": ["E"]},
      {"profileName": "WR",  "subjects": ["WR"], "from": ["2Gymi", "2or3Sek"], "sprache2": ["F"], "sprache3": ["E"]}
      {"profileName": "M",  "subjects": ["BG", "Mu"], "from": ["2Gymi", "2or3Sek"], "sprache2": ["F"], "sprache3": ["E"]}
    ],
    "immersion": []
  },
  {
    "schoolName": "Kantonsschule Zürcher Unterland",
    "city": "Bülach",
    "profiles": [
      {"profileName": "U",  "subjects": [], "from": ["6Prima"], "sprache2": [], "sprache3": []},
      {"profileName": "A",  "subjects": ["L", "Gr", "E"], "from": ["2or3Sek"], "sprache2": ["F"], "sprache3": ["E", "L"]},
      {"profileName": "N",  "subjects": ["It", "Sp"], "from": ["2Gymi", "2or3Sek"], "sprache2": ["F"], "sprache3": ["It", "F", "E"]},
      {"profileName": "MN", "subjects": ["PM", "BC"], "from": ["2Gymi", "2or3Sek"], "sprache2": ["F"], "sprache3": ["E"]},
      {"profileName": "WR",  "subjects": ["WR"], "from": ["2Gymi", "2or3Sek"], "sprache2": ["F"], "sprache3": ["E"]}
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


function displayLangPlan(schoolList, optionsLabel, optionsList, message) {
  schoolList.forEach((school) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${school.schoolName}`;
    optionsLabel.textContent = message;
    optionsList.appendChild(listItem);
  });
}

                     
function displayKurzPlan(schoolList, optionsLabel, optionsList, message) {
  const profileFilter = document.getElementById("profileFilter").value;
  const subjectFilter = document.getElementById("subjectFilter").value;
  
  schoolList.forEach((school) => {

    if (!profileFilter && !subjectFilter) { // no filters
        // TODO: improve the display 
        // we just display the name of the school
        const profileList = getProfiles(school);
        const listAsString = profileList.join(", ");
        const listItem = document.createElement("li");
        listItem.id = "my-li";
        listItem.innerHTML = `${school.schoolName} <br><span class="small-text">Profile: ${listAsString}</span><br>`;
        optionsLabel.textContent = message;
        optionsList.appendChild(listItem);
    } else if (profileFilter && !subjectFilter) { // only profile filter
      // we display the name of the school with the selected profile and the list of subject it offers
      const subjectsList = getSubjectsOfACertainProfile(school, profileFilter);
      if (subjectsList.length > 0) {
          const listItem = document.createElement("li");
          listItem.id = "my-li";
          const listAsString = subjectsList.join(", ");
          listItem.innerHTML = `${school.schoolName} <br><span class="small-text">Schwerpunktfächer: ${listAsString}</span><br>`;
          optionsLabel.textContent = message;
          optionsList.appendChild(listItem); 
      }
    } else if (!profileFilter && subjectFilter) { // only subject filter
      // we display the name of the school with the list of profiles that offer the selected subject
      const profilesList = getProfilesWithACertainSubject(school, subjectFilter);
      if (profilesList.length > 0) {
          const listItem = document.createElement("li");
          listItem.id = "my-li";
          const listAsString = profilesList.join(", ");
          listItem.innerHTML = `${school.schoolName} <br><span class="small-text">Profile: ${listAsString}</span><br>`;
          optionsLabel.textContent = message;
          optionsList.appendChild(listItem); 
      }
    } else {
      if (school.profiles.some((profile) => (profile.profileName === profileFilter && profile.subjects.includes(subjectFilter)))) {
        // we just display the name of the school
          const listItem = document.createElement("li");
          listItem.id = "my-li";
          listItem.innerHTML = `${school.schoolName}`;
          optionsLabel.textContent = message;
          optionsList.appendChild(listItem);
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

  // here we have fromFilter selected
  const currentOptionsLabel = document.getElementById("currentOptionsLabel");
  currentOptionsLabel.textContent = ""; // Clear previous text
  const currentOptionsList = document.getElementById("currentOptionsList");
  currentOptionsList.innerHTML = ""; // Clear the previous list

  // future schools with the profile selected
  const futureOptionsLabel = document.getElementById("futureOptionsLabel");
  futureOptionsLabel.textContent = ""; // Clear previous text
  const futureOptionsList = document.getElementById("futureOptionsList");
  futureOptionsList.innerHTML = ""; // Clear the previous list
  
  const schoolList = getSchoolsFrom(fromFilter);
  if (fromFilter === "6Prima") {
    displayLangPlan(schoolList, currentOptionsLabel, currentOptionsList, "Untergymnasium Optionen:");  // schools with untergymi     
    const futureSchools = getSchoolsFrom("2Gymi")
    displayKurzPlan(futureSchools, futureOptionsLabel, futureOptionsList, "Optionen nach 2 Jahren Langgymnasium:"); 
  } else if (fromFilter === "2Gymi" || fromFilter === "2or3Sek") {
    displayKurzPlan(schoolList, currentOptionsLabel, currentOptionsList, "Optionen:");
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


