"use client";

import { useState } from "react";
import { Prompt, Tool } from "@/lib/types";
import { useMonetag } from "@/hooks/useMonetag";
import { Copy, Check, ExternalLink, Search, Sparkles, Command } from "lucide-react";

interface FeedProps {
  initialPrompts: Prompt[];
  initialTools: Tool[];
}

export default function Feed({ initialPrompts, initialTools }: FeedProps) {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const { handleSmartAction, copiedId } = useMonetag();
  const [activeTab, setActiveTab] = useState<"prompts" | "tools">("prompts");

  const categories = ["All", "Business", "Writing", "Art", "Coding", "Legal", "Marketing"];

  const filteredPrompts = initialPrompts.filter(p => 
    (filter === "All" || p.category === filter) &&
    (p.title.toLowerCase().includes(search.toLowerCase()) || p.content.toLowerCase().includes(search.toLowerCase()))
  );

  const filteredTools = initialTools.filter(t => 
    (filter === "All" || t.category === filter) &&
    (t.name.toLowerCase().includes(search.toLowerCase()) || t.description.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-24 -mt-4 relative z-20">
      
      {/* CONTROL CENTER (Search + Filters) */}
      <div className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl shadow-xl shadow-slate-200/40 p-2 mb-10 sticky top-4 z-40">
        
        {/* Top Row: Tabs & Search */}
        <div className="flex flex-col md:flex-row gap-2">
          {/* Toggle Switch */}
          <div className="bg-slate-100/80 p-1.5 rounded-2xl flex shrink-0">
            {["prompts", "tools"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as "prompts" | "tools")}
                className={`flex-1 px-6 py-2.5 rounded-xl text-sm font-semibold capitalize transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-white text-slate-900 shadow-sm ring-1 ring-black/5"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative flex-grow group">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
            </div>
            <input 
              type="text" 
              placeholder={`Search ${activeTab}...`}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-full min-h-[50px] pl-10 pr-4 bg-white/50 border-0 rounded-2xl focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all outline-none text-sm text-slate-700 placeholder:text-slate-400"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-1 px-1.5 py-1 rounded border border-slate-200 bg-slate-50">
              <Command className="h-3 w-3 text-slate-400" />
              <span className="text-[10px] text-slate-400 font-medium">K</span>
            </div>
          </div>
        </div>

        {/* Categories (Horizontal Scroll for Mobile) */}
        <div className="mt-2 flex gap-2 overflow-x-auto no-scrollbar py-2 px-1 mask-linear">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-medium transition-all border ${
                filter === cat
                  ? "bg-slate-900 text-white border-slate-900 shadow-md shadow-slate-900/20"
                  : "bg-white/50 text-slate-600 border-transparent hover:bg-white hover:border-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* GRID SECTION */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        
        {/* PROMPTS */}
        {activeTab === "prompts" && filteredPrompts.map((prompt) => (
          <div key={prompt.id} className="group relative bg-white rounded-2xl border border-slate-100 p-5 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col h-full">
            {/* Hover Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-3">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-50 border border-slate-100 text-[10px] font-bold text-slate-500 uppercase tracking-wide">
                  <Sparkles className="h-3 w-3 text-blue-500" /> {prompt.category}
                </span>
              </div>

              <h3 className="font-bold text-slate-800 text-lg mb-2 leading-tight">{prompt.title}</h3>
              
              <div className="bg-slate-50/80 p-3.5 rounded-xl border border-slate-100/80 mb-5 flex-grow group-hover:bg-white/80 transition-colors">
                <p className="text-slate-600 text-sm font-mono leading-relaxed line-clamp-4">
                  "{prompt.content}"
                </p>
              </div>

              <button
                onClick={() => handleSmartAction("copy", prompt.content, prompt.id)}
                className={`w-full py-2.5 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition-all ${
                  copiedId === prompt.id
                    ? "bg-emerald-50 text-emerald-600 border border-emerald-200"
                    : "bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-slate-200"
                }`}
              >
                {copiedId === prompt.id ? (
                  <> <Check className="h-4 w-4" /> Copied </>
                ) : (
                  <> <Copy className="h-4 w-4" /> Copy Prompt </>
                )}
              </button>
            </div>
          </div>
        ))}

        {/* TOOLS */}
        {activeTab === "tools" && filteredTools.map((tool) => (
          <div key={tool.id} className="group bg-white rounded-2xl border border-slate-100 p-5 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col h-full">
            <div className="flex justify-between items-start mb-4">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 flex items-center justify-center text-xl font-bold text-blue-600">
                {tool.name.charAt(0)}
              </div>
              <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold border ${tool.isFree ? "bg-emerald-50 text-emerald-700 border-emerald-100" : "bg-purple-50 text-purple-700 border-purple-100"}`}>
                {tool.isFree ? "FREE" : "PAID"}
              </span>
            </div>

            <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-blue-600 transition-colors">{tool.name}</h3>
            <p className="text-slate-500 text-sm mb-6 leading-relaxed flex-grow">{tool.description}</p>

            <button
              onClick={() => handleSmartAction("visit", tool.url)}
              className="w-full py-2.5 rounded-lg border border-slate-200 text-slate-700 text-sm font-semibold hover:bg-slate-50 hover:text-slate-900 transition-all flex items-center justify-center gap-2"
            >
              Visit Tool <ExternalLink className="h-3.5 w-3.5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
