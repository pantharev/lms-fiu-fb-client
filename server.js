const path = require("path");
const express = require("express");
const cors = require('cors');
const app = express();
app.use(express.static(__dirname + '/angular-build'));
app.use(cors());
app.get('/*', function(req,res){
res.sendFile(path.join(__dirname, 'angular-build', 'index.html'))
});
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080, () => {
    console.log("angular server started on port: " + process.env.PORT || 8080);
});