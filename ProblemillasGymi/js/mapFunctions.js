function initMap() {
    var map = L.map('map').setView([47.372266770573944, 8.53810067665972], 13);  // Centered in Zurich
    
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    
    var marker = L.marker([47.372266770573944, 8.53810067665972]).addTo(map);
}

function addSchoolToMap(school) {
    var marker = L.marker(school.position).addTo(map);
}
