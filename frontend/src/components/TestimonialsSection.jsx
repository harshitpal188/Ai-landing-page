import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Finally stopped worrying about missing GST deadlines. The email reminders are a lifesaver. Worth every rupee.",
      name: "Rajesh Kumar",
      business: "Tech Startup, HSR Layout",
      initials: "RK",
      gradient: "from-purple-400 to-pink-400",
    },
    {
      quote: "The compliance mapper showed me 3 obligations I didn't even know I had. Could've saved me ₹50k in penalties.",
      name: "Priya Sharma",
      business: "SaaS Founder, Koramangala",
      initials: "PS",
      gradient: "from-blue-400 to-indigo-400",
    },
    {
      quote: "Found a ₹15L government scheme I had no idea existed. ComplianceCalendar paid for itself 100x over.",
      name: "Arjun Mehta",
      business: "Agency Owner, Whitefield",
      initials: "AM",
      gradient: "from-amber-400 to-orange-400",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-100 rounded-full filter blur-[100px] opacity-50"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-100 rounded-full filter blur-[100px] opacity-50"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[1400px] relative">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Loved by Founders <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Like You</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-500 leading-relaxed">
            Join 500+ tech startups staying compliant
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="group bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative">
              {/* Quote icon */}
              <div className="absolute -top-4 right-8 w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center rotate-12 group-hover:rotate-0 transition-transform">
                <Quote className="w-5 h-5 text-purple-500" />
              </div>

              <div className="flex gap-1 mb-6">
                {[1,2,3,4,5].map(s => (
                  <Star key={s} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-bold text-lg text-gray-900">{testimonial.name}</p>
                  <p className="text-base text-gray-500">{testimonial.business}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
