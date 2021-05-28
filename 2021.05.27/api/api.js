const router = require("express").Router();
const Furn = require("./models/furniture");
const parser = require("body-parser").json();

router.get("/", async (req, res) => {
    const data = await Furn.find({});
    res.json(data);
});

/*
* function foo() {
*   console.log(req.body);
* }
* router.post("path", foo(), (req,res) => {...})
* */

router.post("/", parser, async (req, res) => {
    console.log(req.body);
    await Furn(req.body).save();
    res.json({"msg": "ok"});
});
router.get("/", async (req, res) => {
    let furn = await Furn.find({});
    res.json(furn);
});

// const connect = require("./db");

// router.get("/", (req, res) => {
//     let client = connect();
//     client.connect(err => {
//         if (err) {
//             throw new Error(err)
//             client.close();
//         } else {
//             console.log("Connected to DataBase");
//             client.close();
//         }
//     })
//     res.send("database");
// });




module.exports = router;
