"use client";

import FaqList from "@/components/faq/FaqList";
import Header from "@/components/common/header";
import HeroSection from "@/components/common/HeroSection";
import Navbar from "@/components/common/Navbar";

 

export default function FAQPage() {
  return (
    <div className="w-screen max-w-7xl mx-auto font-sans">
      
      
      <Navbar active="FAQ" />

      <HeroSection
        title="FAQ"
        imageUrl="/pictures/office-building.png"
      />

      <FaqList />
    </div>
  );
}