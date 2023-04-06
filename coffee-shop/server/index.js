//console.log("index js e erişildi");
// import db from "./db"

const express = require("express");
const cors = require("cors");

const db = require("./db");
/* require("./db.js"); */
//servisleri route ile çağırma
const coffeesRoute = require("./routes/coffeesRoute");

/* app.use("/".coffeesRoute); */

const app = express();

app.use(express.json());
app.use(cors());
//coffee servisleri
app.use("/api/coffees", coffeesRoute);
const port = 4000;
app.listen(port, () => {
	console.log(`Serverimiz ${port} portunda çalışmaktadır. `);
});
