// The server must flatten the JSON hierarchy, mapping each item/object in the
//JSON to a single line of CSV report (see included sample output), where the keys of the
//JSON objects will be the columns of the CSV report.
// You may assume the JSON data has a regular structure and hierarchy
// (see included sample file). In other words, all sibling records at a
//particular level of the hierarchy will have the same set of properties,
// but child objects might not contain the same properties. In all cases,
//every property you encounter must be present in the final CSV output.
// You may also assume that child records in the JSON will always be in a property called `children`.

var express = require("express");
var process = require("./ProcessData.js");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + "/client"));
app.use(express.urlencoded());
var fs = require("fs");

var PORT = 3000;

app.get("/", function(req, res) {
    res.status(200).send("Helloccc world");
});

app.post("/", function(req, res) {
    // console.log(typeof req.body.json_text);

    var jsonObject = JSON.parse(req.body.json_text);
    // res.render("/");
    // res.render("/");
    var data = process.getAttributes(jsonObject);
    // fs.writeFileSync(".samples/csvreport.csv", data);
    // file = __dirname
    fs.writeFile("./samples/csv_report.csv", data, err => {
        // console.log(__dirname);
        // res.download(__dirname + "/samples/csv_report.csv");
        const file = `${__dirname}/samples/csv_report.csv`;
        res.download("./samples/csv_report.csv"); // Set disposition and send it.
    });

    res.status(200);
    // res.send(data);
    res.end();
});

app.listen(PORT, function() {
    console.log("Server is running on PORT:", PORT);
});