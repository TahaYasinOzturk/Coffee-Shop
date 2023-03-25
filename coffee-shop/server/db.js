const mongoose = require("mongoose");

mongoose.connect(
	"mongodb+srv://admin:1234@redux-trial-cluster.rrczll6.mongodb.net/coffe-db?retryWrites=true&w=majority"
);

var db = mongoose.connection;

db.on("connected", () => {
	console.log("Mongo DB bağlantısı başarıyla sağlandı.");
});
db.on("error", () => {
	console.log("Mongo DB bağlantısı kurulamadı.");
});

module.exports = db;
/* module.exports = mongoose; */
