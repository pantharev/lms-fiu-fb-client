const path = require("path");
const express = require("express");
const cors = require('cors');
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 8080;
const _ = require("lodash");
const base64url = require("base64-url");

var LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./node_localStorage');

const cookie = require("ngx-cookie-service");
var userData;


//const https = require("https");
const request = require('request-promise');

app.use(express.static(__dirname + '/angular-build'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/*
app.get('/userdata', function (req, res) {
    if (_.isEmpty(userData)){
        res.send("no user data to receive");
    }
    else{
        res.json(userData);
    }
});
*/
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'angular-build', 'index.html'))
});

app.post('/', function (req, res) {
    // Get the stringified JSON object from the signed_request
    userData = parse_signed_request(req.body.signed_request);
    //Store the ID and the token
    //localStorage.setItem('userId', JSON.parse(userData).user_id);
    //localStorage.setItem('userToken', JSON.parse(userData).oauth_token);
    userId = JSON.parse(userData).user_id;
    userToken = JSON.parse(userData).oauth_token;
    tempToken = "EAAM1cdRWXxwBAHl9IG7UVJqm9xzhCburqdZBZB72uDWqfN2ror0OAL3vKYCqiQsaRykSE8nfeY8nwBQhWl6Myd4ZARmC5sNcVmJP2RjwmpeqkWAIvka8ToOdlea4NDXJoRCFQVw5B8mLJLnnhK3orvFF6vod0aXHKaVUf4kVBBwaHZBuZCABewkFLRklXUSaZCtwfbbCOGbw9Yhwm37u9iwBP3jsPO8OwSx8AWNHZBJSgZDZD";
    const options = {
        method: 'GET',
        uri: `https://graph.facebook.com/v2.8/${userId}`,
        qs: {
          access_token: tempToken,
          fields: 'name, email'
        }
      };
    
    request(options).then(fbRes => {
        userData = JSON.parse(fbRes);
        //res.send(JSON.parse(fbRes));
        res.sendFile(path.join(__dirname, 'angular-build', 'index.html'));
        
    })   
    //res.sendFile(path.join(__dirname, 'angular-build', 'index.html'));

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
app.listen(port, () => {
    console.log("angular server started on port: " + port);
});

