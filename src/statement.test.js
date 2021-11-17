const { statement, htmlStatement } = require('./statement')
const invoices = require('./testdata/invoices.json')
const plays = require('./testdata/plays.json')

test('text invoice of plays', () => {
  expect(statement(invoices[0], plays)).toBe(
    `Statement for BigCo
  Hamlet: $650.00 (55 seats)
  As You Like It: $580.00 (35 seats)
  Othello: $400.00 (30 seats)
  As You Like It: $360.00 (20 seats)
Amount owed is $1,990.00
You earned 41 credits
`,
  )
})

test('html invoice of plays', () => {
  expect(htmlStatement(invoices[0], plays)).toBe(
    `<h1>Statement for BigCo</h1>
<table>
<tr><th>plays</th><th>seats</th><th>cost</th></tr>  <tr><td>Hamlet</td><td>55</td><td$650.00</td></tr>
  <tr><td>As You Like It</td><td>35</td><td$580.00</td></tr>
  <tr><td>Othello</td><td>30</td><td$400.00</td></tr>
  <tr><td>As You Like It</td><td>20</td><td$360.00</td></tr>
</table>
<p>Amount owed is <em>$1,990.00</em></p>
<p>You earned <em>41</em> credits</p>
`,
  )
})
