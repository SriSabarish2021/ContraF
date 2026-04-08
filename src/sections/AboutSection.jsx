import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../css/AboutSection.css';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const featuresRef = useRef([]);

  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: 'Premium Quality',
      description: 'Crafted with finest materials for lasting durability and comfort.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Fast Delivery',
      description: 'Quick and reliable shipping to your doorstep worldwide.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Secure Payment',
      description: 'Multiple secure payment options for your peace of mind.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: '24/7 Support',
      description: 'Round-the-clock customer service for all your needs.'
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(headerRef.current.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
      
      // Image animation
      gsap.fromTo(imageRef.current,
        { opacity: 0, x: -80, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        }
      );
      
      // Content animation
      gsap.fromTo(contentRef.current.children,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        }
      );
      
      // Features animation
      gsap.fromTo(featuresRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: featuresRef.current[0],
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
      
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section className="about-section" id="about" ref={sectionRef}>
      {/* Decorative Elements */}
      <div className="about-decoration about-decoration--1"></div>
      <div className="about-decoration about-decoration--2"></div>
      
      {/* Section Header */}
      <div className="about-header" ref={headerRef}>
        <p className="about-subtitle">About Us</p>
        <h2 className="about-title">
          Crafting Future of <span> Fashion</span> with Purpose
        </h2>
      </div>
      
      {/* About Grid */}
      <div className="about-grid">
        {/* Image Side */}
        <div className="about-image-wrapper" ref={imageRef}>
          <div className="about-image-main">
            <img src="/images/about-main.jpg" alt="ContraF Craftsmanship" />
          </div>
          <div className="about-image-float">
            <img src="/images/about-float.jpg" alt="ContraF Detail" />
          </div>
          <div className="about-experience">
            <span className="about-experience-years">15+</span>
            <span className="about-experience-text">Years</span>
          </div>
        </div>
        
        {/* Content Side */}
        <div className="about-content" ref={contentRef}>
          <p className="about-description">
            At ContraF International, we believe fashion should be more than style — it should be smart, efficient, and accessible. Our mission is to bridge the gap between traditional wear and modern innovation, creating products that simplify everyday life.
          </p>
          <p className="about-description">
           From reinventing how a vesti is worn to introducing customizable footwear and on-demand clothing solutions, we are shaping a new era of fashion technology.
          </p>
          
          {/* Features Grid */}
          <div className="about-features">
            {features.map((feature, index) => (
              <div 
                className="about-feature" 
                key={feature.title}
                ref={el => featuresRef.current[index] = el}
              >
                <div className="about-feature-icon">
                  {feature.icon}
                </div>
                <div className="about-feature-content">
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA */}
          <div className="about-cta">
            <a href="#products" className="about-btn about-btn-primary" onClick={(e) => {
              e.preventDefault();
              document.querySelector('#products').scrollIntoView({ behavior: 'smooth' });
            }}>
              Our Products
            </a>
            <a href="#achievements" className="about-link" onClick={(e) => {
              e.preventDefault();
              document.querySelector('#achievements').scrollIntoView({ behavior: 'smooth' });
            }}>
              Our Journey
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
