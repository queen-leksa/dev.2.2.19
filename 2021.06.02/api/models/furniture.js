const db = require("../db_goose");

const FurnitureSchema = new db.Schema({
    name: String, // Кровать / кресло / стол
    color: String,
    rating: {type: Number, default: 0}
});

const Furniture = db.model("furnitures", FurnitureSchema);

module.exports = Furniture;