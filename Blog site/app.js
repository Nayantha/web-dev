//jshint esversion6

const express = require("express");
const bodyParser = require("body-parser");
const _ = require("lodash");
const ejs = require("ejs");
let posts = [];

const homeStartingContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
const aboutContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
const contactContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function (req, res) {
    res.render("home", {startingContent: homeStartingContent, pageTitle: "Home", posts: posts});
});

app.get("/about", function (req, res) {
    res.render("about", {startingContent: aboutContent, pageTitle: "About US"});
});

app.get("/contact", function (req, res) {
    res.render("contact", {startingContent: contactContent, pageTitle: "Contact US"});
});

app.get("/compose", function (req, res) {
    res.render("compose", {pageTitle: "Compose"});
});

app.post("/compose", function (req, res) {
    const post = {
        title: _.capitalize(req.body.postTitle),
        content: _.capitalize(req.body.postContent),
    };
    posts.push(post);
    res.redirect("/");
});

app.get("/posts/:postName", function (req, res) {
    const requiredTitle = _.lowerCase(req.params["postName"]);
    let pagePost = "";
    posts.forEach(function (post) {
        const storedTitle = _.lowerCase(post["title"]);
        if (storedTitle === requiredTitle)
        {
            pagePost = post;
        }
    });
    if (pagePost === ""){
        res.redirect("/");
    } else {
        res.render("post", {pageTitle: pagePost["title"], content: pagePost["content"]});
    }
});

app.listen(3000, function () {
    console.log("Server is running on port 3000.");
})
