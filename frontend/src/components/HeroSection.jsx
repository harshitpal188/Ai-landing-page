import React from 'react';
import { Sparkles, ArrowRight, Zap, ChevronDown, CheckCircle as CheckIcon, Shield, Clock, IndianRupee } from 'lucide-react';
import { scrollToWaitlist, scrollToEarlyAccess } from '../utils';

export default function HeroSection() {
  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0533] via-[#2d1b69] to-[#0f172a]">
        <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-purple-500/30 rounded-full mix-blend-screen filter blur-[120px] animate-blob"></div>
        <div className="absolute top-10 right-20 w-[400px] h-[400px] bg-pink-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-[600px] h-[600px] bg-indigo-500/20 rounded-full mix-blend-screen filter blur-[140px] animate-blob" style={{ animationDelay: '4s' }}></div>
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      {/* Navigation */}
      <header className="relative z-20 flex justify-between items-center px-6 md:px-12 lg:px-20 py-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-xl flex items-center justify-center text-white text-lg shadow-lg shadow-purple-500/30">
            📅
          </div>
          <span className="text-white text-2xl font-bold tracking-tight">
            ComplianceCalendar
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-10">
          <a href="#features" className="text-purple-200 hover:text-white transition-colors text-lg font-medium">Features</a>
          <a href="#pricing" className="text-purple-200 hover:text-white transition-colors text-lg font-medium">Pricing</a>
          <a href="#faq" className="text-purple-200 hover:text-white transition-colors text-lg font-medium">FAQ</a>
          <button onClick={scrollToEarlyAccess} className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-white/20 transition-all text-base cursor-pointer">
            Get Early Access
          </button>
        </nav>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 px-6 md:px-12 lg:px-20 pt-12 pb-20 md:pt-16 md:pb-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-[1400px] mx-auto">
          {/* Left Column - Text */}
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm text-white px-5 py-2.5 rounded-full mb-8 border border-white/10">
              <Sparkles className="w-5 h-5 text-yellow-300" />
              <span className="text-base font-medium">
                Launching Soon • Join 500+ Founders on Waitlist
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-white leading-[1.1] mb-8 tracking-tight">
              Stop Missing <br/>
              <span className="gradient-text">
                Compliance Deadlines
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-purple-200/90 mb-10 leading-relaxed max-w-xl">
              The smartest compliance calendar for Indian Agencies & Tech Startups. 
              Know exactly what you need to file, from GST and TDS to ISO 27001 
              and SOC2, and discover government schemes you qualify for.
            </p>

            <ul className="space-y-4 mb-12">
              <li className="flex items-start gap-4">
                <CheckIcon className="w-7 h-7 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-xl text-purple-100">
                  <strong className="text-white font-semibold">Never miss a GST, TDS, or ROC deadline</strong> with smart reminders
                </span>
              </li>
              <li className="flex items-start gap-4">
                <CheckIcon className="w-7 h-7 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-xl text-purple-100">
                  <strong className="text-white font-semibold">Know your tech compliance obligations (SOC2, ISO)</strong> in 10 questions
                </span>
              </li>
              <li className="flex items-start gap-4">
                <CheckIcon className="w-7 h-7 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-xl text-purple-100">
                  <strong className="text-white font-semibold">Discover ₹10-50L in Startup India funding</strong> you didn't know existed
                </span>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToWaitlist}
                className="group bg-white text-purple-700 px-9 py-4.5 rounded-xl font-bold text-lg hover:bg-purple-50 transition-all shadow-xl shadow-purple-900/30 flex items-center justify-center gap-2.5 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              >
                Join Free Waitlist
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button 
                onClick={scrollToEarlyAccess}
                className="group border-2 border-white/30 text-white px-9 py-4.5 rounded-xl font-bold text-lg hover:bg-white/10 hover:border-white/50 transition-all flex items-center justify-center gap-2.5 cursor-pointer backdrop-blur-sm"
              >
                <Zap className="w-5 h-5 text-yellow-300" />
                Get Early Access (50% OFF)
              </button>
            </div>

            <div className="mt-10 flex items-center gap-5">
              <div className="flex -space-x-3">
                <div className="w-11 h-11 rounded-full border-2 border-purple-900 bg-gradient-to-br from-purple-300 to-pink-300 shadow-lg"></div>
                <div className="w-11 h-11 rounded-full border-2 border-purple-900 bg-gradient-to-br from-blue-300 to-indigo-300 shadow-lg"></div>
                <div className="w-11 h-11 rounded-full border-2 border-purple-900 bg-gradient-to-br from-green-300 to-emerald-300 shadow-lg"></div>
                <div className="w-11 h-11 rounded-full border-2 border-purple-900 bg-gradient-to-br from-yellow-300 to-orange-300 flex items-center justify-center text-orange-800 text-sm font-bold shadow-lg">
                  +497
                </div>
              </div>
              <p className="text-purple-200 text-lg">
                <strong className="text-white">500+</strong> founders already on the waitlist
              </p>
            </div>
          </div>

          {/* Right Column - Dashboard Visual */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative">
              {/* Main Dashboard Mockup */}
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200/50 mockup-shadow">
                {/* Browser chrome */}
                <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="flex-1 bg-white rounded-md px-3 py-1 text-sm text-gray-400 text-center mx-8">
                    app.compliancecalendar.in
                  </div>
                </div>
                {/* Dashboard content */}
                <div className="p-5 bg-gradient-to-br from-purple-50 to-white">
                  <div className="flex items-center justify-between mb-5">
                    <h3 className="font-bold text-gray-800 text-lg">📅 Upcoming Deadlines</h3>
                    <span className="text-sm text-purple-600 font-semibold bg-purple-100 px-3 py-1 rounded-full">April 2026</span>
                  </div>
                  {/* Deadline cards */}
                  <div className="space-y-3">
                    <div className="p-4 bg-red-50 rounded-xl flex justify-between items-center border border-red-200 hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                          <Clock className="w-5 h-5 text-red-600" />
                        </div>
                        <div>
                          <p className="font-bold text-base text-red-900">GST GSTR-3B</p>
                          <p className="text-sm text-red-600 font-medium">Due in 2 days • ₹10,000 penalty</p>
                        </div>
                      </div>
                      <span className="bg-red-600 text-white text-xs font-bold px-2.5 py-1 rounded-full">URGENT</span>
                    </div>
                    <div className="p-4 bg-amber-50 rounded-xl flex justify-between items-center border border-amber-200">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                          <Shield className="w-5 h-5 text-amber-600" />
                        </div>
                        <div>
                          <p className="font-bold text-base text-amber-900">TDS Return</p>
                          <p className="text-sm text-amber-600 font-medium">Due in 7 days</p>
                        </div>
                      </div>
                      <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">SOON</span>
                    </div>
                    <div className="p-4 bg-green-50 rounded-xl flex justify-between items-center border border-green-200">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                          <CheckIcon className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                          <p className="font-bold text-base text-green-900">Startup India Cert.</p>
                          <p className="text-sm text-green-600 font-medium">Completed ✓</p>
                        </div>
                      </div>
                      <span className="bg-green-600 text-white text-xs font-bold px-2.5 py-1 rounded-full">DONE</span>
                    </div>
                  </div>
                  {/* Stats bar */}
                  <div className="mt-5 grid grid-cols-3 gap-3">
                    <div className="bg-white rounded-xl p-3 text-center border border-gray-100 shadow-sm">
                      <p className="text-2xl font-bold text-purple-600">14</p>
                      <p className="text-xs text-gray-500 font-medium">Obligations</p>
                    </div>
                    <div className="bg-white rounded-xl p-3 text-center border border-gray-100 shadow-sm">
                      <p className="text-2xl font-bold text-green-600">3</p>
                      <p className="text-xs text-gray-500 font-medium">Completed</p>
                    </div>
                    <div className="bg-white rounded-xl p-3 text-center border border-gray-100 shadow-sm">
                      <p className="text-2xl font-bold text-amber-600">₹8L</p>
                      <p className="text-xs text-gray-500 font-medium">Schemes Found</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute -left-6 top-16 bg-white rounded-xl shadow-2xl p-4 animate-float hidden xl:flex items-center gap-3 border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white text-xl shadow-lg">
                  📊
                </div>
                <div>
                  <p className="text-base font-bold text-gray-800">GST Filing</p>
                  <p className="text-sm text-gray-500">Due in 7 days</p>
                </div>
              </div>

              <div className="absolute -right-6 top-40 bg-white rounded-xl shadow-2xl p-4 animate-float hidden xl:flex items-center gap-3 border border-gray-100" style={{ animationDelay: '2s' }}>
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center text-white text-xl shadow-lg">
                  🎁
                </div>
                <div>
                  <p className="text-base font-bold text-gray-800">Seed Fund</p>
                  <p className="text-sm text-emerald-600 font-semibold">87% Match</p>
                </div>
              </div>

              <div className="absolute left-6 -bottom-4 bg-white rounded-xl shadow-2xl p-4 animate-float hidden xl:flex items-center gap-3 border border-gray-100" style={{ animationDelay: '4s' }}>
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-green-600 rounded-xl flex items-center justify-center text-white text-xl shadow-lg">
                  ✅
                </div>
                <div>
                  <p className="text-base font-bold text-gray-800">14 Obligations</p>
                  <p className="text-sm text-gray-500">Personalized</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <ChevronDown className="w-8 h-8 text-white/60" />
      </div>
    </section>
  );
}
