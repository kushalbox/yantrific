import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const LOGO_SRC = '/logo.png';

const SERVICES = [
  { n: "01", t: "AI Strategy & Roadmapping", d: "Opportunity audit, use-case prioritisation by impact vs. effort, build-vs-buy analysis, and a funded, board-ready roadmap with clear KPIs and ownership.", slug: "ai-strategy-roadmapping" },
  { n: "02", t: "Custom AI & GenAI Development", d: "Fine-tuned LLMs, retrieval-augmented generation (RAG), computer vision, and predictive models, each purpose-built for your domain and data.", slug: "custom-ai-genai-development" },
  { n: "03", t: "Agentic Systems", d: "Autonomous, bounded workflow agents with human-in-the-loop oversight. Designed for real production, not just demos.", slug: "agentic-systems" },
  { n: "04", t: "Data & AI Infrastructure", d: "Data pipelines, vector stores, and MLOps foundations that make AI reliable, observable, and cost-efficient at scale.", slug: "data-ai-infrastructure" },
  { n: "05", t: "Responsible AI & Governance", d: "Model evaluation, bias auditing, explainability, and regulatory alignment (e.g., EU AI Act). Governance that lets you ship with confidence.", slug: "responsible-ai-governance" },
  { n: "06", t: "AI Enablement & Operations", d: "Team upskilling, centre-of-excellence setup, monitoring, and retraining so capability persists after we hand over.", slug: "ai-enablement-operations" },
];

const PRODUCTS = [
  { t: "Lalmohar", d: "LLM-powered legal research and documentation for Nepal. Search judgments, navigate statutes, and manage case documents with AI.", url: "https://lalmohar.com", logo: "/lalmohar.svg" },
];

const STATS = [
  { v: "88%", c: "of organizations use AI, but most are stuck in pilots" },
  { v: "~7%", c: "have fully scaled AI. That gap is where value is won" },
  { v: "40%", c: "of enterprise apps will embed AI agents by end of 2026" },
];

const APPROACH = [
  { t: "Start from the outcome", d: "Every engagement begins with a business result, then works backward to data, models, and architecture." },
  { t: "Prove it in 90 days", d: "We pilot one or two high-impact use cases with measurable KPIs from week one, never open-ended experiments." },
  { t: "Engineer for production", d: "Governance, evaluation, and observability are built in from the start, because that's where most AI projects die." },
  { t: "Hand over the keys", d: "We train your team to run, monitor, and improve the system without us." },
];

const INDUSTRIES = [
  { t: "Financial Services", d: "Underwriting assistants, fraud detection, document intelligence, and regulatory reporting agents.", slug: "financial-services" },
  { t: "Healthcare & Pharma", d: "Clinical documentation, medical summarisation, patient triage, and compliant AI deployments.", slug: "healthcare-pharma" },
  { t: "Manufacturing & Logistics", d: "Predictive maintenance, routing optimisation, demand forecasting, and supply chain visibility.", slug: "manufacturing-logistics" },
  { t: "Retail & E-Commerce", d: "Personalisation engines, support automation, catalogue enrichment, and AI shopping assistants.", slug: "retail-ecommerce" },
  { t: "Legal & Compliance", d: "Case law research, contract analysis, regulatory monitoring, and document automation.", slug: "legal-compliance" },
  { t: "Education & EdTech", d: "Adaptive learning, assessment automation, content generation, and administrative workflows.", slug: "education-edtech" },
  { t: "Tourism & Hospitality", d: "AI concierge, multilingual support, dynamic pricing, and booking intelligence.", slug: "tourism-hospitality" },
  { t: "Government & Public Sector", d: "Service delivery automation, document processing, citizen chatbots, and policy analysis.", slug: "government-public-sector" },
];

