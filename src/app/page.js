// src/app/page.js

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import TackStack from "@/components/TackStack";
import Qualification from "@/components/Qualification";


export default function Home() {
  return (
    <main
      className="
      min-h-screen
      overflow-x-hidden
      transition-all
      duration-300

      bg-gradient-to-br
      from-white
      via-gray-100
      to-gray-200

      dark:from-[#050816]
      dark:via-[#0B1120]
      dark:to-[#111827]

      text-black
      dark:text-white
    "
    >
      
   
        <Navbar />
      <Hero />
      <About />
      <TackStack/>
      <Skills />
    <Qualification/>
      <Projects />
      <Contact />
      <Footer />
   
    </main>
  );
}