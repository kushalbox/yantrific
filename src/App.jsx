const LOGO_SRC = '/logo.png';

const SERVICES = [
  { n: "01", t: "AI Strategy & Roadmapping", d: "Opportunity audit, use-case prioritisation by impact vs. effort, build-vs-buy analysis, and a funded, board-ready roadmap with clear KPIs and ownership." },
  { n: "02", t: "Custom AI & GenAI Development", d: "Fine-tuned LLMs, retrieval-augmented generation (RAG), computer vision, and predictive models, each purpose-built for your domain and data." },
  { n: "03", t: "Agentic Systems", d: "Autonomous, bounded workflow agents with human-in-the-loop oversight. Designed for real production, not just demos." },
  { n: "04", t: "Data & AI Infrastructure", d: "Data pipelines, vector stores, and MLOps foundations that make AI reliable, observable, and cost-efficient at scale." },
  { n: "05", t: "Responsible AI & Governance", d: "Model evaluation, bias auditing, explainability, and regulatory alignment (e.g., EU AI Act). Governance that lets you ship with confidence." },
  { n: "06", t: "AI Enablement & Operations", d: "Team upskilling, centre-of-excellence setup, monitoring, and retraining so capability persists after we hand over." },
];

const PRODUCTS = [
  { t: "Lalmohar", d: "LLM-powered legal research and documentation for Nepal. Search judgments, navigate statutes, and manage case documents with AI. Built for advocates and law firms.", url: "https://lalmohar.com", logo: "/lalmohar.svg" },
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
  { t: "Financial services", d: "Underwriting assistants, fraud detection, document intelligence." },
  { t: "Healthcare", d: "Clinical documentation, summarisation, compliant deployments." },
  { t: "Manufacturing & logistics", d: "Predictive maintenance, routing and demand optimisation." },
  { t: "Retail & services", d: "Personalization, support automation, knowledge assistants." },
];

const FAQS = [
  { q: "How do you price engagements?", a: "Flexible: fixed-scope project, monthly retainer, or outcome-based. We agree the model up front, so there are no surprises." },
  { q: "Do we need our data \"AI-ready\" first?", a: "Not at all. Assessing and preparing your data is part of the work." },
  { q: "Can you work with our existing cloud and models?", a: "Absolutely. We're model- and vendor-agnostic, and build on the stack you already run." },
  { q: "What does a first engagement look like?", a: "A short diagnostic to find the highest-value use case, then a focused 90-day pilot with measurable KPIs." },
];

function Nav() {
  return (
    <header className="nav">
      <div className="nav__inner">
        <a className="nav__brand" href="#top"><img src={LOGO_SRC} alt="Yantrific" /></a>
        <nav className="nav__links">
          <a href="#services">Services</a>
          <a href="#approach">Approach</a>
          <a href="#industries">Industries</a>
          <a href="#faq">FAQ</a>
          <a href="https://lalmohar.com" target="_blank" rel="noopener">Lalmohar</a>
        </nav>
        <a className="btn btn--sm" href="#contact">Get in touch</a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__inner">
        <span className="eyebrow">AI Consulting &amp; Products</span>
        <h1 className="hero__title">Artificial intelligence,<br />delivered into production.</h1>
        <p className="hero__sub">We help organizations build and deploy AI systems that work. From strategy to implementation, for startups and enterprises.</p>
        <div className="hero__cta">
          <a className="btn btn--primary btn--lg" href="#services">Explore services</a>
          <a className="btn btn--ghost btn--lg" href="https://lalmohar.com" target="_blank" rel="noopener">Try Lalmohar</a>
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

function Services() {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <div className="section__head">
          <span className="eyebrow">What we do</span>
          <h2>From advice to production, and everything between.</h2>
          <p className="section__lead">Six capabilities spanning the full arc: Advise → Build → Operate.</p>
        </div>
        <div className="grid grid--3">
          {SERVICES.map((s) => (
            <article className="card" key={s.n}>
              <div className="card__n">{s.n}</div>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Product() {
  return (
    <section className="section section--alt" id="product">
      <div className="wrap">
        <div className="section__head">
          <span className="eyebrow">Our Product</span>
          <h2>Built by us, for Nepal's legal community.</h2>
        </div>
        <div className="product-grid">
          {PRODUCTS.map((p) => (
            <a href={p.url} target="_blank" rel="noopener" className="product-card">
              <div className="product-card__logo"><img src={p.logo} alt={p.t} /></div>
              <div className="product-card__body">
                <h3>{p.t}</h3>
                <p>{p.d}</p>
                <span className="product-card__link">Visit {p.t} →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Approach() {
  return (
    <section className="section" id="approach">
      <div className="wrap approach">
        <div className="approach__intro">
          <span className="eyebrow">How we work</span>
          <h2>Built to outlast the engagement.</h2>
          <blockquote className="pull">“AI is not a technology project. It is a strategy project that happens to involve software.”</blockquote>
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

function Industries() {
  return (
    <section className="section" id="industries">
      <div className="wrap">
        <div className="section__head">
          <span className="eyebrow">Where we work</span>
          <h2>Concrete plays, not generic AI.</h2>
        </div>
        <div className="grid grid--4">
          {INDUSTRIES.map((x, i) => (
            <article className="tile" key={i}>
              <h3>{x.t}</h3>
              <p>{x.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
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

function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="wrap wrap--narrow contact__inner">
        <span className="eyebrow eyebrow--light">Contact</span>
        <h2>Let's build something durable.</h2>
        <p className="contact__sub">Tell us where you are and where you need to be. We'll tell you honestly whether we can help. Or try our product, Lalmohar, at <a href="https://lalmohar.com" target="_blank" rel="noopener" style={{color:"#9fb4e6",textDecoration:"underline"}}>lalmohar.com</a>.</p>
        <a className="btn btn--primary btn--lg" href="mailto:contact@yantrific.com">contact@yantrific.com</a>
        <p className="contact__loc">Jawlakhel, Lalitpur, Nepal · Working with teams across South Asia &amp; beyond</p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <img className="footer__logo" src={LOGO_SRC} alt="Yantrific" />
        <p className="footer__copy">© 2026 Yantrific · <a href="https://lalmohar.com" target="_blank" rel="noopener" style={{color:"#9fb4e6",textDecoration:"underline"}}>Lalmohar</a> · AI for ambitious teams, from startups to enterprises.</p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Product />
        <Approach />
        <Industries />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
