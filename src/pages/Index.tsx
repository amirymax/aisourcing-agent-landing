import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
import HowItWorks from "@/components/HowItWorks";
import SocialProof from "@/components/SocialProof";
import EmailCapture from "@/components/EmailCapture";
import PricingTeaser from "@/components/PricingTeaser";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <ValueProps />
        <HowItWorks />
        <SocialProof />
        <EmailCapture />
        <PricingTeaser />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
