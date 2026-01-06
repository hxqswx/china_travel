import React from 'react';
import { Globe, ArrowRight, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-surface-light border-t border-[#e7f3f2] py-12">
      <div className="max-w-[1440px] px-4 md:px-10 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1 flex flex-col gap-4">
            <div className="flex items-center gap-2 text-text-main">
              <Globe className="text-primary w-8 h-8" />
              <h2 className="font-bold text-lg">China Travel</h2>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed">
              Your ultimate guide to exploring the Middle Kingdom. Authentic experiences, verified itineraries, and a community of travelers.
            </p>
          </div>

          {/* Links 1 */}
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-text-main mb-1">Essentials / 必备信息</h4>
            <a href="#" className="text-sm text-text-secondary hover:text-primary transition-colors">Visa Policy / 签证政策</a>
            <a href="#" className="text-sm text-text-secondary hover:text-primary transition-colors">Payment Guide / 支付指南</a>
            <a href="#" className="text-sm text-text-secondary hover:text-primary transition-colors">SIM & Internet / 通讯网络</a>
          </div>

          {/* Links 2 */}
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-text-main mb-1">Support / 支持</h4>
            <a href="#" className="text-sm text-text-secondary hover:text-primary transition-colors">Emergency Contacts / 紧急联系</a>
            <a href="#" className="text-sm text-text-secondary hover:text-primary transition-colors">Translation Helper / 翻译助手</a>
            <a href="#" className="text-sm text-text-secondary hover:text-primary transition-colors">Transport Guide / 交通指南</a>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-text-main mb-1">Stay Updated</h4>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-background-light border-none rounded-lg text-sm px-3 py-2 text-text-main focus:ring-1 focus:ring-primary outline-none"
              />
              <button className="bg-primary hover:bg-primary-dark text-text-main font-bold rounded-lg px-3 transition-colors flex items-center justify-center">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-secondary">© 2024 China Travel. All rights reserved.</p>
          <div className="flex gap-4 text-text-secondary">
             <Instagram className="w-5 h-5 hover:text-primary cursor-pointer transition-colors"/>
             <Twitter className="w-5 h-5 hover:text-primary cursor-pointer transition-colors"/>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;