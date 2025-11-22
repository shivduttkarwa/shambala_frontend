import React, { useEffect, useRef, useState } from "react";
import "./ServicesHero.css";

const publicUrl = import.meta.env.BASE_URL;

const ServicesHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const beforeRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [initialized, setInitialized] = useState(false);

  const initializeSlider = () => {
    if (!initialized && containerRef.current && beforeRef.current && sliderRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const width = containerWidth / 2;
      beforeRef.current.style.width = `${width}px`;
      sliderRef.current.style.left = `${width}px`;
      setInitialized(true);
    }
  };

  const dragTheImg = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current || !beforeRef.current || !sliderRef.current) return;
    
    // Check for touches array to support mobile devices
    const clientX = (e as React.TouchEvent).touches 
      ? (e as React.TouchEvent).touches[0].clientX 
      : (e as React.MouseEvent).clientX;
    
    const containerRect = containerRef.current.getBoundingClientRect();
    const sliderPosition = clientX - containerRect.left;
    const width = Math.max(0, Math.min(sliderPosition, containerRect.width));

    beforeRef.current.style.width = `${width}px`;
    sliderRef.current.style.left = `${width}px`;
  };

  useEffect(() => {
    initializeSlider();
    const handleResize = () => {
      setInitialized(false);
    };
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [initialized]);

  return (
    <div className="services-img-slider-wrapper">
      <div
        className="services-slider-container"
        ref={containerRef}
        onMouseMove={dragTheImg}
        onTouchMove={dragTheImg}
      >
        <div className="services-img-after-wrap">
          <img src={`${publicUrl}images/l11.jpg`} alt="After" />
        </div>
        <div className="services-img-before-wrap" ref={beforeRef}>
          <img src={`${publicUrl}images/l4.jpg`} alt="Before" />
        </div>
        <div className="services-slider-indicator" ref={sliderRef}></div>
      </div>

      <div className="services-hero-content">
        <h1>OUR SERVICES</h1>
        <div className="services-hero-content-text">
          <p>Transform your vision into reality with our expert construction services</p>
        </div>
      </div>

      <button className="services-hero-btn">
        Explore Our Work
      </button>
    </div>
  );
};

export default ServicesHero;