--- START OF FILE prompt-genie-pro-main/components/Navbar.tsx ---
import Link from "next/link";
import { Bot, Sparkles, PlusCircle } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 top-0 start-0 glass transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo Area */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-blue-600 p-2 rounded-lg group-hover:bg-blue-700 transition">
              <Bot className="h-6 w-6 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">
              AI MasterHub
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition">Prompts</Link>
            <Link href="#" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition">Tools</Link>
            <Link href="#" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition">Blog</Link>
          </div>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <button className="hidden md:flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-800 transition shadow-lg shadow-slate-200">
              <PlusCircle className="h-4 w-4" />
              Submit Tool
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
