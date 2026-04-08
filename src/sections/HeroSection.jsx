import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../css/HeroSection.css';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const sectionRef = useRef(null);
  const bgImageRef = useRef(null);
  const taglineRef = useRef(null);
  const titleLinesRef = useRef([]);
  const descriptionRef = useRef(null);
  const ctaRef = useRef(null);
  const scrollIndicatorRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create entrance timeline (plays after loading screen)
      const entranceTl = gsap.timeline({ delay:0.04 });
      
      // Background image zoom and fade in
      entranceTl.fromTo(bgImageRef.current,
        { opacity: 0, scale: 1.2 },
        { opacity: 1, scale: 1, duration: 0.7, ease: 'power2.out' }
      );
      
      // Tagline animation
      entranceTl.fromTo(taglineRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
        '-=1'
      );
      
      // Title lines animation with stagger
      entranceTl.fromTo(titleLinesRef.current,
        { opacity: 0, y: '100%' },
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out' },
        '-=0.6'
      );
      
      // Description animation
      entranceTl.fromTo(descriptionRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
        '-=0.6'
      );
      
      // CTA buttons animation
      entranceTl.fromTo(ctaRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
        '-=0.5'
      );
      
      // Scroll indicator animation
      entranceTl.fromTo(scrollIndicatorRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6, ease: 'power2.out' },
        '-=0.3'
      );
      const statsview = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'bottom 95%',
          end: 'bottom 95%',
          scrub: 1,
        }
      });
      // Stats bar animation
      statsview.fromTo(statsRef.current,
        { opacity: 0, y: '100%' },
        { opacity: 1, y: 0, duration: 2, ease: 'power2.out' },
        '-=0.3'
      );
      
      // Scroll-triggered exit animation
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        }
      });
      
      // Fade out and scale down elements on scroll
      scrollTl.to(bgImageRef.current, {
        scale: 1.1,
        opacity: 0.5,
        ease: 'none'
      }, 0);
      
      scrollTl.to([taglineRef.current, ...titleLinesRef.current, descriptionRef.current, ctaRef.current], {
        y: -100,
        opacity: 0,
        stagger: 0.05,
        ease: 'none'
      }, 0);
      
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  const handleScrollDown = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section" id="hero" ref={sectionRef}>
      {/* Background Image */}
      {/* <div className="hero-bg">
        <img 
          ref={bgImageRef}
          src="/images/hero-bg.jpg" 
          alt="ContraF Fashion" 
          className="hero-bg-image"
        />
      </div> */}
      
      {/* Overlay */}
      <div className="hero-overlay"></div>
      
      {/* Decorative Elements */}
      <div className="hero-decoration hero-decoration--1"></div>
      <div className="hero-decoration hero-decoration--2"></div>
      <div className="hero-decoration hero-decoration--3"></div>
      
      {/* Hero Content */}
      <div className="hero-content">
        {/* Tagline */}
        <p className="hero-tagline" ref={taglineRef}>
          Redefining Fashion & Convenience
        </p>
        
        {/* Main Title */}
        <h1 className="hero-title">
          <span className="hero-title-line" ref={el => titleLinesRef.current[0] = el}>
            Where Tradition
          </span>
          <span className="hero-title-line" ref={el => titleLinesRef.current[1] = el}>
            Meets <span className="hero-title-accent">Modern Style</span>
          </span>
        </h1>
        
        {/* Description */}
        <p className="hero-description" ref={descriptionRef}>
         From instant-wear traditional vesti to modular shoes, smart jackets, and dress vending machines, ContraF International brings the future of fashion to your everyday life.
        </p>
        
        {/* CTA Buttons */}
        <div className="hero-cta" ref={ctaRef}>

          <a href="#products" className="hero-btn hero-btn-primary" onClick={(e) => {
            e.preventDefault();
            document.querySelector('#products').scrollIntoView({ behavior: 'smooth' });
          }}>
            Explore Collection
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a href="#about" className="hero-btn hero-btn-secondary" onClick={(e) => {
            e.preventDefault();
            document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
          }}>
            Learn More
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="hero-scroll" ref={scrollIndicatorRef} onClick={handleScrollDown}>
        <span className="hero-scroll-text">Scroll Down</span>
        <div className="hero-scroll-icon">
          <div className="hero-scroll-dot"></div>
        </div>
      </div>
      
      {/* Stats Bar */}
      <div className="hero-stats" ref={statsRef}>
        <div className="hero-stats-inner">
          <div className="hero-stat">
            <span className="hero-stat-value">15+</span>
            <span className="hero-stat-label">Years Experience</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-value">50K+</span>
            <span className="hero-stat-label">Happy Customers</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-value">200+</span>
            <span className="hero-stat-label">Products</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-value">25+</span>
            <span className="hero-stat-label">Stores</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
