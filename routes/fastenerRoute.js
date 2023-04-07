const express = require("express");
const router = express.Router();
const db = require("../models/fastenerModel");

router.get("/", (req, res) => {
    res.render("index");
});

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= //

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

router.get("/parts/:id", async (req, res) => {
    const part = await db.Parts.findByPk(req.params.id);
    if (!part) {
        return res.status(404).json({ error: "Part not found" });
    }
    res.json(part);
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

        let result = await db.Parts.create(responseObj);

        res.render("index", {
            ...responseObj,
        });
    } catch (err) {
        console.error();
        res.status(500).send("Internal Server Error");
    }
});

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= //

module.exports = router;
