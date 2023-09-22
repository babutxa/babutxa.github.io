
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

function getFilteredSchools(schoolList) {
  const profileFilter = document.getElementById("profileFilter").value;
  const subjectFilter = document.getElementById("subjectFilter").value;

  // no filters available
  if (!profileFilter && !subjectFilter) {
    return schoolList;
  }

  let result = [];
  schoolList.forEach((school) => {

    if (profileFilter && !subjectFilter) { // only profile filter
      const subjectsList = getSubjectsOfACertainProfile(school, profileFilter);
      if (subjectsList.length > 0) {
          result.push(school);
      }
    } else if (!profileFilter && subjectFilter) { // only subject filter
      const profilesList = getProfilesWithACertainSubject(school, subjectFilter);
      if (profilesList.length > 0) {
          result.push(school);
      }
    } else {
      if (school.profiles.some((profile) => (profile.profileName === profileFilter && profile.subjects.includes(subjectFilter)))) {
          result.push(school);
      }   
    }
  }); 
  return result;
}

function displayLangPlan(schoolList, optionsLabel, optionsList, message) {
  schoolList.forEach((school) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${school.schoolName}`;
    optionsLabel.textContent = message;
    optionsList.appendChild(listItem);
  });
}
                     
function displayKurzPlan(schoolList, optionsLabel, optionsList, optionsLabelText) {
  const profileFilter = document.getElementById("profileFilter").value;
  const subjectFilter = document.getElementById("subjectFilter").value;
  
  schoolList.forEach((school) => {

    const listItem = document.createElement("li");
    listItem.id = "my-li";
    
    if (!profileFilter && !subjectFilter) { // no filters 
        // name of the school + all profiles
        const profileList = getProfiles(school);
        const listAsString = profileList.join(", ");
        listItem.innerHTML = `${school.schoolName} <br><span class="small-text">Profile: ${listAsString}</span><br>`;
    } else if (profileFilter && !subjectFilter) { // only profile filter
      // name of the school + list of subjects offered in the selected profile
      const subjectsList = getSubjectsOfACertainProfile(school, profileFilter);
      if (subjectsList.length > 0) {
          const listAsString = subjectsList.join(", ");
          listItem.innerHTML = `${school.schoolName} <br><span class="small-text">Schwerpunktfächer: ${listAsString}</span><br>`;
      }
    } else if (!profileFilter && subjectFilter) { // only subject filter
      // name of the school + list of profiles that offer the selected subject
      const profilesList = getProfilesWithACertainSubject(school, subjectFilter);
      if (profilesList.length > 0) {
          const listAsString = profilesList.join(", ");
          listItem.innerHTML = `${school.schoolName} <br><span class="small-text">Profile: ${listAsString}</span><br>`;
      }
    } else {
      if (school.profiles.some((profile) => (profile.profileName === profileFilter && profile.subjects.includes(subjectFilter)))) {
          // we just display the name of the school
          listItem.innerHTML = `${school.schoolName}`;
      }   
    }
    optionsLabel.textContent = optionsLabelText;
    optionsList.appendChild(listItem);   
  }); 
}


function filterAndDisplayDataAdvanced() {
  const fromFilter = document.getElementById("fromFilter").value; 
  
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

  clearMarkers();
  
  if (!fromFilter) {
    displayKurzPlan(schoolsData, currentOptionsLabel, currentOptionsList, "Optionen:");
    addSchoolsToMap(schoolsData, "#fda172", "1.0", "#fda172", "1.0");
  }
 
  const schoolList = getSchoolsFrom(fromFilter);
  if (fromFilter === "6Prima") {
    displayLangPlan(schoolList, currentOptionsLabel, currentOptionsList, "Untergymnasium Optionen:");  // schools with untergymi
    addSchoolsToMap(schoolList, "#fda172", "1.0", "#fda172", "0.0");
    
    const futureSchools = getSchoolsFrom("2Gymi")
    const hochGymiSchools = getFilteredSchools(futureSchools);
    displayKurzPlan(hochGymiSchools, futureOptionsLabel, futureOptionsList, "Optionen nach 2 Jahren Langgymnasium:");
    addSchoolsToMap(hochGymiSchools, "#0492c2", "0.0", "#0492c2", "1.0");
  } else if (fromFilter === "2Gymi" || fromFilter === "2or3Sek") {
    const filteredSchools = getFilteredSchools(schoolList);
    displayKurzPlan(filteredSchools, currentOptionsLabel, currentOptionsList, "Optionen:");
    addSchoolsToMap(filteredSchools, "#0492c2", "1.0", "#0492c2", "1.0");
  }    
}

/*
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
*/

