var map;
var markers;

function initMap() {
    map = L.map('map').setView([47.372266770573944, 8.53810067665972], 10);  // Centered in Zurich;
    markers = L.layerGroup().addTo(map);
    
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
}

function clearMarkers() {
    markers.clearLayers();
}

function addSchoolsToMap(schoolList) {
    var latlngs = [];
    schoolList.forEach((school) => {
        latlngs.push(school.position);
        
        var marker = L.marker(school.position);
        markers.addLayer(marker);
    });
                        
    var bounds = L.latLngBounds(latlngs);
    map.fitBounds(bounds);
}
