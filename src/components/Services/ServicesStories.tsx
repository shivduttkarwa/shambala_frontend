import React from "react";
import "./ServicesStories.css";

const ServicesStories: React.FC = () => {
  return (
    <section className="services-stories-root block-center-center">
      <main className="services-stories-main inline content-full">
        <section className="services-stories-hero inline gap-2">
          {/* Left: Visual stack of service images */}
          <div className="services-stories-visual-wrapper block content-3">
            <div className="services-stories-visual block-center-center">
              <picture className="services-stories-photo-primary">
                <source
                  srcSet="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/stories-with-scroll-driven/images/img-desktop-3.avif"
                  media="(width >= 1024px)"
                  type="image/avif"
                />
                <source
                  srcSet="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/stories-with-scroll-driven/images/img-mobile-3.avif"
                  type="image/avif"
                />
                <source
                  srcSet="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/stories-with-scroll-driven/images/img-desktop-3.webp"
                  media="(width >= 1024px)"
                  type="image/webp"
                />
                <img
                  src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/stories-with-scroll-driven/images/img-mobile-3.webp"
                  alt="Shambala garden transformation"
                />
              </picture>

              <picture className="services-stories-photo-secondary">
                <source
                  srcSet="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/stories-with-scroll-driven/images/img-desktop-2.avif"
                  media="(width >= 1024px)"
                  type="image/avif"
                />
                <source
                  srcSet="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/stories-with-scroll-driven/images/img-mobile-2.avif"
                  type="image/avif"
                />
                <source
                  srcSet="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/stories-with-scroll-driven/images/img-desktop-2.webp"
                  media="(width >= 1024px)"
                  type="image/webp"
                />
                <img
                  src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/stories-with-scroll-driven/images/img-mobile-2.webp"
                  alt="Shambala outdoor living area"
                />
              </picture>

              <picture className="services-stories-photo-tertiary">
                <source
                  srcSet="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/stories-with-scroll-driven/images/img-desktop-1.avif"
                  media="(width >= 1024px)"
                  type="image/avif"
                />
                <source
                  srcSet="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/stories-with-scroll-driven/images/img-mobile-1.avif"
                  type="image/avif"
                />
                <source
                  srcSet="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/stories-with-scroll-driven/images/img-desktop-1.webp"
                  media="(width >= 1024px)"
                  type="image/webp"
                />
                <img
                  src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/stories-with-scroll-driven/images/img-mobile-1.webp"
                  alt="Shambala water and fire features"
                />
              </picture>
            </div>
          </div>

          {/* Right: Textual service "stories" (desktop) */}
          <div className="services-stories-content block">
            <div
              id="shambala-garden-transformations"
              className="services-stories-lockup-primary block-center-start"
            >
              <div className="block gap-3">
                <h3>Garden Transformations</h3>
                <div className="services-stories-subheading">
                  Turn tired yards into lush, layered Shambala retreats.
                </div>
                <p>
                  From soil to softscape, we reimagine every corner with
                  sculpted planting, ambient lighting and thoughtful pathways.
                </p>
              </div>
            </div>

            <div
              id="shambala-outdoor-living"
              className="services-stories-lockup-secondary block-center-start"
            >
              <div className="block gap-3">
                <h3>Outdoor Living Design</h3>
                <div className="services-stories-subheading">
                  Alfresco lounges that feel like another room of your home.
                </div>
                <p>
                  Decks, pergolas, outdoor kitchens and cosy fire zones crafted
                  for slow mornings, long evenings and easy entertaining.
                </p>
              </div>
            </div>

            <div
              id="shambala-water-fire-features"
              className="services-stories-lockup-tertiary block-center-start"
            >
              <div className="block gap-3">
                <h3>Water &amp; Fire Features</h3>
                <div className="services-stories-subheading">
                  Statement pieces that bring movement, sound and warmth.
                </div>
                <p>
                  Reflective pools, rills, fire bowls and bespoke features that
                  become the glowing heart of your Shambala landscape.
                </p>
              </div>
            </div>
          </div>

          {/* Mobile sticky titles that change on scroll */}
          <div className="services-stories-mobile-sticky-titles block-center-center">
            <p className="services-stories-mobile-title-primary">
              Garden Transformations
            </p>
            <p className="services-stories-mobile-title-secondary">
              Outdoor Living Design
            </p>
            <p className="services-stories-mobile-title-tertiary">
              Water &amp; Fire Features
            </p>
          </div>
        </section>

        {/* Scroll-driven pagination dots (desktop) */}
        <div className="services-stories-pagination block-center-center content-full">
          <div className="inline gap-3">
            <a href="#shambala-garden-transformations" />
            <a href="#shambala-outdoor-living" />
            <a href="#shambala-water-fire-features" />
          </div>
        </div>
      </main>
    </section>
  );
};

export default ServicesStories;
