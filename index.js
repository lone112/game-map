var map = L.map('map',{
	minZoom : 0,
	zoom: 3,
	zoomControl :false,
	attributionControl : false
}).setView([0,0],2);

/*L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'lone112.2678b838',
    accessToken: 'pk.eyJ1IjoibG9uZTExMiIsImEiOiI2MDkzZWU0YWQ5YmQ0MzdjNzkzM2NiMzQwY2Y2ZWU1NiJ9.3c0uj8Zw4hun9wDYRH7wtA#4/31.05/121.40'
}).addTo(map);
*/
//http://res.cloudinary.com/lone112/image/upload/v1433932477/tiles/{z}/{x}/{y}.png.png
L.tileLayer('http://res.cloudinary.com/lone112/image/upload/v1433932477/tiles/{z}/{x}/{y}.png.png', {
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

var mapBounds = new L.LatLngBounds(
            map.unproject([0, 2560], mapMaxZoom),
            map.unproject([7424, 0], mapMaxZoom));
            
map.fitBounds(mapBounds);