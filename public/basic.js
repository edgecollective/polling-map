var mymap = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
	maxZoom: 18,
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
		'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
		'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	id: 'mapbox/streets-v11',
	tileSize: 512,
	zoomOffset: -1
}).addTo(mymap);

L.marker([51.5, -0.09]).addTo(mymap)
	.bindPopup("<b>Hello world!</b><br />I am a popup.").openPopup();

L.circle([51.508, -0.11], 500, {
	color: 'red',
	fillColor: '#f03',
	fillOpacity: 0.5
}).addTo(mymap).bindPopup("I am a circle.");

L.polygon([
	[51.509, -0.08],
	[51.503, -0.06],
	[51.51, -0.047]
]).addTo(mymap).bindPopup("I am a polygon.");


var popup = L.popup();

function onMapClick(e) {
	popup
		.setLatLng(e.latlng)
		.setContent("You clicked the map at " + e.latlng.toString())
		.openOn(mymap);
}

mymap.on('click', onMapClick);


function setView(lat, lng){
	mymap.panTo([lat, lng]);
}

function setViewToInputValues(){
	const lat = document.getElementById("lat").value
	const lng = document.getElementById("lng").value
	setView(lat, lng)
}

document.getElementById("pan").addEventListener('click', setViewToInputValues)

  var menu = document.getElementById("locality-dropdown");
menu.addEventListener("change", generateData);

function generateData(event) {
  if (menu.value == '1') {
	alert(1);
	console.log('yeah');
  } else if (menu.value == '2') {
    alert(2);
  } else if (menu.value == '3') {
    alert(3);
  }
}

  
  let dropdown = document.getElementById('locality-dropdown');
dropdown.length = 0;

let defaultOption = document.createElement('option');
defaultOption.text = 'Gainsville';

dropdown.add(defaultOption);
dropdown.selectedIndex = 0;

let option;

option = document.createElement('option');
option.text = 'yeah'
option.value = '3'
dropdown.add(option);