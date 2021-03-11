const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
  {
    itemTitle: { type: String, require: true },
    image: { type: String },
    description: { type: String, require: true },
    price: { type: Number, require: true },
    state: { type: String },
    sellerId: { type: String },
  },
  { collection: "Item" }
);

const Item = mongoose.model("Item", itemSchema);

const sellerSchema = new mongoose.Schema({
  userName: { type: String, require: true, unique: true },
  name: { type: String, require: true },
  cotactInfo: { type: String, require: true },
  password:{type:String},
  phoneNumber:{type:Number}
});




const Seller = mongoose.model("Seller", sellerSchema);

module.exports = { Seller, Item };
