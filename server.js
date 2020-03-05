const path = require("path");
const express = require("express");
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/angular-build'));
app.use(cors());
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'angular-build', 'index.html'))
});


app.post('/', function (req, res) {
    //res.sendFile(path.join(__dirname, 'angular-build', 'index.html'))
    if (req.originalUrl != null) {
        res.send(req.originalUrl);
    }
    else if (req.param('signed_request') != null) {
        res.send(req.param('signed_request'));
    }
    else {
        res.send("originalURL didn't work");
    }
});
/*
function parse_signed_request(signed_request) {
    encoded_data = signed_request.split('.', 2);
    // decode the data
    sig = encoded_data[0];
    json = base64url.decode(encoded_data[1]);
    data = JSON.parse(json); // ERROR Occurs Here!

    secret = "44ecbebc4af7083a8311cb412e39dbfd";

    // check algorithm - not relevant to error
    if (!data.algorithm || data.algorithm.toUpperCase() != 'HMAC-SHA256') {
        console.error('Unknown algorithm. Expected HMAC-SHA256');
        return null;
    }

    // check sig - not relevant to error
    expected_sig = crypto.createHmac('sha256', secret).update(encoded_data[1]).digest('base64').replace(/\+/g, '-').replace(/\//g, '_').replace('=', '');
    if (sig !== expected_sig) {
        console.error('Bad signed JSON Signature!');
        return null;
    }
    return data;
}
*/

app.all(() => {
    res.header('Access-Control-Allow-Origin', '*'); // your website
    res.header('Access-Control-Allow-Credentials', 'false');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
})
// Start the app by listening on the default Heroku port
app.listen(port, () => {
    console.log("angular server started on port: " + port);
});

