
const express = require('express');
let app = express();
const XLSX = require('xlsx');
var workbook = XLSX.readFile('/Users/Praise/Documents/GET DEV.CO/qzAjJo.xlsx');
const sheetname = workbook.SheetNames;
const each_Row = XLSX.utils.sheet_to_csv(workbook.Sheets[sheetname[0]]).split('\n');
let each_string = [];
for(let i = 0; i < each_Row.length; i++ ){
    let each = each_Row[i].split(',');
    each_string.push(each);
}
let statement = []
for(let i = 0; i < each_string.length; i++ ){
    let position = each_string[i][i];
    statement.push(position)
}
var regex = new RegExp(',', 'g');
let final_statement = statement.join(',').replace(regex, ' ');
console.log(final_statement);
// Get dev is the future and the future is now 
app.port = 3000;
