const express = require("express");
const app = express();
app.get("/", function (req, res) {
    res.send("<h1>Ahoy,Hello There!</h1>");
});
app.get("/about", function (req, res) {
    res.send("<h1>Hi, I'm Nayantha</h1>");
});
app.listen(3000, function () {
    console.log("Server Started at port 3000");
});
