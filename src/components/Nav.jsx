import { Link, useLocation } from 'react-router-dom';

const LOGO_SRC = '/logo.png';

function Nav() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  const scrollTo = (id) => (e) => {
    if (isHome) {
      e.preventDefault();
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="nav">
      <div className="nav__inner">
        <Link className="nav__brand" to="/"><img src={LOGO_SRC} alt="Yantrific" /></Link>
        <nav className="nav__links">
          <Link to="/#services" onClick={scrollTo('services')}>Services</Link>
          <Link to="/#product" onClick={scrollTo('product')}>Products</Link>
          <Link to="/#approach" onClick={scrollTo('approach')}>Approach</Link>
          <Link to="/#industries" onClick={scrollTo('industries')}>Industries</Link>
          <Link to="/#faq" onClick={scrollTo('faq')}>FAQ</Link>
        </nav>
        <Link className="btn btn--sm" to="/#contact" onClick={scrollTo('contact')}>Get in touch</Link>
      </div>
    </header>
  );
}

export default Nav;
