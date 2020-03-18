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

const cookieParser = require('cookie-parser');
var userData;


//const https = require("https");
const request = require('request-promise');

app.use(express.static(__dirname + '/angular-build'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());


app.get('/userdata', function (req, res) {
    res.send(req.cookies);
});

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'angular-build', 'index.html'))
});

app.post('/', function (req, res) {
    // Get the stringified JSON object from the signed_request
    var userDataTemp = parse_signed_request(req.body.signed_request);
    //Store the ID and the token
    //localStorage.setItem('userId', JSON.parse(userData).user_id);
    //localStorage.setItem('userToken', JSON.parse(userData).oauth_token);
    userId = JSON.parse(userDataTemp).user_id;
    userToken = JSON.parse(userDataTemp).oauth_token;
    tempToken = "EAAM1cdRWXxwBAJdzVPQpuJxZBX29CZAplrckauoyLqKi5nfWEy4GDR8sgjZBLFXfYSFfaySSujqamZA0F3GcZB9khDAfexyUkSTupoTZAFOQTSjHvvjlpfwgMh6EJ8Q9ok2SefpDzHFOgqeQZC19PtQhIgWptc2efDLH9TCet06mmbneLbwb5NsHecgWzK9xJEAdO1t2JSJCiWQpC1cg21qOFrJK1txR4RhVZCgmCuRImgZDZD";
    const options = {
        method: 'GET',
        uri: `https://graph.facebook.com/v2.8/${userId}`,
        qs: {
          access_token: tempToken,
          fields: 'name, email'
        }
      };
    
    request(options).then(fbRes => {
        userData = fbRes;
        //res.send(userData);
        res.cookie("userData",JSON.parse(userData));
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

