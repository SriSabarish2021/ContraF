import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import '../css/LoadingScreen.css';

const LoadingScreen = ({ onComplete }) => {
  const loadingRef = useRef(null);
  const logoTextRef = useRef(null);
  const taglineRef = useRef(null);
  const progressRef = useRef(null);
  const progressBarRef = useRef(null);
  const percentageRef = useRef(null);
  const dotsRef = useRef(null);
  
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create main timeline
      const tl = gsap.timeline();
      
      // Animate logo letters
      const letters = logoTextRef.current.querySelectorAll('span');
      tl.fromTo(letters, 
        { 
          opacity: 0, 
          y: 50,
          rotateX: -90
        },
        { 
          opacity: 1, 
          y: 0,
          rotateX: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: 'back.out(1.7)'
        }
      );
      
      // Animate logo accent underline
      const accent = logoTextRef.current.querySelector('.loading-logo-accent');
      if (accent) {
        tl.to(accent.querySelector('::after') || accent, {
          scaleX: 1,
          duration: 0.5,
          ease: 'power2.out'
        }, '-=0.3');
      }
      
      // Animate tagline
      tl.to(taglineRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power2.out'
      }, '-=0.3');
      
      // Animate progress container
      tl.to(progressRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out'
      }, '-=0.2');
      
      // Animate percentage
      tl.to(percentageRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out'
      }, '-=0.2');
      
      // Animate loading dots
      tl.to(dotsRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out'
      }, '-=0.2');
      
      // Progress bar animation
      tl.to(progressBarRef.current, {
        width: '100%',
        duration: 2,
        ease: 'power2.inOut',
        onUpdate: function() {
          const progressPercent = Math.round(this.progress() * 100);
          setProgress(progressPercent);
        }
      }, '-=0.5');
      
      // Exit animation
      tl.add(() => {
        loadingRef.current.classList.add('exit');
      });
      
      tl.to(loadingRef.current, {
        opacity: 0,
        scale: 1.1,
        duration: 0.7,
        ease: 'power2.inOut',
        onComplete: () => {
          if (onComplete) onComplete();
        }
      });
      
    }, loadingRef);
    
    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div className="loading-screen" ref={loadingRef}>
      {/* Decorative Elements */}
      <div className="loading-decoration loading-decoration--1"></div>
      <div className="loading-decoration loading-decoration--2"></div>
      <div className="loading-decoration loading-decoration--3"></div>
      <div className="loading-decoration loading-decoration--4"></div>
      
      <div className="loading-content">
        {/* Logo with animated rings */}
        <div className="loading-logo">
          
          <div className="loading-logo-text" ref={logoTextRef}>
            <span>C</span>
            <span>o</span>
            <span>n</span>
            <span>t</span>
            <span>r</span>
            <span>a</span>
            <span className="loading-logo-accent">F</span>
          </div>
        </div>
        
        {/* Tagline */}
        <p className="loading-tagline" ref={taglineRef}>
          International
        </p>
        
        {/* Progress Bar */}
        <div className="loading-progress-container" ref={progressRef}>
          <span className="loading-percentage" ref={percentageRef}>
            {progress}%
          </span>
          <div className="loading-progress-bar" ref={progressBarRef}></div>
        </div>
        
        {/* Loading Dots */}
        <div className="loading-dots" ref={dotsRef}>
          <div className="loading-dot"></div>
          <div className="loading-dot"></div>
          <div className="loading-dot"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
