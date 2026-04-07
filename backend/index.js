import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import nodemailer from 'nodemailer';
import Razorpay from 'razorpay';
import bcrypt from 'bcrypt';
import crypto from 'crypto';
import dotenv from 'dotenv';
import { Waitlist } from './models/Waitlist.js';
// import { User } from './models/User.js';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// --- EMAIL TEMPLATE ---
async function sendWaitlistWelcomeEmail(email) {
  const transporter = nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  await transporter.sendMail({
    from: 'ComplianceCalendar <hello@compliancecalendar.in>',
    to: email,
    subject: '✅ You\'re on the ComplianceCalendar waitlist!',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2>Welcome to ComplianceCalendar! 🎉</h2>
        
        <p>Thanks for joining our waitlist. You're one of the first 500 founders who'll get early access to India's smartest compliance calendar.</p>
        
        <h3>What happens next?</h3>
        <ul>
          <li>We launch in 4-6 weeks</li>
          <li>You'll get an email the moment we're live</li>
          <li>You'll get 30% off as a waitlist member</li>
        </ul>
        
        <p><strong>Want to skip the line?</strong> Get <a href="${process.env.CLIENT_URL}/#pricing">early access now</a> for 50% off (₹249/month instead of ₹499).</p>
        
        <p>See you soon!<br>The ComplianceCalendar Team</p>
      </div>
    `
  });
}

// --- WAITLIST ROUTE ---
app.post('/api/waitlist/signup', async (req, res) => {
  try {
    const { email } = req.body;

    // Validation
    if (!email || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      return res.status(400).json({ error: 'Valid email required' });
    }

    // Check if already on waitlist
    const existing = await Waitlist.findOne({ email });
    if (existing) {
      return res.json({ 
        success: true, 
        message: 'You\'re already on the waitlist!' 
      });
    }

    // Add to waitlist
    const waitlistEntry = await Waitlist.create({
      email,
      signupDate: new Date(),
      source: 'landing_page'
    });

    // Send welcome email
    await sendWaitlistWelcomeEmail(email);

    res.status(201).json({ 
      success: true, 
      message: 'Successfully joined the waitlist!' 
    });

  } catch (error) {
    console.error('Waitlist signup error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// --- EARLY ACCESS ROUTE ---
app.post('/api/subscription/early-access', async (req, res) => {
  try {
    const { email, name } = req.body;

    // Check if placeholders are still used
    if (!process.env.RAZORPAY_KEY_ID || process.env.RAZORPAY_KEY_ID === 'rzp_test_placeholder_key_id') {
      console.warn("Please configure your actual Razorpay keys in backend/.env file.");
      return res.status(400).json({ error: 'Razorpay keys not configured. Please add them in backend/.env' });
    }

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET
    });

    // Instead of subscription, we create a standard Order
    // This avoids the need to manually create Plans in the Razorpay dashboard
    const order = await razorpay.orders.create({
      amount: 24900, // ₹249.00
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
      notes: {
        email: email,
        name: name,
        plan: 'early_bird'
      }
    });

    res.json({ 
      orderId: order.id,
      amount: 24900,
      keyId: process.env.RAZORPAY_KEY_ID
    });

  } catch (error) {
    console.error('Early access payment error:', error);
    res.status(500).json({ error: 'Payment initialization failed. Please check backend logs.' });
  }
});

app.post('/api/subscription/verify-payment', async (req, res) => {
  try {
    const { 
      razorpay_payment_id, 
      razorpay_order_id, 
      razorpay_signature,
      email,
      name 
    } = req.body;

    // Verify signature
    const generated_signature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
      .update(razorpay_order_id + '|' + razorpay_payment_id)
      .digest('hex');

    if (generated_signature !== razorpay_signature) {
      return res.status(400).json({ error: 'Invalid payment signature' });
    }

    // Create user account with early bird pricing
    const password = crypto.randomBytes(16).toString('hex');
    const hashedPassword = await bcrypt.hash(password, 10);


    res.json({ 
      success: true,
      message: 'Payment successful! Check your email for login details.' 
    });

  } catch (error) {
    console.error('Payment verification error:', error);
    res.status(500).json({ error: 'Verification failed' });
  }
});

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/compliancecalendar')
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.error(err));
