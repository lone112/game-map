(function () {
	window.createMarker = function (coord, icon, label, popup) {
		var mapKey = 'markers-' + map_path + '-hidden';
		var marker = L.marker(coord, setMarker(icon, label)).bindLabel(label).bindPopup(popup);

		marker.on('contextmenu', function (e) {
			toggleOpacity(e, mapKey);
		}).on('dblclick', function (e) {
			toggleOpacity(e, mapKey);
		}).on('click',function(e){
			console.log(label);
		});

		if (isMarkerInvisible(mapKey, marker.getLatLng().lat, marker.getLatLng().lng)) {
			marker.setOpacity(invisibleMarkerOpacity);
		}

		return marker;
	};

	window.setMarker = function (icon, tooltip) {
		return {icon : icon, riseOnHover : true, alt : tooltip};
	};

	window.getLatLngKey = function (lat, lng) {
		return lat + ';' + lng;
	};

	window.isMarkerInvisible = function (mapPath, lat, lng) {
		return invisibleMarkers[mapPath].indexOf(getLatLngKey(lat, lng)) > -1;
	};

	window.toggleOpacity = function (event, mapPath) {
		var key = getLatLngKey(event.latlng.lat, event.latlng.lng);    

		if (event.target && event.target.options.opacity === 1.0) {
			event.target.setOpacity(invisibleMarkerOpacity);
			invisibleMarkers[mapPath].push(key);
		} else {
			event.target.setOpacity(1.0);
			invisibleMarkers[mapPath].splice(invisibleMarkers[mapPath].indexOf(key), 1);
		}

		localStorage[mapPath] = JSON.stringify(invisibleMarkers[mapPath]);		
	};

	window.icons = {};
	window.markers = {};
	window.invisibleMarkers = {};

	var icons = window.icons;
	var markers = window.markers;
	var invisibleMarkerOpacity = 0.25;

	window.processData = function (data) {
		var mapKey = 'markers-' + map_path + '-hidden';

		if(!localStorage[mapKey]) {
			localStorage[mapKey] = JSON.stringify([]);
		}
		invisibleMarkers[mapKey] = JSON.parse(localStorage[mapKey]);

		Object.keys(data).forEach(function (key) {
			var items = data[key];
			var groupItems = [];
			items.forEach(function (item) {
				if (item.popupTitle == null) {
					item.popupTitle = item.label;
				}
				item.coords.forEach(function (coord) {
					groupItems.push(createMarker(coord, icons[key], item.label, '<h1>' + item.popupTitle + '</h1>' + item.popup));
				});
			});
			markers[key] = L.layerGroup(groupItems);
		});
	};

	icons.abandoned = L.icon({
		iconUrl  : './img/icons/abandoned.png',
		iconSize : [30, 30]
	});

	icons.alchemy = L.icon({
		iconUrl  : './img/icons/alchemy.png',
		iconSize : [20, 28]
	});

	icons.armourer = L.icon({
		iconUrl  : './img/icons/armourer.png',
		iconSize : [24, 34]
	});

	icons.armourerstable = L.icon({
		iconUrl  : './img/icons/armourerstable.png',
		iconSize : [30, 27]
	});

	icons.banditcamp = L.icon({
		iconUrl  : './img/icons/banditcamp.png',
		iconSize : [29, 30]
	});

	icons.barber = L.icon({
		iconUrl  : './img/icons/barber.png',
		iconSize : [30, 30]
	});

	icons.blacksmith = L.icon({
		iconUrl  : './img/icons/blacksmith.png',
		iconSize : [27, 30]
	});

	icons.brothel = L.icon({
		iconUrl  : './img/icons/brothel.png',
		iconSize : [28, 26]
	});

	icons.entrance = L.icon({
		iconUrl  : './img/icons/entrance.png',
		iconSize : [28, 27]
	});

	icons.grindstone = L.icon({
		iconUrl  : './img/icons/grindstone.png',
		iconSize : [30, 26]
	});

	icons.guarded = L.icon({
		iconUrl  : './img/icons/guarded.png',
		iconSize : [23, 34]
	});

	icons.gwent = L.icon({
		iconUrl  : './img/icons/gwent.png',
		iconSize : [24, 30]
	});

	icons.harbor = L.icon({
		iconUrl  : './img/icons/harbor.png',
		iconSize : [27, 30]
	});

	icons.herbalist = L.icon({
		iconUrl  : './img/icons/herbalist.png',
		iconSize : [25, 28]
	});

	icons.hidden = L.icon({
		iconUrl  : './img/icons/hidden.png',
		iconSize : [23, 34]
	});

	icons.innkeep = L.icon({
		iconUrl  : './img/icons/tavern.png',
		iconSize : [26, 30]
	});

	icons.monsterden = L.icon({
		iconUrl  : './img/icons/monsterden.png',
		iconSize : [30, 27]
	});

	icons.monsternest = L.icon({
		iconUrl  : './img/icons/monsternest.png',
		iconSize : [23, 30]
	});

	icons.notice = L.icon({
		iconUrl  : './img/icons/notice.png',
		iconSize : [23, 28]
	});

	icons.pid = L.icon({
		iconUrl  : './img/icons/pid.png',
		iconSize : [24, 34]
	});

	icons.pop = L.icon({
		iconUrl  : './img/icons/pop.png',
		iconSize : [27, 30]
	});

	icons.poi = L.icon({
		iconUrl  : './img/icons/poi.png',
		iconSize : [28, 28]
	});

	icons.shopkeeper = L.icon({
		iconUrl  : './img/icons/merchant.png',
		iconSize : [21, 30]
	});

	icons.signpost = L.icon({
		iconUrl  : './img/icons/fasttravel.png',
		iconSize : [27, 34]
	});

	icons.smugglers = L.icon({
		iconUrl  : './img/icons/smugglers.png',
		iconSize : [28, 30]
	});

	icons.spoils = L.icon({
		iconUrl  : './img/icons/spoils.png',
		iconSize : [25, 28]
	});
}());