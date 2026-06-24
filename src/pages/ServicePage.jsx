import { useParams, Navigate, Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const SERVICES = {
  "ai-strategy-roadmapping": {
    n: "01", t: "AI Strategy & Roadmapping", slug: "ai-strategy-roadmapping", order: 1,
    tagline: "Turn ambiguity into a funded, phased plan. We help leadership teams identify where AI actually moves the needle, then build the roadmap to get there.",
    capabilities: [
      { t: "AI Opportunity Audit", d: "Map your data, workflows, and competitive landscape to find the highest-impact AI use cases across your organisation." },
      { t: "Build-vs-Buy Analysis", d: "Evaluate whether to build custom models, fine-tune open-source, or buy SaaS. We lay out total cost, timeline, and risk for each path." },
      { t: "Use-Case Prioritisation", d: "Score each opportunity by business impact, technical feasibility, and implementation effort. You get a ranked, board-ready backlog." },
      { t: "KPI-Backed Roadmap", d: "Every initiative has a clear success metric, budget estimate, and ownership plan. No vague promises, no unfunded mandates." },
    ],
    outcomes: [
      "Board-ready presentation with prioritised AI opportunities and investment cases",
      "Phased implementation roadmap with resource and budget estimates",
      "Clear build-vs-buy recommendations with risk analysis for each use case",
    ],
  },
  "custom-ai-genai-development": {
    n: "02", t: "Custom AI & GenAI Development", slug: "custom-ai-genai-development", order: 2,
    tagline: "Purpose-built models fine-tuned on your data, deployed in your environment. From fine-tuned LLMs to computer vision pipelines that ship.",
    capabilities: [
      { t: "Fine-Tuned LLMs", d: "Customise open-source models (Llama, Mistral, Qwen) on your domain data. Better accuracy, lower cost, full data control." },
      { t: "Retrieval-Augmented Generation", d: "Ground LLM outputs in your documents, databases, and APIs. Eliminate hallucinations and cite every source." },
      { t: "Computer Vision", d: "Object detection, document digitisation, and visual inspection models for manufacturing, healthcare, and logistics." },
      { t: "Predictive Models", d: "Time-series forecasting, anomaly detection, and recommendation engines powered by your historical data." },
    ],
    outcomes: [
      "Custom AI models achieving >90% accuracy on your domain-specific tasks",
      "Fully documented API with monitoring, logging, and version control",
      "Deployment to your cloud (AWS, GCP, Azure) or on-premise infrastructure",
    ],
  },
  "agentic-systems": {
    n: "03", t: "Agentic Systems", slug: "agentic-systems", order: 3,
    tagline: "Autonomous, bounded AI agents that execute real workflows. Designed for production, with human oversight built into every step.",
    capabilities: [
      { t: "Workflow Agents", d: "Agents that plan, execute, and verify multi-step business processes: lead enrichment, claims processing, compliance checks." },
      { t: "Human-in-the-Loop", d: "Every agent has guardrails, escalation paths, and approval gates. Humans stay in control where it matters." },
      { t: "Tool Use & Integration", d: "Agents call your APIs, query databases, send emails, and update CRM. They work inside your existing stack." },
      { t: "Observability & Monitoring", d: "Every agent action is logged and auditable. Dashboards for cost, latency, success rate, and error analysis." },
    ],
    outcomes: [
      "Autonomous agents handling 70%+ of routine workflow steps without human intervention",
      "Full audit trail for every agent decision with review checkpoints",
      "Measurable reduction in processing time and operational error rates",
    ],
  },
  "data-ai-infrastructure": {
    n: "04", t: "Data & AI Infrastructure", slug: "data-ai-infrastructure", order: 4,
    tagline: "The data layer your AI deserves. Pipelines, vector stores, and MLOps so your models run reliably and cost-efficiently at scale.",
    capabilities: [
      { t: "Data Pipelines", d: "Batch and streaming pipelines that clean, transform, and serve data to models. Built with Airflow, dbt, Kafka, or your stack." },
      { t: "Vector Databases", d: "Milvus, Pinecone, Qdrant, or Weaviate. Semantic search and retrieval infrastructure for RAG and similarity search." },
      { t: "MLOps & LLMOps", d: "Model registry, experiment tracking, A/B testing, and automated retraining. CI/CD for machine learning." },
      { t: "Monitoring & Observability", d: "Drift detection, performance dashboards, cost tracking, and alerting for every model in production." },
    ],
    outcomes: [
      "Production-grade data infrastructure purpose-built for AI workloads",
      "Automated model retraining and deployment pipeline with zero-downtime updates",
      "Real-time monitoring with drift detection and cost optimisation dashboards",
    ],
  },
  "responsible-ai-governance": {
    n: "05", t: "Responsible AI & Governance", slug: "responsible-ai-governance", order: 5,
    tagline: "Ship AI with confidence. We build governance frameworks, audit models, and ensure regulatory alignment from day one.",
    capabilities: [
      { t: "Model Evaluation", d: "Bias audits, robustness testing, fairness metrics, and performance benchmarking across demographic groups." },
      { t: "Explainability", d: "SHAP, LIME, and custom interpretability layers so stakeholders understand every model decision." },
      { t: "Regulatory Alignment", d: "GDPR, EU AI Act, and emerging Nepal/India data protection frameworks built into your AI pipeline from the start." },
      { t: "Governance Frameworks", d: "Policies, review boards, documentation standards, and incident response playbooks for AI operations." },
    ],
    outcomes: [
      "Model cards and bias audit reports for every model in production",
      "Governance playbook aligned with relevant regulatory requirements",
      "Explainability layer integrated into production systems for stakeholder trust",
    ],
  },
  "ai-enablement-operations": {
    n: "06", t: "AI Enablement & Operations", slug: "ai-enablement-operations", order: 6,
    tagline: "Build your team's AI capability from the inside. Training, CoE setup, and ongoing support so you own the future.",
    capabilities: [
      { t: "Team Training", d: "Structured upskilling programs: prompt engineering, RAG patterns, MLOps, and responsible AI. Tailored to your team's level." },
      { t: "Centre of Excellence", d: "Design and launch your internal AI CoE: operating model, toolchain, hiring profiles, and governance structure." },
      { t: "Production Support", d: "Monitoring, retraining, incident response, and performance optimisation for deployed AI systems." },
      { t: "Knowledge Transfer", d: "Documentation, runbooks, and pair-programming sessions so your team can operate independently after handover." },
    ],
    outcomes: [
      "Internal team trained to build, deploy, and maintain AI systems independently",
      "AI Centre of Excellence with defined operating model and governance processes",
      "Complete knowledge transfer with documentation, runbooks, and hands-on training",
    ],
  },
};

const ORDERED = Object.values(SERVICES).sort((a, b) => a.order - b.order);

function ServicePage() {
  const { slug } = useParams();
  const s = SERVICES[slug];

  if (!s) return <Navigate to="/" replace />;

  const i = ORDERED.findIndex((x) => x.n === s.n);
  const prev = i > 0 ? ORDERED[i - 1] : null;
  const next = i < ORDERED.length - 1 ? ORDERED[i + 1] : null;

  return (
    <>
      <Nav />
      <main>
        <section className="page-hero">
          <div className="wrap">
            <span className="eyebrow">Service {s.n}</span>
            <h1 className="page-hero__title">{s.t}</h1>
            <p className="page-hero__sub">{s.tagline}</p>
            <a className="btn btn--primary btn--lg" href="mailto:contact@yantrific.com">Get started</a>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="section__head">
              <h2>Capabilities</h2>
              <p className="section__lead">What we deliver under this engagement.</p>
            </div>
            <div className="grid grid--2">
              {s.capabilities.map((c, i) => (
                <article className="card" key={i}>
                  <h3>{c.t}</h3>
                  <p>{c.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--alt">
          <div className="wrap">
            <div className="section__head">
              <h2>Outcomes</h2>
              <p className="section__lead">What you can expect by the time we hand over.</p>
            </div>
            <div className="outcomes">
              {s.outcomes.map((o, i) => (
                <div className="outcome" key={i}>
                  <span className="outcome__icon">{i + 1}</span>
                  <p>{o}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="section__head">
              <h2>Related services</h2>
            </div>
            <div className="grid grid--3">
              {ORDERED.filter((x) => x.n !== s.n).slice(0, 3).map((r) => (
                <Link to={"/services/" + r.slug} className="card" key={r.n}>
                  <div className="card__n">{r.n}</div>
                  <h3>{r.t}</h3>
                  <p>{r.d}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="wrap wrap--narrow contact__inner">
            <span className="eyebrow eyebrow--light">Contact</span>
            <h2>Ready to start?</h2>
            <p className="contact__sub">Tell us about your project. We will tell you honestly whether we can help and how we would approach it.</p>
            <a className="btn btn--primary btn--lg" href="mailto:contact@yantrific.com">contact@yantrific.com</a>
            <p className="contact__loc">Jawlakhel, Lalitpur, Nepal &middot; Working with teams across South Asia &amp; beyond</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default ServicePage;
