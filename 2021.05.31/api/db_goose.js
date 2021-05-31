const db = require("mongoose");

const user = "Vasya";
const pwd = "Qwerty123";
const uri = `mongodb+srv://${user}:${pwd}@cluster0.peuzq.mongodb.net/messenger?retryWrites=true&w=majority`;

db.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = db;