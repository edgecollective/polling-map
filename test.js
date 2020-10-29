const os = require('os')
const path = require("path");
const doc_info = require(path.join(os.homedir(), '.polling_doc_info.json'))

const { GoogleSpreadsheet } = require('google-spreadsheet');

// spreadsheet key is the long id in the sheets URL
const doc = new GoogleSpreadsheet(doc_info['doc_id']);

async function getStuff() {

	try{

doc.useApiKey(doc_info['api_key']);
await doc.loadInfo(); // loads document properties and worksheets
console.log("Doc title:",doc.title);

const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id]
//console.log(sheet.title);
//console.log(sheet.rowCount);

//const rows = await sheet.getRows();

await sheet.loadCells()

var thiscell;

		const header = await sheet.getCell(0,0);
		console.log('header:',header.value);

		var viewData = [];

	for (let i = 1; i < sheet.rowCount; i++) {

		
		thiscell = await sheet.getCell(i,0);
		if(thiscell.value !== null) {
		// the polling station
		thiscell = await sheet.getCell(i,0);
		var station = thiscell.value;

		// latitude
		thiscell = await sheet.getCell(i,1);
		var lat = thiscell.value;

		// longitude
		thiscell = await sheet.getCell(i,2);
		var lon = thiscell.value;

		var jsonData = {};
		jsonData["station"]=station;
		jsonData["lat"]=lat;
		jsonData["lon"]=lon;

		viewData.push(jsonData);
		}

		
}

console.log(viewData);

	} catch(error) {
    console.log(error.message, error.stack);
  }
}

getStuff();

