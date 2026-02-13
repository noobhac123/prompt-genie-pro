"use client";

import { useState } from "react";
import { Prompt, Tool } from "@/lib/types";
import { useMonetag } from "@/hooks/useMonetag";
import { Copy, Check, ExternalLink, Zap, Search, Filter } from "lucide-react";

interface FeedProps {
  initialPrompts: Prompt[];
  initialTools: Tool[];
}

export default function Feed({ initialPrompts, initialTools }: FeedProps) {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const { handleSmartAction, copiedId } = useMonetag();
  const [activeTab, setActiveTab] = useState<"prompts" | "tools">("prompts");

  const categories = ["All", "Business", "Writing", "Art", "Coding", "Legal"];

  // Advanced Filtering Logic
  const filteredPrompts = initialPrompts.filter(p => {
    const matchesCategory = filter === "All" || p.category === filter;
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase()) || 
                          p.content.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const filteredTools = initialTools.filter(t => {
    const matchesCategory = filter === "All" || t.category === filter;
    const matchesSearch = t.name.toLowerCase().includes(search.toLowerCase()) || 
                          t.description.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 pb-24">
      
      {/* Search & Filter Bar */}
      <div className="sticky top-20 z-40 bg-white/80 backdrop-blur-md p-4 rounded-2xl border border-gray-200 shadow-sm mb-10">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
          
          {/* Search Input */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search prompts or tools..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            />
          </div>

          {/* Type Toggle */}
          <div className="flex bg-gray-100 p-1 rounded-lg">
            <button 
              onClick={() => setActiveTab("prompts")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${activeTab === "prompts" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
            >
              Prompts
            </button>
            <button 
              onClick={() => setActiveTab("tools")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${activeTab === "tools" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
            >
              AI Tools
            </button>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100">
          <span className="flex items-center text-xs font-semibold text-slate-400 uppercase mr-2">
            <Filter className="h-3 w-3 mr-1" /> Filter:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all border ${
                filter === cat
                  ? "bg-slate-900 text-white border-slate-900"
                  : "bg-white text-slate-600 border-gray-200 hover:border-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* CONTENT GRID */}
      <div className="min-h-[400px]">
        
        {/* PROMPTS GRID */}
        {activeTab === "prompts" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in zoom-in duration-500">
            {filteredPrompts.length === 0 ? (
              <div className="col-span-full text-center py-12 text-slate-500">No prompts found.</div>
            ) : (
              filteredPrompts.map((prompt) => (
                <div key={prompt.id} className="group bg-white rounded-2xl border border-gray-100 p-6 shadow-sm card-hover relative overflow-hidden flex flex-col">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition">
                    <Zap className="h-24 w-24 text-yellow-400 rotate-12" />
                  </div>
                  
                  <div className="flex justify-between items-center mb-4">
                    <span className="bg-blue-50 text-blue-700 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                      {prompt.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-slate-800 mb-3 leading-snug">{prompt.title}</h3>
                  
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 mb-6 flex-grow">
                    <p className="text-slate-600 text-sm font-mono line-clamp-4">
                      {prompt.content}
                    </p>
                  </div>
                  
                  <button
                    onClick={() => handleSmartAction("copy", prompt.content, prompt.id)}
                    className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold transition-all active:scale-95 ${
                      copiedId === prompt.id
                        ? "bg-green-500 text-white shadow-lg shadow-green-200"
                        : "bg-white text-slate-700 border border-gray-200 hover:border-slate-300 hover:bg-slate-50"
                    }`}
                  >
                    {copiedId === prompt.id ? (
                      <> <Check className="h-4 w-4" /> Copied! </>
                    ) : (
                      <> <Copy className="h-4 w-4" /> Copy Prompt </>
                    )}
                  </button>
                </div>
              ))
            )}
          </div>
        )}

        {/* TOOLS GRID */}
        {activeTab === "tools" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in slide-in-from-bottom-4 duration-500">
            {filteredTools.length === 0 ? (
              <div className="col-span-full text-center py-12 text-slate-500">No tools found.</div>
            ) : (
              filteredTools.map((tool) => (
                <div key={tool.id} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm card-hover flex flex-col h-full">
                  <div className="flex justify-between items-start mb-4">
                    <div className="h-10 w-10 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center text-blue-600 font-bold text-xl">
                      {tool.name.charAt(0)}
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-1 rounded-full border ${tool.isFree ? "bg-green-50 text-green-700 border-green-100" : "bg-purple-50 text-purple-700 border-purple-100"}`}>
                      {tool.isFree ? "FREE" : "PAID"}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-slate-800 mb-2">{tool.name}</h3>
                  <p className="text-slate-500 text-sm mb-6 flex-grow leading-relaxed">{tool.description}</p>
                  
                  <button
                    onClick={() => handleSmartAction("visit", tool.url)}
                    className="w-full bg-slate-900 text-white py-3 rounded-xl font-medium hover:bg-slate-800 flex items-center justify-center gap-2 transition-all shadow-lg shadow-slate-200"
                  >
                    Visit Website <ExternalLink className="h-4 w-4" />
                  </button>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}
