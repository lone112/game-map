var map = L.map('map', {
    minZoom: 2,
    maxZoom: window.map_mZoom,
    center: window.map_center,
    zoom: 3,
    attributionControl: false,
    zoomControl: false,
    layers: allLayers
});

var bounds = new L.LatLngBounds(window.map_sWest, window.map_nEast);
map.setMaxBounds(bounds);

//http://res.cloudinary.com/lone112/image/upload/v1433932477/tiles/{z}/{x}/{y}.png.png
L.tileLayer('maps/velen/{z}/{x}/{y}.png', {
    tms: true,
    bounds: bounds,
    noWrap: true
}).addTo(map);

//L.marker([31.0456,121.399696]).bindLabel('Look revealing label!').addTo(map);


function onMapClick(e) {
    //alert("You clicked the map at " + e.latlng);
    console.log(e.latlng);
    console.log(map._zoom);
    //L.marker([e.latlng.lat,e.latlng.lng]).bindLabel(e.latlng).addTo(map);
}

map.on('click', onMapClick);

$('.ui.accordion').accordion();