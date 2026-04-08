import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../css/MissionSection.css';

gsap.registerPlugin(ScrollTrigger);

const MissionSection = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const valuesRef = useRef([]);

  const values = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Quality First',
      description: 'We never compromise on quality, using only premium materials.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Innovation Driven',
      description: 'Constantly pushing boundaries with cutting-edge technology.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Affordable Luxury',
      description: 'Making premium fashion accessible to everyone.'
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content animation
      gsap.fromTo(contentRef.current.children,
        { opacity: 0, x: -50 },
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
      
      // Image animation
      gsap.fromTo(imageRef.current,
        { opacity: 0, x: 80, scale: 0.95 },
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
      
      // Values animation
      gsap.fromTo(valuesRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: valuesRef.current[0],
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
      
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section className="mission-section" id="mission" ref={sectionRef}>
      {/* Decorative Elements */}
      <div className="mission-decoration mission-decoration--1"></div>
      <div className="mission-decoration mission-decoration--2"></div>
      <div className="mission-decoration mission-decoration--3"></div>
      
      {/* Mission Grid */}
      <div className="mission-grid">
        {/* Content Side */}
        <div className="mission-content" ref={contentRef}>
          <p className="mission-subtitle">Our Mission</p>
          <h2 className="mission-title">
           Empowering Style, <span>Through Innovation</span>
          </h2>
          <p className="mission-description">
           Our mission is to redefine the fashion industry by combining technology, tradition, and sustainability. We aim to create products that are not just stylish, but also functional, time-saving, and future-ready.
          </p>
          <p className="mission-description">
            We are committed to making premium fashion accessible, convenient, and adaptable for everyone.
          </p>
          
          {/* Mission Values */}
          <div className="mission-values">
            {values.map((value, index) => (
              <div 
                className="mission-value" 
                key={value.title}
                ref={el => valuesRef.current[index] = el}
              >
                <div className="mission-value-icon">
                  {value.icon}
                </div>
                <div className="mission-value-content">
                  <h4>{value.title}</h4>
                  <p>{value.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA */}
          <div className="mission-cta">
            <a href="#vision" className="mission-btn mission-btn-primary" onClick={(e) => {
              e.preventDefault();
              document.querySelector('#vision').scrollIntoView({ behavior: 'smooth' });
            }}>
              Our Vision
            </a>
          </div>
        </div>
        
        {/* Image Side */}
        <div className="mission-image-wrapper" ref={imageRef}>
          <div className="mission-image-main">
            <img src="/images/mission-main.jpg" alt="ContraF Mission" />
          </div>
          
          {/* Floating Card */}
          <div className="mission-float-card">
            <div className="mission-float-card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4>Our Promise</h4>
            <p>To deliver exceptional quality and innovation in every product we create.</p>
          </div>
          
          {/* Quote Block */}
          <div className="mission-quote">
            <p className="mission-quote-text">
              "Fashion is the armor to survive the reality of everyday life."
            </p>
            <span className="mission-quote-author">— Fazz Yousuf</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
