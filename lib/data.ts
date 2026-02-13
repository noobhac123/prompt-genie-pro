// Mock Data - Isay JSON file se bhi fetch kar sakte hain
export const prompts = [
  {
    id: 1,
    title: "Real Estate Listing Description",
    category: "Business",
    content: "Write a luxury real estate listing description for a 4-bedroom house in Miami with ocean views, marble floors, and a smart home system. Use persuasive, high-end vocabulary.",
    tags: ["Real Estate", "Sales"],
  },
  {
    id: 2,
    title: "Legal Contract Review Assistant",
    category: "Legal",
    content: "Act as a corporate lawyer. Review the following clause for potential risks regarding liability: [Insert Clause Here]. Highlight red flags in bullet points.",
    tags: ["Legal", "Business"],
  },
  {
    id: 3,
    title: "Midjourney V6: Cyberpunk City",
    category: "Art",
    content: "/imagine prompt: A futuristic cyberpunk city street at night, neon rain, holographic advertisements, 8k resolution, cinematic lighting --ar 16:9 --v 6.0",
    tags: ["AI Art", "Midjourney"],
  },
  {
    id: 4,
    title: "Excel Formula Generator",
    category: "Coding",
    content: "Act as an Excel Expert. Create a formula that calculates the difference between Column A and Column B only if Column C contains the word 'Active'.",
    tags: ["Productivity", "Excel"],
  },
];

export const tools = [
  {
    id: 1,
    name: "Jasper AI Alternative",
    description: "Best free AI writing assistant for long-form blogs and SEO content.",
    category: "Writing",
    url: "https://chat.openai.com", // Yahan affiliate link bhi laga sakte ho
    isFree: true,
  },
  {
    id: 2,
    name: "Remove.bg",
    description: "Remove image backgrounds instantly for free using AI.",
    category: "Design",
    url: "https://www.remove.bg",
    isFree: true,
  },
  {
    id: 3,
    name: "Tome.app",
    description: "Create presentation slides in seconds with AI storytelling.",
    category: "Productivity",
    url: "https://tome.app",
    isFree: false,
  },
];
