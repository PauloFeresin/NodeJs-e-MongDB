var mysql = require("mysql");

var connMySQL = function () {
    return mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "1234",
        database: "portal_noticias",
        insecureAuth: true
    });
};


module.exports = function () {
    console.log("Autoload carregou a conexão com o banco")
    return connMySQL;
};