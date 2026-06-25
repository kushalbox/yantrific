import Nav from '../components/Nav';
import Footer from '../components/Footer';

const PRODUCT = {
  t: "Lalmohar",
  tagline: "LLM-powered legal research and documentation platform for Nepal. Search judgments, navigate statutes, and manage case documents with AI.",
  features: [
    { t: "Semantic Judgment Search", d: "Search Nepal's case law by meaning, not just keywords. Our AI understands legal concepts, citations, and precedents to find what matters in seconds." },
    { t: "Statute Navigator", d: "Browse, search, and cross-reference Nepal's acts, codes, and regulations with AI-powered assistance. Related provisions surfaced automatically." },
    { t: "Case Document Manager", d: "Organise, annotate, and share case files, evidence, and legal documents in one secure workspace. Version control and collaboration built in." },
    { t: "AI Legal Assistant", d: "Draft summaries, extract key points from judgments, generate document templates, and prepare case briefs with AI assistance." },
  ],
  about: "Lalmohar was built by Yantrific after years of working alongside legal professionals in Nepal. We saw the gap: hours spent searching through paper judgments, manually drafting documents, and tracking case files across disconnected tools. Lalmohar brings AI to where it matters most for Nepal's legal community. We built it, we run it, and we keep improving it.",
};

function ProductPage() {
  const p = PRODUCT;

  return (
    <>
      <Nav />
      <main>
        <section className="page-hero page-hero--product">
          <div className="shape shape--bl shape--tl" />
          <div className="shape shape--or shape--br" />
          <div className="wrap">
            <span className="eyebrow">Product</span>
            <h1 className="page-hero__title">Lalmohar</h1>
            <p className="page-hero__sub">{p.tagline}</p>
            <div className="hero__cta">
              <a className="btn btn--primary btn--lg" href="https://lalmohar.com" target="_blank" rel="noopener">Try Lalmohar</a>
              <a className="btn btn--ghost btn--lg" href="mailto:contact@yantrific.com">Email us</a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="section__head a-up">
              <h2>Features</h2>
              <p className="section__lead">Built for the way legal professionals actually work.</p>
            </div>
            <div className="grid grid--2 a-stag">
              {p.features.map((f, i) => (
                <article className="card" key={i}>
                  <h3>{f.t}</h3>
                  <p>{f.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--alt">
          <div className="wrap wrap--narrow">
            <div className="section__head a-up">
              <h2>About Lalmohar</h2>
            </div>
            <div className="a-up-sm">
              <div className="about-text">
                <p>{p.about}</p>
                <p style={{marginTop: "16px"}}>Lalmohar is one product from Yantrific. We also build custom AI systems, agentic workflows, and infrastructure for startups and enterprises across South Asia and beyond.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="wrap wrap--narrow contact__inner">
            <span className="eyebrow eyebrow--light">Try it</span>
            <h2>Start using Lalmohar today.</h2>
            <p className="contact__sub">Visit lalmohar.com to create your account. Built by Yantrific. Questions? Email us directly.</p>
            <a className="btn btn--primary btn--lg" href="https://lalmohar.com" target="_blank" rel="noopener">Visit lalmohar.com</a>
            <p className="contact__loc" style={{marginTop: "14px"}}><a href="mailto:contact@yantrific.com" style={{color:"#9fb4e6",textDecoration:"underline"}}>contact@yantrific.com</a></p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default ProductPage;
