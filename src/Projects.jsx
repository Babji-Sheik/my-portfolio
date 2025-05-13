import React from "react";

const projects = [
  {
    title: "Age, Gender, and Ethnicity Prediction Using Face Recognition",
    description:
      "Developed a face recognition system using deep learning techniques to predict age, gender, and ethnicity from facial images. The system supports real-time predictions and is designed for demographic studies.",
    technologies: "Python, OpenCV, TensorFlow, Keras, Machine Learning"
  },
  {
    title: "Real-time Dashboard",
    description:
      "Created a comprehensive dashboard for data visualization and analytics, integrating multiple data sources to provide real-time insights. The dashboard features interactive charts and graphs to aid decision-making.",
    technologies: "Flask, JavaScript, D3.js"
  },
  {
    title: "Small-Scale Business Website Development",
    description:
      "Created a user-friendly website designed specifically for small businesses, enabling them to establish an online presence and engage with customers effectively.",
    technologies: "MERN stack (MongoDB, Express.js, React.js, Node.js), Repl.it"
  },
  {
    title: "Research on Sound Processing with Python",
    description:
      "Conducted research leveraging digital signal processing to analyze and classify vocal biomarkers in patients with Motor Neuron Disease (MND). Implemented spectral analysis, onset detection, and pitch tracking to study vocal impairments, contributing to early detection possibilities and assistive technology models.",
    technologies:
      "Python, Aubio, NumPy, SciPy, Matplotlib, Pandas, Librosa, Jupyter Notebook, Audacity"
  },
  {
    title: "Python Bots for Algorithmic Trading",
    description:
      "Designed and deployed automated trading bots that perform real-time data scraping, signal generation, and order execution on decentralized exchanges. Integrated multiple market indicators, liquidity checks, and volatility filters for risk-aware trading strategies.",
    technologies:
      "Python, Selenium, AsyncIO, WebSockets, Pandas, DexScreener API, REST APIs, MongoDB, Docker, Cron"
  },
  {
    title: "Web Scraping Tool",
    description:
      "Developed a modular web scraping platform capable of extracting structured data from dynamic web pages, with options to apply custom filters and export in multiple formats. Used headless browsers and asynchronous request handling to increase speed and evade detection.",
    technologies:
      "Flask, Selenium, BeautifulSoup, Requests, Pandas, Python, Jinja2, Bootstrap, CSV, JSON, Docker"
  },
  {
    title: "YouTube-based Music Player",
    description:
      "Built a feature-rich, web-based music player powered by YouTube’s API for seamless streaming, playlist creation, and responsive UX. Integrated client-side caching, dark/light theme toggles, and search autocomplete.",
    technologies:
      "React, Tailwind CSS, YouTube Data API v3, Redux, React Router, Node.js, Express.js, Axios, Firebase (for auth and hosting)"
  }
];

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "4rem 1rem", color: "white", textAlign: "center",
      scrollMarginTop: "100px"  }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>Projects</h1>
      <p style={{ maxWidth: "700px", margin: "0 auto 2rem", fontSize: "1.1rem" }}>
        A selection of key projects showcasing my development, research, and automation experience.
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "1.5rem",
          justifyItems: "center"
        }}
      >
        {projects.map((proj, i) => (
          <div
            key={i}
            style={{
              background: "rgba(0,0,0,0.7)",
              padding: "1.5rem",
              borderRadius: "10px",
              maxWidth: "400px",
              textAlign: "left"
            }}
          >
            <h3 style={{ color: "#facc15", fontSize: "1.25rem" }}>{proj.title}</h3>
            <p style={{ margin: "1rem 0", fontSize: "0.95rem" }}>{proj.description}</p>
            <p style={{ fontStyle: "italic", fontSize: "0.85rem", color: "#ccc" }}>
              Technologies Used: {proj.technologies}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
