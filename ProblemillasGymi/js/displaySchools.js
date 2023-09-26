
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

  const royalBlue = "#4169E1";  // color for unterGymis
  const orange = "#F04A00";   // color for hochGymis
 
  if (!fromFilter) {
    displayKurzPlan(schoolsData, currentOptionsLabel, currentOptionsList, "Optionen:");
    addSchoolsToMap(schoolsData, royalBlue, "1.0", royalBlue, "1.0");
  }
 
  const schoolList = getSchoolsFrom(fromFilter);
  if (fromFilter === "6Prima") {
    displayLangPlan(schoolList, currentOptionsLabel, currentOptionsList, "Untergymnasium Optionen:");  // schools with untergymi
    addSchoolsToMap(schoolList, royalBlue, "1.0", royalBlue, "0.0");
    
    const futureSchools = getSchoolsFrom("2Gymi")
    const hochGymiSchools = getFilteredSchools(futureSchools);
    displayKurzPlan(hochGymiSchools, futureOptionsLabel, futureOptionsList, "Optionen nach 2 Jahren Langgymnasium:");
    addSchoolsToMap(hochGymiSchools, orange, "0.0", orange, "1.0");
  } else if (fromFilter === "2Gymi" || fromFilter === "2or3Sek") {
    const filteredSchools = getFilteredSchools(schoolList);
    displayKurzPlan(filteredSchools, currentOptionsLabel, currentOptionsList, "Optionen:");
    addSchoolsToMap(filteredSchools, orange, "1.0", orange, "0.0");
  }    
}



