import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import '../styles/Flower.scss';

gsap.registerPlugin(ScrollTrigger);

const Flower = () => {
  const flowerRef = useRef(null);

  useEffect(() => {
    const petals = gsap.utils.toArray('.petal');
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.content',
        start: 'top center',
        end: '+=200%',
        scrub: 1,
        pin: false,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.to(flowerRef.current, {
            scale: 1 + progress * 0.5,
            opacity: 1 - progress * 0.8,
            duration: 0.1
          });
        }
      }
    });

    // Initial state
    gsap.set(petals, { opacity: 0, scale: 0 });

    // Blooming animation
    tl.to(petals, {
      opacity: 1,
      scale: 1,
      rotation: "+=45",
      duration: 2,
      stagger: {
        each: 0.2,
        from: "random"
      }
    })
    .to('.center', {
      scale: 1.2,
      duration: 1
    }, "-=1");

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="flower-container" ref={flowerRef}>
      <div className="flower">
        <div className="center"></div>
        <div className="petals">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="petal"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Flower;