const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGODB_CONNECTION_STRING);

var db = mongoose.connection;

db.on("connected", () => {
	console.log("Mongo DB bağlantısı başarıyla sağlandı.");
});
db.on("error", () => {
	console.log("Mongo DB bağlantısı kurulamadı.");
});

/* module.exports = db; */
module.exports = mongoose;
