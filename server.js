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
const nodemailer = require("nodemailer");
var userData;


const fs = require('fs');
const privateKey = fs.readFileSync('ssl/server.key', 'utf8');
const certificate = fs.readFileSync('ssl/server.crt', 'utf8');

const credentials = { key: privateKey, cert: certificate };

const https = require("https");
const httpsServer = https.createServer(credentials, app);
const request = require('request-promise');

const sendMail = (user, callback) => {
    console.log("in sendMail function");
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'lmsfiustudent@gmail.com', 
            pass: 'lms@student@fiu' 
        }
    });

    const mailOptions = {
        from: `"FIU LMS", "no-reply-fiu-lms@fiu.edu"`,
        to: `<jwats057@fiu.edu>`,
        subject: "LMS TEST",
        html: "<h1>And here is the place for HTML</h1>"
    };
    transporter.sendMail(mailOptions, callback);

}




app.use(express.static(__dirname + '/angular-build'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/userdata', function (req, res) {
    res.send(req.cookies.userData);
});

app.post("/sendmail", (req, res) => {
    console.log("server.js request came");
    let user = req.body;
    sendMail(user, (err, info) => {
        if (err) {
            console.log(err);
            res.status(400);
            res.send({ error: "Failed to send email" });
        } else {
            console.log("Email has been sent");
            res.send(info);
        }
    });
});

app.post('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'angular-build', 'index.html'));

});

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'angular-build', 'index.html'))
});

app.all(() => {
    res.header('Access-Control-Allow-Origin', '*'); // your website
    res.header('Access-Control-Allow-Credentials', 'false');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
});

// Start the app by listening on the default Heroku port
// production
/*
app.listen(port, () => {
    console.log("angular server started on port: " + port);
});
*/
// local testing

httpsServer.listen(port, () => {
    console.log("https server running at port : " + port);
    console.log("https://localhost:8080");
})

