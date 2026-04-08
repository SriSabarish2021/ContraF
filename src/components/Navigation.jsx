import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import '../css/Navigation.css';

const Navigation = () => {
  const navRef = useRef(null);
  const linksRef = useRef([]);
  const actionsRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Products', href: '#products' },
    { label: 'Mission', href: '#mission' },
    { label: 'Vision', href: '#vision' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial animation timeline
      const tl = gsap.timeline({ delay:0.5 }); // Start after loading screen
      
      // Animate navigation container
      tl.to(navRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out'
      });
      
      // Animate nav links with stagger
      tl.fromTo(linksRef.current,
        { 
          opacity: 0, 
          y: -20 
        },
        { 
          opacity: 1, 
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power2.out'
        },
        '-=0.4'
      );
      
      // Animate action buttons
      tl.fromTo(actionsRef.current.children,
        { 
          opacity: 0, 
          scale: 0.8 
        },
        { 
          opacity: 1, 
          scale: 1,
          duration: 0.4,
          stagger: 0.1,
          ease: 'back.out(1.7)'
        },
        '-=0.3'
      );
    }, navRef);

    // Scroll handler
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      ctx.revert();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Mobile menu animation
  useEffect(() => {
    if (isMobileMenuOpen) {
      gsap.fromTo('.mobile-menu-link',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.1, ease: 'power2.out' }
      );
    }
  }, [isMobileMenuOpen]);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav 
        className={`navigation ${isScrolled ? 'scrolled' : ''}`} 
        ref={navRef}
      >
        <div className="navigation-inner">
          {/* Logo */}
          <a href="#hero" className="nav-logo" onClick={(e) => handleLinkClick(e, '#hero')}>
            <span className="nav-logo-text">
              Contra<span className="nav-logo-accent">F</span>
            </span>
            <span className='nav-international-text'>International</span>
          </a>
          
          {/* Desktop Navigation Links */}
          <ul className="nav-links">
            {navLinks.map((link, index) => (
              <li key={link.label}>
                <a 
                  href={link.href}
                  className="nav-link"
                  ref={el => linksRef.current[index] = el}
                  onClick={(e) => handleLinkClick(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          
          {/* Navigation Actions */}
          <div className="nav-actions" ref={actionsRef}>
           
            <a 
              href="#contact" 
              className="nav-cta"
              onClick={(e) => handleLinkClick(e, '#footer')}
            >
              Contact Us
            </a>
          </div>
          
          {/* Mobile Menu Toggle */}
          <div 
            className={`mobile-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="mobile-toggle-line"></span>
            <span className="mobile-toggle-line"></span>
            <span className="mobile-toggle-line"></span>
          </div>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        {navLinks.map((link) => (
          <a 
            key={link.label}
            href={link.href}
            className="mobile-menu-link"
            onClick={(e) => handleLinkClick(e, link.href)}
          >
            {link.label}
          </a>
        ))}
        <a 
          href="#contact" 
          className="mobile-menu-cta"
          onClick={(e) => handleLinkClick(e, '#footer')}
        >
          Contact Us
        </a>
      </div>
    </>
  );
};

export default Navigation;
