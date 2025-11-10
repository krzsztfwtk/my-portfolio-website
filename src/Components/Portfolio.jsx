/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React, { useState, useEffect } from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
// import image from "url:../images/cool_class_diagram_mask.webp";

// const imageAltText =
//   "Class diagram of software to process image batches using large language model";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Reports of digital circuit theory exercises",
    description:
      "Sample reports📜 of digital circuit theory🔢 laboratory exercises in the engineering studies of Computer Science.",
    url: "https://github.com/krzsztfwtk/polsl-sprawozdania-tuc",
  },
  {
    title: "Reports of physics experiments",
    description:
      "Sample reports📜 of physics experiments🔬, performed in physics laboratories in the engineering studies of Computer Science.",
    url: "https://github.com/krzsztfwtk/polsl-sprawozdania-fizyka",
  },
  {
    title: "NLP Toolkit",
    description:
      "Tools for text summarization and semantic search🔍. Lightweight C++ code. Simple (unlogged) TF-IDF, TF-IDF, BM25💬. These tailored algorithms process massive datasets in real-time using basic mathematics.",
    url: "https://github.com/krzsztfwtk/text-compactor-cpp",
  },
  {
    title: "Valet Parking System Simulation",
    description:
      "I was one of the main contributors in international project to develop smart valet parking🚗 system that utilizes optimal space📦.",
    url: "https://github.com/Myrtasz10/valet-parking-system-pbl",
  },
  {
    title: "TSP using OpenRouteService API",
    description:
      "Solving the Traveling Salesman Problem (TSP) for vehicle routes using real road distances🗺️ with the OpenRouteService API",
    url: "https://github.com/krzsztfwtk/tsp-openrouteservice",
  },
  {
    title: "Vigenere Breaker",
    description:
      "Vigenère Cipher command-line tool for file encryption/decryption and breaker🔐 with frequency📊 analysis",
    url: "https://github.com/krzsztfwtk/vigenere",
  },
  {
    title: "LoL AI Runes Recommendation",
    description:
      "Web-based tool that recommends loadout for League of Legends champions based on the draft composition of both teams⚔️🧙‍♂️ using neural network🧠⚙️",
    url: "https://github.com/krzsztfwtk/LoL_AI_Runes_Recommendation",
  },
  {
    title: "LoL Grandmaster+ SoloQ matches 25.20 patch",
    description:
      "Dataset of League of legends🎮 Challenger and Grandmaster level ranked matches played on Worlds 2025🏆 patch created with Riot Games API",
    url: "https://www.kaggle.com/datasets/krzsztfwtk/lol-grandmaster-soloq-matches-worlds-2025-patch",
  },
  {
    title: "LaTeX2Formula Web",
    description:
      "Web app to convert LaTeX math expressions🧮 into formula code for SQL, Excel, C++, etc.✨",
    url: "https://github.com/krzsztfwtk/LaTeX2FormulaWeb",
  },
  {
    title: "Propagation Of Error Calculator",
    description:
      "Web-based tool that generates the propagation of error🔬 formula from a user-provided mathematical expression📐",
    url: "https://github.com/krzsztfwtk/PropagationOfError",
  },
];

const Portfolio = () => {
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
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Projects</h2>
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          padding: "3rem",
          alignItems: isMobile ? "center" : "flex-start",
        }}
      >
        <div
          style={{
            maxWidth: isMobile ? "90%" : "40%",
            alignSelf: "center",
            marginBottom: isMobile ? "2rem" : "0",
          }}
        >
          {/* <img
            src={image}
            style={{
              height: isMobile ? "auto" : "90%",
              width: "100%",
              objectFit: "cover",
            }}
            alt={imageAltText}
          /> */}
        </div>
        <div
          className="container"
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: "1rem",
            width: isMobile ? "90%" : "auto",
          }}
        >
          {projectList.map((project) => (
            <div
              className="box"
              key={project.title}
              style={{
                padding: "1rem",
                border: "1px solid #ccc",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
