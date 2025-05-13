import React from "react";

export default function Studies() {
  return (
    <section id="experience"
      style={{
        padding: "1rem 1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "white",
        gap: "2rem",
        scrollMarginTop: "100px",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>My Journey</h1>
      <p style={{ maxWidth: "600px", fontSize: "1.05rem" }}>
        Here's a quick snapshot of my academic and professional milestones.
      </p>
      <div
        style={{
          display: "flex",
          gap: "1.5rem",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            background: "rgba(0, 0, 0, 0.7)",
            padding: "1.5rem",
            borderRadius: "10px",
            width: "300px",
            textAlign: "left",
          }}
        >
          <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🎓</div>
          <h2 style={{ color: "#facc15" }}>2023–2025</h2>
          <h3>Master of Science</h3>
          <h4>Computer Science, University of Central Missouri</h4>
          <ul>
  <li>Designed scalable systems using advanced algorithms, data structures, and compiler optimization techniques.</li>
  <li>Built cloud-native applications leveraging AWS, Azure, and GCP with containerization (Docker) and serverless architecture.</li>
  <li>Mastered backend development with Python (Flask, FastAPI), integrating RESTful APIs, authentication, and async processing.</li>
  <li>Applied AI/ML techniques using TensorFlow and scikit-learn in projects like face recognition, audio signal analysis, and trading bots.</li>
  <li>Engineered secure systems with in-depth knowledge of OS internals, multi-threading, and secure software design patterns.</li>
  <li>Conducted database optimization using advanced SQL queries, indexing, normalization, and NoSQL (MongoDB).</li>
  <li>Built a healthcare case management app using React, Tailwind, and workflow principles inspired by Pega Systems.</li>
  <li>Implemented rigorous software testing strategies, including automated unit testing, CI/CD pipelines, and QA practices.</li>
  <li>Practiced Agile development methodologies with tools like Jira and GitHub Projects.</li>
  <li>Presented research projects on real-time systems in AI-based medical and financial domains.</li>
</ul>

        </div>

        <div
          style={{
            background: "rgba(0, 0, 0, 0.7)",
            padding: "1.5rem",
            borderRadius: "10px",
            width: "300px",
            textAlign: "left",
          }}
        >
          <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>💼</div>
          <h2 style={{ color: "#facc15" }}>2021–2023</h2>
          <h3>Software Consultant</h3>
          <h4>Worked at Wipro with extensive experience in software systems</h4>
          <ul>
  <li>Designed scalable systems using advanced algorithms, data structures, and compiler optimization techniques.</li>
  <li>Integrated SAP UI5 apps with OData services and backend SAP modules for real-time data interaction and transactional processing.</li>
  <li>Extended standard SAP Fiori apps using component-based architecture to meet specific client requirements without affecting core functionality.</li>
  <li>Implemented MVC (Model-View-Controller) design patterns and data binding to manage application state and UI rendering efficiently.</li>
  <li>Used SAP Web IDE and BAS (Business Application Studio) for rapid development, testing, and deployment of UI5 applications.</li>
  <li>Engineered secure and concurrent systems, leveraging multi-threading, OS internals, OAuth2, JWT, and RBAC.</li>
  <li>Applied AI/ML techniques using TensorFlow and scikit-learn for projects involving face recognition, audio analysis, and algorithmic trading.</li>
  <li>Optimized relational and NoSQL databases (MySQL, MongoDB) with indexing, query tuning, and normalization.</li>
  <li>Automated testing and workflows using Python and Selenium, improving QA efficiency and reducing manual effort.</li>
  <li>Implemented CI/CD pipelines and managed production deployments with rollback strategies and monitoring tools.</li>
  <li>Practiced Agile methodologies, collaborating with cross-functional teams using Jira, Git, and GitHub Projects.</li>
  <li>Led troubleshooting efforts, resolving complex bugs and performance bottlenecks under tight production timelines.</li>
</ul>

        </div>

        <div
          style={{
            background: "rgba(0, 0, 0, 0.7)",
            padding: "1.5rem",
            borderRadius: "10px",
            width: "300px",
            textAlign: "left",
          }}
        >
          <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🏫</div>
          <h2 style={{ color: "#facc15" }}>2017–2021</h2>
          <h3>Bachelor of Technology</h3>
          <h4>Computer Science, SRKR, India</h4>
          <ul>
  <li>Gained strong fundamentals in programming languages like C, C++, Java, and Python.</li>
  <li>Built academic systems using OS, DBMS, and networking concepts.</li>
  <li>Practiced competitive coding on Hackerrank, LeetCode, and Codeforces.</li>
  <li>Completed a capstone project involving machine learning for prediction use cases.</li>
  <li>Learned full-stack web development with HTML/CSS/JS and backend tech like PHP or Flask.</li>
  <li>Studied core CS subjects like CN, Compiler Design, DSA, and Theory of Computation.</li>
  <li>Designed and normalized databases using MySQL and Oracle.</li>
  <li>Participated in workshops and hackathons on IoT, blockchain, and AI.</li>
  <li>Gained real-world exposure through internships and industry projects.</li>
  <li>Graduated with distinction and a consistent academic record.</li>
</ul>
        </div>
      </div>
    </section>
  );
}
