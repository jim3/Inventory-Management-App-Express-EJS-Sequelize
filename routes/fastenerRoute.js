const express = require("express");
const router = express.Router();
const db = require("../models/fastenerModel");

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= //

// render forms page
router.get("/", (req, res) => {
    res.render("index");
});

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= //

// gat all parts from inventory
router.get("/parts", async (req, res) => {
    try {
        const parts = await db.Parts.findAll();
        res.json(parts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
});

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= //

// get a part by id from inventory
router.get("/parts/:id", async (req, res) => {
    try {
        const part = await db.Parts.findByPk(req.params.id);
        res.json(part);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
});

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= //

// Create a part in inventory
router.post("/parts", async (req, res) => {
    try {
        const { partname, quantity, price, ...product } = req.body;
        const productType = Object.keys(product)[0];
        const productValue = product[productType];

        const responseObj = {
            partName: partname,
            partType: productValue,
            quantity,
            price,
        };

        // wait for the operation to complete before rendering the template
        await db.Parts.create(responseObj);

        res.render("index", {
            ...responseObj,
        });
    } catch (err) {
        console.error();
        res.status(500).send("Internal Server Error");
    }
});

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= //

// update a part in inventory
router.put("/parts/:id", async (req, res) => {
    try {
        const { partname, quantity, price, ...product } = req.body;
        const productType = Object.keys(product)[0];
        const productValue = product[productType];

        const responseObj = {
            partName: partname,
            partType: productValue,
            quantity,
            price,
        };

        // get part to update
        const part = await db.Parts.findByPk(req.params.id);

        // update part
        await part.update(responseObj);

        res.json(responseObj);
    } catch (err) {
        console.error();
        res.status(500).send("Internal Server Error");
    }
});

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= //

module.exports = router;
