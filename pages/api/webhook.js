import {initMongoose} from "../../lib/mongoos";
import Order from "../../models/order";
import {buffer} from 'micro';
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
/*acct_1M2vAbFS2Y2qoQlE*/
//localhost:3000/api/webhook
export default async function handler (req, res) {
    await initMongoose();
    const singingSecret = 'whsec_372b7dcffe47949bcc00278e366797c7bcb35a0bee114e9192a7db5b3368c7d0'
    const payload = await buffer(req);
    const signature = req.headers['stripe-signature'];
    const event = stripe.webhooks.constructEvent(payload, signature, singingSecret);

    if (event?.type === 'checkout.session.completed') {
        const metadata = event.data?.object?.metadata;
        const paymentStatus = event.data?.object?.payment_status;
        if (metadata?.orderId && paymentStatus === 'paid') {
            await Order.findByIdAndUpdate(metadata.orderId, {paid:1});
        }
    }

    res.json('ok');
}

export const config = {
    api: {
        bodyParser: false,
    }
};