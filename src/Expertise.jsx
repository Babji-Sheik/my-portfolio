import React from "react";
import web from "./assets/webdeveloper.jpeg"; // Replace with your image path
import data from "./assets/dataanalytics.jpeg"; // Replace with your image path
import appdeveloper from "./assets/appdeveloper.jpeg"; // Replace with your image path
import image from "./assets/imagedetect.jpeg"; // Replace with your image path
import automate from "./assets/automate.jpeg"; // Replace with your image path
const expertiseItems = [
  {
    title: "Web Development",
    icon: web,
  },
  {
    title: "Application Development",
    icon: appdeveloper,
  },
  {
    title: "Object Detection",
    icon: image,
  },
  {
    title: "Automation / Scripting",
    icon: automate,
  },
  {
    title: "Data Analysis",
    icon: data,
  },
];

export default function Expertise() {
  return (
    <section
      style={{
        padding: "1rem 1rem",
        textAlign: "center",
        color: "white",
        scrollMarginTop: "100px" 
      }}
      id="expertise"
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>Expertise</h1>
      <p style={{ marginBottom: "3rem", fontSize: "1.05rem", color: "#aaa" }}>
        Web/App Developer and Machine Learning Engineer with 2+ years of experience
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          gap: "2rem",
          justifyItems: "center",
        }}
      >
        {expertiseItems.map(({ title, icon }) => (
          <div
            key={title}
            style={{
              background: "rgba(0,0,0,0.6)",
              padding: "2rem 1.5rem",
              borderRadius: "10px",
              width: "100%",
              maxWidth: "300px",
              transition: "transform 0.3s ease",
            }}
          >
            <img
              src={icon}
              alt={title}
              style={{ width: "60px", marginBottom: "1rem", filter: "brightness(1.2)" }}
            />
            <h3 style={{ fontSize: "1.1rem", letterSpacing: "1px" }}>{title.toUpperCase()}</h3>
            <div
              style={{
                height: "2px",
                width: "30px",
                backgroundColor: "#facc15",
                margin: "1rem auto 0",
              }}
            ></div>
          </div>
        ))}
      </div>
    </section>
  );
}
