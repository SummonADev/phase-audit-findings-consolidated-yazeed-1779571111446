import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import Home from '@/pages/Home';
import ForPlayers from '@/pages/ForPlayers';
import ForOrganisers from '@/pages/ForOrganisers';
import ForReferees from '@/pages/ForReferees';
import Features from '@/pages/Features';
import Pricing from '@/pages/Pricing';
import Download from '@/pages/Download';
import Contact from '@/pages/Contact';
import Privacy from '@/pages/Privacy';
import Terms from '@/pages/Terms';
import NotFound from '@/pages/NotFound';
import { LocaleProvider, useLocale } from '@/hooks/useLocale';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function HtmlAttrs() {
  const { lang, dir } = useLocale();
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);
  return null;
}

export default function App() {
  return (
    <LocaleProvider>
      <HtmlAttrs />
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/for-players" element={<ForPlayers />} />
          <Route path="/for-organisers" element={<ForOrganisers />} />
          <Route path="/for-referees" element={<ForReferees />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/download" element={<Download />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/privacy/" element={<Navigate to="/privacy" replace />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/terms/" element={<Navigate to="/terms" replace />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </LocaleProvider>
  );
}
