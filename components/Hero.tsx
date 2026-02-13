import { Sparkles, ArrowRight, Star } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative pt-24 pb-12 lg:pt-40 lg:pb-24 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-400/20 rounded-full blur-[120px] -z-10 opacity-50 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 text-center z-10 relative">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 border border-gray-200 backdrop-blur-sm shadow-sm mb-8 animate-fade-in hover:scale-105 transition-transform cursor-default">
          <Star className="h-3.5 w-3.5 text-yellow-500 fill-yellow-500" />
          <span className="text-xs font-semibold tracking-wide text-slate-600 uppercase">
            Trusted by 10,000+ Creators
          </span>
        </div>
        
        {/* Main Headline - Responsive Text Size */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
          Unlock the Power of <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            AI Intelligence
          </span>
        </h1>
        
        <p className="text-base sm:text-lg text-slate-500 mb-8 max-w-xl mx-auto leading-relaxed">
          Access a curated library of premium prompts and tools. 
          Updated daily for professionals, developers, and creators.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full px-4">
          <button className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800 transition vip-shadow flex items-center justify-center gap-2">
            Get Started <ArrowRight className="h-4 w-4" />
          </button>
          <button className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white text-slate-700 font-medium border border-gray-200 hover:bg-gray-50 transition shadow-sm flex items-center justify-center">
            View All Tools
          </button>
        </div>
      </div>
    </div>
  );
}
