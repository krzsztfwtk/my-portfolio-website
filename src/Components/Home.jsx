import React from "react";
import arrowSvg from "url:../images/down-arrow.svg";
import PropTypes from "prop-types";

import image from "url:../images/3_nested_rectangles.webp";
console.log(image);

const imageAltText = "Trace of a point in nested rectangular epicycloids.";

const Home = ({ name, title }) => {
  return (
    <section id="home" className="min-height">
      <img className="background" src={image} alt={imageAltText} />
      <div style={{ position: "absolute", top: "5rem", left: "2rem", width: "20rem" }}>
        <h1>{name}</h1>
        <h2>{title}</h2>
      </div>
      <div style={{ position: "absolute", bottom: "5rem", left: "50%", transform: "translateX(-50%)" }}>
        <a href="#about"><img src={arrowSvg} style={{ height: "5rem", width: "5rem" }} /></a>
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
