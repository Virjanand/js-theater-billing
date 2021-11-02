const statement = require('./statement');
const invoices = require('./invoices.json')
const plays = require('./plays.json')

test('print invoice of plays', () => {
    expect(statement(invoices[0], plays)).toBe(
`Statement for BigCo
  Hamlet: $650.00 (55 seats)
  As You Like It: $580.00 (35 seats)
  Othello: $400.00 (30 seats)
  As You Like It: $360.00 (20 seats)
Amount owed is $1,990.00
You earned 41 credits
`
    );
});