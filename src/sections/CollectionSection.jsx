import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { watchCollection } from "../constants";

const CollectionSection = () => {
  useGSAP(() => {
    const firstSplit = SplitText.create(".first-text-split h1", {
      type: "chars",
    });
    const secondSplit = SplitText.create(".second-text-split h1", {
      type: "chars",
    });

    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".collection-section",
        start: "top 80%",
      },
    });

    titleTl
      .from(firstSplit.chars, {
        yPercent: 100,
        stagger: 0.02,
        ease: "power2.out",
      })
      .to(
        ".collection-text-scroll",
        {
          duration: 1,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "circ.out",
        },
        "-=0.5"
      )
      .from(
        secondSplit.chars,
        {
          yPercent: 100,
          stagger: 0.02,
          ease: "power2.out",
        },
        "-=0.3"
      );

    // Simple horizontal scroll - Extended duration
    const slider = gsap.timeline({
      scrollTrigger: {
        trigger: ".slider-wrapper",
        start: "top top",
        end: "+=300%",
        scrub: 1,
        pin: true,
        pinSpacing: true,
      },
    });

    slider.to(".watches", {
      xPercent: -70,
      ease: "none",
    });
  });

  const getCardStyle = (color) => {
    const styles = {
      silver: {
        bg: "linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%)",
        border: "#d4d4d4",
      },
      gold: {
        bg: "linear-gradient(135deg, #f4e4c1 0%, #e8d4a8 100%)",
        border: "#d4af37",
      },
      black: {
        bg: "linear-gradient(135deg, #3a3a3a 0%, #2d2520 100%)",
        border: "#1a1918",
      },
    };
    return styles[color] || styles.silver;
  };

  return (
    <section className="collection-section min-h-dvh bg-cream">
      {/* Title Section */}
      <div className="h-screen flex flex-col justify-center items-center relative z-20 px-5">
        <div className="general-title flex flex-col justify-center items-center md:gap-24 gap-14">
          <div className="first-text-split overflow-hidden">
            <h1>Our Signature</h1>
          </div>
          <div
            style={{
              clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
            }}
            className="collection-text-scroll"
          >
            <div className="bg-light-brown pb-5 px-5">
              <h2 className="text-cream">Collection</h2>
            </div>
          </div>
          <div className="second-text-split overflow-hidden">
            <h1>Timepieces</h1>
          </div>
        </div>
        <p className="text-center font-paragraph text-lg mt-10 max-w-2xl text-dark-brown/80">
          Each watch in our collection represents the pinnacle of Swiss craftsmanship, 
          designed for discerning individuals who value precision and elegance.
        </p>
      </div>

      {/* Watches Slider */}
      <div className="slider-wrapper">
        <div className="watches">
          {watchCollection.map((watch) => {
            const cardStyle = getCardStyle(watch.color);
            return (
              <div
                key={watch.id}
                className={`watch-card ${watch.rotation}`}
                style={{ 
                  background: cardStyle.bg,
                  borderColor: cardStyle.border
                }}
              >
                {/* Watch Image */}
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <img
                    src={watch.image}
                    alt={watch.name}
                    className="w-full h-full object-contain"
                    style={{
                      filter: "drop-shadow(0 20px 40px rgba(0, 0, 0, 0.4))",
                      maxHeight: "70%",
                    }}
                  />
                </div>

                {/* Price Badge */}
                <div className="absolute top-8 right-8 z-10">
                  <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border border-dark-brown/10">
                    <p className="text-dark-brown font-bold text-sm">{watch.price}</p>
                  </div>
                </div>

                {/* Watch Details */}
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-10">
                  <p className={`text-sm font-paragraph mb-2 ${watch.color === 'black' ? 'text-cream/80' : 'text-dark-brown/80'}`}>
                    {watch.tagline}
                  </p>
                  <h1 
                    className={`md:text-5xl text-3xl font-bold uppercase tracking-tighter mb-3 ${watch.color === 'black' ? 'text-cream' : 'text-dark-brown'}`}
                    style={{
                      textShadow: watch.color === 'black' 
                        ? "0 4px 12px rgba(0, 0, 0, 0.8)" 
                        : "0 2px 8px rgba(0, 0, 0, 0.2)"
                    }}
                  >
                    {watch.name}
                  </h1>
                  <p className={`text-sm font-paragraph mb-4 ${watch.color === 'black' ? 'text-cream/70' : 'text-dark-brown/70'}`}>
                    {watch.description}
                  </p>
                  <div className="flex gap-3 flex-wrap">
                    {watch.features.map((feature, idx) => (
                      <span 
                        key={idx}
                        className={`text-xs px-3 py-1 rounded-full border ${
                          watch.color === 'black' 
                            ? 'border-cream/30 text-cream/80' 
                            : 'border-dark-brown/20 text-dark-brown/70'
                        }`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CollectionSection;
