import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

const siteProps = {
  name: "krzsztfwtk",
  title: "Computer Science Student & Ecommerce Developer",
  email: "",
  gitHub: "krzsztfwtk",
  instagram: "",
  linkedIn: "k-witek",
  medium: "",
  twitter: "",
  youTube: "",
  kaggle: "krzsztfwtk",
};

const primaryColor = "#003366";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={"Krzysztof Witek"} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} />
    </div>
  );
};

export default App;
