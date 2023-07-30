var express = require("express");
var consign = require("consign");
var bodyParser = require("body-parser")
//var { body, sanitizeBody } = require("express-validator") -> deprecated

var app = express();
app.set("view engine", "ejs");
app.set("views", "./app/views");

app.use(bodyParser.urlencoded({ extended: true })) //Atualizado na versão atual
//app.use(check()) -> deprecated

consign()
    .include("app/routes")
    .then("config/dbConnection.js")
    .then("app/models")
    .then("app/controllers")
    .into(app);


module.exports = app;