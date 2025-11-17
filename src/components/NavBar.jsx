import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  useGSAP(() => {
    gsap.from(".nav-bar", {
      y: -100,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: "power2.out",
    });
  });

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        // Always show navbar at top
        setIsVisible(true);
      } else if (currentScrollY > lastScroll && currentScrollY > 100) {
        // Scrolling down - hide navbar
        setIsVisible(false);
      } else if (currentScrollY < lastScroll) {
        // Scrolling up - show navbar
        setIsVisible(true);
      }

      lastScroll = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`nav-bar fixed left-0 w-full z-50 bg-cream/95 backdrop-blur-md border-b border-dark-brown/10 transition-transform duration-300 ease-in-out ${
        isVisible ? 'top-0 translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container mx-auto px-5 py-5 flex justify-between items-center">
        <div className="font-sans text-2xl font-bold tracking-tight text-dark-brown">
          CHRONOS
        </div>
        
        <div className="hidden md:flex gap-8 font-paragraph text-sm text-dark-brown">
          <a href="#collection" className="hover:text-light-brown transition-colors">Collection</a>
          <a href="#heritage" className="hover:text-light-brown transition-colors">Heritage</a>
          <a href="#craftsmanship" className="hover:text-light-brown transition-colors">Craftsmanship</a>
          <a href="#contact" className="hover:text-light-brown transition-colors">Contact</a>
        </div>

        <button className="bg-dark-brown text-cream px-6 py-2 rounded-full text-sm font-semibold hover:bg-mid-brown transition-colors">
          Explore
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
