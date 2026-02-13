"use client";

import { useState } from "react";

// ⚠️ YAHAN APNA MONETAG DIRECT LINK PASTE KAREIN
const DIRECT_LINK_URL = "https://example.com/your-direct-link"; 

export const useMonetag = () => {
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const handleSmartAction = (
    type: "copy" | "visit",
    payload: string,
    id?: number
  ) => {
    // 1. Pehle Monetag Direct Link New Tab mein kholein
    if (typeof window !== "undefined") {
      window.open(DIRECT_LINK_URL, "_blank");
    }

    // 2. Phir User ka kaam karein (Copy ya Visit)
    if (type === "copy") {
      navigator.clipboard.writeText(payload);
      if (id) {
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000); // Reset "Copied" status
      }
    } else if (type === "visit") {
      // Thoda delay taki ad pehle load ho jaye
      setTimeout(() => {
        window.location.href = payload;
      }, 500);
    }
  };

  return { handleSmartAction, copiedId };
};
