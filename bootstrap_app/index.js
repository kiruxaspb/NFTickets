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
    res.sendFile(`${__dirname}/src/index.html`);
});
app.get('/register', urlencodedParser, function (
    request,
    response
  ) {
    response.sendFile(__dirname + '/src/register.html')
  })
  app.get('/api', async function (
    request,
    response
  ) {
    if (!request.query) return response.sendStatus(400)
    console.log(request.query);
    let checked = await checker.checkTicket(request.query.addr, request.query.polid);
    console.log("checker said:", checked);
    response.send(checked);
  })

app.listen(3000, () => {
    console.log('Application listening on port 3000!');
    console.log('Link: http://localhost:3000/')
});