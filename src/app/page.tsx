import Footer from "@/components/footer";
import Header from "@/components/header";
import Features from "@/components/home/features";
import FinalCta from "@/components/home/final-cta";
import Hero from "@/components/home/hero";
import HowItWorks from "@/components/home/how-it-works";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
