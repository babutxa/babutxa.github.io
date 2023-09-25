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

function addSchoolsToMap(schoolList, size, color1, opacity1, color2, opacity2) {
    var latlngs = [];
    schoolList.forEach((school) => {
        latlngs.push(school.position);
        markers.addLayer(createMarkerWithCustomIcon(school, size, color1, opacity1, color2, opacity2));
    });
                        
    var bounds = L.latLngBounds(latlngs);
    map.fitBounds(bounds);
}

function createMarkerWithCustomIcon(school, size, color1, opacity1, color2, opacity2) {
    const pathData1 = "M12 0C7.5817 0 4 3.5817 4 8c0 1.421.3816 2.75 1.0312 3.906.1079.192.221.381.3438.563l6.625 11.531 6.625-11.531c.102-.151.19-.311.281-.469l.063-.094c.649-1.156 1.031-2.485 1.031-3.906 0-4.4183-3.582-8-8-8zm0 4c2.209 0 4 1.7909 4 4 0 2.209-1.791 4-4 4-2.2091 0-4-1.791-4-4 0-2.2091 1.7909-4 4-4z";
    const pathData2 = "M12 3C9.2386 3 7 5.2386 7 8c0 2.761 2.2386 5 5 5 2.761 0 5-2.239 5-5 0-2.7614-2.239-5-5-5zm0 2c1.3431 0 3 1.3431 3 3s-1.343 3-3 3-3-1.3431-3-3 1.343-3 3-3z";
    
    // Create the first <path> element
    const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path1.setAttribute("d", pathData1);
    path1.setAttribute("fill", color1);
    path1.setAttribute("fill-opacity", opacity1);
    
    // Create the second <path> element
    const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path2.setAttribute("d", pathData1);
    path2.setAttribute("fill", color2);
    path2.setAttribute("fill-opacity", opacity2);
    
    // Create a <g> (group) element to contain the paths
    const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
    group.appendChild(path1);
    group.appendChild(path2);
    
    // Create an SVG element
    const svgElem = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgElem.setAttribute("height", 16); // Set the height
    svgElem.setAttribute("width", 16);   // Set the width
    svgElem.appendChild(group);
    svgElem.setAttribute("transform", "scale(3.5)");
    
    // Create a custom svg icon
    const customIcon = L.divIcon({
      className: 'custom-icon', // You can apply custom CSS styling if needed
      html: svgElem
    });

    
    // Create a marker with the custom icon
    var marker = L.marker(school.position, {icon: customIcon});
    marker.bindPopup(school.schoolName);
    return marker;
}

function createMarkerWithCustomIcon2(school, size, color1, opacity1, color2, opacity2) {
    const pathData1 = "M12 0C7.5817 0 4 3.5817 4 8c0 1.421.3816 2.75 1.0312 3.906.1079.192.221.381.3438.563l6.625 11.531 6.625-11.531c.102-.151.19-.311.281-.469l.063-.094c.649-1.156 1.031-2.485 1.031-3.906 0-4.4183-3.582-8-8-8zm0 4c2.209 0 4 1.7909 4 4 0 2.209-1.791 4-4 4-2.2091 0-4-1.791-4-4 0-2.2091 1.7909-4 4-4z";
    const pathData2 = "M12 3C9.2386 3 7 5.2386 7 8c0 2.761 2.2386 5 5 5 2.761 0 5-2.239 5-5 0-2.7614-2.239-5-5-5zm0 2c1.3431 0 3 1.3431 3 3s-1.343 3-3 3-3-1.3431-3-3 1.343-3 3-3z";
    const paper = Snap(0,0);

    const snapPath1 = paper.path(pathData1);
    snapPath1.transform('s${scale}');
    
    const snapPath2 = paper.path(pathData2);
    snapPath2.transform('s${scale}');

    const scale = size / 16.0;
    console.log(size);
    console.log(scale);
    console.log(pathData1);
    console.log(snapPath1);
    
    // Create an SVG element
    const svgElem = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgElem.setAttribute("height", size); // Set the height
    svgElem.setAttribute("width", size);   // Set the width
   
    // Create a <g> (group) element to contain the paths
    const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
    
    // Create the first <path> element
    const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path1.setAttribute("d", snapPath1.attr("d"));
    path1.setAttribute("fill", color1);
    path1.setAttribute("fill-opacity", opacity1);
    
    // Create the second <path> element
    const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path2.setAttribute("d", snapPath2.attr("d"));
    path2.setAttribute("fill", color2);
    path2.setAttribute("fill-opacity", opacity2);
    
    // Append the paths to the group
    group.appendChild(path1);
    group.appendChild(path2);
    
    // Append the group to the SVG
    svgElem.appendChild(group);
        
    // Create a custom svg icon
    const customIcon = L.divIcon({
      className: 'custom-icon', // You can apply custom CSS styling if needed
      html: svgElem
    });

    
    // Create a marker with the custom icon
    var marker = L.marker(school.position, {icon: customIcon});
    marker.bindPopup(school.schoolName);
    return marker;
}
