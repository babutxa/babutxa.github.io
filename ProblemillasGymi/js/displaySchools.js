// School Data Utility Functions
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

// School Filtering and Display Functions
function getFilteredSchools(schoolList) {
  const profileFilter = document.getElementById("profileFilter").value;
  const subjectFilter = document.getElementById("subjectFilter").value;

  // no filters available
  if (!profileFilter && !subjectFilter) {
    return schoolList;
  }

  let result = [];
  schoolList.forEach((school) => {
    if (profileFilter && !subjectFilter) {
      // only profile filter
      const subjectsList = getSubjectsOfACertainProfile(school, profileFilter);
      if (subjectsList.length > 0) {
        result.push(school);
      }
    } else if (!profileFilter && subjectFilter) {
      // only subject filter
      const profilesList = getProfilesWithACertainSubject(
        school,
        subjectFilter
      );
      if (profilesList.length > 0) {
        result.push(school);
      }
    } else {
      if (
        school.profiles.some(
          (profile) =>
            profile.profileName === profileFilter &&
            profile.subjects.includes(subjectFilter)
        )
      ) {
        result.push(school);
      }
    }
  });
  return result;
}

function displayLangPlan(schoolList, optionsLabel, optionsList, message) {
  schoolList.forEach((school) => {
    const listItem = document.createElement("li");
    let schoolText = school.schoolName;
    if (school.travelTime !== undefined) {
      const timeText = school.isEstimated
        ? `~${school.travelTime} min (estimated)`
        : `${school.travelTime} min`;
      schoolText += ` <span class="travel-info">(${timeText})</span>`;
    }
    listItem.innerHTML = schoolText;
    optionsLabel.textContent = message;
    optionsList.appendChild(listItem);
  });
}

function displayKurzPlan(
  schoolList,
  optionsLabel,
  optionsList,
  optionsLabelText
) {
  const profileFilter = document.getElementById("profileFilter").value;
  const subjectFilter = document.getElementById("subjectFilter").value;

  schoolList.forEach((school) => {
    const listItem = document.createElement("li");
    listItem.id = "my-li";

    // Add travel time information if available
    let travelTimeText = "";
    if (school.travelTime !== undefined) {
      const timeText = school.isEstimated
        ? `~${school.travelTime} min (estimated)`
        : `${school.travelTime} min`;
      travelTimeText = ` <span class="travel-info">(${timeText})</span>`;
    }

    let shouldAddToList = false;

    if (!profileFilter && !subjectFilter) {
      // no filters
      // name of the school + all profiles
      const profileList = getProfiles(school);
      const listAsString = profileList.join(", ");
      listItem.innerHTML = `${school.schoolName}${travelTimeText} <br><span class="small-text">Profile: ${listAsString}</span><br>`;
      shouldAddToList = true;
    } else if (profileFilter && !subjectFilter) {
      // only profile filter
      // name of the school + list of subjects offered in the selected profile
      const subjectsList = getSubjectsOfACertainProfile(school, profileFilter);
      if (subjectsList.length > 0) {
        const listAsString = subjectsList.join(", ");
        listItem.innerHTML = `${school.schoolName}${travelTimeText} <br><span class="small-text">Schwerpunktfächer: ${listAsString}</span><br>`;
        shouldAddToList = true;
      }
    } else if (!profileFilter && subjectFilter) {
      // only subject filter
      // name of the school + list of profiles that offer the selected subject
      const profilesList = getProfilesWithACertainSubject(
        school,
        subjectFilter
      );
      if (profilesList.length > 0) {
        const listAsString = profilesList.join(", ");
        listItem.innerHTML = `${school.schoolName}${travelTimeText} <br><span class="small-text">Profile: ${listAsString}</span><br>`;
        shouldAddToList = true;
      }
    } else {
      if (
        school.profiles.some(
          (profile) =>
            profile.profileName === profileFilter &&
            profile.subjects.includes(subjectFilter)
        )
      ) {
        // we just display the name of the school
        listItem.innerHTML = `${school.schoolName}${travelTimeText}`;
        shouldAddToList = true;
      }
    }

    // Only add the list item if it has content
    if (shouldAddToList) {
      optionsLabel.textContent = optionsLabelText;
      optionsList.appendChild(listItem);
    }
  });
}

