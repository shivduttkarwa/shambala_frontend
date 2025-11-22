import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ProjectStack.css";

gsap.registerPlugin(ScrollTrigger);

const publicUrl = import.meta.env.BASE_URL || "/";

const projects = [
  {
    title: "Luxury Villa Brighton",
    caption: "Luxury Villa — Brighton, UK",
    image: `${publicUrl}images/l1.jpg`,
  },
  {
    title: "Contemporary Family Home",
    caption: "Contemporary Home — London, UK",
    image: `${publicUrl}images/l2.jpg`,
  },
  {
    title: "Urban Penthouse",
    caption: "Urban Penthouse — Manchester, UK",
    image: `${publicUrl}images/l3.jpg`,
  },
  {
    title: "Heritage Estate",
    caption: "Heritage Estate — Yorkshire, UK",
    image: `${publicUrl}images/l4.jpg`,
  },
  {
    title: "Eco-Friendly Townhouse",
    caption: "Eco Townhouse — Bristol, UK",
    image: `${publicUrl}images/l5.jpg`,
  },
];

const ProjectStack: React.FC = () => {
  const titleTrackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Wait for component to mount and render
    const timer = setTimeout(() => {
      setIsInitialized(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isInitialized || !titleTrackRef.current || !containerRef.current) return;

    // Clear any existing ScrollTriggers
    ScrollTrigger.getAll().forEach(trigger => {
      if (trigger.vars?.trigger?.classList?.contains('ps-project-section')) {
        trigger.kill();
      }
    });

    const sections = containerRef.current.querySelectorAll(".ps-project-section");
    const titles = titleTrackRef.current.querySelectorAll(".ps-title");
    const track = titleTrackRef.current;

    if (sections.length === 0 || titles.length === 0) return;

    // Calculate step size after render
    let step = 0;
    if (titles.length > 1) {
      const firstRect = titles[0].getBoundingClientRect();
      const secondRect = titles[1].getBoundingClientRect();
      step = secondRect.top - firstRect.top;
    }

    // Force initial positioning
    gsap.set(track, { y: 60, force3D: true });

    function setActive(i: number) {
      gsap.to(track, {
        y: -step * i + 60,
        duration: 1.4,
        ease: "cubic-bezier(.16,.69,.11,1)",
        force3D: true
      });

      titles.forEach((title, idx) => {
        title.classList.remove("ps-is-active", "ps-is-next", "ps-is-prev");
        if (idx === i) title.classList.add("ps-is-active");
        if (idx === i + 1) title.classList.add("ps-is-next");
        if (idx === i - 1) title.classList.add("ps-is-prev");
      });
    }

    // Set initial active state
    setActive(0);
    sections[0].classList.add("ps-is-active");

    // Create ScrollTriggers for each section
    sections.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          setActive(index);
          section.classList.add("ps-is-active");
        },
        onEnterBack: () => {
          setActive(index);
          section.classList.add("ps-is-active");
        },
        onLeave: () => {
          section.classList.remove("ps-is-active");
        },
        onLeaveBack: () => {
          section.classList.remove("ps-is-active");
        },
        markers: false, // Set to true for debugging
      });
    });

    return () => {
      // Clean up only ProjectStack ScrollTriggers
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars?.trigger?.classList?.contains('ps-project-section')) {
          trigger.kill();
        }
      });
    };
  }, [isInitialized]);

  if (!isInitialized) {
    return <div style={{ height: '100vh' }}></div>; // Placeholder while initializing
  }

  return (
    <div className="ps-container" ref={containerRef}>
      {/* LEFT - Sticky Titles */}
      <div className="ps-left">
        <div className="ps-titles-mask">
          <div className="ps-titles-inner" ref={titleTrackRef}>
            {projects.map((project, index) => (
              <div key={index} className="ps-title">
                {project.title}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT - Project Images */}
      <div className="ps-right">
        {projects.map((project, index) => (
          <section key={index} className="ps-project-section">
            <div className="ps-project-img-wrap">
              <img
                className="ps-project-img"
                src={project.image}
                alt={project.title}
                loading="lazy"
              />
            </div>
            <div className="ps-caption">{project.caption}</div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default ProjectStack;