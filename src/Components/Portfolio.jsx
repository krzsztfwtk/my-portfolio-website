/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/cool_class_diagram_mask.webp";

const imageAltText = "Class diagram of software to process image batches using large language model";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Reports of physics experiments",
    description:
      "Sample reports of physics experiments, performed in physics laboratories in the engineering studies of Computer Science.",
    url: "https://github.com/krzsztfwtk/polsl-sprawozdania-fizyka",
  },
  {
    title: "Reports of digital circuit theory exercises",
    description:
      "Sample reports of digital circuit theory laboratory exercises in the engineering studies of Computer Science.",
    url: "https://github.com/krzsztfwtk/polsl-sprawozdania-tuc",
  },
  {
    title: "NLP Toolkit",
    description:
      "Tools for text summarization and semantic search. Lightweight C++ code.",
    url: "https://github.com/krzsztfwtk/text-compactor-cpp",
  },
  {
    title: "Valet Parking System Simulation",
    description:
      "I was one of the main contributors in international project to develop smart valet parking system that utilizes optimal space. Our solution opens many doors for us in the field of parking.",
    url: "https://github.com/Myrtasz10/valet-parking-system-pbl",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
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
