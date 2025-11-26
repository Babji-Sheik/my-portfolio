// src/Technologies.jsx
import React from 'react';
import './Technologies.css'; // <-- new

const techCategories = [
  {
    category: 'Backend & APIs',
    items: [
      { iconClass: 'devicon-java-plain', label: 'Java' },
      { iconClass: 'devicon-spring-plain', label: 'Spring Boot' },
      { iconClass: 'devicon-nodejs-plain', label: 'Node.js' },
      { iconClass: 'devicon-python-plain', label: 'Python' },
      { iconClass: 'devicon-express-original', label: 'Express' },
      { iconClass: 'devicon-fastapi-plain', label: 'FastAPI / Flask' },
      { iconClass: 'devicon-graphql-plain', label: 'GraphQL (when needed)' },
    ],
  },
  {
    category: 'Frontend & Apps',
    items: [
      { iconClass: 'devicon-react-original', label: 'React' },
      { iconClass: 'devicon-angularjs-plain', label: 'Angular' },
      { iconClass: 'devicon-react-original', label: 'React Native' },
      { iconClass: 'devicon-react-original', label: 'Expo' },
      { iconClass: 'devicon-typescript-plain', label: 'TypeScript' },
    ],
  },
  {
    category: 'Cloud & DevOps',
    items: [
      { iconClass: 'devicon-amazonwebservices-original', label: 'AWS' },
      { iconClass: 'devicon-docker-plain', label: 'Docker' },
      { iconClass: 'devicon-kubernetes-plain', label: 'Kubernetes' },
      { iconClass: 'devicon-nginx-original', label: 'NGINX / Proxies' },
      { iconClass: 'devicon-githubactions-plain', label: 'CI/CD Pipelines' },
    ],
  },
  {
    category: 'Data & Search',
    items: [
      { iconClass: 'devicon-postgresql-plain', label: 'PostgreSQL' },
      { iconClass: 'devicon-mysql-plain', label: 'MySQL' },
      { iconClass: 'devicon-mongodb-plain', label: 'MongoDB' },
      { iconClass: 'devicon-elasticsearch-plain', label: 'Elasticsearch' },
    ],
  },
  {
    category: 'LLMs & Automation',
    items: [
      { iconClass: 'devicon-openai-plain', label: 'OpenAI / LLMs' },
      { iconClass: 'devicon-python-plain', label: 'ML / Data Pipelines' },
      { iconClass: 'devicon-zapier-plain', label: 'Zapier / Make / n8n' },
    ],
  },
  {
    category: 'CRM & Integrations',
    items: [
      { iconClass: 'devicon-salesforce-plain', label: 'Salesforce' },
      { iconClass: 'devicon-hubspot-plain', label: 'HubSpot' },
      { iconClass: 'devicon-sap-plain', label: 'SAP' },
      { iconClass: 'devicon-apachekafka-plain', label: 'Events / Webhooks' },
    ],
  },
];

export default function Technologies() {
  return (
    <section id="technologies" className="tech-section">
      <div className="tech-container">
        <div className="tech-header">
          <h1 className="tech-title">Tech Stack I Work With</h1>
          <p className="tech-subtitle">
            The tools I use to build AI-enabled, cloud-native platforms and integrations.
          </p>
        </div>

        {techCategories.map(({ category, items }) => (
          <div key={category} className="tech-row">
            <div className="tech-category-label">{category}</div>
            <div className="tech-tiles">
              {items.map(({ iconClass, label }) => (
                <div key={label} className="tech-tile">
                  <i className={`${iconClass} colored tech-icon`} />
                  <div className="tech-tile-label">{label}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