async function filterAndDisplayDataAdvanced() {
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

  const royalBlue = "#4169E1"; // color for unterGymis
  const orange = "#F04A00"; // color for hochGymis

  if (!fromFilter) {
    const sortedSchools = await applyTravelTimeSorting(schoolsData);
    displayKurzPlan(
      sortedSchools,
      currentOptionsLabel,
      currentOptionsList,
      "Optionen:"
    );
    addSchoolsToMap(sortedSchools, royalBlue, "1.0", royalBlue, "1.0");
  }

  const schoolList = getSchoolsFrom(fromFilter);
  if (fromFilter === "6Prima") {
    const sortedSchoolList = await applyTravelTimeSorting(schoolList);
    displayLangPlan(
      sortedSchoolList,
      currentOptionsLabel,
      currentOptionsList,
      "Untergymnasium Optionen:"
    ); // schools with untergymi
    addSchoolsToMap(sortedSchoolList, royalBlue, "1.0", royalBlue, "0.0");

    const futureSchools = getSchoolsFrom("2Gymi");
    const hochGymiSchools = getFilteredSchools(futureSchools);
    const sortedHochGymiSchools = await applyTravelTimeSorting(hochGymiSchools);
    displayKurzPlan(
      sortedHochGymiSchools,
      futureOptionsLabel,
      futureOptionsList,
      "Optionen nach 2 Jahren Langgymnasium:"
    );
    addSchoolsToMap(sortedHochGymiSchools, orange, "0.0", orange, "1.0");
  } else if (fromFilter === "2Gymi" || fromFilter === "2or3Sek") {
    const filteredSchools = getFilteredSchools(schoolList);
    const sortedFilteredSchools = await applyTravelTimeSorting(filteredSchools);
    displayKurzPlan(
      sortedFilteredSchools,
      currentOptionsLabel,
      currentOptionsList,
      "Optionen:"
    );
    addSchoolsToMap(sortedFilteredSchools, orange, "1.0", orange, "0.0");
  }
}

// Global variable to track user postal code for travel time sorting
let userPostalCode = null;

// Function to handle postal code changes (automatic travel time sorting)
async function handlePostalCodeChange() {
  const postalCode = document.getElementById("postalCode").value.trim();

  // Reset sorting if postal code is empty
  if (!postalCode) {
    userPostalCode = null;
    filterAndDisplayDataAdvanced();
    return;
  }

  // Only process if we have a 4-digit postal code
  if (postalCode.length === 4 && /^\d{4}$/.test(postalCode)) {
    // Validate that the postal code exists (check if we can get coordinates)
    let coordinates = getCoordinatesFromPostalCode(postalCode);
    if (!coordinates) {
      coordinates = await fetchCoordinatesFromAPI(postalCode);
    }

    if (coordinates) {
      userPostalCode = postalCode;
      filterAndDisplayDataAdvanced();
    } else {
      // Invalid postal code, reset sorting
      userPostalCode = null;
      filterAndDisplayDataAdvanced();
    }
  } else if (postalCode.length < 4) {
    // Partial input, reset sorting but don't show error
    userPostalCode = null;
    filterAndDisplayDataAdvanced();
  }
}

// Modified function to apply travel time sorting if postal code is available
async function applyTravelTimeSorting(schools) {
  if (userPostalCode) {
    return await sortSchoolsByTravelTime(schools, userPostalCode);
  }
  return schools;
}

// Get all possible subjects for a specific profile across all schools
function getSubjectsForProfile(profileName) {
  const subjects = new Set();

  schoolsData.forEach((school) => {
    school.profiles.forEach((profile) => {
      if (profile.profileName === profileName) {
        profile.subjects.forEach((subject) => {
          subjects.add(subject);
        });
      }
    });
  });

  return Array.from(subjects).sort();
}

// Subject dropdown options with German descriptions
const subjectOptions = {
  "": "Alle Fächer",
  L: "L - Latein",
  Gr: "Gr - Griechisch",
  It: "It - Italienisch",
  F: "F - Französisch",
  E: "E - Englisch",
  Sp: "Sp - Spanisch",
  Ru: "Ru - Russisch",
  PM: "PM - Physik und Anwendungen der Mathematik",
  BC: "BC - Biologie und Chemie",
  WR: "WR - Wirtschaft und Recht",
  BG: "BG - Bildnerisches Gestalten",
  Mu: "Mu - Musik",
  P: "P - Philosophie",
  PP: "PP - Pädagogik & Psychologie",
};

// Filter subject dropdown based on selected profile
function filterSubjectsByProfile() {
  const profileFilter = document.getElementById("profileFilter").value;
  const subjectDropdown = document.getElementById("subjectFilter");
  const currentValue = subjectDropdown.value;

  // Clear current options
  subjectDropdown.innerHTML = "";

  // Always add "All subjects" option
  const allOption = document.createElement("option");
  allOption.value = "";
  allOption.textContent = subjectOptions[""];
  subjectDropdown.appendChild(allOption);

  let availableSubjects = [];

  if (profileFilter) {
    // Get subjects for specific profile
    availableSubjects = getSubjectsForProfile(profileFilter);
  } else {
    // Show all subjects if no profile selected
    availableSubjects = Object.keys(subjectOptions).filter((key) => key !== "");
  }

  // Add options for available subjects
  availableSubjects.forEach((subject) => {
    if (subjectOptions[subject]) {
      const option = document.createElement("option");
      option.value = subject;
      option.textContent = subjectOptions[subject];
      subjectDropdown.appendChild(option);
    }
  });

  // Try to maintain current selection if it's still valid
  if (currentValue && availableSubjects.includes(currentValue)) {
    subjectDropdown.value = currentValue;
  } else {
    subjectDropdown.value = ""; // Reset to "All subjects"
  }

  // Trigger filtering update
  filterAndDisplayDataAdvanced();
}

// Initialize dropdowns and event listeners
document.addEventListener("DOMContentLoaded", function () {
  // Initialize subject dropdown with all options
  filterSubjectsByProfile();

  // Add profile change listener
  const profileDropdown = document.getElementById("profileFilter");
  if (profileDropdown) {
    profileDropdown.addEventListener("change", filterSubjectsByProfile);
  }
});
