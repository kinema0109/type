import mongoose, { Schema, Document } from 'mongoose';
import {ISubscription} from './subcription.interface';


const SubscriptionModel = new Schema<ISubscription>({
  endpoint: { type: String, unique: true, required: true },
  expirationTime: { type: Number, required: false },
  keys: {
    auth: String,
    p256dh: String,
  },
});

export default mongoose.model('Subscription', SubscriptionModel);