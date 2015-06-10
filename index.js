var map = L.map('map',{
	minZoom : 0,
    maxZoom: 5,
	zoom: 3,
	zoomControl :false,
	attributionControl : false
}).setView([0,0],2);

var mapBounds = new L.LatLngBounds(
    map.unproject([0, 2560], 5),
    map.unproject([7424, 0], 5));
map.fitBounds(mapBounds);
map.setMaxBounds(mapBounds);
//http://res.cloudinary.com/lone112/image/upload/v1433932477/tiles/{z}/{x}/{y}.png.png
L.tileLayer('maps/output/{z}/{x}/{y}.png', {
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

