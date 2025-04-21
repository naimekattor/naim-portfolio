import { Card } from "flowbite-react";

export function ThreeDCard({ slide }) {
  return (
    <Card className="max-w-md mx-auto bg-gray-800 text-white shadow-lg rounded-lg p-6">
      {/* Image */}
      <img
        src={slide.imageUrl}
        alt="Meaningful alt text for an image that is not purely decorative"
        className="w-full h-[350px] object-cover rounded-lg mb-4"
      />

      {/* Tech Stack */}
      <div className="mb-4">
        {slide.tech.map((tech, index) => (
          <span
            key={index}
            className="py-1 px-2 rounded-2xl shadow-lg inline-block mr-2 mb-2"
            style={{
              background: `linear-gradient(to right, hsl(${index * 40}, 70%, 50%), hsl(${(index * 40) + 20}, 70%, 50%))`,
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Title */}
      <h2 className="text-xl font-bold mb-2">{slide.title}</h2>

      {/* Description */}
      <p className="text-[14px] text-gray-200 font-semibold dark:text-gray-400">
        {slide.description}
      </p>

      {/* Buttons */}
      <div className="flex gap-4 mt-4">
        {/* Live Button */}
        <a
          href={slide.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition"
        >
          <span>{slide.liveIcon}</span> Live
        </a>

        {/* Code Button */}
        <a
          href={slide.codeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
        >
          <span>{slide.codeIcon}</span> Code
        </a>
      </div>
    </Card>
  );
}