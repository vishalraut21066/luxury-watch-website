import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { craftsmanshipFeatures } from "../constants";
import { useState, useRef } from "react";

const ClipPathTitle = ({ title, color, bg, className, borderColor }) => {
  return (
    <div
      style={{
        clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
        borderColor: borderColor
      }}
      className={`${className} clip-title-box opacity-0 border-[.5vw] text-nowrap`}
    >
      <div style={{ backgroundColor: bg }} className="md:pb-5 pb-3 md:px-5 px-3">
        <h2 className="general-title" style={{ color: color }}>
          {title}
        </h2>
      </div>
    </div>
  );
};

const CraftsmanshipSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoOpacity, setVideoOpacity] = useState(1);
  const videoRef = useRef(null);

  useGSAP(() => {
    const revealTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".craftsmanship-section",
        start: "top 70%",
        end: "30% center",
        scrub: 1,
      },
    });

    revealTl
      .to(".craftsmanship-section .first-title", {
        duration: 0.5,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      })
      .to(".craftsmanship-section .second-title", {
        duration: 0.5,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      })
      .to(".craftsmanship-section .third-title", {
        duration: 0.5,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      })
      .to(".craftsmanship-section .fourth-title", {
        duration: 0.5,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      });

    // Animate video section
    gsap.from(".video-showcase", {
      scrollTrigger: {
        trigger: ".video-showcase",
        start: "top 80%",
      },
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });
  });

  const handlePlayVideo = () => {
    if (videoRef.current) {
      // Fade out overlays first
      const overlays = document.querySelectorAll('.video-overlay');
      overlays.forEach(overlay => {
        overlay.style.transition = 'opacity 0.5s ease-out';
        overlay.style.opacity = '0';
      });
      
      // Then play video and update state
      setTimeout(() => {
        videoRef.current.play();
        setIsPlaying(true);
      }, 500);
    }
  };

  const handleVideoLoop = () => {
    // Smooth crossfade on loop
    setVideoOpacity(0.7);
    setTimeout(() => {
      setVideoOpacity(1);
    }, 100);
  };

  return (
    <section className="craftsmanship-section">
      <div className="container mx-auto pt-20 pb-10">
        <div className="col-center">
          <p className="text-sm uppercase tracking-wider text-cream/60 mb-3">
            Uncompromising Quality
          </p>
          <h2 className="text-5xl md:text-7xl font-bold uppercase text-cream text-center mb-6">
            Master Craftsmanship
          </h2>
          <p className="text-center max-w-2xl mb-10">
            Discover the Excellence: Explore the Key Features of Our Timepieces
          </p>

          <div className="mt-10 col-center w-full">
            <ClipPathTitle
              title={craftsmanshipFeatures[0]}
              color="#f5f1e8"
              bg="#8b7355"
              className="first-title rotate-[3deg] relative z-10"
              borderColor="#0f0e0e"
            />
            <ClipPathTitle
              title={craftsmanshipFeatures[1]}
              color="#2d2520"
              bg="#f5f1e8"
              className="second-title rotate-[-1deg] md:-translate-y-5 -translate-y-3"
              borderColor="#0f0e0e"
            />
            <ClipPathTitle
              title={craftsmanshipFeatures[2]}
              color="#f5f1e8"
              bg="#2d2520"
              className="third-title rotate-[1deg] md:-translate-y-12 -translate-y-6 relative z-10"
              borderColor="#0f0e0e"
            />
            <ClipPathTitle
              title={craftsmanshipFeatures[3]}
              color="#2d2520"
              bg="#d4af37"
              className="fourth-title rotate-[-5deg] md:-translate-y-12 -translate-y-6"
              borderColor="#0f0e0e"
            />
          </div>

          <div className="mt-10">
            <p className="text-cream/80">And much more ...</p>
          </div>
        </div>
      </div>

      {/* Enhanced Video Showcase */}
      <div className="video-showcase relative md:mt-20 mt-10 md:mb-20 mb-10 px-5">
        <div className="max-w-6xl mx-auto">
          {/* Video Title */}
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-5xl font-bold uppercase text-cream mb-4">
              Behind The Scenes
            </h3>
            <p className="text-cream/70 font-paragraph text-lg max-w-2xl mx-auto">
              Watch our master watchmakers at work, crafting each timepiece with 
              precision and passion that spans generations.
            </p>
          </div>

          {/* Video Container */}
          <div className="relative rounded-[2vw] overflow-hidden border-[.5vw] border-cream/20 shadow-2xl group">
            {/* Video Element */}
            <video
              ref={videoRef}
              className="w-full h-[60vh] md:h-[70vh] object-cover transition-opacity duration-300 ease-in-out"
              style={{ opacity: isPlaying ? videoOpacity : 0.8 }}
              poster="/images/heritage/craftsmanship-poster.jpg"
              muted
              loop
              playsInline
              onEnded={handleVideoLoop}
              onTimeUpdate={(e) => {
                // Smooth fade before loop
                const video = e.target;
                const timeLeft = video.duration - video.currentTime;
                if (timeLeft < 0.3 && timeLeft > 0.1) {
                  setVideoOpacity(0.85);
                } else if (timeLeft < 0.1) {
                  setVideoOpacity(1);
                }
              }}
            >
              <source src="/videos/craftsmanship.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Overlay Gradients - Fade out when playing */}
            <div 
              className="video-overlay absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 pointer-events-none transition-opacity duration-500"
              style={{ opacity: isPlaying ? 0 : 1 }}
            ></div>
            <div 
              className="video-overlay absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300 pointer-events-none"
              style={{ opacity: isPlaying ? 0 : 1 }}
            ></div>

            {/* Play Button - Fade out when playing */}
            <div 
              className="video-overlay absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-opacity duration-500"
              style={{ opacity: isPlaying ? 0 : 1, pointerEvents: isPlaying ? 'none' : 'auto' }}
              onClick={handlePlayVideo}
            >
              <div className="relative">
                {/* Pulsing Ring */}
                <div className="absolute inset-0 bg-gold/30 rounded-full animate-ping"></div>
                
                {/* Play Button */}
                <div className="relative md:w-24 md:h-24 w-16 h-16 bg-gold rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-2xl">
                  <div className="w-0 h-0 border-l-[20px] border-l-dark-brown border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
                </div>
              </div>
            </div>

            {/* Video Info Overlay - Fade out when playing */}
            <div 
              className="video-overlay absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent pointer-events-none transition-opacity duration-500"
              style={{ opacity: isPlaying ? 0 : 1 }}
            >
              <div>
                <p className="text-cream font-bold text-xl mb-1">The Art of Watchmaking</p>
                <p className="text-cream/70 text-sm font-paragraph">Duration: 3:45 min</p>
              </div>
            </div>

            {/* Corner Decorations */}
            <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-gold/40 rounded-tl-lg"></div>
            <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-gold/40 rounded-br-lg"></div>
          </div>

          {/* Video Stats */}
          <div className="grid grid-cols-3 gap-4 mt-8 max-w-3xl mx-auto">
            <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
              <p className="text-2xl font-bold text-cream mb-1">200+</p>
              <p className="text-xs text-cream/60 font-paragraph">Hours Per Watch</p>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
              <p className="text-2xl font-bold text-cream mb-1">50+</p>
              <p className="text-xs text-cream/60 font-paragraph">Master Craftsmen</p>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
              <p className="text-2xl font-bold text-cream mb-1">300+</p>
              <p className="text-xs text-cream/60 font-paragraph">Components</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CraftsmanshipSection;
