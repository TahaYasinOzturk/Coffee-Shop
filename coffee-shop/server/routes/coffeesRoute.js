const express = require("express");
const coffeeModel = require("../models/coffeeModel");
const router = express.Router();

router.get("/getCoffees", async (req, res) => {
	try {
		const coffees = await coffeeModel.find({});
		res.send(coffees);
	} catch (error) {
		console.log(error);
	}
});

module.exports = router;
