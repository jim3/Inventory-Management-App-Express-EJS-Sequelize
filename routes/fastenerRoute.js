const express = require("express");
const router = express.Router();
const db = require("../models/fastenerModel");

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= //

router.get("/", (req, res) => {
    res.render("index");
});

router.post("/", (req, res) => {
    console.log("request body log ----> ", req.body);
    const { partname, quantity, price, ...product } = req.body;
    const productType = Object.keys(product)[0];
    const productValue = product[productType];

    const responseObj = {
        partName: partname,
        partType: productValue,
        quantity,
        price,
    };

    db.Parts.create(responseObj);

    res.render("index", {
        ...responseObj,
    });
});

module.exports = router;

