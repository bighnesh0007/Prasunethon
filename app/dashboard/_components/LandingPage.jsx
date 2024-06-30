"use client"
import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import "./styles.css"; // Adjust the path as necessary

const LandingPage = () => {
  useEffect(() => {
    const scrollRevealOption = {
      distance: "50px",
      origin: "bottom",
      duration: 1000,
    };

    ScrollReveal().reveal(".container .letter-s", {
      duration: 1000,
      delay: 1000,
    });
    ScrollReveal().reveal(".container img", {
      duration: 1000,
      delay: 1500,
    });
    ScrollReveal().reveal(".container .text__left", {
      ...scrollRevealOption,
      origin: "right",
      delay: 2000,
    });
    ScrollReveal().reveal(".container .text__right", {
      ...scrollRevealOption,
      origin: "left",
      delay: 2000,
    });
    ScrollReveal().reveal(".container .explore", {
      duration: 1000,
      delay: 2500,
    });
    ScrollReveal().reveal(".container h5", {
      duration: 1000,
      interval: 500,
      delay: 3000,
    });
    ScrollReveal().reveal(".container .catalog", {
      duration: 1000,
      delay: 5000,
    });
    ScrollReveal().reveal(".container .print", {
      duration: 1000,
      delay: 5500,
    });
    ScrollReveal().reveal(".footer p", {
      duration: 1000,
      delay: 7000,
    });
  }, []);

  return (
    <div className="container">
      
      <span className="letter-s">#</span>
      <img src="header.png" alt="header" />
      <h4 className="text__left">PRASUN</h4>
      <h4 className="text__right">ETHON</h4>
      <button className="btn explore">GET STARTED</button>
      <button className="btn print">CODE SHARE</button>
      <button className="btn catalog">VIDEO CONFERENCING</button>
      <h5 className="feature-1">IDE</h5>
      <h5 className="feature-2">ChatBot</h5>
      <h5 className="feature-3">Tough</h5>
      <h5 className="feature-4">Modern</h5>
      
    </div>
  );
};

export default LandingPage;
