import React, { useState } from 'react';
import { Check, Zap, Shield, Clock, Sparkles, Loader2 } from 'lucide-react';
import { handleEarlyAccessClick } from '../utils';

export default function PricingSection() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const handleWaitlistSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const apiBase = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await fetch(`${apiBase}/api/waitlist/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      const data = await response.json();
      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
        console.error(data.error);
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
    setLoading(false);
  };

  return (
    <section id="pricing" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle, #6b21a8 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[1400px] relative">
        <div className="text-center mb-20">
          <p className="text-purple-600 font-bold text-base uppercase tracking-[0.15em] mb-4">
            SIMPLE PRICING
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Choose Your Path
          </h2>
          <p className="text-xl md:text-2xl lg:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Join the waitlist for free, or skip the line with early access.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10 max-w-5xl mx-auto">
          {/* Waitlist Option */}
          <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 md:p-10 hover:shadow-2xl transition-all duration-300 hover:border-gray-300">
            <div className="text-center mb-8">
              <span className="bg-blue-100 text-blue-700 px-5 py-2 rounded-full inline-block mb-5 font-bold text-base">
                JOIN WAITLIST
              </span>
              <h3 className="text-3xl lg:text-2xl font-extrabold text-gray-900 mb-3">
                Free Waitlist
              </h3>
              <div className="mb-4">
                <span className="text-6xl lg:text-5xl font-extrabold text-gray-900">₹0</span>
              </div>
              <p className="text-lg lg:text-base text-gray-500">
                Get notified when we launch
              </p>
            </div>

            <ul className="space-y-4 mb-10">
              {['Early access notification', 'Launch discount (30% off)', 'Free compliance guide PDF', 'No commitment required'].map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-7 h-7 lg:w-5 lg:h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 lg:w-3 lg:h-3 text-green-600" />
                  </div>
                  <span className="text-lg lg:text-base text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <form onSubmit={handleWaitlistSignup}>
              <input 
                type="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl mb-4 text-lg lg:text-base focus:border-purple-400 focus:outline-none transition-colors"
                disabled={loading}
              />
              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold text-lg lg:text-base flex items-center justify-center hover:bg-gray-800 transition-all cursor-pointer hover:shadow-lg active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? <Loader2 className="w-6 h-6 lg:w-5 lg:h-5 animate-spin" /> : 'Join Free Waitlist'}
              </button>
              {status === 'success' && <p className="text-sm text-green-500 mt-3 text-center font-bold">Successfully joined the waitlist!</p>}
              {status === 'error' && <p className="text-sm text-red-500 mt-3 text-center font-bold">Failed to join. Please try again.</p>}
              <p className="text-sm text-gray-400 mt-3 text-center">
                No spam. Unsubscribe anytime.
              </p>
            </form>

            <div className="mt-6 text-center">
              <span className="text-base text-gray-500">
                <strong className="text-gray-800">500+</strong> founders already joined
              </span>
            </div>
          </div>

          {/* Early Access Option */}
          <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 border-2 border-purple-500 rounded-3xl p-8 md:p-10 hover:shadow-2xl transition-all duration-300 relative overflow-hidden hover:scale-[1.01]">
            {/* Glow effects */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/20 rounded-full filter blur-[80px]"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/20 rounded-full filter blur-[60px]"></div>

            {/* Popular Badge */}
            <div className="absolute top-5 right-5 bg-gradient-to-r from-yellow-300 to-orange-400 text-purple-900 px-4 py-1.5 rounded-full text-sm font-extrabold flex items-center gap-1.5 shadow-lg">
              🔥 POPULAR
            </div>

            <div className="text-center mb-8 relative">
              <span className="bg-white/15 backdrop-blur text-white px-5 py-2 rounded-full inline-block mb-5 font-bold text-base border border-white/20">
                EARLY ACCESS
              </span>
              <h3 className="text-3xl lg:text-2xl font-extrabold text-white mb-3">
                Skip the Line
              </h3>
              <div className="mb-3">
                <span className="text-6xl lg:text-5xl font-extrabold text-white">₹249</span>
                <span className="text-xl lg:text-lg text-purple-200 ml-1">/month</span>
              </div>
              <p className="text-purple-300 line-through text-lg lg:text-base mb-3">
                ₹499/month
              </p>
              <span className="inline-block bg-gradient-to-r from-green-400 to-emerald-400 text-green-900 px-5 py-1.5 rounded-full text-base font-extrabold shadow-lg">
                SAVE 50% FOREVER
              </span>
            </div>

            <ul className="space-y-4 mb-10 relative">
              {[
                { text: 'Instant access (no waiting)', bold: true },
                { text: 'All 3 features unlocked immediately' },
                { text: 'Lock in ₹249/mo forever', bold: true },
                { text: 'Priority email support' },
                { text: 'All future features included' },
                { text: '7-day money-back guarantee' },
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-7 h-7 lg:w-5 lg:h-5 bg-green-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 lg:w-3 lg:h-3 text-green-300" />
                  </div>
                  <span className={`text-lg lg:text-base text-white ${feature.bold ? 'font-bold' : ''}`}>
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>

            <button 
              onClick={handleEarlyAccessClick}
              className="w-full bg-white text-purple-700 py-4.5 lg:py-4 rounded-xl font-bold text-xl lg:text-lg hover:bg-purple-50 transition-all flex items-center justify-center gap-2.5 cursor-pointer shadow-xl hover:shadow-2xl relative active:scale-[0.98]"
            >
              <Zap className="w-6 h-6 lg:w-5 lg:h-5" />
              Get Early Access Now
            </button>

            <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10 relative">
              <p className="text-white text-center text-base font-medium">
                <strong>⏰ Limited Offer:</strong> Price goes to ₹499/mo after first 1,000 users
              </p>
              <p className="text-center mt-2 text-purple-200 text-sm">
                <strong className="text-white text-base">347 spots</strong> left
              </p>
            </div>
          </div>
        </div>

        {/* Guarantee */}
        <div className="mt-20 max-w-3xl mx-auto text-center">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-200 rounded-3xl p-10 md:p-12 lg:p-10">
            <div className="w-16 h-16 lg:w-12 lg:h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-200">
              <Shield className="w-8 h-8 lg:w-6 lg:h-6 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-extrabold text-gray-900 mb-4">
              100% Happiness Guarantee
            </h3>
            <p className="text-lg md:text-xl lg:text-lg text-gray-600 leading-relaxed">
              Try ComplianceCalendar risk-free for 7 days. If you're not saving 
              time and avoiding penalties, we'll refund every rupee. No questions asked.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
