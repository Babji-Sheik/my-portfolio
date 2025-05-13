// src/components/SectionWrapper.jsx
import React from "react";

export default function SectionWrapper({ children, id }) {
  return (
    <section
      id={id}
      style={{
        padding: "4rem 1.5rem",
        maxWidth: "1200px",
        margin: "0 auto",
        color: "white",
      }}
    >
      {children}
    </section>
  );
}
