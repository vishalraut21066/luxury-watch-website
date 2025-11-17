import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useMediaQuery } from "react-responsive";

const HeroSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  useGSAP(() => {
    const titleSplit = SplitText.create(".hero-title", {
      type: "chars",
    });

    const tl = gsap.timeline({
      delay: 1,
    });

    tl.to(".hero-content", {
      opacity: 1,
      y: 0,
      ease: "power1.inOut",
    })
      .to(
        ".hero-text-scroll",
        {
          duration: 1,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "circ.out",
        },
        "-=0.5"
      )
      .from(
        titleSplit.chars,
        {
          yPercent: 200,
          stagger: 0.02,
          ease: "power2.out",
        },
        "-=0.5"
      );

    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-container",
        start: "1% top",
        end: "bottom top",
        scrub: true,
      },
    });
    heroTl.to(".hero-container", {
      rotate: 7,
      scale: 0.9,
      yPercent: 30,
      ease: "power1.inOut",
    });
  });

  return (
    <section className="bg-main-bg">
      <div className="hero-container">
        {isTablet ? (
          <>
            {isMobile && (
              <img
                src="/images/hero/hero-bg.jpg"
                className="absolute bottom-40 size-full object-cover opacity-10"
                alt="Watch Background"
              />
            )}
            <img
              src="/images/hero/hero-watch.jpg"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 h-2/3 object-contain"
              alt="Luxury Watch"
            />
          </>
        ) : (
          <img
            src="/images/hero/hero-bg.jpg"
            className="absolute inset-0 w-full h-full object-cover opacity-15"
            alt="Watch Background"
          />
        )}
        
        <div className="hero-content opacity-0">
          <div className="overflow-hidden">
            <h1 className="hero-title">Timeless Elegance</h1>
          </div>
          
          <div
            style={{
              clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
            }}
            className="hero-text-scroll"
          >
            <div className="hero-subtitle">
              <h1>Swiss Precision</h1>
            </div>
          </div>

          <h2>
            Discover the art of Swiss watchmaking. Each Chronos timepiece is a masterpiece 
            of precision engineering and timeless design, crafted for those who appreciate excellence.
          </h2>

          <div className="hero-button">
            <p>Explore Collection</p>
          </div>

          {/* Trust Badges */}
          <div className="mt-10 flex items-center justify-center gap-8 text-dark-brown/60 text-sm font-paragraph">
            <div className="flex items-center gap-2">
              <span className="text-lg">✓</span>
              <span>Swiss Made</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg">✓</span>
              <span>Lifetime Warranty</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg">✓</span>
              <span>Free Shipping</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator hidden md:block">
          <div className="w-6 h-10 border-2 border-dark-brown rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-dark-brown rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
