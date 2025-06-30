
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import SpecialOffer from "@/components/SpecialOffer";
import Rooms from "@/components/Rooms";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Rooms />
      <SpecialOffer />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Index;
