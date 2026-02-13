export interface Prompt {
  id: number;
  title: string;
  category: string;
  content: string;
  is_trending?: boolean;
}

export interface Tool {
  id: number;
  name: string;
  description: string;
  category: string;
  url: string;
  isFree: boolean;
  image_url?: string;
}
