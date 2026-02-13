"use client";

import { useState } from "react";
import { prompts, tools } from "@/lib/data";
import { useMonetag } from "@/hooks/useMonetag";
import Navbar from "@/components/Navbar";
import { Copy, Check, ExternalLink, Zap } from "lucide-react";

export default function Home() {
  const [filter, setFilter] = useState("All");
  const { handleSmartAction, copiedId } = useMonetag();

  const categories = ["All", "Business", "Writing", "Art", "Coding", "Legal"];

  // Filter Logic
  const filteredPrompts = filter === "All" 
    ? prompts 
    : prompts.filter(p => p.category === filter);
    
  const filteredTools = filter === "All" 
    ? tools 
    : tools.filter(t => t.category === filter);

  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Unlock the Power of <span className="text-primary">AI Tools</span>
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Copy the best prompts for ChatGPT & Midjourney or find free AI tools. 
            Updated daily for USA professionals.
          </p>
          
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat
                    ? "bg-primary text-white shadow-lg shadow-blue-500/30"
                    : "bg-gray-100 text-slate-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        
        {/* PROMPTS SECTION */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Zap className="h-6 w-6 text-yellow-500" /> Trending Prompts
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrompts.map((prompt) => (
              <div key={prompt.id} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition duration-300 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-blue-50 text-blue-700 text-xs font-bold px-2 py-1 rounded uppercase">
                    {prompt.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{prompt.title}</h3>
                <p className="text-slate-500 text-sm mb-4 line-clamp-3 bg-gray-50 p-3 rounded italic border border-gray-100">
                  "{prompt.content}"
                </p>
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <button
                    onClick={() => handleSmartAction("copy", prompt.content, prompt.id)}
                    className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-lg font-semibold transition-all ${
                      copiedId === prompt.id
                        ? "bg-green-500 text-white"
                        : "bg-slate-900 text-white hover:bg-slate-800"
                    }`}
                  >
                    {copiedId === prompt.id ? (
                      <> <Check className="h-4 w-4" /> Copied! </>
                    ) : (
                      <> <Copy className="h-4 w-4" /> Copy Prompt </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TOOLS SECTION */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Bot className="h-6 w-6 text-primary" /> Best Free AI Tools
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map((tool) => (
              <div key={tool.id} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition group">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold text-slate-800 group-hover:text-primary transition">
                    {tool.name}
                  </h3>
                  <span className={`text-xs font-bold px-2 py-1 rounded ${tool.isFree ? "bg-green-100 text-green-700" : "bg-purple-100 text-purple-700"}`}>
                    {tool.isFree ? "FREE" : "PAID"}
                  </span>
                </div>
                <p className="text-slate-600 text-sm mb-6">{tool.description}</p>
                <button
                  onClick={() => handleSmartAction("visit", tool.url)}
                  className="w-full border border-gray-300 text-slate-700 py-2 rounded-lg font-medium hover:bg-gray-50 flex items-center justify-center gap-2"
                >
                  Visit Tool <ExternalLink className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-500 text-sm">
          <p>© 2024 AI MasterHub. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="#" className="hover:text-slate-900">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900">Disclaimer</a>
            <a href="#" className="hover:text-slate-900">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