const FAQS = [
  { q: "How do you price engagements?", a: "Flexible: fixed-scope project, monthly retainer, or outcome-based. We agree the model up front, so there are no surprises." },
  { q: "Do we need our data \"AI-ready\" first?", a: "Not at all. Assessing and preparing your data is part of the work." },
  { q: "Can you work with our existing cloud and models?", a: "Absolutely. We're model- and vendor-agnostic, and build on the stack you already run." },
  { q: "What does a first engagement look like?", a: "A short diagnostic to find the highest-value use case, then a focused 90-day pilot with measurable KPIs." },
];

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__inner">
        <span className="eyebrow">AI Consulting & Products</span>
        <h1 className="hero__title">AI that ships.</h1>
        <p className="hero__sub">AI agents, RAG systems, and products. Strategy through deployment for startups and enterprises.</p>
        <div className="hero__cta">
          <a className="btn btn--primary btn--lg" href="#services">Explore services</a>
          <a className="btn btn--ghost btn--lg" href="#approach">How we work</a>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="stats">
      <div className="stats__inner">
        {STATS.map((s, i) => (
          <div className="stat" key={i}>
            <div className="stat__v">{s.v}</div>
            <div className="stat__c">{s.c}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <div className="section__head">
          <span className="eyebrow">What we do</span>
          <h2>From advice to production, and everything between.</h2>
          <p className="section__lead">Six capabilities spanning strategy, engineering, and operations.</p>
        </div>
        <div className="grid grid--3">
          {SERVICES.map((s) => (
            <Link to={"/services/" + s.slug} className="card" key={s.n}>
              <div className="card__n">{s.n}</div>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductSection() {
  return (
    <section className="section section--alt" id="product">
      <div className="wrap">
        <div className="section__head">
          <span className="eyebrow">Our Product</span>
          <h2>Built by us.</h2>
          <p className="section__lead">Lalmohar is our LLM-powered legal research and documentation platform for Nepal. We built it for real. We ship it ourselves.</p>
        </div>
        <div className="product-grid">
          {PRODUCTS.map((p) => (
            <a href={p.url} target="_blank" rel="noopener" className="product-card">
              <div className="product-card__logo"><img src={p.logo} alt={p.t} /></div>
              <div className="product-card__body">
                <h3>{p.t}</h3>
                <p>{p.d}</p>
                <span className="product-card__link">Visit {p.t} &rarr;</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ApproachSection() {
  return (
    <section className="section" id="approach">
      <div className="wrap approach">
        <div className="approach__intro">
          <span className="eyebrow">How we work</span>
          <h2>Built to outlast the engagement.</h2>
          <blockquote className="pull">&ldquo;AI is not a technology project. It is a strategy project that happens to involve software.&rdquo;</blockquote>
        </div>
        <div className="approach__list">
          {APPROACH.map((a, i) => (
            <div className="step" key={i}>
              <div className="step__n">{String(i + 1).padStart(2, "0")}</div>
              <div>
                <h3>{a.t}</h3>
                <p>{a.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function IndustriesSection() {
  return (
    <section className="section" id="industries">
      <div className="wrap">
        <div className="section__head">
          <span className="eyebrow">Where we work</span>
          <h2>Concrete plays, not generic AI.</h2>
        </div>
        <div className="grid grid--4">
          {INDUSTRIES.map((x) => (
            <Link to={"/industries/" + x.slug} className="tile" key={x.slug}>
              <h3>{x.t}</h3>
              <p>{x.d}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section className="section section--alt" id="faq">
      <div className="wrap wrap--narrow">
        <div className="section__head">
          <span className="eyebrow">FAQ</span>
          <h2>Questions, answered.</h2>
        </div>
        <div className="faq">
          {FAQS.map((f, i) => (
            <details className="faq__item" key={i}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="section contact" id="contact">
      <div className="wrap wrap--narrow contact__inner">
        <span className="eyebrow eyebrow--light">Contact</span>
        <h2>Let's build something durable.</h2>
        <p className="contact__sub">Tell us where you are and where you need to be. We'll tell you honestly whether we can help. Or try our product, Lalmohar, at <a href="https://lalmohar.com" target="_blank" rel="noopener" style={{color:"#9fb4e6",textDecoration:"underline"}}>lalmohar.com</a>.</p>
        <a className="btn btn--primary btn--lg" href="mailto:contact@yantrific.com">contact@yantrific.com</a>
        <p className="contact__loc">Jawlakhel, Lalitpur, Nepal &middot; Working with teams across South Asia &amp; beyond</p>
      </div>
    </section>
  );
}

function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <ServicesSection />
        <ProductSection />
        <ApproachSection />
        <IndustriesSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default Home;
