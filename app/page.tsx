import { supabase } from "@/lib/supabase";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Feed from "@/components/Feed";
import { Prompt, Tool } from "@/lib/types";

export const revalidate = 60;

export default async function Home() {
  const promptsPromise = supabase.from('prompts').select('*');
  const toolsPromise = supabase.from('tools').select('*');

  const [promptsRes, toolsRes] = await Promise.all([promptsPromise, toolsPromise]);

  const prompts = (promptsRes.data as Prompt[]) || [];
  const tools = (toolsRes.data as Tool[]) || [];

  return (
    <main className="min-h-screen bg-slate-50/50 selection:bg-blue-100">
      <Navbar />
      <Hero />
      <Feed initialPrompts={prompts} initialTools={tools} />
      
      <footer className="bg-white border-t border-gray-200 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-bold text-slate-900 text-lg">AI MasterHub</h3>
            <p className="text-slate-500 text-sm mt-1">Empowering creators with AI magic.</p>
          </div>
          <div className="flex gap-6 text-sm text-slate-600 font-medium">
            <a href="#" className="hover:text-blue-600">Privacy</a>
            <a href="#" className="hover:text-blue-600">Terms</a>
            <a href="#" className="hover:text-blue-600">Twitter</a>
          </div>
          <div className="text-slate-400 text-sm">
            © 2024 All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
