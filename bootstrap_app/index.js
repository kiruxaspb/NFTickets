const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const checker = require('./src/js/CheckTokenByAddress.js')
const app = express();
const urlencodedParser = bodyParser.urlencoded({
    extended: false,
})

app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'src')))
app.get('/', (req, res) => {
    res.render(`${__dirname}/src/index.hbs`);
});
app.get('/register', urlencodedParser, function (
    request,
    response
  ) {
    response.sendFile(__dirname + '/src/register.html')
  })
  app.post('/', urlencodedParser, async function (
    request,
    response
  ) {
    if (!request.body) return response.sendStatus(400)
    console.log(request.body)
    let checked = await checker.checkTicket(request.body.addr,request.body.polid);
    console.log(checked);
    response.render(`${__dirname}/src/index.hbs`, {
        adressStatus: checked.addressChecked,
        ticketStatus: checked.tokenChecked,
      })
  })

app.listen(3000, () => {
    console.log('Application listening on port 3000!');
});