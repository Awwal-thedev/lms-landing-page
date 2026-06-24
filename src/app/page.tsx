import Navbar from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Problems } from "@/components/sections/Problems";
import { Solution } from "@/components/sections/Solution";
import { Steps } from "@/components/sections/Steps";
import { Advantage } from "@/components/sections/Advantage";
import { Specific } from "@/components/sections/Specific";
import { Cta } from "@/components/sections/Cta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-surface">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Problems />
        <Solution />
        <Steps />
        <Advantage />
        <Specific />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
