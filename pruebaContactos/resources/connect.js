var express = require("express");
var mysql = require("mysql");
var app = express();
var cors = require("cors");

app.use(express.json());
app.use(cors());

var conexion = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "pruebaContactos",
});

conexion.connect(function (error) {
    if (error) {
      throw error;
    } else {
      console.log("Conexión exitosa");
    }
  });

  const puerto = process.env.PUERTO || 3000;

app.listen(puerto, function () {
  console.log("Servidor funcionando en puerto: " + puerto);
});

app.post("/api/cliente", (req, res) => {
	let data = {
    	nomcli: req.body.NOMCLI,
    	apecli: req.body.APECLI,
    	celcli: req.body.CELCLI,
    	emacli: req.body.EMACLI,
    	mencli: req.body.MENCLI
	};
	let sql = "INSERT INTO cliente SET ?";
	conexion.query(sql, data, function (error, results) {
  	if (error) {
    	throw error;
  	} else {
    	console.log(data);
    	res.send(data);
  	}
	});
  });