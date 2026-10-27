import React, { lazy, Suspense } from 'react';
    import '@radix-ui/themes/styles.css';
    import { Theme } from '@radix-ui/themes';
    import { ToastContainer } from 'react-toastify';
    import 'react-toastify/dist/ReactToastify.css';
    import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

    const Home = lazy(() => import('./src/pages/Home.tsx').then(m => ({ default: m.Home })));
    const Scan = lazy(() => import('./src/pages/Scan.tsx').then(m => ({ default: m.Scan })));
    const Library = lazy(() => import('./src/pages/Library.tsx').then(m => ({ default: m.Library })));
    const Fields = lazy(() => import('./src/pages/Fields.tsx').then(m => ({ default: m.Fields })));
    const Alerts = lazy(() => import('./src/pages/Alerts.tsx').then(m => ({ default: m.Alerts })));
    const NotFound = lazy(() => import('./src/pages/NotFound.tsx'));

    const PageLoader: React.FC = () => (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="w-10 h-10 rounded-full border-4 border-emerald-600 border-t-transparent animate-spin" />
      </div>
    );

    const App: React.FC = () => {
      return (
        <Theme appearance="inherit" radius="large" scaling="100%">
          <Router>
            <main className="min-h-screen font-sans">
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/scan" element={<Scan />} />
                  <Route path="/library" element={<Library />} />
                  <Route path="/fields" element={<Fields />} />
                  <Route path="/alerts" element={<Alerts />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
              <ToastContainer
                position="top-right"
                autoClose={3000}
                newestOnTop
                closeOnClick
                pauseOnHover
              />
            </main>
          </Router>
        </Theme>
      );
    };

    export default App;