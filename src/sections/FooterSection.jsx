import { useMediaQuery } from "react-responsive";

const FooterSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <section className="footer-section">
      <img
        src="/images/hero/hero-bg.jpg"
        alt="Footer"
        className="w-full object-cover -translate-y-1 opacity-30"
      />

      <div className="2xl:h-[110dvh] relative md:pt-[20vh] pt-[10vh]">
        <div className="overflow-hidden z-10 relative">
          <h1 className="general-title text-center text-cream py-5">
            #TIMELESSELEGANCE
          </h1>
        </div>

        {isMobile ? (
          <img
            src="/images/hero/hero-watch.jpg"
            className="absolute top-0 object-contain opacity-15"
            alt="Watch"
          />
        ) : (
          <img
            src="/images/hero/hero-watch.jpg"
            className="absolute top-0 object-contain mix-blend-lighten opacity-15"
            alt="Watch"
          />
        )}

        <div className="flex-center gap-5 relative z-10 md:mt-20 mt-5">
          <div className="social-btn">
            <img src="https://img.icons8.com/ios-filled/50/ffffff/youtube-play.png" alt="YouTube" className="w-6 h-6" />
          </div>
          <div className="social-btn">
            <img src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png" alt="Instagram" className="w-6 h-6" />
          </div>
          <div className="social-btn">
            <img src="https://img.icons8.com/ios-filled/50/ffffff/tiktok.png" alt="TikTok" className="w-6 h-6" />
          </div>
        </div>

        <div className="mt-40 md:px-10 px-5 flex gap-10 md:flex-row flex-col justify-between text-cream font-paragraph md:text-lg font-medium">
          <div className="flex items-start md:gap-16 gap-8 flex-wrap">
            <div>
              <p className="font-bold mb-3 text-gold">Collections</p>
              <p className="text-sm opacity-70 hover:opacity-100 cursor-pointer mb-2">Heritage Classic</p>
              <p className="text-sm opacity-70 hover:opacity-100 cursor-pointer mb-2">Royal Gold</p>
              <p className="text-sm opacity-70 hover:opacity-100 cursor-pointer">Midnight Black</p>
            </div>
            <div>
              <p className="font-bold mb-3 text-gold">Company</p>
              <p className="text-sm opacity-70 hover:opacity-100 cursor-pointer mb-2">About Us</p>
              <p className="text-sm opacity-70 hover:opacity-100 cursor-pointer mb-2">Heritage</p>
              <p className="text-sm opacity-70 hover:opacity-100 cursor-pointer mb-2">Craftsmanship</p>
              <p className="text-sm opacity-70 hover:opacity-100 cursor-pointer">Careers</p>
            </div>
            <div>
              <p className="font-bold mb-3 text-gold">Support</p>
              <p className="text-sm opacity-70 hover:opacity-100 cursor-pointer mb-2">Contact Us</p>
              <p className="text-sm opacity-70 hover:opacity-100 cursor-pointer mb-2">Warranty</p>
              <p className="text-sm opacity-70 hover:opacity-100 cursor-pointer mb-2">Service Centers</p>
              <p className="text-sm opacity-70 hover:opacity-100 cursor-pointer">FAQs</p>
            </div>
          </div>

          <div className="md:max-w-lg">
            <p className="leading-relaxed mb-2 font-bold text-gold">
              Join Our Exclusive Community
            </p>
            <p className="text-sm opacity-70 mb-6">
              Get early access to new collections, exclusive events, and special offers.
            </p>
            <div className="flex justify-between items-center border-b-2 border-light-brown py-5 hover:border-gold transition-colors">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent placeholder:text-[#999999] text-cream outline-none"
              />
              <img src="https://img.icons8.com/ios-filled/50/d4af37/long-arrow-right.png" alt="arrow" className="w-8 h-8 hover:translate-x-2 transition-transform cursor-pointer" />
            </div>
            <p className="text-xs opacity-50 mt-3">
              By subscribing, you agree to our Privacy Policy and Terms of Service.
            </p>
          </div>
        </div>

        <div className="copyright-box">
          <p>Copyright © 2024 Chronos - All Rights Reserved</p>
          <div className="flex items-center gap-7">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
