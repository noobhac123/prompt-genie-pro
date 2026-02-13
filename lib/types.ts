--- START OF FILE prompt-genie-pro-main/lib/types.ts ---
export interface Prompt {
  id: number;
  title: string;
  category: string;
  content: string;
  is_trending?: boolean; // Database me ye column add kar sakte ho future me
}

export interface Tool {
  id: number;
  name: string;
  description: string;
  category: string;
  url: string;
  isFree: boolean;
  image_url?: string; // Future proofing for logos
}
