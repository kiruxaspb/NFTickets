const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const checker = require('./src/js/CheckTokenByAddress.js')
const app = express();
const urlencodedParser = bodyParser.urlencoded({
    extended: false,
})

app.use(express.static(path.join(__dirname, 'src')))
app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/src/index.html`);
});

app.get('/register', urlencodedParser, (req, res) => {
    res.sendFile(__dirname + '/src/register.html')
})

// Ответ модуля проверки токена
app.get('/api', async function (req, res) {
    if (!req.query) return res.sendStatus(400)
    console.log(req.query);
    let checked = await checker.checkTicket(req.query.address, req.query.policyid);
    console.log("Check result:", checked);
    res.send(checked);
})

app.listen(3000, () => {
    console.log('Application listening on port 3000!');
    console.log('Link: http://localhost:3000/')
});