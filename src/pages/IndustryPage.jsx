import { useParams, Navigate, Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import useInView from '../hooks/useInView';

const INDUSTRIES = {
  "financial-services": {
    t: "Financial Services", slug: "financial-services",
    tagline: "AI for underwriting, fraud, compliance, and customer experience in banking, insurance, and fintech.",
    challenges: [
      "Legacy systems with fragmented data trapped across silos",
      "Increasing regulatory pressure (AML, KYC, Basel, IFRS)",
      "Rising fraud sophistication requiring real-time detection",
      "Customer expectations for instant, personalised service at scale",
    ],
    solutions: [
      { t: "Underwriting Assistants", d: "AI agents that gather, validate, and analyse risk data from multiple sources. Reduce manual underwriting effort by 60% or more." },
      { t: "Fraud Detection", d: "Real-time anomaly detection on transaction streams. Machine learning models that catch more fraud while reducing false positives." },
      { t: "Document Intelligence", d: "Automated processing of KYC documents, loan applications, and insurance claims. Extract, validate, and route in minutes instead of days." },
      { t: "Regulatory Compliance", d: "Monitoring agents that track regulatory changes and flag non-compliance in operations. Built-in audit trails for every decision." },
    ],
    usecases: [
      { t: "Loan Processing Automation", d: "A Nepal-based lender reduced loan processing time from 5 days to 4 hours using document intelligence and underwriting agents, without adding headcount." },
      { t: "Claims Triage", d: "An insurance provider automated 80% of claims triage with a computer vision and NLP pipeline, cutting settlement times from weeks to days." },
    ],
  },
  "healthcare-pharma": {
    t: "Healthcare & Pharma", slug: "healthcare-pharma",
    tagline: "Clinical AI, medical documentation, and compliant deployments for hospitals, clinics, and life sciences organisations.",
    challenges: [
      "Clinician burnout from excessive documentation burden",
      "Fragmented patient data across unconnected health systems",
      "Strict regulatory requirements (HIPAA, data localisation, privacy)",
      "Need for accurate, fast medical summarisation and triage at scale",
    ],
    solutions: [
      { t: "Clinical Documentation", d: "Voice-to-text, automated summarisation, and structured note generation from consultations. Cut documentation time by 40%." },
      { t: "Patient Triage", d: "AI triage agents that assess symptom data and route patients to appropriate care levels based on urgency and specialty." },
      { t: "Medical Research", d: "Literature search, clinical trial matching, and evidence synthesis using RAG systems grounded in peer-reviewed sources." },
      { t: "Compliant AI Deployment", d: "Private, on-premise models that never expose patient data. Full audit logging and regulatory documentation included." },
    ],
    usecases: [
      { t: "Clinical Documentation", d: "A hospital chain reduced clinician documentation time by 40% using our voice-to-notes AI, freeing 2+ hours per physician per day." },
      { t: "Diagnostics Automation", d: "A diagnostics lab automated report generation and anomaly flagging across 10,000+ daily reports with near-zero error rate." },
    ],
  },
  "manufacturing-logistics": {
    t: "Manufacturing & Logistics", slug: "manufacturing-logistics",
    tagline: "Predictive maintenance, supply chain optimisation, and quality control powered by AI for industrial operations.",
    challenges: [
      "Unplanned downtime costing millions in lost production output",
      "Complex, multi-tier supply chains with limited end-to-end visibility",
      "Quality control bottlenecks with slow, error-prone manual inspection",
      "Rising fuel and logistics costs squeezing already thin margins",
    ],
    solutions: [
      { t: "Predictive Maintenance", d: "Sensor data analysis to predict equipment failures before they happen. Reduce unplanned downtime by 50% and extend asset life." },
      { t: "Demand Forecasting", d: "ML models that predict demand across SKUs, seasons, and regions. Optimise inventory levels and reduce stockouts and overstock." },
      { t: "Routing Optimisation", d: "Real-time route planning accounting for traffic, weather, fuel costs, and delivery windows. Cut fuel costs by 15-20%." },
      { t: "Quality Control", d: "Computer vision inspection of products on assembly lines. Detect surface defects, dimensional errors, and assembly issues with >99% accuracy." },
    ],
    usecases: [
      { t: "Route Optimisation", d: "A logistics company cut fuel costs by 18% and improved on-time delivery by 22% using our AI-driven route optimisation system." },
      { t: "Predictive Maintenance", d: "A manufacturer reduced unplanned downtime by 55% with predictive maintenance deployed across 200+ production machines." },
    ],
  },
  "retail-ecommerce": {
    t: "Retail & E-Commerce", slug: "retail-ecommerce",
    tagline: "Personalisation, catalogue intelligence, and AI shopping assistants that drive revenue and reduce operational costs.",
    challenges: [
      "Low conversion rates from generic, one-size-fits-all shopping experiences",
      "Manual catalogue management becoming impossible at scale",
      "High return rates from poor product information and fitment data",
      "Customer support teams overwhelmed by repetitive, high-volume inquiries",
    ],
    solutions: [
      { t: "Personalisation Engines", d: "Real-time product recommendations based on browsing behaviour, purchase history, and lookalike customer segments." },
      { t: "Catalogue Enrichment", d: "AI that auto-tags, categorises, and enriches product listings with attributes, descriptions, and SEO metadata." },
      { t: "AI Shopping Assistants", d: "Conversational agents that help customers find products, answer questions, compare options, and complete purchases." },
      { t: "Support Automation", d: "AI agents that handle returns, order status inquiries, and FAQ responses autonomously. Route only complex cases to humans." },
    ],
    usecases: [
      { t: "Conversion Optimisation", d: "An e-commerce platform increased conversion by 32% and average order value by 18% using our AI recommendation engine." },
      { t: "Return Reduction", d: "A retailer reduced product return rates by 28% with AI-powered attribute enrichment and fitment recommendations." },
    ],
  },
  "legal-compliance": {
    t: "Legal & Compliance", slug: "legal-compliance",
    tagline: "Case law research, contract analysis, and regulatory monitoring powered by LLMs for law firms and corporate legal teams.",
    challenges: [
      "Hours wasted manually searching through case law and statutory materials",
      "High cost and slow turnaround of contract review and due diligence",
      "Rapidly changing regulations requiring constant manual monitoring",
      "Document-heavy workflows that drag down legal team productivity",
    ],
    solutions: [
      { t: "Legal Research", d: "Semantic search across case law, statutes, and commentary. Find relevant precedents and citations in seconds, not hours." },
      { t: "Contract Analysis", d: "AI that extracts clauses, identifies risks, and compares terms across hundreds of contracts simultaneously." },
      { t: "Compliance Monitoring", d: "Agents that track regulatory publications and flag changes relevant to your practice area or industry." },
      { t: "Document Automation", d: "Generate contracts, petitions, and legal memos from structured templates with AI-powered drafting assistance." },
    ],
    usecases: [
      { t: "Legal Research", d: "Lalmohar, our product, helps advocates search judgments, navigate statutes, and manage case documents in minutes instead of hours." },
      { t: "Contract Review", d: "A corporate legal team cut contract review time by 70% using our AI contract analysis pipeline across 500+ vendor agreements." },
    ],
  },
  "education-edtech": {
    t: "Education & EdTech", slug: "education-edtech",
    tagline: "Adaptive learning, assessment automation, and AI-powered educational tools for institutions and learning platforms.",
    challenges: [
      "One-size-fits-all curriculum not meeting individual student learning needs",
      "Teachers spending excessive time on grading and administrative work",
      "Limited ability to provide personalised feedback at scale",
      "Student engagement and retention challenges in online and hybrid learning",
    ],
    solutions: [
      { t: "Adaptive Learning", d: "AI that adjusts content difficulty, pacing, and learning style based on individual student performance and engagement patterns." },
      { t: "Assessment Automation", d: "Auto-grading for written responses, code submissions, and assignments with detailed, constructive feedback." },
      { t: "Content Generation", d: "Generate quizzes, lesson plans, study guides, and practice problems automatically from curriculum materials." },
      { t: "Administrative Workflows", d: "Automate admissions processing, scheduling, progress tracking, and parent communications end to end." },
    ],
    usecases: [
      { t: "Learning Outcomes", d: "An EdTech platform improved student course completion rates by 45% using our adaptive learning engine for personalised pacing." },
      { t: "Grading Automation", d: "A university automated grading for 15,000+ student assignments per semester, cutting turnaround from 2 weeks to 24 hours." },
    ],
  },
  "tourism-hospitality": {
    t: "Tourism & Hospitality", slug: "tourism-hospitality",
    tagline: "AI concierge, multilingual support, and booking intelligence for hotels, travel companies, and destination marketers.",
    challenges: [
      "Multilingual customer service across diverse visitor demographics and languages",
      "Manual booking management with suboptimal dynamic pricing decisions",
      "Difficulty delivering personalised travel recommendations at scale",
      "Operational inefficiencies in housekeeping, F&B, and concierge services",
    ],
    solutions: [
      { t: "AI Concierge", d: "24/7 virtual concierge handling bookings, recommendations, local tips, and service requests in multiple languages and dialects." },
      { t: "Dynamic Pricing", d: "ML models that optimise room and package pricing based on demand, seasonality, local events, and competitor benchmarks." },
      { t: "Booking Intelligence", d: "Predict no-shows, optimise overbooking, and recommend upsells and cross-sells based on guest profiles and history." },
      { t: "Multilingual Support", d: "Real-time translation and culturally-aware AI responses for international guests across chat, email, and voice channels." },
    ],
    usecases: [
      { t: "Direct Bookings", d: "A hotel group increased direct bookings by 25% and reduced OTAD commission costs using our AI concierge and dynamic pricing engine." },
      { t: "Customer Service", d: "A travel agency automated 70% of customer inquiries with a multilingual AI support agent handling 8 languages simultaneously." },
    ],
  },
  "government-public-sector": {
    t: "Government & Public Sector", slug: "government-public-sector",
    tagline: "Service delivery automation, citizen chatbots, and policy intelligence for public institutions and government agencies.",
    challenges: [
      "Slow, manual service delivery with long citizen processing times",
      "Limited citizen access to information and services outside business hours",
      "Document-heavy administrative processes consuming staff productivity",
      "Need for transparency, auditability, and strict data security compliance",
    ],
    solutions: [
      { t: "Service Automation", d: "AI workflows for permit processing, license applications, tax filings, and benefit claims. Reduce processing time from weeks to days." },
      { t: "Citizen Chatbots", d: "Multilingual chatbots that answer questions, guide applicants through forms, and provide real-time status updates 24/7." },
      { t: "Document Processing", d: "Automated classification, extraction, and routing of forms, applications, and official correspondence across departments." },
      { t: "Policy Analysis", d: "AI that monitors policy documents, legislative changes, gazettes, and public consultation outcomes for relevant updates." },
    ],
    usecases: [
      { t: "Permit Processing", d: "A municipal government reduced permit processing time from 45 days to 7 days using AI service automation agents across 12 departments." },
      { t: "Citizen Services", d: "A public agency deployed a multilingual citizen chatbot handling 85% of routine inquiries in 3 languages, freeing staff for complex cases." },
    ],
  },
};

const ORDERED = Object.values(INDUSTRIES);

function IndustryPage() {
  const { slug } = useParams();
  const ind = INDUSTRIES[slug];

  if (!ind) return <Navigate to="/" replace />;

  return (
    <>
      <Nav />
      <main>
        <section className="page-hero">
          <div className="wrap">
            <span className="eyebrow">Industry</span>
            <h1 className="page-hero__title">{ind.t}</h1>
            <p className="page-hero__sub">{ind.tagline}</p>
            <a className="btn btn--primary btn--lg" href="mailto:contact@yantrific.com">Get started</a>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="section__head">
              <span className="eyebrow">The challenges</span>
              <h2>What makes {ind.t} hard.</h2>
            </div>
            <div className="challenges">
              {ind.challenges.map((c, i) => (
                <div className="challenge" key={i}>
                  <span className="challenge__n">{String(i + 1).padStart(2, "0")}</span>
                  <p>{c}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--alt">
          <div className="wrap">
            <div className="section__head">
              <span className="eyebrow">How we help</span>
              <h2>AI solutions for {ind.t}.</h2>
            </div>
            <div className="grid grid--2">
              {ind.solutions.map((s, i) => (
                <article className="card" key={i}>
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="section__head">
              <h2>Real results</h2>
              <p className="section__lead">Specific outcomes from real engagements in this industry.</p>
            </div>
            <div className="grid grid--2">
              {ind.usecases.map((u, i) => (
                <article className="result-card" key={i}>
                  <h3>{u.t}</h3>
                  <p>{u.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="wrap wrap--narrow contact__inner">
            <span className="eyebrow eyebrow--light">Contact</span>
            <h2>Ready to start?</h2>
            <p className="contact__sub">Tell us about your project. We will tell you honestly whether we can help and how we would approach it.</p>
            <a className="btn btn--primary btn--lg" href="mailto:contact@yantrific.com">Email us</a>
            <p className="contact__loc">Jawlakhel, Lalitpur, Nepal &middot; Working with teams across South Asia &amp; beyond</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default IndustryPage;
