//console.log("index js e erişildi");
// import db from "./db"

require("./db.js");

const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const port = 6000;
app.listen(port, () => {
	console.log(`Serverimiz ${port} portunda çalışmaktadır. `);
});

/* const cors = require("cors"); */
