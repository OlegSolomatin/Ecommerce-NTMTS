import {model, models, Schema} from "mongoose";

const orderSchema = new Schema({
    products : Object,
    name: String,
    email: String,
    address: String,
    postCode: String,
    paid: {type:Number,defaultValue:0},
}, {timestamps: true});

const Order = models?.Order || model('Order', orderSchema);

export default Order;