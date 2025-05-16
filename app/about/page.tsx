"use client";

import BioDescription from "@/components/about/BioDescription";
import BioHighlight from "@/components/about/BioHighlight";
import BioImage from "@/components/about/BioImage";
import Header from "@/components/common/header";
import HeroSection from "@/components/common/HeroSection";
import Navbar from "@/components/common/Navbar";



export default function AboutPage() {
  return (
    <div className="w-full max-w-7xl mx-auto font-sans">
      <Header />
      <Navbar active="About" />

      <HeroSection
        title="About - Notary Nexus & Apostille Services"
        imageUrl="/pictures/office-building.png"
      />

      {/* <section className="flex flex-col justify-between mt-[70px] mx-[24px]">
        <div className="flex flex-col md:flex-row justify-between  ">
        <BioHighlight />
        <BioImage />
        </div>
        <BioDescription />
      </section> */}



      <section className="bg-gradient-to-b from-white via-[#06742799] to-white px-6 lg:px-16 py-12 max-w-7xl mx-auto font-sans rounded-3xl shadow-xl">
        {/* Top row: highlight + image */}
        <div className="  flex flex-col sm:flex-row  justify-between items-center sm:items-start">
          {/* Bio Highlight */}
          <BioHighlight/>

          {/* Bio Image */}
          <BioImage/>
        </div>

        {/* Bio Details Below */}
        <BioDescription/>
      </section>


    </div>
  );
}
