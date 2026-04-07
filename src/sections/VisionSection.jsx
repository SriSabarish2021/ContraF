import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../css/VisionSection.css';

gsap.registerPlugin(ScrollTrigger);

const VisionSection = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const timelineRef = useRef([]);
  const cardsRef = useRef([]);

  const timeline = [
    {
      year: '2010',
      title: 'The Beginning',
      description: 'ContraF was founded with a vision to blend traditional craftsmanship with modern fashion.'
    },
    {
      year: '2015',
      title: 'Expansion',
      description: 'Opened our first international stores and expanded our product line to include shoes and jerkins.'
    },
    {
      year: '2020',
      title: 'Innovation',
      description: 'Launched our revolutionary vending dress machines, changing how people access fashion.'
    },
    {
      year: '2025',
      title: 'Global Reach',
      description: 'Operating in 15+ countries with 25+ retail stores and a growing online presence.'
    }
  ];

  const visionCards = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Global Presence',
      description: 'Expanding our reach to bring ContraF to every corner of the world.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: 'Sustainable Fashion',
      description: 'Committed to eco-friendly practices and sustainable manufacturing.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'Tech Innovation',
      description: 'Pioneering smart solutions for the future of fashion retail.'
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
      
      // Timeline items animation
      timelineRef.current.forEach((item, index) => {
        const isEven = index % 2 === 0;
        
        gsap.fromTo(item,
          { opacity: 0, x: isEven ? -50 : 50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });
      
      // Vision cards animation
      gsap.fromTo(cardsRef.current,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cardsRef.current[0],
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
      
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section className="vision-section" id="vision" ref={sectionRef}>
      {/* Grid Pattern */}
      <div className="vision-grid-pattern"></div>
      
      {/* Decorative Elements */}
      <div className="vision-decoration vision-decoration--1"></div>
      <div className="vision-decoration vision-decoration--2"></div>
      <div className="vision-decoration vision-decoration--3"></div>
      
      {/* Section Header */}
      <div className="vision-header" ref={headerRef}>
        <p className="vision-subtitle">Our Vision</p>
        <h2 className="vision-title">
          Shaping the <span>Future</span> of Fashion
        </h2>
        <p className="vision-description">
          We envision a world where fashion is accessible, sustainable, and innovative. 
          Our journey is marked by continuous growth and a commitment to excellence.
        </p>
      </div>
      
      {/* Timeline */}
      <div className="vision-timeline">
        {timeline.map((item, index) => (
          <div 
            className="vision-timeline-item" 
            key={item.year}
            ref={el => timelineRef.current[index] = el}
          >
            <div className="vision-timeline-content">
              <span className="vision-timeline-year">{item.year}</span>
              <h3 className="vision-timeline-title">{item.title}</h3>
              <p className="vision-timeline-description">{item.description}</p>
            </div>
            <div className="vision-timeline-dot"></div>
            <div className="vision-timeline-spacer"></div>
          </div>
        ))}
      </div>
      
      {/* Vision Cards */}
      <div className="vision-cards">
        {visionCards.map((card, index) => (
          <div 
            className="vision-card" 
            key={card.title}
            ref={el => cardsRef.current[index] = el}
          >
            <div className="vision-card-icon">
              {card.icon}
            </div>
            <h4>{card.title}</h4>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VisionSection;
