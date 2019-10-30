var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var database = require("./helper/database.js");
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(express.urlencoded());

var PORT = 3000;

app.get("/s", function(req, res) {
    console.log("GET");
    database.save(user);
    res.status(200).send("Helloccc world");
});

app.post("/", (req, res) => {});

app.listen(PORT, function() {
    console.log("Server is running on PORT:", PORT);
});

user = {
    name: "userData.name",
    email: "userData.email",
    password: "userData.password",
    line1: "userData.line1",
    line2: "userData.line2",
    city: "userData.city",
    state: "userData.state",
    zipCode: 11,
    creditCard: "userData.creditCard",
    expiryData: " userData.expiryData",
    CVV: 444,
    billingZipCode: 88
};