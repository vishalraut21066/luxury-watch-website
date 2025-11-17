import NavBar from "./components/NavBar";
import HeroSection from "./sections/HeroSection";
import MessageSection from "./sections/MessageSection";
import CollectionSection from "./sections/CollectionSection";
import HeritageSection from "./sections/HeritageSection";
import WhyChooseSection from "./sections/WhyChooseSection";
import CraftsmanshipSection from "./sections/CraftsmanshipSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import FooterSection from "./sections/FooterSection";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  });

  return (
    <main>
      <NavBar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroSection />
          <MessageSection />
          <CollectionSection />
          <HeritageSection />
          <WhyChooseSection />

          <div>
            <CraftsmanshipSection />
            <TestimonialsSection />
          </div>

          <FooterSection />
        </div>
      </div>
    </main>
  );
};

export default App;
