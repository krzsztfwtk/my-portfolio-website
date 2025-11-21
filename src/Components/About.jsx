import React, { useState, useEffect } from "react";

import cIcon from "url:../images/tech/c.svg";
import cppIcon from "url:../images/tech/cpp.svg";
import platformIoIcon from "url:../images/tech/platformio.svg";
import sqlIcon from "url:../images/tech/sql.svg";
import vueJsIcon from "url:../images/tech/vuejs.svg";
import pythonIcon from "url:../images/tech/python.svg";

import image from "url:../images/8_nested_chebyshev_ellipses.webp";
const imageAltText = "Trace of a point in nested elliptical epicycloids in chebyshev metric space.";

const description =
  "I'm a Computer Science student studying at Silesian University of Technology🎓. I enjoy creating unique solutions💡 for standard problems and standard solutions🛠️ for unique problems.";

const skillsList = [
  "🏁pathfinding algorithms",
  "🗄️relational databases",
  "🐧Debian GNU/Linux",
  "🪟Microsoft Windows",
  "⚡GPU programming (CUDA C)",
  "🌐network administration",
  "🖥️server management",
  "🛒WooCommerce Wordpress",
  "🔒cybersecurity fundamentals",
  "📘physics fundamentals",
];

const technologiesList = [
  { name: "C", icon: cIcon},
  { name: "Cpp", icon: cppIcon},
  { name: "PlatformIO", icon: platformIoIcon},
  { name: "SQL", icon: sqlIcon},
  { name: "Vue.js", icon: vueJsIcon},
  { name: "Python", icon: pythonIcon},
];

var formula = `{(𝘹, 𝘺) ∈ ℝ² : (𝘹, 𝘺) = ∑ᵢ₌₀⁷ ((𝘸/φⁱ)·sgn(cos(𝘵·φⁱ))/(1 + |tan(𝘵·φⁱ)|), (𝘩/φⁱ)·sgn(sin(𝘵·φⁱ))·(1 − 1/(1 + |tan(𝘵·φⁱ)|))) ⋀ φ = (√5 + 1)/2 ⋀ 𝘸 = 16 ⋀ 𝘩 = 9 ⋀ 𝘵 ∈ [0, 1337] ∩ ℝ}`;

const quote = "“You don't pay for what you don't use.” - zero-overhead principle";

const About = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: isMobile ? "90%" : "50%",
          padding: isMobile ? "5%" : "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About myself</h2>
        <p className="large">{description}</p>
        <p style={{ padding: isMobile ? "1rem 1rem 0" : "1rem 3rem 0" }}>{quote}</p>
        <hr />
        <ul
          style={{
            textAlign: "center",
            columns: isMobile ? 1 : 2,
            fontSize: isMobile ? "1rem" : "1.25rem",
            margin: "1rem",
            gap: "3rem",
            padding: "0",
          }}
        >
          {skillsList.map((skill) => (
            <p key={skill}>{skill}</p>
          ))}
        </ul>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1.4rem", marginTop: "2rem" }}>
          {technologiesList.map((tech) => (
            <img key={tech.name} src={tech.icon} alt={tech.name} style={{ height: isMobile ? "2.4rem" : "3rem", width: isMobile ? "2.4rem" : "3rem" }} />
          ))}
        </div>
        <hr />
        <div style={{ padding: isMobile ? "1rem 1rem 0" : "1rem 3rem 0" }}>
          <p>🎨Background image:</p>
          <div style={{ margin: "1.5rem 0" }} />
          <p style={{ fontSize: "0.95rem", lineHeight: "1.8", whiteSpace: "pre-wrap" }}>{formula}</p>
          <div style={{ margin: "1.5rem 0" }} />
          <p>Rendered using NVIDIA CUDA😊</p>
        </div>
      </div>
    </section>
  );
};

export default About;
