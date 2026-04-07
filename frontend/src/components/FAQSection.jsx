import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "When will ComplianceCalendar launch?",
    answer: "We're launching in 4-6 weeks. Join the waitlist to get notified immediately, or get early access now and start using it today.",
  },
  {
    question: "Is this only for tech startups in Bangalore?",
    answer: "For now, yes. We're starting with tech startups and SaaS companies in Bangalore to ensure 100% accuracy. We'll expand to other cities (Mumbai, Delhi, Pune) and industries within 3-6 months.",
  },
  {
    question: "Does this replace my CA?",
    answer: "Not entirely. Think of ComplianceCalendar as your compliance assistant that handles routine tracking, reminders, and guidance. For complex tax planning, audits, or strategic advice, you'll still want a CA. But for 80% of daily compliance needs, we've got you covered.",
  },
  {
    question: "What if the AI gives me wrong information?",
    answer: "We don't rely on AI hallucinations. Our compliance obligations and government schemes are manually researched and verified by experts. AI only helps with matching and explanations, not creating the data.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Absolutely. No contracts, no commitments. Cancel with one click from your dashboard. If you're on the early bird plan (₹249/mo), you can reactivate later at the same price.",
  },
  {
    question: "Is my data secure?",
    answer: "Yes. We use bank-level encryption, store data on Indian servers (Mumbai), and never share your information with third parties. We're also building toward ISO 27001 compliance.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We use Razorpay for payments, so you can pay via UPI, cards, net banking, or wallets. All payments are secure and instant.",
  },
  {
    question: "What happens after my 7-day free trial?",
    answer: "If you love it, do nothing — we'll charge ₹249/mo (early bird price). If you don't, cancel before day 7 and pay ₹0. We'll even send you a reminder on day 5.",
  },
];

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className={`border-2 rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-purple-300 bg-purple-50/50 shadow-lg shadow-purple-100' : 'border-gray-200 bg-white hover:border-gray-300'}`}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 md:p-7 text-left cursor-pointer group"
      >
        <h3 className={`font-bold text-xl pr-4 transition-colors ${isOpen ? 'text-purple-700' : 'text-gray-900 group-hover:text-purple-600'}`}>
          {faq.question}
        </h3>
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all ${isOpen ? 'bg-purple-600 rotate-180' : 'bg-gray-100 group-hover:bg-purple-100'}`}>
          <ChevronDown className={`w-5 h-5 transition-colors ${isOpen ? 'text-white' : 'text-gray-500'}`} />
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 md:px-7 pb-6 md:pb-7">
          <p className="text-lg text-gray-600 leading-relaxed">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 md:py-32 bg-white" id="faq">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-4xl">
        <div className="text-center mb-20">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="w-8 h-8 text-purple-600" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Questions? We've Got <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Answers.</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
