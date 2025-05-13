import React from "react";
import SectionWrapper from "./SectionWrapper";
export default function Studies() {
  return (
    <section id="studies"
      style={{
        minHeight: "100vh",
        padding: "4rem 2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "white",
        scrollMarginTop: "100px" 
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Education & Experience</h1>
      <p style={{ maxWidth: "600px", marginBottom: "3rem", fontSize: "1.1rem" }}>
      A blend of learning and working that shaped my journey.
      </p>
      <div
        style={{
          display: "flex",
          gap: "2rem",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            background: "rgba(0, 0, 0, 0.7)",
            padding: "2rem",
            borderRadius: "10px",
            width: "300px",
          }}
        >
          <h2 style={{ color: "#facc15" }}>2023–2025</h2>
          <h3>Master of Science</h3>
          <p>Computer Science, University of Central Missouri</p>
        </div>

        <div
          style={{
            background: "rgba(0, 0, 0, 0.7)",
            padding: "2rem",
            borderRadius: "10px",
            width: "300px",
          }}
        >
          <h2 style={{ color: "#facc15" }}>2021–2023</h2>
          <h3>Software Consultant</h3>
          <p>Worked at Wipro with extensive experience in software systems</p>
        </div>

        <div
          style={{
            background: "rgba(0, 0, 0, 0.7)",
            padding: "2rem",
            borderRadius: "10px",
            width: "300px",
          }}
        >
          <h2 style={{ color: "#facc15" }}>2017–2021</h2>
          <h3>Bachelor of Technology</h3>
          <p>Computer Science, SRKR, India</p>
        </div>
      </div>
      <SectionWrapper/>
    </section>
  );
}
