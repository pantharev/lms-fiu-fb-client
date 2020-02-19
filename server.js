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

app.post('/', function (req, res) {
    res.send("Post request sent to frontend homepage");
});