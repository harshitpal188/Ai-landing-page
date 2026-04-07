import React from 'react';
import { AlertTriangle, TrendingDown, Ban } from 'lucide-react';

export default function ProblemSection() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle, #6b21a8 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[1400px] relative">
        <div className="text-center mb-20">
          <p className="text-purple-600 font-bold text-base uppercase tracking-[0.15em] mb-4">
            THE COMPLIANCE NIGHTMARE
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-4xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Most Tech Founders Are <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Flying Blind</span>
          </h2>
          <p className="text-2xl md:text-3xl lg:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            As a founder, you're building products, not studying tax laws. But missing 
            a single compliance deadline can freeze your bank accounts.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {/* Card 1 */}
          <div className="group bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-red-200 transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 lg:w-12 lg:h-12 bg-gradient-to-br from-red-100 to-red-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <AlertTriangle className="w-8 h-8 lg:w-6 lg:h-6 text-red-500" />
            </div>
            <h3 className="text-2xl lg:text-xl font-bold text-gray-900 mb-4">
              "What Do I Even Need to File?"
            </h3>
            <p className="text-xl lg:text-lg text-gray-600 mb-6 leading-relaxed">
              GST, PF, ESIC, Shops Act, Professional Tax... the list keeps growing. 
              Google gives you 50 different answers. CAs are expensive and don't 
              always proactively tell you everything.
            </p>
            <div className="flex items-center gap-3 p-4 bg-red-50 rounded-xl border border-red-100">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <p className="text-red-700 font-bold text-base">
                73% of startups are non-compliant without knowing it
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-amber-200 transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 lg:w-12 lg:h-12 bg-gradient-to-br from-amber-100 to-amber-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <TrendingDown className="w-8 h-8 lg:w-6 lg:h-6 text-amber-500" />
            </div>
            <h3 className="text-2xl lg:text-xl font-bold text-gray-900 mb-4">
              "₹45,000 Penalty?!"
            </h3>
            <p className="text-xl lg:text-lg text-gray-600 leading-relaxed mb-6">
              "I missed the GST GSTR-3B deadline for our agency. By the time I realized, 
              the penalties wiped out our profit margin for the entire month."
            </p>
            <div className="flex items-center gap-3 p-4 bg-amber-50 rounded-xl border border-amber-100">
              <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse"></div>
              <p className="text-amber-700 font-bold text-base">
                Average penalty: ₹15-50k per missed deadline
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-purple-200 transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 lg:w-12 lg:h-12 bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Ban className="w-8 h-8 lg:w-6 lg:h-6 text-purple-500" />
            </div>
            <h3 className="text-2xl lg:text-xl font-bold text-gray-900 mb-4">
              "I Missed Out on ₹20L?"
            </h3>
            <p className="text-xl lg:text-lg text-gray-600 leading-relaxed mb-6">
              "We spent 40 hours trying to figure out if we needed SOC2 or just ISO 27001. 
              My CA couldn't guide us on tech-specific compliance."
            </p>
            <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-xl border border-purple-100">
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
              <p className="text-purple-300 font-medium text-lg md:text-xl">Average penalties paid per year by startups</p>
            </div>
          </div>
        </div>

        {/* Cost Summary */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#1a0533] to-[#2d1b69] rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
            {/* Glow effects */}
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-red-500/20 rounded-full filter blur-[80px]"></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full filter blur-[80px]"></div>
            
            <h3 className="text-3xl md:text-4xl lg:text-3xl font-extrabold text-white mb-10 relative">
              The Real Cost of Not Knowing
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 relative">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/10">
                <p className="text-4xl md:text-5xl lg:text-4xl font-extrabold text-red-400 mb-2">₹2-5L</p>
                <p className="text-base text-purple-200 font-medium">Annual Waste</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/10">
                <p className="text-4xl md:text-5xl lg:text-4xl font-extrabold text-amber-400 mb-2">15hrs</p>
                <p className="text-base text-purple-200 font-medium">Lost/Month</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/10">
                <p className="text-4xl md:text-5xl lg:text-4xl font-extrabold text-blue-400 mb-2">₹12L</p>
                <p className="text-base text-purple-200 font-medium">Missed Funding</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/10">
                <p className="text-4xl md:text-5xl lg:text-4xl font-extrabold text-pink-400 mb-2">∞</p>
                <p className="text-base text-purple-200 font-medium">Stress</p>
              </div>
            </div>
            <p className="text-xl text-purple-200 font-medium italic relative">
              "You started a tech business to build products, not to become a compliance expert."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
