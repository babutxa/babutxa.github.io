// Fetch and store your school data (e.g., from a JSON file or an API).
const schoolsData = [
  // Your data here
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

// Initial display of schools (all profiles).
displaySchools("");
