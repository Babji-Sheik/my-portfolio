// src/Projects.jsx
import React, { useState } from 'react';
import './Projects.css';

const projects = [
  {
    id: '01',
    title: 'ClaimFlow AI – Intelligent FNOL Triage',
    domain: 'Insurance',
    summary:
      'Built an intelligent First Notice of Loss (FNOL) intake app for auto and trucking insurance, turning messy email/phone submissions into structured claims with real-time triage.',
    highlights: [
      'Used LLMs to extract driver, policy, and incident details from free-form text and documents.',
      'Auto-routed claims to the right team based on coverage, severity, and jurisdiction.',
      'Exposed REST APIs and webhooks so partner portals and TPAs could submit claims programmatically.'
    ],
    technologies:
      'Angular, TypeScript, Node.js, Express, PostgreSQL, Redis, OpenAI, AWS (ECS, S3), Elasticsearch, Docker'
  },
  {
    id: '02',
    title: 'PolicyHub Portal – Commercial Policy Self-Service',
    domain: 'Insurance',
    summary:
      'Designed a self-service portal for small trucking fleets to quote, bind, and manage commercial policies without calling an agent.',
    highlights: [
      'Wizard-style quote flow with dynamic pricing rules and real-time underwriting checks.',
      'Integrated payment gateway for installments and auto-pay, with dunning workflows.',
      'Synced policies and billing accounts back to Salesforce and agency management systems.'
    ],
    technologies:
      'React, Node.js, NestJS, MongoDB, Stripe, Salesforce REST APIs, AWS Lambda, SQS, CI/CD with GitHub Actions, Docker'
  },
  {
    id: '03',
    title: 'FraudWatch 360 – Claims Anomaly Detection',
    domain: 'Insurance / Business Intelligence',
    summary:
      'Implemented a claims analytics platform to surface suspicious patterns across millions of historical claims and live transactions.',
    highlights: [
      'Ingested claims, policy, and telematics data into a centralized warehouse.',
      'Trained anomaly detection models to flag out-of-pattern loss amounts, locations, and provider behavior.',
      'Delivered dashboards for SIU teams with drill-downs, evidence trails, and exportable reports.'
    ],
    technologies:
      'Python, Airflow, PostgreSQL, dbt, TensorFlow, Kafka, Elasticsearch, React, D3.js, AWS Redshift, Docker'
  },
  {
    id: '04',
    title: 'CarePath – Patient Intake & Eligibility Orchestration',
    domain: 'Healthcare',
    summary:
      'Built an orchestration layer that turns patient intake forms into automated eligibility checks, EHR creation, and downstream tasks.',
    highlights: [
      'Collected intake data via responsive web forms and tablet kiosks.',
      'Called payer APIs and clearinghouses for eligibility and benefits verification.',
      'Synced patients, encounters, and tasks into EHR and CRM systems like Salesforce Health Cloud.'
    ],
    technologies:
      'Angular, RxJS, Node.js, FastAPI, FHIR/HL7 integration, PostgreSQL, Redis, AWS API Gateway, Zapier, Salesforce'
  },
  {
    id: '05',
    title: 'VitalsStream – Remote Patient Monitoring Dashboard',
    domain: 'Healthcare / IoT',
    summary:
      'Created a clinician dashboard that visualizes real-time vitals from connected devices and proactively flags deteriorating patients.',
    highlights: [
      'Ingested device telemetry via MQTT/WebSockets and normalized it into condition timelines.',
      'Configured alert rules for heart rate, SpO2, and blood pressure thresholds with escalation workflows.',
      'Gave clinicians patient-centric views, trend charts, and intervention logs.'
    ],
    technologies:
      'React, TypeScript, Node.js, WebSockets, Timeseries DB (Timescale/PostgreSQL), Grafana, Kubernetes, Docker, AWS'
  },
  {
    id: '06',
    title: 'CareOps BI – Clinical Operations Performance Cockpit',
    domain: 'Healthcare / Business Intelligence',
    summary:
      'Built a BI layer for hospital operations teams to track throughput, wait times, and resource utilization across departments.',
    highlights: [
      'Modeled ED, inpatient, and outpatient events into a unified star schema.',
      'Delivered KPI dashboards for LOS, door-to-doc, and bed occupancy.',
      'Implemented scheduled email / Slack digests for key metrics and outliers.'
    ],
    technologies:
      'Python, SQL, BigQuery / Snowflake, Airflow, Looker / Metabase, dbt, Docker'
  },
  {
    id: '07',
    title: 'RevenuePulse – Subscription SaaS Revenue Intelligence',
    domain: 'Business Intelligence',
    summary:
      'Developed a revenue analytics platform for a B2B SaaS product to understand churn, expansion, and cohort behavior.',
    highlights: [
      'Ingested billing, product usage, and CRM data into a consolidated warehouse.',
      'Built cohort analysis, LTV, and churn prediction models.',
      'Exposed self-service dashboards for product, finance, and GTM teams.'
    ],
    technologies:
      'Python, Pandas, Airflow, PostgreSQL, dbt, React, Tailwind CSS, AWS RDS, S3, CI/CD with GitHub Actions'
  },
  {
    id: '08',
    title: 'CDL Insights – Driver Risk & Compliance Analytics',
    domain: 'Trucking / Compliance / BI',
    summary:
      'Created an analytics layer on top of driver violations, CSA scores, tickets, and legal events to help carriers manage risk.',
    highlights: [
      'Modeled driver, fleet, violation, and case data into a relational + search-friendly store.',
      'Built risk scores combining historical violations, recency, and severity.',
      'Surfaced dashboards per carrier and per driver, with exportable compliance reports.'
    ],
    technologies:
      'Java, Spring Boot, PostgreSQL, Elasticsearch, React, NGINX, Docker, AWS ECS, CI/CD Pipelines'
  },
  {
    id: '09',
    title: 'OpsDesk – Unified Alerting & Runbook Automation',
    domain: 'DevOps / Automation',
    summary:
      'Implemented an internal Ops console that consolidates alerts from monitoring tools and automates common remediation runbooks.',
    highlights: [
      'Ingested alerts from CloudWatch, Prometheus, and third-party tools via webhooks.',
      'Triggered Zapier/Make scenarios and custom Node/Python scripts for auto-remediation.',
      'Provided a human-friendly activity log and postmortem timeline.'
    ],
    technologies:
      'Node.js, Express, Python, Zapier, Make, PostgreSQL, React, WebSockets, AWS SNS/SQS, Docker, Kubernetes'
  },
  {
    id: '10',
    title: 'DataBridge ETL – Cloud Data Lake Ingestion Framework',
    domain: 'Data Engineering / BI',
    summary:
      'Built a reusable ETL framework to ingest CSVs, APIs, and database dumps into a cloud data lake with data quality checks.',
    highlights: [
      'Abstracted common connectors (S3, SFTP, REST, SQL) with configurable pipelines.',
      'Implemented schema validation, deduplication, and anomaly alerts.',
      'Provided monitoring UI for pipeline health and SLA tracking.'
    ],
    technologies:
      'Python, Airflow, SQLAlchemy, PostgreSQL, S3, Parquet, Docker, Kubernetes, Grafana'
  },
  {
    id: '11',
    title: 'ChatAssist – Internal LLM Support Copilot',
    domain: 'AI / Productivity',
    summary:
      'Created an internal support copilot that summarizes cases, suggests responses, and surfaces relevant KB articles for agents.',
    highlights: [
      'Embedded existing documentation and tickets into a vector store for semantic search.',
      'Exposed a side-panel inside the CRM to auto-draft replies and case summaries.',
      'Logged all LLM interactions for safety review and continuous improvement.'
    ],
    technologies:
      'OpenAI / LLMs, Python, FastAPI, React, Elasticsearch / Pinecone, Redis, JWT, Docker, Salesforce / HubSpot APIs'
  },
  {
    id: '12',
    title: 'Customer 360 Sync – Salesforce ↔ HubSpot ↔ Web App',
    domain: 'CRM & Integrations',
    summary:
      'Implemented a robust synchronization layer between Salesforce, HubSpot, and a custom web app so sales, marketing, and ops shared a single customer view.',
    highlights: [
      'Designed idempotent sync flows for contacts, accounts, deals, and custom objects.',
      'Used Zapier/Make for low-code workflows and custom Apex/Node services for heavy logic.',
      'Built monitoring dashboards and dead-letter queues for failed syncs.'
    ],
    technologies:
      'Salesforce (Apex, Flows), Node.js, Express, PostgreSQL, Zapier, Make, Webhooks, AWS Lambda, SQS'
  },
  {
    id: '13',
    title: 'Marketplace Hub – Microservices E-commerce Backend',
    domain: 'E-commerce / Platforms',
    summary:
      'Designed a microservices backend for a multi-vendor marketplace with catalog, orders, payments, and notifications.',
    highlights: [
      'Split system into independently deployable services with clear API contracts.',
      'Implemented event-driven communication via Kafka for orders, inventory, and notifications.',
      'Secured APIs with JWT/OAuth2 and rate limiting via API gateway.'
    ],
    technologies:
      'Java, Spring Boot, Node.js, Kafka, PostgreSQL, MongoDB, NGINX, Docker, Kubernetes, AWS'
  },
  {
    id: '14',
    title: 'DocClassify AI – Intelligent Document Intake & Routing',
    domain: 'Insurance / Healthcare / AI',
    summary:
      'Built a document processing pipeline that classifies and routes inbound PDFs (claims, referrals, lab reports) to the right queues.',
    highlights: [
      'Used OCR and LLM-based classification to detect document type and extract key entities.',
      'Integrated with case management and EHR/claims systems via REST and message queues.',
      'Implemented confidence thresholds and human-in-the-loop review screens.'
    ],
    technologies:
      'Python, FastAPI, OpenCV, Tesseract, OpenAI, RabbitMQ, React, Tailwind CSS, PostgreSQL, Docker'
  },
  {
    id: '15',
    title: 'Real-Time Pricing Engine – Quote Simulation Platform',
    domain: 'Insurance / Finance',
    summary:
      'Developed a pricing engine to simulate quotes in real time based on risk factors, territory, and historical loss data.',
    highlights: [
      'Exposed a low-latency API for front-end quote flows and partner integrations.',
      'Implemented versioned rating algorithms with feature flags and A/B testing.',
      'Provided an analyst UI to run what-if simulations and export rate books.'
    ],
    technologies:
      'Java, Spring Boot, Redis, PostgreSQL, React, TypeScript, NGINX, AWS Fargate, CI/CD Pipelines'
  }
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const project = projects[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="projects" className="proj-section">
      {/* Section heading */}
      <div className="proj-header">
        <h1 className="proj-main-heading">Projects &amp; Case Studies</h1>
        <p className="proj-subheading">
          Browse through a collection of real-world, enterprise-grade projects.
          Use the arrows to explore more.
        </p>
      </div>

      <div className="proj-container">
        {/* Main slider layout */}
        <div className="proj-layout">
          <div className="proj-text">
            <div className="proj-index">{project.id}</div>
            <h2 className="proj-title">{project.title}</h2>
            <p className="proj-domain">{project.domain}</p>
            <p className="proj-summary">{project.summary}</p>

            <ul className="proj-highlights">
              {project.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>

            <p className="proj-tech">{project.technologies}</p>
          </div>

          {/* Right side reserved for future images – hidden in CSS for now */}
          <div className="proj-media" />
        </div>

        {/* Navigation buttons */}
        <div className="proj-nav">
          <button type="button" onClick={handlePrev}>
            &lt;
          </button>
          <button type="button" onClick={handleNext}>
            &gt;
          </button>
        </div>
      </div>

      {/* GitHub link */}
      <div className="proj-github-wrapper">
        <a
          className="proj-github-button"
          href="https://github.com/Babji-Sheik"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit My GitHub →
        </a>
      </div>
    </section>
  );
}
