import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../css/AchievementSection.css';

gsap.registerPlugin(ScrollTrigger);

const AchievementSection = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const statsRef = useRef([]);
  const awardsRef = useRef([]);

  const stats = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      value: '50K',
      suffix: '+',
      label: 'Happy Customers'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      value: '200',
      suffix: '+',
      label: 'Products'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      value: '25',
      suffix: '+',
      label: 'Retail Stores'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      value: '15',
      suffix: '+',
      label: 'Countries'
    }
  ];

  const awards = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: 'Best Fashion Brand 2023',
      description: 'Awarded by Fashion Industry Association'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: 'Innovation Excellence',
      description: 'For our vending dress machine technology'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: 'Customer Choice Award',
      description: 'Voted #1 by our loyal customers'
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
      
      // Stats cards animation
      gsap.fromTo(statsRef.current,
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: statsRef.current[0],
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
      
      // Awards animation
      gsap.fromTo(awardsRef.current,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: awardsRef.current[0],
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
      
      // Counter animation for stats
      statsRef.current.forEach((stat, index) => {
        const valueEl = stat.querySelector('.achievement-stat-value');
        const targetValue = parseInt(stats[index].value);
        
        ScrollTrigger.create({
          trigger: stat,
          start: 'top 85%',
          onEnter: () => {
            gsap.fromTo({ val: 0 }, 
              { val: 0 },
              {
                val: targetValue,
                duration: 2,
                ease: 'power2.out',
                onUpdate: function() {
                  valueEl.innerHTML = Math.round(this.targets()[0].val) + '<span>' + stats[index].suffix + '</span>';
                }
              }
            );
          },
          once: true
        });
      });
      
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section className="achievement-section" id="achievements" ref={sectionRef}>
      {/* Grid Pattern */}
      <div className="achievement-grid-pattern"></div>
      
      {/* Decorative Elements */}
      <div className="achievement-decoration achievement-decoration--1"></div>
      <div className="achievement-decoration achievement-decoration--2"></div>
      <div className="achievement-decoration achievement-decoration--3"></div>
      
      {/* Section Header */}
      <div className="achievement-header" ref={headerRef}>
        <p className="achievement-subtitle">Our Achievements</p>
        <h2 className="achievement-title">
          Numbers That <span>Speak</span> Our Success
        </h2>
        <p className="achievement-description">
          Over the years, we've grown from a small startup to an internationally recognized fashion brand, 
          thanks to our commitment to quality and customer satisfaction.
        </p>
      </div>
      
      {/* Stats Grid */}
      <div className="achievement-stats">
        {stats.map((stat, index) => (
          <div 
            className="achievement-stat-card" 
            key={stat.label}
            ref={el => statsRef.current[index] = el}
          >
            <div className="achievement-stat-icon">
              {stat.icon}
            </div>
            <span className="achievement-stat-value">
              0<span>{stat.suffix}</span>
            </span>
            <span className="achievement-stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
      
      {/* Awards Section */}
      <div className="achievement-awards">
        <h3 className="achievement-awards-title">Awards & Recognition</h3>
        <div className="achievement-awards-grid">
          {awards.map((award, index) => (
            <div 
              className="achievement-award-card" 
              key={award.title}
              ref={el => awardsRef.current[index] = el}
            >
              <div className="achievement-award-icon">
                {award.icon}
              </div>
              <div className="achievement-award-content">
                <h4>{award.title}</h4>
                <p>{award.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementSection;
