import React, { useEffect, useRef } from "react";
import "./SelectedProjectsStack.css";

const SelectedProjectsStack: React.FC = () => {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const sections = Array.from(
      root.querySelectorAll<HTMLElement>(".prstack-project-section")
    );
    const titles = Array.from(
      root.querySelectorAll<HTMLElement>(".prstack-title")
    );
    const track = root.querySelector<HTMLElement>(".prstack-titles-inner");

    if (!sections.length || !titles.length || !track) return;

    // spacing between titles based on their height (stable across layouts)
    let step = titles[0].offsetHeight * 1.25;
    let currentIndex = -1;

    const setActive = (index: number) => {
      if (index === currentIndex || index < 0 || index >= titles.length) return;
      currentIndex = index;

      // same logic as original: -step * index + 60
      const targetY = -step * index + 60;
      track.style.transform = `translateY(${targetY}px)`;

      // update title opacity classes
      titles.forEach((t, i) => {
        t.classList.remove(
          "prstack-title--active",
          "prstack-title--next",
          "prstack-title--prev"
        );
        if (i === index) t.classList.add("prstack-title--active");
        if (i === index + 1) t.classList.add("prstack-title--next");
        if (i === index - 1) t.classList.add("prstack-title--prev");
      });

      // update active image section
      sections.forEach((s, i) => {
        if (i === index) {
          s.classList.add("prstack-project-section--active");
        } else {
          s.classList.remove("prstack-project-section--active");
        }
      });
    };

    const updateActiveFromScroll = () => {
      // use viewport center to decide which section is active
      const viewportCenter = window.innerHeight / 2;

      let bestIndex = 0;
      let smallestDelta = Infinity;

      sections.forEach((sec, idx) => {
        const rect = sec.getBoundingClientRect();
        const secCenter = rect.top + rect.height / 2;
        const delta = Math.abs(secCenter - viewportCenter);
        if (delta < smallestDelta) {
          smallestDelta = delta;
          bestIndex = idx;
        }
      });

      setActive(bestIndex);
    };

    const handleScroll = () => {
      updateActiveFromScroll();
    };

    const handleResize = () => {
      // recalc step on resize (font / layout changes)
      if (titles.length > 0) {
        step = titles[0].offsetHeight * 1.25;
      }
      updateActiveFromScroll();
    };

    const init = () => {
      // initial offset just like the original: translateY(60px)
      track.style.transform = "translateY(60px)";
      updateActiveFromScroll();
    };

    const initTimeout = setTimeout(init, 80);

    // listen to window scroll (no inner scrollbar)
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(initTimeout);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="prstack-root" ref={rootRef}>
      {/* HERO */}
      <section className="prstack-hero">
        <img
          src="https://images.unsplash.com/photo-1505842465776-3b4953ca4f44?auto=format&fit=crop&w=2000&q=80"
          alt="Hero"
        />
        <div className="prstack-hero-content">
          <h1>SELECTED PROJECTS</h1>
          <p>Architecture designed for human experience.</p>
        </div>
        <div className="prstack-scroll-cue">Scroll ↓</div>
      </section>

      {/* MAIN GRID */}
      <div className="prstack-container">
        {/* LEFT STICKY TITLES */}
        <div className="prstack-left">
          <div className="prstack-titles-mask">
            <div className="prstack-titles-inner">
              <div className="prstack-title">Beehive House</div>
              <div className="prstack-title">Broadway Loft</div>
              <div className="prstack-title">Ocean Parkway</div>
              <div className="prstack-title">Sequoia House</div>
              <div className="prstack-title">Son Del North</div>
            </div>
          </div>
        </div>

        {/* RIGHT PROJECTS */}
        <div className="prstack-right">
          <section className="prstack-project-section">
            <div className="prstack-project-img-wrap">
              <img
                className="prstack-project-img"
                src="https://images.prismic.io/andre-arch/Z6wzp5bqstJ9-gm9_BEEHIVE-EXT-2Bee.png?auto=format&fit=crop&w=2000&q=80"
                alt="Beehive House"
              />
            </div>
            <div className="prstack-caption">Beehive House — Accord, NY</div>
          </section>

          <section className="prstack-project-section">
            <div className="prstack-project-img-wrap">
              <img
                className="prstack-project-img"
                src="https://images.prismic.io/andre-arch/Z99gaHdAxsiBvxNk_718BRDWY-KITCHEN-ABSTRACT.png?auto=format&fit=crop&w=2000&q=80"
                alt="Broadway Loft"
              />
            </div>
            <div className="prstack-caption">Broadway Loft — New York, NY</div>
          </section>

          <section className="prstack-project-section">
            <div className="prstack-project-img-wrap">
              <img
                className="prstack-project-img"
                src="https://images.prismic.io/andre-arch/Z-HjnndAxsiBv2H4_CopyofOCEANPKWYEXT-1.jpg?auto=format&fit=crop&w=2000&q=80"
                alt="Ocean Parkway"
              />
            </div>
            <div className="prstack-caption">Ocean Parkway — New York, NY</div>
          </section>

          <section className="prstack-project-section">
            <div className="prstack-project-img-wrap">
              <img
                className="prstack-project-img"
                src="https://images.prismic.io/andre-arch/Z-6KNHdAxsiBwRrJ_SEQUOIA-FRONT1-EDIT.jpg?auto=format&fit=crop&w=2000&q=80"
                alt="Sequoia House"
              />
            </div>
            <div className="prstack-caption">Sequoia House — CA</div>
          </section>

          <section className="prstack-project-section">
            <div className="prstack-project-img-wrap">
              <img
                className="prstack-project-img"
                src="https://images.prismic.io/andre-arch/Z6LpFJbqstJ9-O8h_7%2BSonDelNorte.png?auto=format&fit=crop&w=2000&q=80"
                alt="Son Del North"
              />
            </div>
            <div className="prstack-caption">Son Del North — NY</div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SelectedProjectsStack;
