var express = require("express");
var path = require("path");


var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var reserve = [
    {
        name: "Roopa Patel",
        phoneNum: "23674986478",
        email: "roopatel@valdosta.edu",
        uniqueID: " "
    },
    {
        name: "Praveen Hariharam",
        phoneNum: "3490989098",
        email: "ranodm",
        uniqueID: " "
    }
];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });

  app.get("/table", function(req, res) {
    res.sendFile(path.join(__dirname, "table.html"));
  });

app.get("/api/reservations", function(req, res) {
    return res.json(reserve);
});

app.post("/api/reservations", function(req, res) {
    var newReservation = req.body;
    reserve.push(newReservation);
    res.json(newReservation);
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});



