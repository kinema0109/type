import mongoose, { Schema, Document } from 'mongoose';
const SubscriptionModel = new Schema({
    endpoint: { type: String, unique: true, required: true },
    expirationTime: { type: Number, required: false },
    keys: {
      auth: String,
      p256dh: String,
    },
  });
  