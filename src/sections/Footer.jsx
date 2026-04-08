import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../css/Footer.css';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const topRef = useRef(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const Service=useRef(null)
  const Privacy=useRef(null)

  const refund=useRef(null)

  const quickLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About Us', href: '#about' },
    { label: 'Products', href: '#products' },
    { label: 'Mission', href: '#mission' },
    { label: 'Vision', href: '#vision' }
  ];

  const supportLinks = [
    { label: 'FAQ', href: '#' },
    { label: 'Shipping Info', href: '#' },
    { label: 'Returns', href: '#' },
    { label: 'Size Guide', href: '#' },
    { label: 'Track Order', href: '#' }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Footer top animation
      gsap.fromTo(topRef.current.children,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: topRef.current,
            start: 'top 90%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, footerRef);

    // Back to top button visibility
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      ctx.revert();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  let displaypolicy=(policy)=>{
    policy.current.classList.add("show-main-policy-container");
    console.log(policy.current);
    
    
  }

  return (
    <footer className="footer" id="footer" ref={footerRef}>
      {/* Grid Pattern */}
      <div className="footer-grid-pattern"></div>
      
      {/* Decorative Elements */}
      <div className="footer-decoration footer-decoration--1"></div>
      <div className="footer-decoration footer-decoration--2"></div>
      
      {/* Footer Top */}
      <div className="footer-top">
        <div className="footer-top-inner" ref={topRef}>
          {/* Brand Column */}
          <div className="footer-brand">
            <h3 className="footer-logo">
              Contra<span>F</span>
            </h3>
            <p className="footer-description">
              Redefining fashion with convenience, tradition, and modern style. 
              Experience the perfect blend of quality and innovation.
            </p>
            <div className="footer-social">
              <a href="#" className="footer-social-link" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M7.5 3h9a4.5 4.5 0 014.5 4.5v9a4.5 4.5 0 01-4.5 4.5h-9A4.5 4.5 0 013 16.5v-9A4.5 4.5 0 017.5 3z" />
                </svg>
              </a>
              <a href="#" className="footer-social-link" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a href="#" className="footer-social-link" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a href="#" className="footer-social-link" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="footer-links-column">
            <h4 className="footer-links-title">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="footer-link"
                    onClick={(e) => handleLinkClick(e, link.href)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Support Links */}
          <div className="footer-links-column">
            <h4 className="footer-links-title">Support</h4>
            <ul className="footer-links">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer-link">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="footer-newsletter">
            <h4 className="footer-newsletter-title">Newsletter</h4>
            <p className="footer-newsletter-description">
              Subscribe to get updates on new products and exclusive offers.
            </p>
            <form className="footer-newsletter-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Enter your email"
                className="footer-newsletter-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="footer-newsletter-btn">
                {subscribed ? (
                  'Subscribed!'
                ) : (
                  <>
                    Subscribe
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>
            </form>
            
            {/* Contact Info */}
            <div className="footer-contact">
              <div className="footer-contact-item">
                <div className="footer-contact-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="footer-contact-content">
                  <h5>Address</h5>
                  <p>Mettupalayam Road, Annur, Coimbatore</p>
                </div>
              </div>
              <div className="footer-contact-item">
                <div className="footer-contact-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="footer-contact-content">
                  <h5>Email</h5>
                  <p>contrafinternational@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p className="footer-copyright">
            © 2025 <span>ContraF</span>. All rights reserved.
          </p>
          <div className="footer-legal">
            <a onClick={()=>displaypolicy(Privacy)} className="footer-legal-link">Privacy Policy</a>
            <a ref={Service} onClick={()=>displaypolicy(Service)} className="footer-legal-link">Terms of Service</a>
            <a ref={refund} onClick={()=>displaypolicy(refund)} className="footer-legal-link">Refund Policy</a>
          </div>
        </div>
      </div>
      
      {/* Back to Top Button */}
      <button 
        className={`footer-back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
      <div ref={Privacy} className='privacy-policy'>
        <div className='privacy-content'>
          <div className='cont-inner'>
            <span className='policy-tit'>Privacy Policy</span>
            <p className='policy-tit-inner-cont'>
              <span>
                Vetikaaran operates this website to provide you with a curated shopping experience. Our store is powered by Shopify. This Privacy Policy explains how we collect, use, and protect your personal information when you visit, use, or make a purchase from our website. By using our Services, you agree to this Privacy Policy.
              </span>
               

              <span>We may collect personal information such as your name, billing and shipping address, phone number, email address, payment details, transaction history, account login details, items viewed or purchased, and any information you provide through customer support inquiries. We also automatically collect device information such as IP address, browser type, and browsing activity through cookies and similar technologies.</span>
              
              <span>We use your information to process orders, manage your account, complete payments, arrange shipping, handle returns, improve your shopping experience, send order updates, provide customer support, prevent fraud, ensure website security, and comply with legal requirements. We may also send promotional communications, and you can opt out at any time using the unsubscribe link in our emails.</span>
              
              <span>
                We may share your information with Shopify, payment gateways, shipping partners, IT service providers, analytics providers, and marketing partners strictly to operate and improve our services. We do not sell your personal information. We may disclose information if required by law or to protect our legal rights. 
              </span>

              <span>
                    Our website may contain links to third-party websites. We are not responsible for their privacy practices and encourage you to review their policies before sharing personal information. 
              </span>

              <span>
                  We take reasonable security measures to protect your personal information. However, no online system is completely secure. We retain your information only as long as necessary to provide services, comply with legal obligations, and resolve disputes. 
              </span>

              <span>
                Depending on your location, you may have rights to access, correct, delete, or request a copy of your personal information, and to opt out of marketing communications. To exercise these rights, please contact us using the details below.
              </span>

              <span>
                Our services are not intended for children, and we do not knowingly collect personal information from minors. 
              </span>

              <span>
                 We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date
              </span>

             <span>
              If you have any questions about this Privacy Policy or your personal information, please contact us at: 
             </span>

             <span>
                  Email: vetikaaran@gmail.com<br></br>
                  Address: Plot No: 69, Velmayil Garden, Pogalur, Annur to Mettupalayam Road, Coimbatore, Tamil Nadu – 641697, India 

             </span>
              
            </p>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
