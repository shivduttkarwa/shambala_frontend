import React from "react";
import { useParams } from "react-router-dom";
import ServiceDetails from "../components/Services/ServiceDetails";

const publicUrl = import.meta.env.BASE_URL;

// Service data for different services
const servicesData = {
  "architectural-design": {
    id: "architectural-design",
    title: "Architectural Design",
    subtitle: "Innovative Design Solutions for Modern Living",
    description: "Transform your vision into architectural excellence with our comprehensive design services. From conceptual sketches to detailed blueprints, we create spaces that blend functionality with aesthetic appeal, ensuring every design reflects your unique lifestyle and aspirations.",
    heroImage: `${publicUrl}images/l1.jpg`,
    features: [
      {
        title: "3D Visualization",
        description: "Experience your future home through cutting-edge 3D modeling and virtual reality walkthroughs before construction begins.",
        image: `${publicUrl}images/sm1.jpg`
      },
      {
        title: "Sustainable Design",
        description: "Eco-friendly architectural solutions that reduce environmental impact while maximizing energy efficiency and comfort.",
        image: `${publicUrl}images/sm2.jpg`
      },
      {
        title: "Space Optimization",
        description: "Intelligent design strategies that maximize functionality and flow while creating beautiful, livable spaces.",
        image: `${publicUrl}images/sm3.jpg`
      }
    ],
    process: [
      {
        step: 1,
        title: "Initial Consultation",
        description: "Comprehensive discussion of your needs, preferences, site analysis, and budget considerations to establish project parameters.",
        image: `${publicUrl}images/sm4.jpg`
      },
      {
        step: 2,
        title: "Design Development",
        description: "Creation of initial concepts, floor plans, and 3D visualizations with iterative refinements based on your feedback.",
        image: `${publicUrl}images/sm5.jpg`
      },
      {
        step: 3,
        title: "Final Documentation",
        description: "Detailed construction drawings, specifications, and permit-ready documentation for seamless project execution.",
        image: `${publicUrl}images/sm1.jpg`
      }
    ],
    testimonial: {
      quote: "The architectural team at Shambala Homes brought our vision to life with incredible attention to detail. Their innovative design solutions exceeded all our expectations.",
      author: "Jennifer & David Chen",
      project: "Contemporary Family Home, Brighton"
    },
    gallery: [
      `${publicUrl}images/l2.jpg`,
      `${publicUrl}images/l3.jpg`,
      `${publicUrl}images/l4.jpg`,
      `${publicUrl}images/l5.jpg`
    ],
    ctaTitle: "Ready to Design Your Dream Space?",
    ctaDescription: "Let our architectural experts transform your vision into a stunning reality. Contact us today to begin your design journey."
  },
  "construction-services": {
    id: "construction-services",
    title: "Construction Services",
    subtitle: "Expert Building with Uncompromising Quality",
    description: "Experience superior craftsmanship with our comprehensive construction services. From foundation to finish, we execute every project with precision, using premium materials and advanced techniques to deliver homes that stand the test of time.",
    heroImage: `${publicUrl}images/l2.jpg`,
    features: [
      {
        title: "Premium Materials",
        description: "Sourcing only the finest materials and finishes from trusted suppliers to ensure lasting quality and beauty.",
        image: `${publicUrl}images/sm2.jpg`
      },
      {
        title: "Skilled Craftsmen",
        description: "Our team of experienced tradespeople brings decades of expertise to every aspect of your construction project.",
        image: `${publicUrl}images/sm3.jpg`
      },
      {
        title: "Quality Assurance",
        description: "Rigorous quality control processes and regular inspections ensure every detail meets our exacting standards.",
        image: `${publicUrl}images/sm4.jpg`
      }
    ],
    process: [
      {
        step: 1,
        title: "Site Preparation",
        description: "Comprehensive site analysis, permits, and preparation work including excavation and foundation planning.",
        image: `${publicUrl}images/sm1.jpg`
      },
      {
        step: 2,
        title: "Construction Phase",
        description: "Systematic building process with regular quality checks, timeline management, and client communication.",
        image: `${publicUrl}images/sm2.jpg`
      },
      {
        step: 3,
        title: "Final Inspection",
        description: "Thorough walkthrough, final touches, and handover with comprehensive warranty and maintenance guidelines.",
        image: `${publicUrl}images/sm3.jpg`
      }
    ],
    testimonial: {
      quote: "The construction quality from Shambala Homes is exceptional. Every detail was executed flawlessly, and the project was completed on time and within budget.",
      author: "Mark & Lisa Patterson",
      project: "Luxury Estate, Kew"
    },
    gallery: [
      `${publicUrl}images/l3.jpg`,
      `${publicUrl}images/l4.jpg`,
      `${publicUrl}images/l5.jpg`,
      `${publicUrl}images/l1.jpg`
    ],
    ctaTitle: "Start Your Construction Project",
    ctaDescription: "Partner with us for superior construction services that deliver exceptional results. Let's build something extraordinary together."
  },
  "interior-design": {
    id: "interior-design",
    title: "Interior Design",
    subtitle: "Beautiful Interiors for Modern Living",
    description: "Create stunning interior spaces that reflect your personality and lifestyle. Our interior design team combines aesthetic vision with practical functionality to transform your home into a personalized sanctuary of comfort and style.",
    heroImage: `${publicUrl}images/l3.jpg`,
    features: [
      {
        title: "Custom Furnishing",
        description: "Bespoke furniture and fixtures designed specifically for your space, lifestyle, and aesthetic preferences.",
        image: `${publicUrl}images/sm3.jpg`
      },
      {
        title: "Color & Material Palette",
        description: "Expert selection of colors, textures, and materials that create harmonious and sophisticated interior environments.",
        image: `${publicUrl}images/sm4.jpg`
      },
      {
        title: "Lighting Design",
        description: "Strategic lighting solutions that enhance ambiance while providing practical illumination for every activity.",
        image: `${publicUrl}images/sm5.jpg`
      }
    ],
    process: [
      {
        step: 1,
        title: "Style Discovery",
        description: "Understanding your lifestyle, preferences, and functional needs to develop a personalized design direction.",
        image: `${publicUrl}images/sm2.jpg`
      },
      {
        step: 2,
        title: "Design Concepts",
        description: "Creation of mood boards, color schemes, and 3D visualizations to bring your interior vision to life.",
        image: `${publicUrl}images/sm3.jpg`
      },
      {
        step: 3,
        title: "Implementation",
        description: "Coordinated installation of furnishings, fixtures, and finishes with attention to every detail.",
        image: `${publicUrl}images/sm4.jpg`
      }
    ],
    testimonial: {
      quote: "The interior design team transformed our house into a home that perfectly captures our style. Every room feels thoughtfully designed and beautifully curated.",
      author: "Emma & James Wilson",
      project: "Penthouse Renovation, South Yarra"
    },
    gallery: [
      `${publicUrl}images/l4.jpg`,
      `${publicUrl}images/l5.jpg`,
      `${publicUrl}images/l1.jpg`,
      `${publicUrl}images/l2.jpg`
    ],
    ctaTitle: "Transform Your Interior Space",
    ctaDescription: "Discover the potential of your interior spaces with our expert design services. Let's create a home that truly reflects you."
  },
  "project-management": {
    id: "project-management",
    title: "Project Management",
    subtitle: "Seamless Project Execution from Start to Finish",
    description: "Experience stress-free construction with our comprehensive project management services. We coordinate every aspect of your build, ensuring timeline adherence, budget control, and quality delivery while keeping you informed throughout the entire process.",
    heroImage: `${publicUrl}images/l4.jpg`,
    features: [
      {
        title: "Timeline Management",
        description: "Detailed project scheduling and milestone tracking to ensure your project stays on schedule and within budget.",
        image: `${publicUrl}images/sm4.jpg`
      },
      {
        title: "Vendor Coordination",
        description: "Expert management of all contractors, suppliers, and trades to ensure seamless collaboration and quality delivery.",
        image: `${publicUrl}images/sm5.jpg`
      },
      {
        title: "Quality Control",
        description: "Regular inspections and quality assurance processes to maintain the highest standards throughout construction.",
        image: `${publicUrl}images/sm1.jpg`
      }
    ],
    process: [
      {
        step: 1,
        title: "Project Planning",
        description: "Comprehensive project scope definition, timeline development, and resource allocation planning.",
        image: `${publicUrl}images/sm3.jpg`
      },
      {
        step: 2,
        title: "Execution Oversight",
        description: "Daily project monitoring, progress reporting, and proactive issue resolution to keep everything on track.",
        image: `${publicUrl}images/sm4.jpg`
      },
      {
        step: 3,
        title: "Project Closure",
        description: "Final inspections, documentation handover, and warranty activation to ensure complete satisfaction.",
        image: `${publicUrl}images/sm5.jpg`
      }
    ],
    testimonial: {
      quote: "The project management was flawless. Every phase was expertly coordinated, and we were kept informed throughout. Our dream home was delivered exactly as promised.",
      author: "Robert & Catherine Miller",
      project: "Custom Estate, Hawthorn"
    },
    gallery: [
      `${publicUrl}images/l5.jpg`,
      `${publicUrl}images/l1.jpg`,
      `${publicUrl}images/l2.jpg`,
      `${publicUrl}images/l3.jpg`
    ],
    ctaTitle: "Professional Project Management",
    ctaDescription: "Let our experienced project managers handle every detail while you enjoy a stress-free building experience."
  },
  "renovation": {
    id: "renovation",
    title: "Renovation",
    subtitle: "Transform Your Space with Expert Renovation",
    description: "Breathe new life into your existing home with our comprehensive renovation services. Whether it's a complete transformation or targeted improvements, we enhance your space while preserving its character and maximizing its potential.",
    heroImage: `${publicUrl}images/l5.jpg`,
    features: [
      {
        title: "Heritage Preservation",
        description: "Respectful renovation of heritage properties that maintains character while incorporating modern conveniences.",
        image: `${publicUrl}images/sm5.jpg`
      },
      {
        title: "Modern Upgrades",
        description: "Integration of contemporary systems, technology, and design elements to enhance functionality and comfort.",
        image: `${publicUrl}images/sm1.jpg`
      },
      {
        title: "Structural Enhancement",
        description: "Expert structural modifications and improvements that optimize space usage and improve property value.",
        image: `${publicUrl}images/sm2.jpg`
      }
    ],
    process: [
      {
        step: 1,
        title: "Property Assessment",
        description: "Thorough evaluation of existing conditions, structural integrity, and renovation potential to plan the optimal approach.",
        image: `${publicUrl}images/sm4.jpg`
      },
      {
        step: 2,
        title: "Renovation Execution",
        description: "Careful demolition and reconstruction work with minimal disruption and maximum attention to preserving valuable features.",
        image: `${publicUrl}images/sm5.jpg`
      },
      {
        step: 3,
        title: "Final Integration",
        description: "Seamless blending of old and new elements to create a cohesive, beautiful, and functional living space.",
        image: `${publicUrl}images/sm1.jpg`
      }
    ],
    testimonial: {
      quote: "Our renovation exceeded all expectations. Shambala Homes preserved the charm of our heritage home while creating a modern, functional family space.",
      author: "Andrew & Sarah Johnson",
      project: "Victorian Home Renovation, Prahran"
    },
    gallery: [
      `${publicUrl}images/l1.jpg`,
      `${publicUrl}images/l2.jpg`,
      `${publicUrl}images/l3.jpg`,
      `${publicUrl}images/l4.jpg`
    ],
    ctaTitle: "Begin Your Renovation Journey",
    ctaDescription: "Transform your existing space into something extraordinary. Our renovation experts are ready to help you reimagine your home."
  }
};

const ServiceDetailPage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  
  // Get service data or default to architectural design
  const serviceData = serviceId ? servicesData[serviceId as keyof typeof servicesData] : servicesData["architectural-design"];
  
  if (!serviceData) {
    return (
      <div style={{ padding: "100px 20px", textAlign: "center" }}>
        <h1>Service Not Found</h1>
        <p>The requested service could not be found.</p>
      </div>
    );
  }

  return <ServiceDetails service={serviceData} />;
};

export default ServiceDetailPage;