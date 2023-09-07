
const mongoose = require("mongoose");


const vegetableSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    color:  { type: String, required: true },
    img: String,
    readyToEat: Boolean
},{
  timestamps: true,
});

//module need to be capitalized module - name of the Schema
const Vegetable = mongoose.model('Vegtable', vegetableSchema);

module.exports = Vegetable;