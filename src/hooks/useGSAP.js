import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const useGSAP = () => {
  const elementRef = useRef(null);

  const fadeIn = (duration = 1, delay = 0) => {
    if (elementRef.current) {
      gsap.fromTo(elementRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease: "power2.out"
        }
      );
    }
  };

  const slideInLeft = (duration = 1, delay = 0) => {
    if (elementRef.current) {
      gsap.fromTo(elementRef.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration,
          delay,
          ease: "power2.out"
        }
      );
    }
  };

  const slideInRight = (duration = 1, delay = 0) => {
    if (elementRef.current) {
      gsap.fromTo(elementRef.current,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration,
          delay,
          ease: "power2.out"
        }
      );
    }
  };

  const slideInBottom = (duration = 1, delay = 0) => {
    if (elementRef.current) {
      gsap.fromTo(elementRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration,
          delay,
          ease: "power2.out"
        }
      );
    }
  };

  const scaleIn = (duration = 1, delay = 0) => {
    if (elementRef.current) {
      gsap.fromTo(elementRef.current,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration,
          delay,
          ease: "back.out(1.7)"
        }
      );
    }
  };

  const scrollAnimation = (animationType = 'fadeIn', trigger = 'top 80%') => {
    if (elementRef.current) {
      const animations = {
        fadeIn: { opacity: 0, y: 50 },
        slideInLeft: { x: -100, opacity: 0 },
        slideInRight: { x: 100, opacity: 0 },
        slideInBottom: { y: 100, opacity: 0 },
        scaleIn: { scale: 0, opacity: 0 }
      };

      const toValues = {
        fadeIn: { opacity: 1, y: 0 },
        slideInLeft: { x: 0, opacity: 1 },
        slideInRight: { x: 0, opacity: 1 },
        slideInBottom: { y: 0, opacity: 1 },
        scaleIn: { scale: 1, opacity: 1 }
      };

      gsap.fromTo(elementRef.current,
        animations[animationType],
        {
          ...toValues[animationType],
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: elementRef.current,
            start: trigger,
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  };

  const hoverScale = (scale = 1.05) => {
    if (elementRef.current) {
      elementRef.current.addEventListener('mouseenter', () => {
        gsap.to(elementRef.current, { scale, duration: 0.3, ease: "power2.out" });
      });
      
      elementRef.current.addEventListener('mouseleave', () => {
        gsap.to(elementRef.current, { scale: 1, duration: 0.3, ease: "power2.out" });
      });
    }
  };

  const floatingAnimation = (y = 20, duration = 2) => {
    if (elementRef.current) {
      gsap.to(elementRef.current, {
        y: y,
        duration: duration,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });
    }
  };

  const rotateAnimation = (rotation = 360, duration = 2) => {
    if (elementRef.current) {
      gsap.to(elementRef.current, {
        rotation: rotation,
        duration: duration,
        repeat: -1,
        ease: "none"
      });
    }
  };

  return {
    elementRef,
    fadeIn,
    slideInLeft,
    slideInRight,
    slideInBottom,
    scaleIn,
    scrollAnimation,
    hoverScale,
    floatingAnimation,
    rotateAnimation
  };
};

