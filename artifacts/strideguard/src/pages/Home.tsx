import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MRDemo } from "@/components/MRDemo";
import { LabelDemo } from "@/components/LabelDemo";
import { StrideTable } from "@/components/StrideTable";
import { Architecture } from "@/components/Architecture";
import { Installation } from "@/components/Installation";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main>
        <Hero />
        <MRDemo />
        <StrideTable />
        <LabelDemo />
        <Architecture />
        <Installation />
      </main>

      <Footer />
    </div>
  );
}
