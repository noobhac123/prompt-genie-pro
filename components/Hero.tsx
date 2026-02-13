import { Sparkles, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="bg-grid-pattern absolute inset-0 opacity-[0.4] z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white z-0" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wide mb-6 animate-fade-in">
          <Sparkles className="h-3 w-3" /> Updated Daily
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight leading-tight">
          Supercharge your workflow with <span className="text-gradient">AI Magic</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Discover the best free AI prompts for ChatGPT, Midjourney & Notion. 
          Curated tools to help you build faster.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-3.5 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition shadow-xl shadow-blue-200 flex items-center justify-center gap-2">
            Explore Prompts <ArrowRight className="h-4 w-4" />
          </button>
          <button className="px-8 py-3.5 rounded-full bg-white text-slate-700 font-semibold border border-gray-200 hover:bg-gray-50 transition flex items-center justify-center">
            Browse Tools
          </button>
        </div>
      </div>
    </div>
  );
}
