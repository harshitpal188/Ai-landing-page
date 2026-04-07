import React from 'react';
import { ExternalLink, Globe, MessageCircle, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-16 md:py-20 bg-[#0a0a1a] text-gray-400 relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-purple-900/20 rounded-full filter blur-[100px]"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[1400px] relative">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center text-white text-lg shadow-lg">
                📅
              </div>
              <span className="text-white text-xl font-bold">
                ComplianceCalendar
              </span>
            </div>
            <p className="text-base mb-6 leading-relaxed">
              The smartest compliance tracker for Indian Tech Startups and SaaS.
            </p>
            <div className="flex items-center gap-2 mb-3 text-sm">
              <MapPin className="w-4 h-4 text-purple-400" />
              <span>Bangalore, India</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Mail className="w-4 h-4 text-purple-400" />
              <span>hello@compliancecalendar.in</span>
            </div>
            <div className="flex gap-3 mt-6">
              {[
                { icon: ExternalLink, label: 'X' },
                { icon: Globe, label: 'LinkedIn' },
                { icon: MessageCircle, label: 'Instagram' },
              ].map((social, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-purple-600 transition-all border border-white/10 hover:border-purple-500 group">
                  <social.icon className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Product</h4>
            <div className="flex flex-col space-y-4">
              {['Features', 'Pricing', 'FAQ', 'Login'].map((link, i) => (
                <a key={i} href={link === 'Login' ? '/login' : `#${link.toLowerCase()}`} className="text-base hover:text-purple-400 transition-colors">{link}</a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Company</h4>
            <div className="flex flex-col space-y-4">
              {['About Us', 'Contact', 'Blog'].map((link, i) => (
                <a key={i} href={`/${link.toLowerCase().replace(' ', '')}`} className="text-base hover:text-purple-400 transition-colors">{link}</a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Legal</h4>
            <div className="flex flex-col space-y-4">
              {['Terms of Service', 'Privacy Policy', 'Refund Policy'].map((link, i) => (
                <a key={i} href={`/${link.toLowerCase().replace(/ /g, '')}`} className="text-base hover:text-purple-400 transition-colors">{link}</a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-center text-base text-gray-500">
            © 2026 ComplianceCalendar. All rights reserved. Made with ❤️ in Bangalore.
          </p>
        </div>
      </div>
    </footer>
  );
}
