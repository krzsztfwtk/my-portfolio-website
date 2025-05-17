/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React, { useState, useEffect } from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "url:../images/cool_3d_stuff_mask.webp";

const imageAltText = "Universal join on 3D model is a little too big :)";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm a Computer Science student studying at Silesian University of Technology🎓. I enjoy creating unique solutions💡 for standard problems and standard solutions🛠️ for unique problems.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "⚙️Algorithms 🔧Software Engineering",
  "🗄️Relational Databases",
  "🐧Linux 🪟Windows",
  "🌐Network Administration",
  "🔒Cybersecurity Fundamentals",
  "🖥️Server Management",
  "🛒E-commerce Operations",
  "📘Physics Fundamentals",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote = "“You don't pay for what you don't use.” - zero-overhead principle";

const About = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Handle window resize to update state
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
          padding: isMobile ? "2rem" : "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: isMobile ? 1 : 2,
            fontSize: isMobile ? "1rem" : "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
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
