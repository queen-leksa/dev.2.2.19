function connectDB() {
    const MongoClient = require("mongodb").MongoClient;
    const user = "Vasya";
    const pwd = "Qwerty123";
    const uri = `mongodb+srv://${user}:${pwd}@cluster0.peuzq.mongodb.net/messenger?retryWrites=true&w=majority`;
    return new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

module.exports = connectDB;


/*
    CRUD    ===     REST API
    Create  =>  Post
    Read    =>  Get
    Update  =>  Put
    Delete  =>  Delete
*/