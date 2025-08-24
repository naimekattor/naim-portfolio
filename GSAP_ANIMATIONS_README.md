# GSAP Animations Implementation Guide

This document outlines all the GSAP animations that have been implemented across your portfolio website to enhance user experience and visual appeal.

## 🚀 Installation

GSAP has been installed and is ready to use:
```bash
npm install gsap
```

## 📁 File Structure

```
src/
├── utils/
│   └── gsapAnimations.js          # Main GSAP utility functions
├── hooks/
│   └── useGSAP.js                 # Custom hook for GSAP animations
├── Components/
│   ├── Navbar.jsx                 # Navigation animations
│   ├── ThreeDCard.jsx             # Portfolio card animations
│   └── Card.jsx                   # Blog card animations
└── Pages/
    ├── Home.jsx                   # Home page animations
    ├── About.jsx                  # About page animations
    ├── Portfolio.jsx              # Portfolio page animations
    ├── Skills.jsx                 # Skills page animations
    ├── Service.jsx                # Service page animations
    ├── Blog.jsx                   # Blog page animations
    └── Contact.jsx                # Contact page animations
```

## 🎯 Animation Types Available

### 1. Basic Animations
- **fadeIn**: Fade in from bottom with upward movement
- **slideInLeft**: Slide in from left side
- **slideInRight**: Slide in from right side
- **slideInBottom**: Slide in from bottom
- **scaleIn**: Scale in with bounce effect

### 2. Advanced Animations
- **staggerAnimation**: Animate multiple elements with delays
- **scrollAnimation**: Trigger animations on scroll
- **hoverScale**: Scale effect on hover
- **floatingAnimation**: Continuous floating movement
- **rotateAnimation**: Continuous rotation

## 🎨 Component-Specific Animations

### Navbar Component
- Logo fade-in animation
- Navigation items stagger slide-in from left
- Hamburger button fade-in
- Hover effects on navigation items

### Home Page
- Profile image scale-in with floating effect
- Social section slide-in from right
- Banner content stagger animations
- Typewriter text slide-in from bottom
- Portfolio button scale-in

### Portfolio Page
- Page entrance fade-in
- Carousel scale-in animation
- Project cards scroll-triggered animations
- Enhanced project grid with hover effects

### About Page
- Page entrance fade-in
- Header stagger animations
- Scroll cards alternating left/right animations
- Stats cards scale-in with hover effects

### Skills Page
- Page entrance fade-in
- Header stagger animations
- Filter buttons scale-in animations
- Skills grid scroll-triggered animations
- Dynamic content animations on filter change

### Service Page
- Page entrance fade-in
- Header stagger animations
- Service cards stagger slide-in from bottom
- Enhanced hover effects with borders and shadows

### Blog Page
- Page entrance fade-in
- Header stagger animations
- Blog cards fade-in with stagger effect

### Contact Page
- Page entrance fade-in
- Contact cards stagger scale-in
- Form elements stagger slide-in from bottom
- Enhanced hover effects

## 🛠️ Usage Examples

### Basic Usage
```jsx
import { fadeIn, slideInLeft } from '../utils/gsapAnimations';

const MyComponent = () => {
  const elementRef = useRef(null);

  useEffect(() => {
    if (elementRef.current) {
      fadeIn(elementRef.current, 1, 0.2);
    }
  }, []);

  return <div ref={elementRef}>Animated Element</div>;
};
```

### Stagger Animations
```jsx
import { staggerAnimation } from '../utils/gsapAnimations';

const MyComponent = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const elements = containerRef.current.children;
      staggerAnimation(Array.from(elements), 'fadeIn', 0.2);
    }
  }, []);

  return (
    <div ref={containerRef}>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </div>
  );
};
```

### Scroll-Triggered Animations
```jsx
import { scrollAnimation } from '../utils/gsapAnimations';

const MyComponent = () => {
  const elementRef = useRef(null);

  useEffect(() => {
    if (elementRef.current) {
      scrollAnimation(elementRef.current, 'fadeIn', 'top 80%');
    }
  }, []);

  return <div ref={elementRef}>Scroll-triggered Element</div>;
};
```

## 🎭 Custom Hook Usage

```jsx
import { useGSAP } from '../hooks/useGSAP';

const MyComponent = () => {
  const { elementRef, fadeIn, hoverScale } = useGSAP();

  useEffect(() => {
    fadeIn(1, 0.2);
    hoverScale(1.05);
  }, []);

  return <div ref={elementRef}>Element with Custom Hook</div>;
};
```

## ⚡ Performance Tips

1. **Use refs efficiently**: Only create refs for elements that need animation
2. **Batch animations**: Use stagger animations for multiple elements
3. **Scroll triggers**: Use scroll-triggered animations sparingly
4. **Cleanup**: GSAP automatically handles cleanup, but you can manually kill animations if needed

## 🔧 Customization

### Animation Timing
```jsx
// Custom duration and delay
fadeIn(element, 1.5, 0.5); // 1.5s duration, 0.5s delay
```

### Easing Functions
Available easing functions in the utility:
- `"power2.out"` - Smooth deceleration
- `"back.out(1.7)"` - Bounce effect
- `"power1.inOut"` - Smooth acceleration/deceleration

### Scroll Trigger Points
```jsx
// Custom trigger points
scrollAnimation(element, 'fadeIn', 'top 90%'); // Trigger when 90% visible
scrollAnimation(element, 'fadeIn', 'center center'); // Trigger at center
```

## 🎨 CSS Transitions

The animations are enhanced with CSS transitions for:
- Hover effects (scale, color changes)
- Border animations
- Shadow effects
- Smooth state changes

## 🚀 Future Enhancements

Potential additions:
- Page transition animations
- Loading animations
- Interactive cursor effects
- Parallax scrolling effects
- 3D transform animations

## 📱 Responsive Considerations

All animations are designed to work across different screen sizes:
- Mobile-friendly animation durations
- Touch-friendly hover states
- Optimized performance for mobile devices

## 🔍 Debugging

To debug animations:
1. Check browser console for GSAP errors
2. Verify refs are properly assigned
3. Ensure elements exist before animation
4. Check ScrollTrigger registration

## 📚 Resources

- [GSAP Documentation](https://greensock.com/docs/)
- [GSAP ScrollTrigger](https://greensock.com/docs/v3/Plugins/ScrollTrigger)
- [GSAP Easing Functions](https://greensock.com/docs/v3/Eases)

---

**Note**: All animations are optimized for performance and user experience. They enhance the visual appeal without compromising functionality or accessibility.

