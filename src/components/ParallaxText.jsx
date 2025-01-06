import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ParallaxText = ({ children }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const element = textRef.current;
    
    gsap.fromTo(element, 
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'center center',
          scrub: 1,
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  return (
    <div ref={textRef} className="parallax-text">
      {children}
    </div>
  );
};

export default ParallaxText;