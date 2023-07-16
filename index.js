const express = require('express');
const dotenv = require('dotenv');

//Configuration of the .env file
dotenv.config();

//Creating Express APP
const app = express();
const port = process.env.PORT || 8000;

// Defining first route of the APP
app.get('/', (req, res) => {
    //Sending Hello World
    res.send("Welcome API RESTFUL EXPRESS!");
});

//Executing the APP

app.listen(port, () => {
    console.log("EXPRESS listening at "+port);
});