import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { whyChooseUs } from "../constants";

const WhyChooseSection = () => {
  useGSAP(() => {
    gsap.from(".why-card", {
      scrollTrigger: {
        trigger: ".why-choose-section",
        start: "top 70%",
      },
      y: 100,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power2.out",
    });
  });

  return (
    <section className="why-choose-section min-h-dvh bg-cream py-20">
      <div className="container mx-auto px-5">
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-8xl font-bold uppercase text-dark-brown mb-6">
            Why Choose Chronos
          </h2>
          <p className="text-lg font-paragraph text-dark-brown/70 max-w-2xl mx-auto">
            Experience the difference that comes with owning a timepiece crafted 
            by master artisans with over 150 years of heritage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {whyChooseUs.map((item, index) => (
            <div
              key={index}
              className="why-card bg-white rounded-[2vw] p-8 border-[.3vw] border-dark-brown/10 hover:border-light-brown transition-all duration-300 hover:shadow-xl"
            >
              <div className="w-12 h-1 bg-light-brown mb-6"></div>
              <h3 className="text-2xl font-bold text-dark-brown mb-3 uppercase tracking-tight">
                {item.title}
              </h3>
              <p className="text-dark-brown/70 font-paragraph leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="inline-block bg-dark-brown text-cream px-12 py-5 rounded-full font-bold text-lg uppercase cursor-pointer hover:bg-mid-brown transition-all duration-300">
            Schedule a Private Viewing
          </div>
          <p className="mt-4 text-sm font-paragraph text-dark-brown/60">
            Visit our boutique or arrange a personal consultation
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
