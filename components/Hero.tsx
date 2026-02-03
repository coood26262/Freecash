import React from 'react';
import { Star } from 'lucide-react';

export const Hero: React.FC = () => {
  // Determine affiliate link based on URL path
  const getAffiliateLink = () => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      if (path === '/ca' || path === '/ca/') {
        return 'https://glitchy.go2cloud.org/aff_c?offer_id=3531&aff_id=2609&url_id=149';
      }
    }
    return 'https://glitchy.go2cloud.org/aff_c?offer_id=3531&aff_id=2609&url_id=149';
  };

  const affiliateLink = getAffiliateLink();

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] overflow-hidden pb-20">
      {/* Hero Section */}
      <div className="relative pt-16 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
            Make <span className="text-green-500">$332+</span> Daily
            <br />
            Completing Surveys
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-slate-400 mb-6 max-w-3xl mx-auto">
            Get paid for rating videos, testing apps & surveys. <span className="font-semibold text-white"></span>Earn up to{' '}
            <span className="font-semibold text-green-500">$20 per survey</span>.
          </p>

          {/* Star Rating */}
          <div className="flex items-center justify-center gap-2 mb-8 bg-white/5 border border-white/10 rounded-full px-6 py-3 inline-flex mx-auto">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 text-green-500 fill-green-500" />
              ))}
            </div>
            <span className="text-white font-bold text-lg ml-2">4.9</span>
            <span className="text-slate-400 ml-1">(6,000+ reviews)</span>
          </div>

          {/* CTA Button */}
          <a
            href={affiliateLink}
            onClick={() => {
              if (typeof window !== 'undefined' && (window as any).ttq) {
                (window as any).ttq.track('ClickButton', {
                  content_name: 'Start Earning Now - Hero',
                  content_category: 'CTA'
                });
              }
            }}
            className="inline-block bg-green-600 hover:bg-green-700 text-black font-bold text-lg px-12 py-5 rounded-xl transition-all shadow-2xl shadow-green-500/40 active:scale-95 transform duration-100 mb-12"
          >
            START EARNING NOW
          </a>

          {/* Stats Section */}
          <div className="flex flex-row items-center justify-center gap-6 sm:gap-12 mt-8">
            <div className="flex flex-col items-center">
              <div className="text-xs text-green-500 font-bold uppercase tracking-wide mb-1">TOTAL PAID</div>
              <div className="text-2xl sm:text-3xl font-bold text-white">$88 Million</div>
              <div className="text-xs text-slate-500">to Users</div>
            </div>
            <div className="w-px h-12 bg-white/10"></div>
            <div className="flex flex-col items-center">
              <div className="text-xs text-green-500 font-bold uppercase tracking-wide mb-1">TRUSTED BY</div>
              <div className="text-2xl sm:text-3xl font-bold text-white">17 Million</div>
              <div className="text-xs text-slate-500">Verified Users</div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Surveys Section */}
      <div className="relative px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <h2 className="text-2xl font-bold text-white">FEATURED SURVEYS</h2>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-500 text-sm font-semibold">Live Earning</span>
            </div>
          </div>

          {/* Survey Cards Horizontal Swipe */}
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 px-4 -mx-4">
            {/* Netflix Card */}
            <div className="flex-shrink-0 w-[280px] sm:w-[320px] bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/5 hover:border-green-500/30 transition-all group snap-start">
              <div className="relative aspect-[9/16] bg-gradient-to-br from-red-900/20 to-black/40 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Survey Provider Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-600 rounded-sm"></div>
                    Netflix
                  </span>
                </div>

                {/* Popularity Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-red-600/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
                    <span>Popularity</span>
                    <span className="text-yellow-300">🔥 95</span>
                  </div>
                </div>

                {/* App Icon with Red Squiggly Border */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Red Squiggly Border SVG */}
                    <svg className="absolute -inset-6 w-44 h-44" viewBox="0 0 200 200" style={{ transform: 'translate(-50%, -50%)', left: '50%', top: '50%' }}>
                      <path 
                        d="M100,30 Q140,35 150,70 Q155,100 145,130 Q130,155 100,160 Q70,155 55,130 Q45,100 50,70 Q60,35 100,30" 
                        fill="none" 
                        stroke="#ef4444" 
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                    
                    {/* Circle background with app icon */}
                    <div className="w-28 h-28 bg-red-900/60 rounded-full flex items-center justify-center backdrop-blur-sm relative z-10 border border-red-500/20">
                      <img 
                        src="/netflix-icon.png" 
                        alt="Netflix" 
                        className="w-16 h-16 object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold text-white mb-3">Netflix</h3>
                <div className="mb-4">
                  <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">Potential Earnings</div>
                  <div className="text-2xl font-bold text-green-500">
                    $10.00 <span className="text-sm text-slate-400">/Sign Up</span>
                  </div>
                </div>
                <a
                  href={affiliateLink}
                  onClick={() => {
                    if (typeof window !== 'undefined' && (window as any).ttq) {
                      (window as any).ttq.track('ClickButton', {
                        content_name: 'Watch - Netflix',
                        content_category: 'Survey Card'
                      });
                    }
                  }}
                  className="block w-full bg-green-600 hover:bg-green-700 text-center text-black font-bold py-3 rounded-lg transition-all active:scale-95 transform duration-100"
                >
                  Start
                </a>
              </div>
            </div>

            {/* BitLabs Card */}
            <div className="flex-shrink-0 w-[280px] sm:w-[320px] bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/5 hover:border-green-500/30 transition-all group snap-start">
              <div className="relative aspect-[9/16] bg-gradient-to-br from-cyan-900/20 to-blue-900/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Survey Provider Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-2">
                    <div className="w-3 h-3 bg-cyan-500 rounded-sm"></div>
                    BitLabs
                  </span>
                </div>

                {/* Popularity Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-cyan-600/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
                    <span>Popularity</span>
                    <span className="text-yellow-300">⭐ 28</span>
                  </div>
                </div>

                {/* App Icon with Red Squiggly Border */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Red Squiggly Border SVG */}
                    <svg className="absolute -inset-6 w-44 h-44" viewBox="0 0 200 200" style={{ transform: 'translate(-50%, -50%)', left: '50%', top: '50%' }}>
                      <path 
                        d="M100,30 Q135,40 150,75 Q160,105 140,135 Q120,160 100,165 Q75,160 60,135 Q40,105 50,75 Q65,40 100,30" 
                        fill="none" 
                        stroke="#ef4444" 
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                    
                    {/* Circle background with app icon */}
                    <div className="w-28 h-28 bg-cyan-900/60 rounded-full flex items-center justify-center backdrop-blur-sm relative z-10 border border-cyan-500/20">
                      <img 
                        src="/bitlabs-icon.png" 
                        alt="BitLabs" 
                        className="w-16 h-16 object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold text-white mb-3">BitLabs</h3>
                <div className="mb-4">
                  <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">Potential Earnings</div>
                  <div className="text-2xl font-bold text-green-500">
                    $2.20 <span className="text-sm text-slate-400">/Question</span>
                  </div>
                </div>
                <a
                  href={affiliateLink}
                  onClick={() => {
                    if (typeof window !== 'undefined' && (window as any).ttq) {
                      (window as any).ttq.track('ClickButton', {
                        content_name: 'Watch - BitLabs Survey',
                        content_category: 'Survey Card'
                      });
                    }
                  }}
                  className="block w-full bg-green-600 hover:bg-green-700 text-center text-black font-bold py-3 rounded-lg transition-all active:scale-95 transform duration-100"
                >
                  Start
                </a>
              </div>
            </div>

            {/* TikTok Card */}
            <div className="flex-shrink-0 w-[280px] sm:w-[320px] bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/5 hover:border-green-500/30 transition-all group snap-start">
              <div className="relative aspect-[9/16] bg-gradient-to-br from-gray-900/20 to-black/40 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Survey Provider Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-2">
                    <div className="w-3 h-3 bg-white rounded-sm"></div>
                    TikTok
                  </span>
                </div>

                {/* Popularity Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-gray-600/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
                    <span>Popularity</span>
                    <span className="text-yellow-300">💫 88</span>
                  </div>
                </div>

                {/* App Icon with Red Squiggly Border */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Red Squiggly Border SVG */}
                    <svg className="absolute -inset-6 w-44 h-44" viewBox="0 0 200 200" style={{ transform: 'translate(-50%, -50%)', left: '50%', top: '50%' }}>
                      <path 
                        d="M100,25 Q145,30 155,70 Q165,110 150,140 Q125,165 100,168 Q65,165 50,140 Q35,110 45,70 Q55,30 100,25" 
                        fill="none" 
                        stroke="#ef4444" 
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                    
                    {/* Circle background with app icon */}
                    <div className="w-28 h-28 bg-gray-900/60 rounded-full flex items-center justify-center backdrop-blur-sm relative z-10 border border-gray-500/20">
                      <img 
                        src="/tiktok-icon.png" 
                        alt="TikTok" 
                        className="w-16 h-16 object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold text-white mb-3">TikTok</h3>
                <div className="mb-4">
                  <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">Potential Earnings</div>
                  <div className="text-2xl font-bold text-green-500">
                    $5.00 <span className="text-sm text-slate-400">/Sign Up</span>
                  </div>
                </div>
                <a
                  href={affiliateLink}
                  onClick={() => {
                    if (typeof window !== 'undefined' && (window as any).ttq) {
                      (window as any).ttq.track('ClickButton', {
                        content_name: 'Watch - TikTok',
                        content_category: 'Survey Card'
                      });
                    }
                  }}
                  className="block w-full bg-green-600 hover:bg-green-700 text-center text-black font-bold py-3 rounded-lg transition-all active:scale-95 transform duration-100"
                >
                  Start
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
