import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Optimized fade in animation - using transform3d for better performance
export const fadeIn = (element, duration = 1, delay = 0) => {
  return gsap.fromTo(element, 
    { opacity: 0, y: 50, force3D: true },
    { 
      opacity: 1, 
      y: 0, 
      duration, 
      delay,
      ease: "power2.out",
      force3D: true
    }
  );
};

// Optimized slide in from left
export const slideInLeft = (element, duration = 1, delay = 0) => {
  return gsap.fromTo(element,
    { x: -100, opacity: 0, force3D: true },
    {
      x: 0,
      opacity: 1,
      duration,
      delay,
      ease: "power2.out",
      force3D: true
    }
  );
};

// Optimized slide in from right
export const slideInRight = (element, duration = 1, delay = 0) => {
  return gsap.fromTo(element,
    { x: 100, opacity: 0, force3D: true },
    {
      x: 0,
      opacity: 1,
      duration,
      delay,
      ease: "power2.out",
      force3D: true
    }
  );
};

// Optimized slide in from bottom
export const slideInBottom = (element, duration = 1, delay = 0) => {
  return gsap.fromTo(element,
    { y: 100, opacity: 0, force3D: true },
    {
      y: 0,
      opacity: 1,
      duration,
      delay,
      ease: "power2.out",
      force3D: true
    }
  );
};

// Optimized scale in animation
export const scaleIn = (element, duration = 1, delay = 0) => {
  return gsap.fromTo(element,
    { scale: 0, opacity: 0, force3D: true },
    {
      scale: 1,
      opacity: 1,
      duration,
      delay,
      ease: "back.out(1.7)",
      force3D: true
    }
  );
};

// Optimized stagger animation for multiple elements
export const staggerAnimation = (elements, animationType = 'fadeIn', stagger = 0.2) => {
  const animations = {
    fadeIn: { opacity: 0, y: 50, force3D: true },
    slideInLeft: { x: -100, opacity: 0, force3D: true },
    slideInRight: { x: 100, opacity: 0, force3D: true },
    slideInBottom: { y: 100, opacity: 0, force3D: true },
    scaleIn: { scale: 0, opacity: 0, force3D: true }
  };

  const toValues = {
    fadeIn: { opacity: 1, y: 0, force3D: true },
    slideInLeft: { x: 0, opacity: 1, force3D: true },
    slideInRight: { x: 0, opacity: 1, force3D: true },
    slideInBottom: { y: 0, opacity: 1, force3D: true },
    scaleIn: { scale: 1, opacity: 1, force3D: true }
  };

  return gsap.fromTo(elements,
    animations[animationType],
    {
      ...toValues[animationType],
      duration: 1,
      stagger,
      ease: "power2.out"
    }
  );
};

// Optimized scroll-triggered animations with reduced complexity
export const scrollAnimation = (element, animationType = 'fadeIn', trigger = 'top 80%') => {
  const animations = {
    fadeIn: { opacity: 0, y: 50, force3D: true },
    slideInLeft: { x: -100, opacity: 0, force3D: true },
    slideInRight: { x: 100, opacity: 0, force3D: true },
    slideInBottom: { y: 100, opacity: 0, force3D: true },
    scaleIn: { scale: 0, opacity: 0, force3D: true }
  };

  const toValues = {
    fadeIn: { opacity: 1, y: 0, force3D: true },
    slideInLeft: { x: 0, opacity: 1, force3D: true },
    slideInRight: { x: 0, opacity: 1, force3D: true },
    slideInBottom: { y: 0, opacity: 1, force3D: true },
    scaleIn: { scale: 1, opacity: 1, force3D: true }
  };

  return gsap.fromTo(element,
    animations[animationType],
    {
      ...toValues[animationType],
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: trigger,
        toggleActions: "play none none reverse",
        // Reduce ScrollTrigger overhead
        fastScrollEnd: true,
        preventOverlaps: false
      }
    }
  );
};

// Text reveal animation
export const textReveal = (element, duration = 1) => {
  return gsap.fromTo(element,
    { y: 100, opacity: 0, force3D: true },
    {
      y: 0,
      opacity: 1,
      duration,
      ease: "power2.out",
      force3D: true
    }
  );
};

// Optimized hover animations with reduced event listeners
export const hoverScale = (element, scale = 1.05) => {
  if (!element) return;
  
  // Remove existing listeners to prevent duplicates
  element.removeEventListener('mouseenter', element._hoverEnter);
  element.removeEventListener('mouseleave', element._hoverLeave);
  
  // Store references to prevent memory leaks
  element._hoverEnter = () => {
    gsap.to(element, { scale, duration: 0.3, ease: "power2.out", force3D: true });
  };
  
  element._hoverLeave = () => {
    gsap.to(element, { scale: 1, duration: 0.3, ease: "power2.out", force3D: true });
  };
  
  element.addEventListener('mouseenter', element._hoverEnter);
  element.addEventListener('mouseleave', element._hoverLeave);
};

// Page entrance animation
export const pageEntrance = (elements) => {
  gsap.set(elements, { opacity: 0, y: 50, force3D: true });
  
  return gsap.to(elements, {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out",
    force3D: true
  });
};

// Optimized floating animation
export const floatingAnimation = (element, y = 20, duration = 2) => {
  return gsap.to(element, {
    y: y,
    duration: duration,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    force3D: true
  });
};

// Optimized rotation animation
export const rotateAnimation = (element, rotation = 360, duration = 2) => {
  return gsap.to(element, {
    rotation: rotation,
    duration: duration,
    repeat: -1,
    ease: "none",
    force3D: true
  });
};
