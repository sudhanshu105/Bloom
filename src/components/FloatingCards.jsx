import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const FloatingCards = ({ children }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    
    const handleMouseMove = (e) => {
      const { left, top, width, height } = card.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      
      gsap.to(card, {
        duration: 0.5,
        rotationY: x * 15,
        rotationX: -y * 15,
        scale: 1.05,
        ease: 'power2.out',
        transformPerspective: 1000
      });
    };
    
    const handleMouseLeave = () => {
      gsap.to(card, {
        duration: 0.5,
        rotationY: 0,
        rotationX: 0,
        scale: 1,
        ease: 'power2.out'
      });
    };
    
    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div ref={cardRef} className="floating-card">
      {children}
    </div>
  );
};

export default FloatingCards;