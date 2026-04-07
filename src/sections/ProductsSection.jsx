import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../css/ProductsSection.css';

gsap.registerPlugin(ScrollTrigger);

const ProductsSection = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const filterRef = useRef(null);
  const gridRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Vests', 'Shoes', 'Jerkins', 'Vending Machines'];

  const products = [
    {
      id: 1,
      name: 'Classic Leather Vest',
      category: 'Vests',
      price: 129,
      originalPrice: null,
      image: '/images/product-vest-1.jpg',
      badge: 'bestseller'
    },
    {
      id: 2,
      name: 'Urban Sneaker Pro',
      category: 'Shoes',
      price: 189,
      originalPrice: 229,
      image: '/images/product-shoe-1.jpg',
      badge: 'sale'
    },
    {
      id: 3,
      name: 'Premium Denim Jerkin',
      category: 'Jerkins',
      price: 249,
      originalPrice: null,
      image: '/images/product-jerkin-1.jpg',
      badge: 'new'
    },
    {
      id: 4,
      name: 'Smart Dress Vending Machine',
      category: 'Vending Machines',
      price: 4999,
      originalPrice: null,
      image: '/images/product-vending-1.jpg',
      badge: 'new'
    }
    // {
    //   id: 5,
    //   name: 'Suede Casual Vest',
    //   category: 'Vests',
    //   price: 159,
    //   originalPrice: null,
    //   image: '/images/product-vest-2.jpg',
    //   badge: null
    // },
    // {
    //   id: 6,
    //   name: 'Executive Formal Shoes',
    //   category: 'Shoes',
    //   price: 299,
    //   originalPrice: null,
    //   image: '/images/product-shoe-2.jpg',
    //   badge: 'bestseller'
    // },
    // {
    //   id: 7,
    //   name: 'Wool Blend Jerkin',
    //   category: 'Jerkins',
    //   price: 199,
    //   originalPrice: 249,
    //   image: '/images/product-jerkin-2.jpg',
    //   badge: 'sale'
    // },
    // {
    //   id: 8,
    //   name: 'Compact Vending Unit',
    //   category: 'Vending Machines',
    //   price: 3499,
    //   originalPrice: null,
    //   image: '/images/product-vending-2.jpg',
    //   badge: null
    // }
  ];

  const filteredProducts = activeFilter === 'All' 
    ? products 
    : products.filter(p => p.category === activeFilter);

  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     // Header animation
  //     gsap.fromTo(headerRef.current.children,
  //       { opacity: 0, y: 50 },
  //       {
  //         opacity: 1,
  //         y: 0,
  //         duration: 0.8,
  //         stagger: 0.15,
  //         ease: 'power2.out',
  //         scrollTrigger: {
  //           trigger: headerRef.current,
  //           start: 'top 80%',
  //           toggleActions: 'play none none reverse'
  //         }
  //       }
  //     );
      
  //     // Filter buttons animation
  //     gsap.fromTo(filterRef.current.children,
  //       { opacity: 0, y: 20 },
  //       {
  //         opacity: 1,
  //         y: 0,
  //         duration: 0.5,
  //         stagger: 0.08,
  //         ease: 'power2.out',
  //         scrollTrigger: {
  //           trigger: filterRef.current,
  //           start: 'top 85%',
  //           toggleActions: 'play none none reverse'
  //         }
  //       }
  //     );
      
  //     // Products grid animation
  //     gsap.fromTo(gridRef.current.children,
  //       { opacity: 0, y: 50, scale: 0.95 },
  //       {
  //         opacity: 1,
  //         y: 0,
  //         scale: 1,
  //         duration: 0.6,
  //         stagger: 0.1,
  //         ease: 'power2.out',
  //         scrollTrigger: {
  //           trigger: gridRef.current,
  //           start: 'top 80%',
  //           toggleActions: 'play none none reverse'
  //         }
  //       }
  //     );
      
  //   }, sectionRef);
    
  //   return () => ctx.revert();
  // }, []);

  // // Animate products when filter changes
  // useEffect(() => {
  //   if (gridRef.current) {
  //     gsap.fromTo(gridRef.current.children,
  //       { opacity: 0, y: 30, scale: 0.95 },
  //       { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.08, ease: 'power2.out' }
  //     );
  //   }
  // }, [activeFilter]);

  return (
    <section className="products-section" id="products" ref={sectionRef}>
      {/* Decorative Elements */}
      <div className="products-decoration products-decoration--1"></div>
      <div className="products-decoration products-decoration--2"></div>
      
      {/* Section Header */}
      <div className="products-header" ref={headerRef}>
        <p className="products-subtitle">Our Collection</p>
        <h2 className="products-title">
          Discover Our <span>Products</span>
        </h2>
        <p className="products-description">
          From stylish apparel to innovative vending solutions, explore our diverse range of 
          products designed to elevate your fashion experience.
        </p>
      </div>
      
      {/* Category Filter */}
      {/* <div className="products-filter" ref={filterRef}>
        {categories.map((category) => (
          <button
            key={category}
            className={`products-filter-btn ${activeFilter === category ? 'active' : ''}`}
            onClick={() => setActiveFilter(category)}
          >
            {category}
          </button>
        ))}
      </div> */}
      
      {/* Products Grid */}
      <div className="products-grid" ref={gridRef}>
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            {/* Product Image */}
            <div className="product-image">
              <img src={product.image} alt={product.name} />
              
              {/* Badge */}
              {product.badge && (
                <span className={`product-badge product-badge--${product.badge}`}>
                  {product.badge}
                </span>
              )}
              
              {/* Product Actions */}
              {/* <div className="product-actions">
                <button className="product-action-btn" aria-label="Add to wishlist">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
                <button className="product-action-btn" aria-label="Quick view">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </button>
              </div> */}
            </div>
            
            {/* Product Info */}
            <div className="product-info">
              <span className="product-category">{product.category}</span>
              <h3 className="product-name">{product.name}</h3>
              <div className='button-direct-container'>
                <button className='direct-store-btn'>Visit Store  <span className='store-visit-btn-ani'></span></button>
              </div>
              
              {/* <div className="product-price">
                <span className="product-price-current">${product.price}</span>
                {product.originalPrice && (
                  <span className="product-price-original">${product.originalPrice}</span>
                )}
              </div> */}
            </div>
          </div>
        ))}
      </div>
      
      {/* CTA */}
      {/* <div className="product-cta">
        <a href="#contact" className="products-btn" onClick={(e) => {
          e.preventDefault();
          document.querySelector('#footer').scrollIntoView({ behavior: 'smooth' });
        }}>
          View All Products
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div> */}
    </section>
  );
};

export default ProductsSection;
