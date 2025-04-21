
import { Card } from "flowbite-react";
import project1 from "../assets/images/calculator-EPmSDPXM.png";
import project2 from "../assets/images/progressbar-02KUBb8P.png";
import project3 from "../assets/images/quizzapp--crAInoF.png";
export function ThreeDCard() {
  return (
    <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={project1}
    >
      <div className="">
        <span className="py-1 px-2 bg-red-500  rounded-2xl shadow-lg inline-block mr-2 mb-2">JavaScript</span>
        <span className="py-1 px-2 bg-red-500  rounded-2xl shadow-lg inline-block mr-2 mb-2">React</span>
        <span className="py-1 px-2 bg-red-500  rounded-2xl shadow-lg inline-block mr-2 mb-2">Next Js</span>
        <span className="py-1 px-2 bg-red-500  rounded-2xl shadow-lg inline-block mr-2 mb-2">Redux</span>
        <span className="py-1 px-2 bg-red-500  rounded-2xl shadow-lg inline-block mr-2 mb-2">React Router</span>
      </div>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
    </Card>
  );
}
