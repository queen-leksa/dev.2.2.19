// const express = require("express");
// const router = express.Router();

const router = require("express").Router();

router.get("/name", (req, res) => {
    if (req.query.name) {
        res.send(`<h2>Hello, ${req.query.name}!</h2>`);
    } else {
        res.send(`<h2>Hello, guest...</h2>`);
    }
});

router.get("/secret", (req,res) => {
    res.send("My secret page");
})

module.exports = router;