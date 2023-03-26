//console.log("index js e erişildi");
// import db from "./db"

const express = require("express");
const cors = require("cors");

/* require("./db.js"); */
const coffeesRoute = require("./routes/coffeesRoute");
//servisleri route ile çağırma
//coffee servisleri

/* app.use("/".coffeesRoute); */

const app = express();

const db = require("./db");

app.use(express.json());
app.use(cors());

app.use("/api/coffees", coffeesRoute);
const port = 4000;
app.listen(port, () => {
	console.log(`Serverimiz ${port} portunda çalışmaktadır. `);
});
