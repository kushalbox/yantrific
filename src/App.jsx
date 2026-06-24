import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ServicePage from './pages/ServicePage';
import IndustryPage from './pages/IndustryPage';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services/:slug" element={<ServicePage />} />
      <Route path="/industries/:slug" element={<IndustryPage />} />
      <Route path="/products/:slug" element={<ProductPage />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;
