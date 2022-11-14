import {model, models, Schema} from "mongoose";

const ProductSchema = new Schema({
    name: String,
    title: String,
    deviceColor: Array,
    size: Array,
    price: Number,
    category: String,
    photo: Object,
    party: String,
    players: String,
    sizeDetails: Array,
    userAge: String,
})

const Product = models?.Product || model('Product', ProductSchema);

export default Product;