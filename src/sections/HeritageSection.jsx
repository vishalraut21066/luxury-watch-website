import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { heritageFeatures } from "../constants";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const HeritageSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const [features, setFeatures] = useState(heritageFeatures);

  useEffect(() => {
    if (isMobile) {
      setFeatures(heritageFeatures.slice(0, 3));
    } else {
      setFeatures(heritageFeatures);
    }
  }, [isMobile]);

  useGSAP(() => {
    const titleSplit = SplitText.create(".heritage-title", {
      type: "chars",
    });
    const paragraphSplit = SplitText.create(".heritage-section p", {
      type: "words, lines",
      linesClass: "paragraph-line",
    });

    const contentTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".heritage-section",
        start: "top center",
      },
    });
    contentTl
      .from(titleSplit.chars, {
        yPercent: 100,
        stagger: 0.02,
        ease: "power2.out",
      })
      .from(paragraphSplit.words, {
        yPercent: 300,
        rotate: 3,
        ease: "power1.inOut",
        duration: 1,
        stagger: 0.01,
      });

    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".heritage-section",
        start: "top 80%",
      },
    });

    titleTl.to(".heritage-text-scroll", {
      duration: 1,
      opacity: 1,
      clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%)",
      ease: "power1.inOut",
    });
  });

  return (
    <section className="heritage-section">
      <img
        src="/images/heritage/heritage-banner.jpg"
        alt="Watch Detail"
        className="w-full object-cover"
      />

      <img
        src="/images/heritage/heritage-main.jpg"
        alt="Watch"
        className="big-img"
      />

      <div className="flex md:flex-row flex-col justify-between md:px-10 px-5 mt-14 md:mt-0">
        <div className="relative inline-block md:translate-y-20">
          <div className="general-title relative flex flex-col justify-center items-center gap-24">
            <div className="overflow-hidden place-self-start">
              <h1 className="heritage-title">
                Swiss Heritage
              </h1>
            </div>
            <div
              style={{
                clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
              }}
              className="heritage-text-scroll place-self-start"
            >
              <div className="bg-light-brown pb-5 md:pt-0 pt-3 md:px-5 px-3">
                <h2 className="text-cream">Since 1875</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="flex md:justify-center items-center translate-y-5">
          <div className="md:max-w-xs max-w-md">
            <p className="text-lg md:text-right text-balance font-paragraph">
              Every watch embodies Swiss precision and craftsmanship, combining traditional
              techniques with modern innovation.
            </p>
          </div>
        </div>

        <div className="heritage-box">
          <div className="list-wrapper">
            {features.map((feature, index) => (
              <div key={index} className="relative flex-1 col-center">
                <div>
                  <p className="md:text-lg font-paragraph">{feature.label}</p>
                  <p className="font-paragraph text-sm mt-2">up to</p>
                  <p className="text-2xl md:text-4xl tracking-tighter font-bold">
                    {feature.amount}
                  </p>
                </div>

                {index !== features.length - 1 && (
                  <div className="spacer-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeritageSection;
