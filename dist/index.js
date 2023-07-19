"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
//Configuration of the .env file
dotenv_1.default.config();
//Creating Express APP
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
// Defining first route of the APP
app.get('/', (req, res) => {
    //Sending Hello World
    res.send("Welcome to the API RESTFUL Express + Ts + Nodemon + Jest + Swagger + Mongoose");
});
app.get('/hello', (req, res) => {
    //Sending Hello World
    res.send("Welcome to GET Route: Hello!");
});
//Executing the APP
app.listen(port, () => {
    console.log("EXPRESS listening at " + port);
});
//# sourceMappingURL=index.js.map