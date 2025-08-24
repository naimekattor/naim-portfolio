import { Card } from "flowbite-react";
import { useEffect, useRef } from "react";
import { hoverScale, fadeIn, scaleIn } from "../utils/gsapAnimations";

export function ThreeDCard({ slide }) {
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      // Card entrance animation
      fadeIn(cardRef.current, 0.8, 0.2);
      
      // Add hover effects
      hoverScale(cardRef.current, 1.02);
    }

    // Stagger animation for card elements
    const elements = [imageRef.current, titleRef.current, descriptionRef.current, buttonsRef.current];
    elements.forEach((element, index) => {
      if (element) {
        scaleIn(element, 0.6, index * 0.1);
      }
    });

  }, []);

  return (
    <Card 
      ref={cardRef}
      className="max-w-md mx-auto bg-gray-800 text-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-all duration-300 cursor-pointer"
    >
      {/* Image */}
      <img
        ref={imageRef}
        src={slide.imageUrl}
        alt="Meaningful alt text for an image that is not purely decorative"
        className="w-full h-[350px] object-cover rounded-lg mb-4 hover:scale-105 transition-transform duration-300"
      />

      {/* Tech Stack */}
      <div className="mb-4">
        {slide.tech.map((tech, index) => (
          <span
            key={index}
            className="py-1 px-2 rounded-2xl shadow-lg inline-block mr-2 mb-2 hover:scale-110 transition-transform duration-200"
            style={{
              background: `linear-gradient(to right, hsl(${index * 40}, 70%, 50%), hsl(${(index * 40) + 20}, 70%, 50%))`,
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Title */}
      <h2 
        ref={titleRef}
        className="text-xl font-bold mb-2 hover:text-blue-400 transition-colors duration-300"
      >
        {slide.title}
      </h2>

      {/* Description */}
      <p 
        ref={descriptionRef}
        className="text-[14px] text-gray-200 font-semibold dark:text-gray-400 mb-4"
      >
        {slide.description}
      </p>

      {/* Buttons */}
      <div ref={buttonsRef} className="flex gap-4 mt-4">
        {/* Live Button */}
        <a
          href={slide.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-all duration-300 hover:scale-105 text-center"
        >
          <span>{slide.liveIcon}</span> Live
        </a>

        {/* Code Button */}
        <a
          href={slide.codeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300 hover:scale-105 text-center"
        >
          <span>{slide.codeIcon}</span> Code
        </a>
      </div>
    </Card>
  );
}