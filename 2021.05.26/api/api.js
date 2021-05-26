const router = require("express").Router();
const Furn = require("./models/furniture");

router.get("/", async (req, res) => {
    const data = await Furn.find({});
    res.json(data);
});

router.post("/", async (req, res) => {
    console.log(req.body);
    await Furn(req.body).save();
    res.json({"msg": "ok"});
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
