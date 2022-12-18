export interface ISubscription extends Document {
    endpoint: string;
    expirationTime?: number;
    keys: {
      auth: string;
      p256dh: string;
    }
  }