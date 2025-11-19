import React, { useState, useEffect } from "react";

import image from "url:../images/plot_black_background.webp";
const imageAltText = "Trace of a point in nested rectangular epicycloids.";

const description =
  "I'm a Computer Science student studying at Silesian University of Technology🎓. I enjoy creating unique solutions💡 for standard problems and standard solutions🛠️ for unique problems.";

const skillsList = [
  "🏁Pathfinding Algorithms",
  "🗄️Relational Databases",
  "🌐Network Administration",
  "🐧Linux 🪟Windows",
  "🖥️Server Management",
  "🛒Wordpress WooCommerce",
  "🔒Cybersecurity Fundamentals",
  "📘Physics Fundamentals",
];

const detailOrQuote = "“You don't pay for what you don't use.” - zero-overhead principle";

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
        <h2>About Myself</h2>
        <p className="large">{description}</p>
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
        <hr />
        <p style={{ padding: isMobile ? "1rem 1rem 0" : "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
