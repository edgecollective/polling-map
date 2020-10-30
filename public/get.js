
    
    
    
    fetch('http://localhost:8100/mapdata')
    .then((response) => {
      return response.json();
    })
    .then((backArray) => {
      //console.log("hallo");
      //console.log(myJson);
  
	  console.log("backArray",backArray);
	  var myJson = backArray[0];

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

	  var bounds=L.bounds(myPoints);
	  //console.log(bounds);

	  //console.log("myJson.length=",myJson.length);

	  ave_lat=ave_lat/(myJson.length);
	  ave_lon=ave_lon/(myJson.length);

	  //console.log(myJson[0].lat, myJson[0].lon);
	  console.log(ave_lat, ave_lon);

    //var mymap = L.map('mapid').setView([myJson[0].lat,myJson[0].lon], 11);


	mymap.setView(new L.LatLng(ave_lat, ave_lon), 10);

	//mymap.fitBounds(bounds);

	//mymap.setView(markersLayer.getBounds().getCenter());

   for(var i = 0; i < myJson.length; i++) {
    var obj = myJson[i];

	var str1 = "<b>Polling Location:</b><br>";
	str1=str1.concat(obj.station);
	str1=str1.concat("<br>");
	str1=str1.concat("<b>Volunteers:</b>");
	for(var j = 0; j < obj.volunteers.length; j++) {
    str1=str1.concat("<br>");
	str1=str1.concat("-");
	str1=str1.concat(obj.volunteers[j]);
	}
	

	
    L.circle([obj.lat, obj.lon], 400, {
		color: 'red',
		fillColor: '#f03',
		fillOpacity: 0.5
	}).addTo(mymap).bindPopup(str1);
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
