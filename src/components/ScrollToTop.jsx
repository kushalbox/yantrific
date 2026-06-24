import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      setTimeout(() => {
        document.getElementById(hash.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [pathname, hash]);

  return null;
}

export default ScrollToTop;
