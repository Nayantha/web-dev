//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extend: true}));
app.use(express.static("public"));

let items = [];
let workItems = [];

app.get("/", function (req, res) {
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
    };
    let today = new Date();
    let date = today.toLocaleDateString("en-US", options);
    res.render("list", {listTitle : date, newListItems: items});
});

app.post("/", function (req, res) {
    let item = req.body.newItem;
        if (req.body.list === "Work"){
            if (item !== "") {
                workItems.push(item);
            }
            res.redirect("/work");
        } else {
            if (item !== "") {
        items.push(item);
            }
        res.redirect("/");
        }
})

app.get("/work", function (req, res) {
    res.render("list", {listTitle : "Work List", newListItems: workItems});
})

app.post("/work", function (req, res) {
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
})

app.get("/about", function (req, res) {
    res.render("about");
})

app.listen(3000, function () {
    console.log("Server Started at port 3000");
});
