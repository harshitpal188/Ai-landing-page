import React from 'react';
import { Zap, ArrowRight, Sparkles } from 'lucide-react';
import { scrollToWaitlist, handleEarlyAccessClick } from '../utils';

export default function FinalCTA() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-[#1a0533] via-[#2d1b69] to-[#0f172a] text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-500/15 rounded-full filter blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-pink-500/10 rounded-full filter blur-[100px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full filter blur-[150px]"></div>
      </div>
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="relative z-10 text-center container mx-auto px-6 md:px-12 lg:px-20 max-w-[1400px]">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-full mb-8 border border-white/10">
          <Sparkles className="w-5 h-5 text-yellow-300" />
          <span className="text-base font-medium text-purple-200">Join 500+ founders already on board</span>
        </div>

        <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight tracking-tight">
          Stop Flying Blind <br className="hidden md:block" />
          on <span className="gradient-text">Compliance</span>
        </h2>
        <p className="text-xl md:text-2xl text-purple-200 mb-14 max-w-3xl mx-auto leading-relaxed">
          Join 500+ tech founders who finally know exactly what they need to do to stay compliant.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center mb-14">
          <button 
            onClick={scrollToWaitlist}
            className="group bg-white text-purple-700 px-10 py-5 rounded-xl font-bold text-xl hover:bg-purple-50 transition-all shadow-xl shadow-purple-900/30 flex items-center justify-center gap-2.5 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
          >
            Join Free Waitlist
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={handleEarlyAccessClick}
            className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-10 py-5 rounded-xl font-bold text-xl hover:from-yellow-300 hover:to-orange-300 transition-all flex items-center justify-center gap-2.5 cursor-pointer shadow-xl hover:scale-[1.02] active:scale-[0.98]"
          >
            <Zap className="w-6 h-6" />
            Get Early Access (50% OFF)
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-purple-300 text-lg">
          <span className="flex items-center gap-2">✅ 7-day money-back guarantee</span>
          <span className="hidden sm:block text-purple-600">•</span>
          <span className="flex items-center gap-2">✅ No credit card for waitlist</span>
          <span className="hidden sm:block text-purple-600">•</span>
          <span className="flex items-center gap-2">✅ Cancel anytime</span>
        </div>
      </div>
    </section>
  );
}
