
    
    
    
    fetch('http://localhost:8100/mapdata')
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      //console.log("hallo");
      //console.log(myJson);
  
	  var ave_lat=0.;
	  var ave_lon=0.;

	  var myPoints = [];
	  for(var i = 0; i < myJson.length; i++) {
		var obj = myJson[i];
		console.log(obj);
		ave_lat+=parseFloat(obj.lat);
		ave_lon+=parseFloat(obj.lon);
		myPoints.push(L.point(obj.lat, obj.lon));
	  }
	  //console.log("points=",myPoints);

	  //var bounds=L.bounds(myPoints);
	  //console.log(bounds);

	  //console.log("myJson.length=",myJson.length);

	  ave_lat=ave_lat/(myJson.length);
	  ave_lon=ave_lon/(myJson.length);

	  //console.log(myJson[0].lat, myJson[0].lon);
	  console.log(ave_lat, ave_lon);

    //var mymap = L.map('mapid').setView([myJson[0].lat,myJson[0].lon], 11);

	var mymap = L.map('mapid');

	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1
	}).addTo(mymap);

	//console.log("x=",bounds.getCenter().x);
	//console.log("y=",bounds.getCenter().y);


	mymap.setView(new L.LatLng(ave_lat, ave_lon), 11);

	
	L.circle([ave_lat, ave_lat], 1000, {
		color: 'red',
		fillColor: '#f03',
		fillOpacity: 1
	}).addTo(mymap).bindPopup("yeah");

   for(var i = 0; i < myJson.length; i++) {
    var obj = myJson[i];

    L.circle([obj.lat, obj.lon], 400, {
		color: 'red',
		fillColor: '#f03',
		fillOpacity: 0.5
	}).addTo(mymap).bindPopup(obj.station);
}

	var popup = L.popup();

    
	function onMapClick(e) {
		popup
			.setLatLng(e.latlng)
			.setContent("You clicked the map at " + e.latlng.toString())
			.openOn(mymap);
	}

    mymap.on('click', onMapClick);
    

});