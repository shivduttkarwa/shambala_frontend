import React, { useEffect, useRef } from "react";
import FullWidthImage from "../Reusable/FullWidthImage";
import ChangingText from "../UI/ChangingText";
import GlassRainButton from "../UI/GlassRainButton";
import gsap from "gsap";
import "./ServicesHero.css";

const publicUrl = import.meta.env.BASE_URL;

const leftTexts = ["EXPERT", "PROFESSIONAL", "RELIABLE"];
const rightTexts = ["EXCELLENCE", "ASSURANCE", "TRUST"];

const ServicesHero: React.FC = () => {
  const leftTopRef = useRef<HTMLHeadingElement>(null);
  const rightTopRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const animateText = (element: HTMLElement) => {
      const chars = element.textContent?.split("") || [];
      element.innerHTML = "";
      const spans: HTMLElement[] = [];
      chars.forEach((ch) => {
        const span = document.createElement("span");
        span.textContent = ch;
        span.style.display = "inline-block";
        element.appendChild(span);
        spans.push(span);
      });

      gsap.fromTo(
        spans,
        { opacity: 0, y: 20, filter: "blur(10px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          stagger: 0.05,
          duration: 0.6,
          ease: "power2.out",
        }
      );
    };

    if (leftTopRef.current) animateText(leftTopRef.current);
    if (rightTopRef.current) animateText(rightTopRef.current);
  }, []);

  return (
    <FullWidthImage imageUrl={`${publicUrl}images/l11.jpg`}>
      <div className="services-hero-left">
        <h1 ref={leftTopRef}>PREMIUM</h1>
        <div className="services-hero-text-wrapper">
          <ChangingText texts={leftTexts} />
        </div>
      </div>
      <div className="services-hero-center">
        <GlassRainButton>Explore Services</GlassRainButton>
      </div>
      <div className="services-hero-right">
        <h1 ref={rightTopRef}>QUALITY</h1>
        <div className="services-hero-text-wrapper">
          <ChangingText texts={rightTexts} />
        </div>
      </div>
    </FullWidthImage>
  );
};

export default ServicesHero;
