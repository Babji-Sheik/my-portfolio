import React, { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:sheikbabjims@gmail.com?subject=Message from ${formData.name}&body=Email: ${formData.email}%0D%0A%0D%0A${formData.message}`;
    window.open(mailtoLink, '_blank');
  };

  return (
    <section id="contact"
      style={{
        padding: "4rem 1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        gap: "2.5rem",
        background: "transparent",
        width: "100%",
        boxSizing: "border-box",
        scrollMarginTop: "100px",
        minHeight: "100vh"
      }}
    >
      <h1 style={{ fontSize: "2.5rem" }}>Get in touch</h1>
      <p style={{ fontSize: "1.1rem", opacity: 0.8 }}>Contact Me</p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "3rem",
          width: "100%",
          maxWidth: "1100px"
        }}
      >
        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "3rem", justifyContent: "center", width: "100%" }}>
          <div style={{ flex: "1 1 300px", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ background: "transparent", padding: "1.5rem", borderRadius: "12px", textAlign: "center", border: "1px solid rgba(255,255,255,0.1)" }}>
              <div style={{ fontSize: "2rem" }}>📧</div>
              <h4>Email</h4>
              <p>sheikbabjims@gmail.com</p>
              <a href="mailto:sheikbabjims@gmail.com" target="_blank" rel="noopener noreferrer" style={{ color: "#facc15", textDecoration: "none" }}>Write me →</a>
            </div>

            <div style={{ background: "transparent", padding: "1.5rem", borderRadius: "12px", textAlign: "center", border: "1px solid rgba(255,255,255,0.1)" }}>
              <div style={{ fontSize: "2rem" }}>💬</div>
              <h4>Whatsapp</h4>
              <p>+1 (660) 580-5863</p>
              <a href="https://wa.me/16605805863" target="_blank" rel="noopener noreferrer" style={{ color: "#facc15", textDecoration: "none" }}>Message me →</a>
            </div>

            <div style={{ background: "transparent", padding: "1.5rem", borderRadius: "12px", textAlign: "center", border: "1px solid rgba(255,255,255,0.1)" }}>
              <div style={{ fontSize: "2rem" }}>📞</div>
              <h4>Call</h4>
              <p>+1 (660) 580-5863</p>
              <a href="tel:+16605805863" style={{ color: "#facc15", textDecoration: "none" }}>Call me →</a>
            </div>
          </div>

          <form onSubmit={handleSubmit} style={{ flex: "1 1 300px", display: "flex", flexDirection: "column", gap: "1.2rem", minWidth: "250px" }}>
            <input
              type="text"
              name="name"
              placeholder="Insert your name."
              value={formData.name}
              onChange={handleChange}
              style={{ padding: "1rem", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255, 255, 255, 0.05)", color: "white", fontSize: "1rem", width: "100%" }}
            />
            <input
              type="email"
              name="email"
              placeholder="Type your email-id."
              value={formData.email}
              onChange={handleChange}
              style={{ padding: "1rem", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255, 255, 255, 0.05)", color: "white", fontSize: "1rem", width: "100%" }}
            />
            <textarea
              name="message"
              placeholder="Write your message."
              rows="5"
              value={formData.message}
              onChange={handleChange}
              style={{ padding: "1rem", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255, 255, 255, 0.05)", color: "white", fontSize: "1rem", width: "100%" }}
            ></textarea>
            <button
              type="submit"
              style={{
                padding: "1rem",
                borderRadius: "10px",
                background: "#1f1f1f",
                color: "white",
                fontWeight: "bold",
                border: "none",
                cursor: "pointer",
                fontSize: "1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                width: "100%"
              }}
            >
              Send <span>✈️</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
