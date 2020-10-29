
    
    
    
    fetch('http://localhost:8100/mapdata')
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      //console.log("hallo");
      console.log(myJson);
  
    var mymap = L.map('mapid').setView([myJson[0].lat,myJson[0].lon], 12);

	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1
	}).addTo(mymap);


   for(var i = 0; i < myJson.length; i++) {
    var obj = myJson[i];

    L.circle([obj.lat, obj.lon], 400, {
		color: 'red',
		fillColor: '#f03',
		fillOpacity: 0.5
	}).addTo(mymap).bindPopup(obj.station);
}

	var popup = L.popup();

    /*
	function onMapClick(e) {
		popup
			.setLatLng(e.latlng)
			.setContent("You clicked the map at " + e.latlng.toString())
			.openOn(mymap);
	}

    mymap.on('click', onMapClick);
    */

});