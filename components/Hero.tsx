import React from 'react';
import { Star, Video } from 'lucide-react';

export const Hero: React.FC = () => {
  // Determine affiliate link based on URL path
  const getAffiliateLink = () => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      if (path === '/ca' || path === '/ca/') {
        return 'https://trkio.org/aff_c?offer_id=3531&aff_id=g';
      }
    }
    return 'https://trkio.org/aff_c?offer_id=3531&aff_id=g';
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
            Get paid for rating videos, testing apps & surveys. Watch <span className="font-semibold text-white">5 min</span> and earn up to{' '}
            <span className="font-semibold text-green-500">$20</span>.
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

      {/* Featured Videos Section */}
      <div className="relative px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Video className="w-6 h-6 text-green-500" />
              <h2 className="text-2xl font-bold text-white">Featured Videos</h2>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-500 text-sm font-semibold">Live Earning</span>
            </div>
          </div>

          {/* Video Cards Horizontal Swipe */}
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 px-4 -mx-4">
            {/* ASMR Card */}
            <div className="flex-shrink-0 w-[280px] sm:w-[320px] bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/5 hover:border-green-500/30 transition-all group snap-start">
              <div className="relative aspect-[9/16] bg-gradient-to-br from-pink-900/20 to-green-900/20 overflow-hidden">
                {/* Mock TikTok Video Content */}
                <img
                  src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHh4aXN6Nms4eXpmZHQ4N2F3NWgwbnMwbGdjemY4ZDhrb3lybGs2eiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/FWaml2vOWzWlYdWhsn/giphy.gif"
                  alt="ASMR Video"
                  className="absolute inset-0 w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    ASMR
                  </span>
                </div>

                {/* TikTok-style UI Elements */}
                <div className="absolute right-3 bottom-20 flex flex-col gap-4 z-10">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-1">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      </svg>
                    </div>
                    <span className="text-xs text-white font-semibold">1.2M</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-1">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
                      </svg>
                    </div>
                    <span className="text-xs text-white font-semibold">8.5K</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-1">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
                      </svg>
                    </div>
                    <span className="text-xs text-white font-semibold">432</span>
                  </div>
                </div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-pink-500/80 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform backdrop-blur-sm">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold text-white mb-3">Satisfying ASMR</h3>
                <div className="mb-4">
                  <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">Potential Earnings</div>
                  <div className="text-2xl font-bold text-green-500">
                    $2.50 <span className="text-sm text-slate-400">/ video</span>
                  </div>
                </div>
                <a
                  href={affiliateLink}
                  onClick={() => {
                    if (typeof window !== 'undefined' && (window as any).ttq) {
                      (window as any).ttq.track('ClickButton', {
                        content_name: 'Watch - ASMR Video',
                        content_category: 'Video Card'
                      });
                    }
                  }}
                  className="block w-full bg-green-600 hover:bg-green-700 text-center text-black font-bold py-3 rounded-lg transition-all active:scale-95 transform duration-100"
                >
                  Watch
                </a>
              </div>
            </div>

            {/* Trending Card */}
            <div className="flex-shrink-0 w-[280px] sm:w-[320px] bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/5 hover:border-green-500/30 transition-all group snap-start">
              <div className="relative aspect-[9/16] bg-gradient-to-br from-orange-900/20 to-red-900/20 overflow-hidden">
                {/* Mock TikTok Video Content */}
                <img
                  src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjV0bzZ4cTFiYTc3bG02dDk3b3FrcnZjOWJ0MGZrOTJnNzJuY2tzeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/wmmJWNjHOOIVSNw1Wo/giphy.gif"
                  alt="Trending Dance Video"
                  className="absolute inset-0 w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                    </svg>
                    TRENDING
                  </span>
                </div>

                {/* TikTok-style UI Elements */}
                <div className="absolute right-3 bottom-20 flex flex-col gap-4 z-10">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-1">
                      <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      </svg>
                    </div>
                    <span className="text-xs text-white font-semibold">2.8M</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-1">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
                      </svg>
                    </div>
                    <span className="text-xs text-white font-semibold">15K</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-1">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
                      </svg>
                    </div>
                    <span className="text-xs text-white font-semibold">892</span>
                  </div>
                </div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform backdrop-blur-sm">
                    <svg className="w-8 h-8 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold text-white mb-3">Viral Dance Challenges</h3>
                <div className="mb-4">
                  <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">Potential Earnings</div>
                  <div className="text-2xl font-bold text-green-500">
                    $3.20 <span className="text-sm text-slate-400">/ video</span>
                  </div>
                </div>
                <a
                  href={affiliateLink}
                  onClick={() => {
                    if (typeof window !== 'undefined' && (window as any).ttq) {
                      (window as any).ttq.track('ClickButton', {
                        content_name: 'Watch - Trending Dance Video',
                        content_category: 'Video Card'
                      });
                    }
                  }}
                  className="block w-full bg-green-600 hover:bg-green-700 text-center text-black font-bold py-3 rounded-lg transition-all active:scale-95 transform duration-100"
                >
                  Watch
                </a>
              </div>
            </div>

            {/* Dance Card */}
            <div className="flex-shrink-0 w-[280px] sm:w-[320px] bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/5 hover:border-green-500/30 transition-all group snap-start">
              <div className="relative aspect-[9/16] bg-gradient-to-br from-blue-900/20 to-green-900/20 overflow-hidden">
                {/* Mock TikTok Video Content */}
                <img
                  src="https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3eGxnY3c3NGw2emtmaXJpb20wbXNmbXk4bHE5MW8yOWhqbmg4c3pnYiZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/s7bQ0q95KyKV13yq7Z/giphy.gif"
                  alt="Dance Moves & Vibes"
                  className="absolute inset-0 w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    DANCE
                  </span>
                </div>

                {/* TikTok-style UI Elements */}
                <div className="absolute right-3 bottom-20 flex flex-col gap-4 z-10">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-1">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      </svg>
                    </div>
                    <span className="text-xs text-white font-semibold">956K</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-1">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
                      </svg>
                    </div>
                    <span className="text-xs text-white font-semibold">6.2K</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-1">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
                      </svg>
                    </div>
                    <span className="text-xs text-white font-semibold">234</span>
                  </div>
                </div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-blue-500/80 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform backdrop-blur-sm">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold text-white mb-3">New Moves & Vibes</h3>
                <div className="mb-4">
                  <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">Potential Earnings</div>
                  <div className="text-2xl font-bold text-green-500">
                    $1.80 <span className="text-sm text-slate-400">/ video</span>
                  </div>
                </div>
                <a
                  href={affiliateLink}
                  onClick={() => {
                    if (typeof window !== 'undefined' && (window as any).ttq) {
                      (window as any).ttq.track('ClickButton', {
                        content_name: 'Watch - Dance Moves Video',
                        content_category: 'Video Card'
                      });
                    }
                  }}
                  className="block w-full bg-green-600 hover:bg-green-700 text-center text-black font-bold py-3 rounded-lg transition-all active:scale-95 transform duration-100"
                >
                  Watch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
