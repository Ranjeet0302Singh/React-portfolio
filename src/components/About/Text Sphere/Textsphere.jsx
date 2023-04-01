import "./Textsphere.scss";
import React, { useEffect } from "react";
import TagCloud from "TagCloud";
const Textsphere = () => {
  useEffect(() => {
    return () => {
      const container = ".tagcloud";
      const texts = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Git",
        "GitHub",
        "NextJs",
        "NodeJs",
        "SCSS",
        "Tailwind",
        "API",
        "Python",
        "C++",
        "Figma",
        "Canva",
      ];
      const options = {
        radius: 200,
        maxSpeed: "fast",
        initSpeed: "fast",
      };
      TagCloud(container, texts, options);
    };
  }, []);
  return (
    <>
      <div className="text-sphere">
        <span className="tagcloud"></span>
      </div>
    </>
  );
};

export default Textsphere;