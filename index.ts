import express, { Express, Request, Response } from "express";
import dotenv from 'dotenv';


//Configuration of the .env file
dotenv.config();

//Creating Express APP
const app = express();
const port = process.env.PORT || 8000;

// Defining first route of the APP
app.get('/', (req, res) => {
    //Sending Hello World
    res.send("Welcome to the API RESTFUL Express + Ts + Nodemon + Jest + Swagger + Mongoose");
});

// Defining first route of the APP
app.get('/hello', (req, res) => {
    //Sending Hello World
    res.send("Welcome to GET Route: Hello!");
});


//Executing the APP

app.listen(port, () => {
    console.log("EXPRESS listening at "+port);
});