import React from 'react';
import { Check, X, Minus, Crown } from 'lucide-react';

export default function ComparisonSection() {
  const features = [
    {
      name: 'Monthly Cost',
      us: { content: <><span className="text-3xl font-extrabold text-purple-600">₹499</span><span className="text-sm text-gray-500 block mt-1">(₹249 early bird)</span></>, isPrice: true },
      ca: { content: <><span className="text-2xl font-bold text-gray-900">₹2,000+</span><span className="text-sm text-gray-500 block">per month</span></> },
      diy: { content: <><span className="text-2xl font-bold text-gray-900">₹0</span><span className="text-sm text-gray-500 block">but hours lost</span></> },
    },
    {
      name: 'Automated Deadline Tracking',
      us: { check: true, note: '24/7' },
      ca: { check: false, note: 'Manual' },
      diy: { check: false },
    },
    {
      name: 'Personalized Compliance Checklist',
      us: { check: true, note: 'AI-powered' },
      ca: { check: true, note: 'If you ask' },
      diy: { partial: true, note: 'Incomplete' },
    },
    {
      name: 'Government Schemes Matching',
      us: { check: true, note: '100+ schemes' },
      ca: { check: false, note: 'Not their job' },
      diy: { check: false, note: 'Too scattered' },
    },
    {
      name: 'Email/SMS Alerts',
      us: { check: true, note: '7 days before' },
      ca: { partial: true, note: 'Inconsistent' },
      diy: { check: false },
    },
    {
      name: 'Get Answers',
      us: { content: <><strong className="text-purple-600 text-lg">Instant</strong><span className="text-sm text-gray-500 block">24/7</span></> },
      ca: { content: <><strong className="text-gray-900 text-lg">2-3 days</strong><span className="text-sm text-gray-500 block">Business hours</span></> },
      diy: { content: <><strong className="text-gray-900 text-lg">Hours</strong><span className="text-sm text-gray-500 block">Research time</span></> },
    },
    {
      name: 'Full Transparency',
      us: { check: true, note: 'See everything' },
      ca: { partial: true, note: 'Trust-based' },
      diy: { partial: true, note: 'Uncertain' },
    },
    {
      name: 'Scales With Business',
      us: { check: true, note: 'Auto-updates' },
      ca: { check: true, note: 'Higher fees' },
      diy: { check: false, note: 'More complex' },
    },
  ];

  function renderCell(cell) {
    if (cell.content) return cell.content;
    if (cell.check === true) return (
      <div className="flex flex-col items-center gap-1">
        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
          <Check className="w-5 h-5 text-green-600" />
        </div>
        {cell.note && <span className="text-xs text-gray-500 font-medium">{cell.note}</span>}
      </div>
    );
    if (cell.check === false) return (
      <div className="flex flex-col items-center gap-1">
        <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
          <X className="w-5 h-5 text-red-500" />
        </div>
        {cell.note && <span className="text-xs text-gray-500 font-medium">{cell.note}</span>}
      </div>
    );
    if (cell.partial) return (
      <div className="flex flex-col items-center gap-1">
        <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
          <Minus className="w-5 h-5 text-gray-400" />
        </div>
        {cell.note && <span className="text-xs text-gray-500 font-medium">{cell.note}</span>}
      </div>
    );
    return null;
  }

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[1400px]">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
            How Does ComplianceCalendar <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Compare?</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            See why founders choose us over expensive CAs and generic tools.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Table */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200/50 overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="border-b-2 border-gray-100">
                  <th className="p-6 text-left text-lg text-gray-500 font-semibold w-1/4">
                    Feature
                  </th>
                  <th className="p-6 text-center bg-purple-50/80 w-1/4">
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-200">
                        <Crown className="w-6 h-6 text-white" />
                      </div>
                      <span className="font-bold text-lg text-purple-700">
                        ComplianceCalendar
                      </span>
                      <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-bold">
                        BEST VALUE
                      </span>
                    </div>
                  </th>
                  <th className="p-6 text-center w-1/4">
                    <span className="font-semibold text-lg text-gray-600">Hire a CA</span>
                  </th>
                  <th className="p-6 text-center w-1/4">
                    <span className="font-semibold text-lg text-gray-600">DIY (Google)</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, i) => (
                  <tr key={i} className={`border-b border-gray-100 hover:bg-gray-50/50 transition-colors ${i === features.length - 1 ? 'border-b-0' : ''}`}>
                    <td className="p-5 font-semibold text-base text-gray-800">{feature.name}</td>
                    <td className="p-5 text-center bg-purple-50/40">{renderCell(feature.us)}</td>
                    <td className="p-5 text-center">{renderCell(feature.ca)}</td>
                    <td className="p-5 text-center">{renderCell(feature.diy)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Summary */}
          <div className="mt-14 text-center max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-[#1a0533] to-[#2d1b69] rounded-3xl p-10 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/20 rounded-full filter blur-[60px]"></div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-6 relative">
                The Math is Simple
              </h3>
              <p className="text-xl text-purple-200 mb-4 relative">
                ₹2,000/month CA fees - ₹499 ComplianceCalendar = 
                <strong className="text-emerald-400 text-2xl"> ₹1,501 saved/month</strong>
              </p>
              <p className="text-lg text-purple-300 relative">
                + You get features your CA doesn't even offer (schemes matching, instant answers, full transparency)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
