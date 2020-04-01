const path = require("path");
const express = require("express");
const cookieParser = require('cookie-parser');
const cookie = require('cookie');
const cors = require('cors');
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 8080;
const _ = require("lodash");
const base64url = require("base64-url");

var userData;


const fs = require('fs');
const privateKey = fs.readFileSync('ssl/server.key', 'utf8');
const certificate = fs.readFileSync('ssl/server.crt', 'utf8');

const credentials = { key: privateKey, cert: certificate };

const https = require("https");
const httpsServer = https.createServer(credentials, app);
const request = require('request-promise');

app.use(express.static(__dirname + '/angular-build'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/userdata', function (req, res) {
    res.send(req.cookies.userData);
});

app.post('/', function (req, res) {
    /*
    
    // Get the stringified JSON object from the signed_request
    var userDataTemp = parse_signed_request(req.body.signed_request);
    //Store the ID and the token
    //localStorage.setItem('userId', JSON.parse(userData).user_id);
    //localStorage.setItem('userToken', JSON.parse(userData).oauth_token);
    userId = JSON.parse(userDataTemp).user_id;
    console.log("userId: " + userId);
    userToken = JSON.parse(userDataTemp).oauth_token;
    console.log("userToken: " + userToken);
    tempToken = "EAAM1cdRWXxwBAPLDs1HyVdoZC8IZB4bKDhSfLx9frob7WLTUNR48X7zZB8FC0QJR0K6MrEyKW4EQPWSE01NpL0LroaqFH0ms4t7SKAc0jsGlIn1QvNjEsIOKRccUcQUXaZAsBxVJtG36FdbgOa7CI9cjElxHMQnSXDI2CyzZBbf32Vz1kKZCA6ZAa3vfcTOSZAxkccc7uRQI5UZCT6z5QpUX9R97QiqLSzBEwNnxYwZByaPAZDZD";
    const options = {
        method: 'GET',
        uri: `https://graph.facebook.com/v2.8/${userId}`,
        qs: {
            access_token: userToken,
            fields: 'name, email'
        }
    };

    request(options).then(fbRes => {
        userData = fbRes;
        //res.send(userData);

        res.cookie("userData", fbRes, { sameSite: "none", secure: "true" });

        console.log("userData parsed: " + JSON.parse(fbRes));
        console.log("fbRes: " + fbRes);
        res.sendFile(path.join(__dirname, 'angular-build', 'index.html'));

    })
    */
    res.sendFile(path.join(__dirname, 'angular-build', 'index.html'));

});

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'angular-build', 'index.html'))
});



function parse_signed_request(signed_request) {
    var encoded_data = signed_request.split('.', 2);
    // decode the data
    var sig = base64url.decode(encoded_data[0]);
    var payload = base64url.decode(encoded_data[1]);
    return payload;
    //var json = base64url.decode(encoded_data[1]);
    //var data2 = JSON.parse(json); // ERROR Occurs Here!
    /*
    var secret = "44ecbebc4af7083a8311cb412e39dbfd";

    // check algorithm - not relevant to error
    if (!data.algorithm || data.algorithm.toUpperCase() != 'HMAC-SHA256') {
        console.error('Unknown algorithm. Expected HMAC-SHA256');
        return null;
    }

    // check sig - not relevant to error
    var expected_sig = crypto.createHmac('sha256', secret).update(encoded_data[1]).digest('base64').replace(/\+/g, '-').replace(/\//g, '_').replace('=', '');
    if (sig !== expected_sig) {
        console.error('Bad signed JSON Signature!');
        return null;
    }
    return data;
    */
};

app.all(() => {
    res.header('Access-Control-Allow-Origin', '*'); // your website
    res.header('Access-Control-Allow-Credentials', 'false');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
});

// Start the app by listening on the default Heroku port
// production
/*app.listen(port, () => {
    console.log("angular server started on port: " + port);
});*/

// local testing

httpsServer.listen(port, () => {
    console.log("https server running at port : " + port);
    console.log("https://localhost:8080");
})

