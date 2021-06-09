const csvToJson = require('convert-csv-to-json')
const fileInputName = 'top-500-most-rented-movies.csv'

csvToJson.parseSubArray('*',',').getJsonFromCsv(fileInputName)
csvToJson.formatValueByType().getJsonFromCsv(fileInputName)
csvToJson.utf8Encoding().getJsonFromCsv(fileInputName)

let json = csvToJson.getJsonFromCsv(fileInputName)
for(let i = 0; i < json.length; i ++){
    console.log(json[i]);
}