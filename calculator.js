const express = require("express");
const bodyParser = require("body-parser");

const app = express();



app.use(bodyParser.urlencoded({extended: true}));
app.get("/",(req, res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.post("/",(req, res)=>{
    
    let num1 =req.body.num1;
    let num2 =req.body.num2;
    let result =num1*num2;

    res.send("The result is" + result);
});




app.get("/bmicalculator",(req, res)=>{
    res.sendFile(__dirname + "/bmiCalculator.html")
})

app.post("/bmicalculator",(req, res)=>{
    
    let weight =parseFloat(req.body.weight);
    let height =parseFloat(req.body.height);
    let bmi = weight / (height *height);

    res.send("Your bmi is" + bmi);
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000.")
})