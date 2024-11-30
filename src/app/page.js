"use client";

// src/app/admin/dashboard.js
import { useState, useEffect } from "react";
import WebsiteCard from "@/components/WebsiteCard";
import Header from "@/components/Header";

export default function AdminDashboard() {
  const [websites, setWebsites] = useState([]);

  useEffect(() => {
    // Simulated fetch call - replace this with Appwrite fetch
    const fetchWebsites = () => {
      setWebsites([
        {
          id: 1,
          name: "OpenAI",
          description: "AI for everyone.",
          url: "https://openai.com",
          rating: 4.8,
          reviews: 1200,
          specialization: "General AI, NLP, Research",
        },
        {
          id: 2,
          name: "MidJourney",
          description: "AI image generation.",
          url: "https://midjourney.com",
          rating: 4.6,
          reviews: 850,
          specialization: "Generative Art, Image Processing",
        },
        // Add more website data
      ]);
    };
    fetchWebsites();
  }, []);

  return (
    <>
      <Header />
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Know Your Bots</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {websites.map((website) => (
            <WebsiteCard key={website.id} website={website} />
          ))}
        </div>
      </div>
    </>
  );
}
