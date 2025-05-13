import React from "react";

const skillCategories = {
  "Programming Languages": [
    "Python", "JavaScript (ES6+)", "C", "C++", "C#", "Java"
  ],
  "Frameworks / Libraries": [
    "React.js", "Node.js (Express)", "Flask", "Microsoft .NET"
  ],
  "Web Development": [
    "HTML", "CSS", "XML", "REST / JSON"
  ],
  "Databases": [
    "MySQL", "MongoDB", "SQL"
  ],
  "Tools & Technologies": [
    "Selenium", "Git", "Cloud Computing"
  ],
  "Cloud Platforms": [
    "AWS", "GCP", "Azure"
  ],
  "Development Practices": [
    "Agile (Scrum)", "Data Structures", "OO Design", "Design Patterns", "Unit Testing"
  ],
  "AI / Machine Learning": [
    "Machine Learning", "AI Techniques", "Object Detection"
  ],
  "SAP Technologies": [
    "SAP UI5", "ABAP", "OData Services"
  ]
};

export default function Technologies() {
  return (
    <section
      id="technologies"
      style={{
        padding: "4rem 1rem",
        scrollMarginTop: "100px",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h1 style={{ fontSize: "2.5rem", color: "#fff" }}>My Skills</h1>
        <p style={{ color: "#ccc" }}>Organized by Category</p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {Object.entries(skillCategories).map(([category, skills], idx) => (
          <div
            key={idx}
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.85)",
              padding: "1.5rem",
              borderRadius: "12px",
              border: "1px solid #facc15",
              boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
              color: "#ffffff",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(250, 204, 21, 0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.5)";
            }}
          >
            <h2 style={{ fontSize: "1.25rem", marginBottom: "1rem", color: "#ffffff" }}>
              {category}
            </h2>
            <ul style={{ listStyle: "none", paddingLeft: 0, lineHeight: "1.8" }}>
              {skills.map((skill, index) => (
                <li key={index} style={{ color: "#ffffff" }}>• {skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
