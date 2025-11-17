import { testimonials } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const TestimonialsSection = () => {
  useGSAP(() => {
    // Fade in testimonials on scroll
    gsap.from(".testimonial-card", {
      scrollTrigger: {
        trigger: ".testimonials-section",
        start: "top 60%",
      },
      y: 100,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power2.out",
    });

    // Animate title
    gsap.from(".testimonials-title", {
      scrollTrigger: {
        trigger: ".testimonials-section",
        start: "top 70%",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });
  });

  return (
    <section className="testimonials-section bg-cream py-20 min-h-dvh flex items-center">
      <div className="container mx-auto px-5">
        {/* Section Title */}
        <div className="testimonials-title text-center mb-16">
          <p className="text-light-brown font-paragraph text-sm uppercase tracking-wider mb-3">
            Client Reviews
          </p>
          <h2 className="text-5xl md:text-7xl font-bold uppercase text-dark-brown mb-6">
            Trusted by Connoisseurs
          </h2>
          <p className="text-lg font-paragraph text-dark-brown/70 max-w-2xl mx-auto">
            Join thousands of satisfied clients who have discovered the perfect timepiece. 
            Here's what they have to say about their Chronos experience.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card bg-white rounded-[1.5vw] p-6 border-[.3vw] border-dark-brown/10 hover:border-light-brown transition-all duration-300 hover:shadow-xl flex flex-col"
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-gold text-xl">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-dark-brown font-paragraph text-sm leading-relaxed mb-6 flex-grow italic">
                "{testimonial.quote}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-dark-brown/10">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-dark-brown/5 flex-shrink-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-dark-brown font-bold text-sm">{testimonial.name}</p>
                  <p className="text-light-brown text-xs font-semibold">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mt-16 pt-12 border-t border-dark-brown/10">
          <div className="text-center">
            <p className="text-4xl font-bold text-dark-brown mb-1">10,000+</p>
            <p className="text-sm font-paragraph text-dark-brown/60">Happy Clients</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-dark-brown mb-1">150+</p>
            <p className="text-sm font-paragraph text-dark-brown/60">Years Heritage</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-dark-brown mb-1">98%</p>
            <p className="text-sm font-paragraph text-dark-brown/60">Satisfaction Rate</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-dark-brown mb-1">50+</p>
            <p className="text-sm font-paragraph text-dark-brown/60">Countries</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="inline-block bg-dark-brown text-cream px-12 py-5 rounded-full font-bold text-lg uppercase cursor-pointer hover:bg-mid-brown transition-all duration-300">
            Read More Reviews
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
