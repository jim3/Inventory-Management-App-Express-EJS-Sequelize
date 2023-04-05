const express = require("express");
const router = express.Router();
const db = require("../models/fastenerModel");
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

router.get("/", (req, res) => {
    res.render("index");
});

router.post("/", (req, res) => {
    const { partname, quantity, price, ...product } = req.body;
    const productType = Object.keys(product)[0];
    const productValue = product[productType]; 
    const responseObj = {
        partName: partname,
        partType: productValue,
        quantity,
        price,
    };
    // send the object to the sqlite3 database via Sequelize ORM
    db.Parts.create(responseObj);

    // render back to the index page
    res.render("index", {
        ...responseObj,
    });
});

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

module.exports = router;
