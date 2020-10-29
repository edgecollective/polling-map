const os = require('os')
const path = require("path");
const apikey = require(path.join(os.homedir(), '.polling_api_key.json'))

const { GoogleSpreadsheet } = require('google-spreadsheet');

// spreadsheet key is the long id in the sheets URL
const doc = new GoogleSpreadsheet('1VxSqzLrYRwqdWXtDbiyDYYFHcoYEaGDuGmsMCcBiWNI');

async function getStuff() {

	try{

doc.useApiKey(apikey['key']);
await doc.loadInfo(); // loads document properties and worksheets
console.log(doc.title);

const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id]
console.log(sheet.title);
console.log(sheet.rowCount);
	} catch(error) {
    console.log(error.message, error.stack);
  }
}

getStuff();

