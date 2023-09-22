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
        markers.addLayer(createMarkerWithCustomIcon(school.position));
    });
                        
    var bounds = L.latLngBounds(latlngs);
    map.fitBounds(bounds);
}

function createMarkerWithCustomIcon(position) {
    // Create a custom svg icon
    const customIcon = L.divIcon({
      className: 'custom-icon', // You can apply custom CSS styling if needed
      html: '<svg height="24" width="24" xmlns="http://www.w3.org/2000/svg"><g>
          <path d="m12 0c-4.4183 0-8 3.5817-8 8 0 1.421.3816 2.75 1.0312 3.906.1079.192.221.381.3438.563l6.625 11.531 6.625-11.531c.102-.151.19-.311.281-.469l.063-.094c.649-1.156 1.031-2.485 1.031-3.906 0-4.4183-3.582-8-8-8zm0 4c2.209 0 4 1.7909 4 4 0 2.209-1.791 4-4 4-2.2091 0-4-1.791-4-4 0-2.2091 1.7909-4 4-4z" fill="#000000"/>
          <path d="m12 3c-2.7614 0-5 2.2386-5 5 0 2.761 2.2386 5 5 5 2.761 0 5-2.239 5-5 0-2.7614-2.239-5-5-5zm0 2c1.657 0 3 1.3431 3 3s-1.343 3-3 3-3-1.3431-3-3 1.343-3 3-3z" fill="#c0392b"/>
          </g></svg>'
    });
    
    // Create a marker with the custom icon
    var marker = L.marker(position, {icon: customIcon});  
    return marker;
}
