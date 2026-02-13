import Link from "next/link";
import { Bot, Search } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="flex items-center gap-2">
            <Bot className="h-8 w-8 text-primary" />
            <span className="font-bold text-xl text-slate-900">AI MasterHub</span>
          </Link>
          <div className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
            <Link href="#" className="hover:text-primary transition">Prompts</Link>
            <Link href="#" className="hover:text-primary transition">Tools</Link>
            <Link href="#" className="hover:text-primary transition">Guides</Link>
          </div>
          <button className="p-2 text-slate-500 hover:text-primary">
            <Search className="h-5 w-5" />
          </button>
        </div>
      </div>
    </nav>
  );
}
