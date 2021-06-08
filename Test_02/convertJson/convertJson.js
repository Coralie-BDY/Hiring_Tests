const csvToJson = require('convert-csv-to-json')
const fileInputName = 'src/top-500-most-rented-movies.csv'
const fileOutputName = 'src/top-500-most-rented-movies.json'

csvToJson.parseSubArray('*',',').getJsonFromCsv(fileInputName)
csvToJson.formatValueByType().getJsonFromCsv(fileInputName)
csvToJson.utf8Encoding().getJsonFromCsv(fileInputName)
csvToJson.generateJsonFileFromCsv(fileInputName,fileOutputName)

