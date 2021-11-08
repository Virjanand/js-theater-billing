const invoices = require('./testdata/invoices.json');
const plays = require('./testdata/plays.json');
const statement = require('./statement.js');

console.log(statement(invoices[0], plays));
