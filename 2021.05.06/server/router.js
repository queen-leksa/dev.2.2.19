// const express = require("express");
// const router = express.Router();

const router = require("express").Router();
let rand = Math.ceil(Math.random() * 10);

router.get("/name", (req, res) => {
    if (req.query.name) {
        res.send(`<h2>Hello, ${req.query.name}!</h2>`);
    } else {
        res.send(`<h2>Hello, guest...</h2>`);
    }
});

router.get("/secret", (req,res) => {
    res.send("My secret page");
});

router.post("/guess-number", (req, res) => {
    if (+req.body.answer === rand) {
        res.send("Правильно! Вы угадали число " + rand);
    } else if (Math.abs(+req.body.answer - rand) < 5) {
        res.send("Горячо!")
    } else {
        res.send("Холодно!");
    }
});

module.exports = router;