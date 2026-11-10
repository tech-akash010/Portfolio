import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { CursorProvider } from './components/CustomCursor/CursorContext';
import { CustomCursor } from './components/CustomCursor/CustomCursor';
import { DynamicBackground, BackgroundTheme } from './components/Background/DynamicBackground';
import { Preloader } from './components/Preloader/Preloader';
import { Navbar } from './components/Navigation/Navbar';
import { Footer } from './components/Footer/Footer';

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

  let theme: BackgroundTheme = 'paper';
  if (pathname.includes('/projects/design')) {
    theme = 'creative';
  } else if (pathname === '/connect') {
    theme = 'paper';
  }

  return <DynamicBackground theme={theme} />;
};

export default function App() {
  return (
    <BrowserRouter>
      <CursorProvider>
        <ScrollToTop />
        <Preloader />
        <CustomCursor />
        <BackgroundManager />

        <div className="min-h-screen flex flex-col justify-between selection:bg-[#FF6D1F] selection:text-[#FAF3E1]">
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

