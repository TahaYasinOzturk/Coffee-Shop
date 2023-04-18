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

router.post("/deleteCoffee", async (req, res) => {
	const { coffeeid } = req.body;
	try {
		await coffeeModel.findByIdAndDelete({ _id: coffeeid });

		res.send("Menü silme başarılı");
	} catch (error) {
		res.status(400).json({ message: error });
	}
});

router.post("/getCoffeeById", async (req, res) => {
	const { coffeeid } = req.body;
	try {
		const coffee = await coffeeModel.findById({ _id: coffeeid });

		res.send(coffee);
	} catch (error) {
		res.status(400).json({ message: error });
	}
});

module.exports = router;
