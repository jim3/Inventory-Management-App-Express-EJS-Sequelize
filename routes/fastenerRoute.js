const express = require("express");
const router = express.Router();
const db = require("../models/fastenerModel");

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// This replaces the app.get() w/ `res.send(index.html)`
router.get("/", (req, res) => {
    res.render("index");
});

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

router.post("/", (req, res) => {
    // product will be an object containing the product type and its value
    // for example, if nuttype is selected, product will be { nuttype: "hex" }
    const { partname, quantity, price, ...product } = req.body;

    console.log("product: => ", product); // { nuttype: 'hex' } | `product.nuttype === 'hex'`

    // you can access the product type and value like this:
    const productType = Object.keys(product)[0];
    console.log("type: ", productType); // screw/nut/washer/type

    const productValue = product[productType]; // like `product.nuttype`

    // this is the object that will be sent to the database
    const responseObj = {
        partName: partname,
        partType: productValue,
        quantity,
        price,
    };

    // send the object to the sqlite3 database via Sequelize ORM
    db.Parts.create(responseObj);
    // res.json(responseObj);
    
    // render back to the index page
    res.render("index", {
        partName: partname,
        partType: productValue,
        quantity,
        price,
    });
});

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

module.exports = router;
