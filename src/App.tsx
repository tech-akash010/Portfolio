import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { CursorProvider } from './components/CustomCursor/CursorContext';
import { DynamicBackground, BackgroundTheme } from './components/Background/DynamicBackground';
import { Preloader } from './components/Preloader/Preloader';
import { Navbar } from './components/Navigation/Navbar';
import { Footer } from './components/Footer/Footer';
import Ribbons from './components/Ribbons';

// Pages
import { HomePage } from './pages/Home/HomePage';
import { ProjectsIndexPage } from './pages/Projects/ProjectsIndexPage';
import { DesignProjectsPage } from './pages/Projects/DesignProjectsPage';
import { TechProjectsPage } from './pages/Projects/TechProjectsPage';
import { ProjectDetailPage } from './pages/Projects/ProjectDetailPage';
import { AboutPage } from './pages/About/AboutPage';
import { ConnectPage } from './pages/Connect/ConnectPage';
import { NotFoundPage } from './pages/NotFound/NotFoundPage';

// Scroll to top on route transition
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
};

// Route-aware Background Theme selector
const BackgroundManager: React.FC = () => {
  const { pathname } = useLocation();

  let theme: BackgroundTheme = 'midnight';
  if (pathname === '/projects') {
    theme = 'lapis';
  } else if (pathname.startsWith('/projects/design')) {
    theme = 'editorial';
  } else if (pathname.startsWith('/projects/technology')) {
    theme = 'midnight';
  } else if (pathname === '/about') {
    theme = 'lapis';
  } else if (pathname === '/connect') {
    theme = 'ocean';
  }

  return <DynamicBackground theme={theme} />;
};

export default function App() {
  return (
    <BrowserRouter>
      <CursorProvider>
        <ScrollToTop />
        <Preloader />
        <BackgroundManager />

        {/* Global Springy Ribbons that trail the cursor across every page */}
        <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden" aria-hidden="true">
          <Ribbons
            colors={['#eca400', '#006992', '#eaf8bf']}
            thickness={36}
            length={2.4}
            shape="lens"
            spread={18}
            stiffness={0.5}
            bounce={0.5}
            wave={0}
            softness={0.8}
            opacity={0.95}
            fade
          />
        </div>

        <div className="min-h-screen flex flex-col justify-between selection:bg-[#eca400] selection:text-[#001d4a]">
          <Navbar />

          <main className="flex-1">
            <Routes>
              {/* Homepage */}
              <Route path="/" element={<HomePage />} />

              {/* Projects Index & Category Archives */}
              <Route path="/projects" element={<ProjectsIndexPage />} />
              <Route path="/projects/design" element={<DesignProjectsPage />} />
              <Route path="/projects/technology" element={<TechProjectsPage />} />

              {/* Individual Case Studies */}
              <Route path="/projects/:category/:slug" element={<ProjectDetailPage />} />

              {/* About Me */}
              <Route path="/about" element={<AboutPage />} />

              {/* Connect / Contact */}
              <Route path="/connect" element={<ConnectPage />} />

              {/* 404 Catch-All */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </CursorProvider>
    </BrowserRouter>
  );
}
