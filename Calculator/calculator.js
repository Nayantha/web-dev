const express = require("express")
const bodyParser = require("body-parser")
const app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/" +"index.html")
})
app.post("/", function (req, res) {
    let ans;
    try {
        ans = Number(req.body.num1) + Number(req.body.num2)
    }
    catch (e) {
        res.send("Your input wrong.")
    }
    res.send("Answer is: " + ans)
})
app.get("/bmiCalculator", function (req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html")
})
app.post("/bmiCalculator", function (req, res) {
    let bmi = parseFloat(req.body.weight )/ (parseFloat(req.body.height) * parseFloat(req.body.height))
    res.send("BMI: " + bmi)
})
app.listen(3000, function () {
    console.log("Server Started at port 3000")
})
