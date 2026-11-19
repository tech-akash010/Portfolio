import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { CursorProvider } from './components/CustomCursor/CursorContext';
import { DynamicBackground, BackgroundTheme } from './components/Background/DynamicBackground';
import { Preloader } from './components/Preloader/Preloader';
import { Navbar } from './components/Navigation/Navbar';
import { Footer } from './components/Footer/Footer';
import { PageTransition } from './components/Transitions/PageTransition';
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

// Animated Routes Wrapper for Smooth Page Changes
const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Homepage */}
        <Route
          path="/"
          element={
            <PageTransition>
              <HomePage />
            </PageTransition>
          }
        />

        {/* Projects Index & Category Archives */}
        <Route
          path="/projects"
          element={
            <PageTransition>
              <ProjectsIndexPage />
            </PageTransition>
          }
        />
        <Route
          path="/projects/design"
          element={
            <PageTransition>
              <DesignProjectsPage />
            </PageTransition>
          }
        />
        <Route
          path="/projects/technology"
          element={
            <PageTransition>
              <TechProjectsPage />
            </PageTransition>
          }
        />

        {/* Individual Case Studies */}
        <Route
          path="/projects/:category/:slug"
          element={
            <PageTransition>
              <ProjectDetailPage />
            </PageTransition>
          }
        />

        {/* About Me */}
        <Route
          path="/about"
          element={
            <PageTransition>
              <AboutPage />
            </PageTransition>
          }
        />

        {/* Connect / Contact */}
        <Route
          path="/connect"
          element={
            <PageTransition>
              <ConnectPage />
            </PageTransition>
          }
        />

        {/* 404 Catch-All */}
        <Route
          path="*"
          element={
            <PageTransition>
              <NotFoundPage />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
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
            colors={['#fca311', '#14213d', '#ffffff']}
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

        <div className="min-h-screen flex flex-col justify-between selection:bg-[#fca311] selection:text-[#000000]">
          <Navbar />

          <main className="flex-1 flex flex-col">
            <AnimatedRoutes />
          </main>

          <Footer />
        </div>
      </CursorProvider>
    </BrowserRouter>
  );
}
