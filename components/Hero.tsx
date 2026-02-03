import React from 'react';
import { Star } from 'lucide-react';

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
              <h2 className="text-2xl font-bold text-white">Surveys</h2>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-500 text-sm font-semibold">Live Earning</span>
            </div>
          </div>

          <p className="text-slate-400 mb-6">Complete surveys to earn coins. You will be rewarded for each survey completed.</p>

          {/* Survey Cards Horizontal Swipe */}
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 px-4 -mx-4">
            {/* CPX Research Card */}
            <div className="flex-shrink-0 w-[280px] sm:w-[320px] bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/5 hover:border-green-500/30 transition-all group snap-start">
              <div className="relative aspect-[9/16] bg-gradient-to-br from-blue-900/20 to-purple-900/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Survey Provider Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                    CPX RESEARCH
                  </span>
                </div>

                {/* Popularity Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-blue-600/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
                    <span>Popularity</span>
                    <span className="text-yellow-300">🔥 77</span>
                  </div>
                </div>

                {/* Survey Icon/Visual */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-blue-500/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-16 h-16 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold text-white mb-3">CPX Research</h3>
                <div className="mb-4">
                  <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">Potential Earnings</div>
                  <div className="text-2xl font-bold text-green-500">
                    $2.50 <span className="text-sm text-slate-400">/Question</span>
                  </div>
                </div>
                <a
                  href={affiliateLink}
                  onClick={() => {
                    if (typeof window !== 'undefined' && (window as any).ttq) {
                      (window as any).ttq.track('ClickButton', {
                        content_name: 'Watch - CPX Research Survey',
                        content_category: 'Survey Card'
                      });
                    }
                  }}
                  className="block w-full bg-green-600 hover:bg-green-700 text-center text-black font-bold py-3 rounded-lg transition-all active:scale-95 transform duration-100"
                >
                  Watch
                </a>
              </div>
            </div>

            {/* theoremreach Card */}
            <div className="flex-shrink-0 w-[280px] sm:w-[320px] bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/5 hover:border-green-500/30 transition-all group snap-start">
              <div className="relative aspect-[9/16] bg-gradient-to-br from-purple-900/20 to-pink-900/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Survey Provider Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                    </svg>
                    theoremreach
                  </span>
                </div>

                {/* Popularity Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-purple-600/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
                    <span>Popularity</span>
                    <span className="text-yellow-300">🔥 100</span>
                  </div>
                </div>

                {/* Survey Icon/Visual */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-purple-500/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-16 h-16 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold text-white mb-3">Dice Dreams</h3>
                <div className="mb-4">
                  <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">Potential Earnings</div>
                  <div className="text-2xl font-bold text-green-500">
                    $30.20 <span className="text-sm text-slate-400">/Level</span>
                  </div>
                </div>
                <a
                  href={affiliateLink}
                  onClick={() => {
                    if (typeof window !== 'undefined' && (window as any).ttq) {
                      (window as any).ttq.track('ClickButton', {
                        content_name: 'Watch - theoremreach Survey',
                        content_category: 'Survey Card'
                      });
                    }
                  }}
                  className="block w-full bg-green-600 hover:bg-green-700 text-center text-black font-bold py-3 rounded-lg transition-all active:scale-95 transform duration-100"
                >
                  Watch
                </a>
              </div>
            </div>

            {/* Revenue Wall Card */}
            <div className="flex-shrink-0 w-[280px] sm:w-[320px] bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/5 hover:border-green-500/30 transition-all group snap-start">
              <div className="relative aspect-[9/16] bg-gradient-to-br from-orange-900/20 to-yellow-900/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Survey Provider Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                    REVENUE WALL
                  </span>
                </div>

                {/* Popularity Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-orange-600/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
                    <span>Popularity</span>
                    <span className="text-yellow-300">⚡ 26</span>
                  </div>
                </div>

                {/* Survey Icon/Visual */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-orange-500/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-16 h-16 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
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
                        content_name: 'Watch - Revenue Wall Survey',
                        content_category: 'Survey Card'
                      });
                    }
                  }}
                  className="block w-full bg-green-600 hover:bg-green-700 text-center text-black font-bold py-3 rounded-lg transition-all active:scale-95 transform duration-100"
                >
                  Watch
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
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    </svg>
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

                {/* Survey Icon/Visual */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-cyan-500/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-16 h-16 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold text-white mb-3">BitLabs</h3>
                <div className="mb-4">
                  <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">Potential Earnings</div>
                  <div className="text-2xl font-bold text-green-500">
                    $2.20 <span className="text-sm text-slate-400">/ question</span>
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
                  Watch
                </a>
              </div>
            </div>

            {/* Freecash Surveys Card */}
            <div className="flex-shrink-0 w-[280px] sm:w-[320px] bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/5 hover:border-green-500/30 transition-all group snap-start">
              <div className="relative aspect-[9/16] bg-gradient-to-br from-green-900/20 to-emerald-900/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Survey Provider Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                    Freecash Surveys
                  </span>
                </div>

                {/* Popularity Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-green-600/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
                    <span>Popularity</span>
                    <span className="text-yellow-300">✨ 5</span>
                  </div>
                </div>

                {/* Survey Icon/Visual */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-green-500/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-16 h-16 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold text-white mb-3">Freecash Surveys</h3>
                <div className="mb-4">
                  <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">Potential Earnings</div>
                  <div className="text-2xl font-bold text-green-500">
                    $1.50 <span className="text-sm text-slate-400">/ question</span>
                  </div>
                </div>
                <a
                  href={affiliateLink}
                  onClick={() => {
                    if (typeof window !== 'undefined' && (window as any).ttq) {
                      (window as any).ttq.track('ClickButton', {
                        content_name: 'Watch - Freecash Survey',
                        content_category: 'Survey Card'
                      });
                    }
                  }}
                  className="block w-full bg-green-600 hover:bg-green-700 text-center text-black font-bold py-3 rounded-lg transition-all active:scale-95 transform duration-100"
                >
                  Watch
                </a>
              </div>
            </div>

            {/* lootably research Card */}
            <div className="flex-shrink-0 w-[280px] sm:w-[320px] bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/5 hover:border-green-500/30 transition-all group snap-start">
              <div className="relative aspect-[9/16] bg-gradient-to-br from-red-900/20 to-pink-900/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Survey Provider Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
                    </svg>
                    lootably research
                  </span>
                </div>

                {/* Popularity Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-red-600/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
                    <span>Popularity</span>
                    <span className="text-yellow-300">📊 8</span>
                  </div>
                </div>

                {/* Survey Icon/Visual */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-red-500/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-16 h-16 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold text-white mb-3">lootably research</h3>
                <div className="mb-4">
                  <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">Potential Earnings</div>
                  <div className="text-2xl font-bold text-green-500">
                    $1.90 <span className="text-sm text-slate-400">/ question</span>
                  </div>
                </div>
                <a
                  href={affiliateLink}
                  onClick={() => {
                    if (typeof window !== 'undefined' && (window as any).ttq) {
                      (window as any).ttq.track('ClickButton', {
                        content_name: 'Watch - lootably research Survey',
                        content_category: 'Survey Card'
                      });
                    }
                  }}
                  className="block w-full bg-green-600 hover:bg-green-700 text-center text-black font-bold py-3 rounded-lg transition-all active:scale-95 transform duration-100"
                >
                  Watch
                </a>
              </div>
            </div>

            {/* Pollfish Card */}
            <div className="flex-shrink-0 w-[280px] sm:w-[320px] bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/5 hover:border-green-500/30 transition-all group snap-start">
              <div className="relative aspect-[9/16] bg-gradient-to-br from-rose-900/20 to-red-900/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Survey Provider Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                    </svg>
                    Pollfish
                  </span>
                </div>

                {/* Popularity Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-rose-600/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
                    <span>Popularity</span>
                    <span className="text-yellow-300">💬 5</span>
                  </div>
                </div>

                {/* Survey Icon/Visual */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-rose-500/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-16 h-16 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
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
                        content_name: 'Watch - Pollfish Survey',
                        content_category: 'Survey Card'
                      });
                    }
                  }}
                  className="block w-full bg-green-600 hover:bg-green-700 text-center text-black font-bold py-3 rounded-lg transition-all active:scale-95 transform duration-100"
                >
                  Watch
                </a>
              </div>
            </div>

            {/* inBrain.ai Card */}
            <div className="flex-shrink-0 w-[280px] sm:w-[320px] bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/5 hover:border-green-500/30 transition-all group snap-start">
              <div className="relative aspect-[9/16] bg-gradient-to-br from-indigo-900/20 to-violet-900/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Survey Provider Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                    </svg>
                    inBrain.ai
                  </span>
                </div>

                {/* Popularity Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-indigo-600/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
                    <span>Popularity</span>
                    <span className="text-yellow-300">🧠 8</span>
                  </div>
                </div>

                {/* Survey Icon/Visual */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-indigo-500/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-16 h-16 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold text-white mb-3">inBrain.ai</h3>
                <div className="mb-4">
                  <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">Potential Earnings</div>
                  <div className="text-2xl font-bold text-green-500">
                    $2.10 <span className="text-sm text-slate-400">/ question</span>
                  </div>
                </div>
                <a
                  href={affiliateLink}
                  onClick={() => {
                    if (typeof window !== 'undefined' && (window as any).ttq) {
                      (window as any).ttq.track('ClickButton', {
                        content_name: 'Watch - inBrain.ai Survey',
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
