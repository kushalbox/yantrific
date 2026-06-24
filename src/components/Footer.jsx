const LOGO_SRC = '/logo.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <img className="footer__logo" src={LOGO_SRC} alt="Yantrific" />
        <p className="footer__copy">&copy; 2026 Yantrific &middot; AI for ambitious teams, from startups to enterprises.</p>
      </div>
    </footer>
  );
}

export default Footer;
