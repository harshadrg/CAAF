import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Routes, Route, HashRouter } from 'react-router';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import VirtualServices from './pages/VirtualServices';
import Industries from './pages/Industries';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';

const routes = (
  <Route path='/' element={<App />}>
    <Route index path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/services" element={<Services />} />
    <Route path="/virtual-services" element={<VirtualServices />} />
    <Route path="/industries" element={<Industries />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/privacy" element={<Privacy />} />
    <Route path="/terms" element={<Terms />} />
    <Route path="*" element={<NotFound />} />
  </Route>
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>{routes}</Routes>
    </HashRouter>
  </StrictMode>,
)
