import mongoose from 'mongoose';

const waitlistSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  signupDate: { type: Date, default: Date.now },
  source: { type: String, default: 'landing_page' },
  convertedToUser: { type: Boolean, default: false },
  conversionDate: Date
});

export const Waitlist = mongoose.model('Waitlist', waitlistSchema);
