//console.log("index js e erişildi");
// import db from "./db"

const express = require("express");
const cors = require("cors");

const db = require("./db");
/* require("./db.js"); */
//servisleri route ile çağırma
const coffeesRoute = require("./routes/coffeesRoute");
const usersRoute = require("./routes/usersRoute");
const ordersRoute = require("./routes/OrdersRoute");

/* app.use("/".coffeesRoute); */

const app = express();

app.use(express.json());
app.use(cors());
//coffee servisleri
app.use("/api/coffees", coffeesRoute);

app.use("/api/users", usersRoute);

app.use("/api/orders", ordersRoute);

const port = 4000;
app.listen(port, () => {
	console.log(`Serverimiz ${port} portunda çalışmaktadır. `);
});
