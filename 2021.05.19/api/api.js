const router = require("express").Router();
const connect = require("./db");

router.get("/", (req, res) => {
    let client = connect();
    client.connect(err => {
        if (err) {
            throw new Error(err)
            client.close();
        } else {
            console.log("Connected to DataBase");
            client.close();
        }
    })
    res.send("database");
});

module.exports = router;
