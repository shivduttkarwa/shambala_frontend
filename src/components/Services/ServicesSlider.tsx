import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ServicesSlider.css";

gsap.registerPlugin(ScrollTrigger);

type ServiceCard = {
  title: string;
  desc: string;
  bg: string;
  thumb: string;
  cta: string;
};

const CARDS: ServiceCard[] = [
  {
    title: "Architectural Design",
    desc: "Custom home designs tailored to your vision.",
    bg: "/images/l1.jpg",
    thumb: "/images/sm1.jpg",
    cta: "Learn More",
  },
  {
    title: "Construction Services",
    desc: "Expert building with quality materials.",
    bg: "/images/l2.jpg",
    thumb: "/images/sm2.jpg",
    cta: "Learn More",
  },
  {
    title: "Interior Design",
    desc: "Beautiful interiors for modern living.",
    bg: "/images/l3.jpg",
    thumb: "/images/sm3.jpg",
    cta: "Learn More",
  },
  {
    title: "Project Management",
    desc: "Seamless project execution from start to finish.",
    bg: "/images/l4.jpg",
    thumb: "/images/sm4.jpg",
    cta: "Learn More",
  },
  {
    title: "Renovation",
    desc: "Transform your space with our renovation experts.",
    bg: "/images/l5.jpg",
    thumb: "/images/sm5.jpg",
    cta: "Learn More",
  },
];

const ServicesSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState<boolean>(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(max-width:767px)").matches
      : false
  );

  const sliderRef = useRef<HTMLDivElement | null>(null); // .slider (scroll container)
  const trackRef = useRef<HTMLDivElement | null>(null); // .track
  const titleRef = useRef<HTMLHeadingElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Split text into lines with mask (same as EssenceSection)
  const splitTextIntoLines = (text: string) => {
    const words = text.split(" ");
    const lines: string[] = [];
    let currentLine = "";

    words.forEach((word) => {
      const testLine = currentLine + (currentLine ? " " : "") + word;
      if (testLine.length > 15 && currentLine.length > 0) {
        lines.push(currentLine);
        currentLine = word;
      } else {
        currentLine = testLine;
      }
    });

    if (currentLine) {
      lines.push(currentLine);
    }

    return lines.map((line, index) => (
      <div key={index} className="mask">
        <div className="line">{line}</div>
      </div>
    ));
  };

  // Update mobile flag on resize
  useEffect(() => {
    const update = () => {
      if (typeof window === "undefined") return;
      setIsMobile(window.matchMedia("(max-width:767px)").matches);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Center the active card
  const centerCard = (index: number) => {
    const wrap = sliderRef.current;
    const track = trackRef.current;
    if (!wrap || !track) return;

    const card = track.children[index] as HTMLElement | undefined;
    if (!card) return;

    if (isMobile) {
      const start = card.offsetTop;
      const size = card.clientHeight;
      const wrapSize = wrap.clientHeight;
      wrap.scrollTo({
        top: start - (wrapSize / 2 - size / 2),
        behavior: "smooth",
      });
    } else {
      const start = card.offsetLeft;
      const size = card.clientWidth;
      const wrapSize = wrap.clientWidth;
      wrap.scrollTo({
        left: start - (wrapSize / 2 - size / 2),
        behavior: "smooth",
      });
    }
  };

  // Re-center whenever activeIndex or layout mode changes
  useEffect(() => {
    centerCard(activeIndex);
  }, [activeIndex, isMobile]);

  // Title animation (same as EssenceSection)
  useEffect(() => {
    if (!sectionRef.current || !titleRef.current) return;

    const ctx = gsap.context(() => {
      const titleLines = titleRef.current?.querySelectorAll(".line");

      // Set initial state
      if (titleLines && titleLines.length > 0) {
        gsap.set(titleLines, {
          yPercent: 100,
        });
      }

      // Animation timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          toggleActions: "play none none none",
        },
      });

      // Heading lines - slide up
      if (titleLines && titleLines.length > 0) {
        tl.to(
          titleLines,
          {
            yPercent: 0,
            duration: 1.8,
            stagger: 0.8,
            ease: "power1.out",
          },
          0.2
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const goTo = (index: number) => {
    if (index < 0 || index >= CARDS.length) return;
    if (index === activeIndex) return;
    setActiveIndex(index);
  };

  const goStep = (step: number) => {
    goTo(activeIndex + step);
  };

  // Keyboard navigation
  const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      goStep(1);
    }
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      goStep(-1);
    }
  };

  // Touch swipe
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  const handleTouchStart: React.TouchEventHandler<HTMLDivElement> = (e) => {
    const t = e.touches[0];
    touchStart.current = { x: t.clientX, y: t.clientY };
  };

  const handleTouchEnd: React.TouchEventHandler<HTMLDivElement> = (e) => {
    if (!touchStart.current) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touchStart.current.x;
    const dy = t.clientY - touchStart.current.y;
    touchStart.current = null;

    const threshold = 60;

    if (isMobile) {
      if (Math.abs(dy) > threshold) {
        goStep(dy > 0 ? -1 : 1);
      }
    } else {
      if (Math.abs(dx) > threshold) {
        goStep(dx > 0 ? -1 : 1);
      }
    }
  };

  return (
    <section
      className="services-slider-section"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      ref={sectionRef}
    >
      <div className="head">
        <h1 className="services-slider-title" ref={titleRef}>
          {splitTextIntoLines("Our Services")}
        </h1>

        <div className="controls">
          <button
            id="prev"
            className="nav-btn"
            aria-label="Previous"
            onClick={() => goStep(-1)}
            disabled={activeIndex === 0}
          >
            ‹
          </button>
          <button
            id="next"
            className="nav-btn"
            aria-label="Next"
            onClick={() => goStep(1)}
            disabled={activeIndex === CARDS.length - 1}
          >
            ›
          </button>
        </div>
      </div>

      <div
        className="slider"
        ref={sliderRef}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="track" id="track" ref={trackRef}>
          {CARDS.map((card, index) => (
            <article
              key={card.title}
              className="project-card"
              data-active={index === activeIndex}
              onMouseEnter={() => {
                if (window.matchMedia("(hover:hover)").matches) {
                  goTo(index);
                }
              }}
              onClick={() => goTo(index)}
            >
              <img
                className="project-card__bg"
                src={card.bg}
                alt={card.title}
              />
              <div className="project-card__content">
                <img
                  className="project-card__thumb"
                  src={card.thumb}
                  alt={card.title}
                />
                <div>
                  <h3 className="project-card__title">{card.title}</h3>
                  <p className="project-card__desc">{card.desc}</p>
                  <button className="project-card__btn">{card.cta}</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {!isMobile && (
        <div className="dots" id="dots">
          {CARDS.map((card, index) => (
            <span
              key={card.title}
              className={"dot" + (index === activeIndex ? " active" : "")}
              onClick={() => goTo(index)}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default ServicesSlider;
