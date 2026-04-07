import React from 'react';
import { Calendar, CheckCircle as CheckCircleIcon, Lightbulb, Gift, Clock, Bell, FileCheck, AlertCircle, Search, ListChecks, Target, Award, ArrowRight, IndianRupee, BarChart3 } from 'lucide-react';

// Inline Calendar Dashboard Mockup
function CalendarDashboard() {
  return (
    <div className="feature-image-glow">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200/50 mockup-shadow">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Calendar className="w-6 h-6 text-white" />
            <span className="text-white font-bold text-lg">Compliance Calendar</span>
          </div>
          <span className="bg-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full backdrop-blur">April 2026</span>
        </div>
        {/* Calendar Grid */}
        <div className="p-5">
          <div className="grid grid-cols-7 gap-1 mb-4">
            {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map(d => (
              <div key={d} className="text-center text-xs font-bold text-gray-400 py-1">{d}</div>
            ))}
            {Array.from({length: 30}, (_, i) => i + 1).map(day => (
              <div key={day} className={`text-center py-2 text-sm rounded-lg cursor-pointer transition-all font-medium
                ${day === 15 ? 'bg-red-500 text-white font-bold shadow-lg shadow-red-200' : ''}
                ${day === 20 ? 'bg-amber-400 text-amber-900 font-bold shadow-lg shadow-amber-200' : ''}
                ${day === 25 ? 'bg-amber-400 text-amber-900 font-bold shadow-lg shadow-amber-200' : ''}
                ${day === 10 ? 'bg-green-500 text-white font-bold shadow-lg shadow-green-200' : ''}
                ${day === 5 ? 'bg-green-500 text-white font-bold shadow-lg shadow-green-200' : ''}
                ${![5, 10, 15, 20, 25].includes(day) ? 'text-gray-600 hover:bg-purple-50' : ''}
              `}>{day}</div>
            ))}
          </div>
          {/* Upcoming items */}
          <div className="space-y-2.5 border-t border-gray-100 pt-4">
            <div className="flex items-center gap-3 p-3 bg-red-50 rounded-xl border border-red-100">
              <div className="w-2 h-8 bg-red-500 rounded-full"></div>
              <div className="flex-1">
                <p className="font-bold text-sm text-gray-800">GST GSTR-3B Filing</p>
                <p className="text-xs text-red-600">Apr 15 • ₹10,000 late fee</p>
              </div>
              <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-bold">2 DAYS</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-amber-50 rounded-xl border border-amber-100">
              <div className="w-2 h-8 bg-amber-500 rounded-full"></div>
              <div className="flex-1">
                <p className="font-bold text-sm text-gray-800">PF Monthly Return</p>
                <p className="text-xs text-amber-600">Apr 20 • ₹5,000 penalty</p>
              </div>
              <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-bold">7 DAYS</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-xl border border-green-100">
              <div className="w-2 h-8 bg-green-500 rounded-full"></div>
              <div className="flex-1">
                <p className="font-bold text-sm text-gray-800">ESIC Half-yearly Return</p>
                <p className="text-xs text-green-600">Completed ✓</p>
              </div>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold">DONE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Inline Mapper Dashboard Mockup
function MapperDashboard() {
  return (
    <div className="feature-image-glow">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200/50 mockup-shadow">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-violet-600 p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Lightbulb className="w-6 h-6 text-white" />
            <span className="text-white font-bold text-lg">Obligation Mapper</span>
          </div>
          <span className="bg-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full backdrop-blur">Step 8/10</span>
        </div>
        {/* Progress */}
        <div className="px-5 pt-4">
          <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-purple-500 to-violet-500 rounded-full" style={{ width: '80%' }}></div>
          </div>
        </div>
        {/* Content */}
        <div className="p-5">
          <div className="bg-purple-50 rounded-xl p-5 mb-5 border border-purple-100">
            <p className="text-base font-bold text-gray-800 mb-3">How many employees do you have?</p>
            <div className="space-y-2.5">
              {['1-10 employees', '11-20 employees', '21-50 employees', '50+ employees'].map((opt, i) => (
                <label key={i} className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all border ${i === 1 ? 'bg-purple-600 text-white border-purple-600 shadow-lg' : 'bg-white text-gray-700 border-gray-200 hover:border-purple-300'}`}>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${i === 1 ? 'border-white' : 'border-gray-300'}`}>
                    {i === 1 && <div className="w-2.5 h-2.5 bg-white rounded-full"></div>}
                  </div>
                  <span className="font-medium text-sm">{opt}</span>
                </label>
              ))}
            </div>
          </div>
          {/* Results preview */}
          <div className="border-t border-gray-100 pt-4">
            <p className="text-sm font-bold text-gray-500 mb-3 uppercase tracking-wider">Your Obligations Found:</p>
            <div className="grid grid-cols-2 gap-2">
              {[
                { name: 'GST & TDS Returns', priority: 'HIGH', color: 'red' },
                { name: 'ISO 27001 Audit', priority: 'HIGH', color: 'red' },
                { name: 'SOC2 Type II', priority: 'MED', color: 'amber' },
                { name: 'DPDP Act Policy', priority: 'HIGH', color: 'red' },
                { name: 'MCA Annual Return', priority: 'LOW', color: 'green' },
                { name: 'Startup India Cert', priority: 'MED', color: 'amber' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg border border-gray-100">
                  <CheckCircleIcon className={`w-4 h-4 text-${item.color}-500 flex-shrink-0`} />
                  <span className="text-xs font-semibold text-gray-700 truncate">{item.name}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-purple-600 font-bold mt-3">14 obligations identified</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Inline Schemes Dashboard Mockup
function SchemesDashboard() {
  return (
    <div className="feature-image-glow">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200/50 mockup-shadow">
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Gift className="w-6 h-6 text-white" />
            <span className="text-white font-bold text-lg">Schemes Matcher</span>
          </div>
          <span className="bg-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full backdrop-blur">3 Matches</span>
        </div>
        {/* Cards */}
        <div className="p-5 space-y-4">
          {[
            { name: 'Startup India Seed Fund', amount: '₹20L', match: 92, deadline: 'Apr 30, 2026', color: 'emerald' },
            { name: 'MUDRA Loan (Kishor)', amount: '₹10L', match: 87, deadline: 'May 15, 2026', color: 'blue' },
            { name: 'Karnataka Startup Policy', amount: '₹15L', match: 78, deadline: 'Jun 01, 2026', color: 'purple' },
          ].map((scheme, i) => (
            <div key={i} className="p-4 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-lg transition-all hover:border-amber-200">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-base text-gray-900">{scheme.name}</h4>
                <span className="text-xl font-extrabold text-gray-900">{scheme.amount}</span>
              </div>
              {/* Progress bar */}
              <div className="mb-3">
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-semibold text-gray-500">Eligibility Match</span>
                  <span className={`font-bold text-${scheme.color}-600`}>{scheme.match}%</span>
                </div>
                <div className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">
                  <div className={`h-full bg-gradient-to-r from-${scheme.color}-400 to-${scheme.color}-600 rounded-full transition-all`} style={{ width: `${scheme.match}%` }}></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">Deadline: {scheme.deadline}</span>
                <button className="text-xs bg-amber-100 text-amber-700 px-3 py-1 rounded-full font-bold hover:bg-amber-200 transition">
                  View Details →
                </button>
              </div>
            </div>
          ))}
          {/* Total */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-4 border border-amber-200 text-center">
            <p className="text-sm text-amber-700 font-medium">Total Funding Available</p>
            <p className="text-3xl font-extrabold text-amber-600">₹45L+</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FeaturesSection() {
  return (
    <section className="py-24 md:py-32 bg-white relative" id="features">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[1400px]">
        <div className="text-center mb-20 md:mb-28">
          <p className="text-purple-600 font-bold text-base uppercase tracking-[0.15em] mb-4">
            ONE PLATFORM, THREE SUPERPOWERS
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-4xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Finally Know What You <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Don't Know</span>
          </h2>
          <p className="text-xl md:text-2xl lg:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Stop guessing. Start knowing. Stay compliant without the headache.
          </p>
        </div>

        {/* Feature 1: Compliance Calendar */}
        <div className="mb-28 md:mb-36">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="bg-blue-100 text-blue-700 px-5 py-2.5 rounded-full inline-flex items-center gap-2.5 mb-6">
                <Calendar className="w-5 h-5" />
                <span className="font-bold text-base">FEATURE #1</span>
              </div>

              <h3 className="text-3xl md:text-4xl lg:text-3xl font-extrabold text-gray-900 mb-6 tracking-tight">
                Smart Compliance Calendar
              </h3>

              <p className="text-xl md:text-2xl lg:text-lg text-gray-600 mb-8 leading-relaxed">
                Never miss another GST, TDS, advance tax, or ROC filing deadline. We track every 
                compliance obligation for tech startups and agencies and send 
                you reminders 7 days before each deadline.
              </p>

              <ul className="space-y-4 mb-10">
                {[
                  { icon: Clock, text: 'Pre-populated deadlines:', desc: 'GST, TDS, Advance Tax, Annual Returns, MCA filings', color: 'blue' },
                  { icon: Bell, text: 'Automated email alerts:', desc: 'Get notified 7 days before any deadline', color: 'blue' },
                  { icon: FileCheck, text: 'Mark as complete:', desc: 'Track your compliance history', color: 'blue' },
                  { icon: AlertCircle, text: 'Penalty warnings:', desc: 'See exactly what happens if you miss it', color: 'blue' },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className={`w-10 h-10 lg:w-8 lg:h-8 bg-${item.color}-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5`}>
                      <item.icon className={`w-5 h-5 lg:w-4 lg:h-4 text-${item.color}-600`} />
                    </div>
                    <span className="text-xl lg:text-base text-gray-700 leading-relaxed">
                      <strong className="text-gray-900">{item.text}</strong> {item.desc}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-5 rounded-r-xl">
                <p className="text-green-800 font-semibold text-lg lg:text-base">
                  💚 Result: Zero missed deadlines. Zero penalties. Zero stress.
                </p>
              </div>
            </div>

            <CalendarDashboard />
          </div>
        </div>

        {/* Feature 2: Compliance Mapper */}
        <div className="mb-28 md:mb-36">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="lg:order-2">
              <MapperDashboard />
            </div>

            <div className="lg:order-1">
              <div className="bg-purple-100 text-purple-700 px-5 py-2.5 rounded-full inline-flex items-center gap-2.5 mb-6">
                <Lightbulb className="w-5 h-5" />
                <span className="font-bold text-base">FEATURE #2</span>
              </div>

              <h3 className="text-3xl md:text-4xl lg:text-3xl font-extrabold text-gray-900 mb-6 tracking-tight">
                Compliance Obligation Mapper
              </h3>

              <p className="text-xl md:text-2xl lg:text-lg text-gray-600 mb-8 leading-relaxed">
                Answer 10 simple questions about your tech product. Get a personalized 
                list of every data compliance requirement that applies to YOU (GDPR, SOC2, DPIA).
              </p>

              <ul className="space-y-4 mb-10">
                {[
                  { icon: Search, text: '10-question tech assessment:', desc: 'Business model, data collection, employee size', color: 'purple' },
                  { icon: ListChecks, text: 'Personalized infosec list:', desc: '"Here are your 14 specific obligations"', color: 'purple' },
                  { icon: FileCheck, text: 'Plain English explanations:', desc: 'What it is, why it matters, when to do it', color: 'purple' },
                  { icon: Target, text: 'Priority ranking:', desc: 'Focus on high-risk items first', color: 'purple' },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className={`w-10 h-10 lg:w-8 lg:h-8 bg-${item.color}-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5`}>
                      <item.icon className={`w-5 h-5 lg:w-4 lg:h-4 text-${item.color}-600`} />
                    </div>
                    <span className="text-xl lg:text-base text-gray-700 leading-relaxed">
                      <strong className="text-gray-900">{item.text}</strong> {item.desc}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="bg-gradient-to-r from-purple-50 to-violet-50 border-l-4 border-purple-500 p-5 rounded-r-xl">
                <p className="text-purple-800 font-semibold text-lg lg:text-base">
                  💜 Result: You finally know exactly what you need to do to stay compliant.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 3: Government Schemes */}
        <div>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="bg-amber-100 text-amber-700 px-5 py-2.5 rounded-full inline-flex items-center gap-2.5 mb-6">
                <Gift className="w-5 h-5" />
                <span className="font-bold text-base">FEATURE #3</span>
              </div>

              <h3 className="text-3xl md:text-4xl lg:text-3xl font-extrabold text-gray-900 mb-6 tracking-tight">
                Government Schemes Matcher
              </h3>

              <p className="text-xl md:text-2xl lg:text-lg text-gray-600 mb-8 leading-relaxed">
                Discover government grants, tax holidays, and subsidies for tech innovation 
                you qualify for. We scan central and state schemes specifically for SaaS and Agencies.
              </p>

              <ul className="space-y-4 mb-10">
                {[
                  { icon: BarChart3, text: '100+ schemes tracked:', desc: 'Startup India, SEZ benefits, state tech policies', color: 'amber' },
                  { icon: Award, text: 'Eligibility matching:', desc: '"You\'re 87% eligible for this ₹15L tech grant"', color: 'amber' },
                  { icon: FileCheck, text: 'Application guidance:', desc: 'What documents you need, how to apply', color: 'amber' },
                  { icon: Clock, text: 'Deadline tracking:', desc: 'Never miss a scheme application window', color: 'amber' },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className={`w-10 h-10 lg:w-8 lg:h-8 bg-${item.color}-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5`}>
                      <item.icon className={`w-5 h-5 lg:w-4 lg:h-4 text-${item.color}-600`} />
                    </div>
                    <span className="text-xl lg:text-base text-gray-700 leading-relaxed">
                      <strong className="text-gray-900">{item.text}</strong> {item.desc}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-5 rounded-r-xl">
                <p className="text-amber-800 font-semibold text-xl lg:text-base">
                  🎁 Result: Average startup discovers ₹15-50L in funding opportunities.
                </p>
              </div>
            </div>

            <SchemesDashboard />
          </div>
        </div>
      </div>
    </section>
  );
}
