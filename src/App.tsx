import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { theme } from './theme/theme';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

// Lazy ahh load pages
const MainPage = React.lazy(() => import('./pages/MainPage'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const OutreachPage = React.lazy(() => import('./pages/OutreachPage'));
const CalendarPage = React.lazy(() => import('./pages/CalendarPage'));
const MediaPage = React.lazy(() => import('./pages/MediaPage'));
const ResourcesPage = React.lazy(() => import('./pages/ResourcesPage'));
const DonatePage = React.lazy(() => import('./pages/DonatePage'));
const SponsorsPage = React.lazy(() => import('./pages/SponsorsPage'));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Box sx={{ 
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <Navbar />
          <Box component="main" sx={{ flexGrow: 1 }}>
            <React.Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/outreach" element={<OutreachPage />} />
                <Route path="/calendar" element={<CalendarPage />} />
                <Route path="/media" element={<MediaPage />} />
                <Route path="/resources" element={<ResourcesPage />} />
                <Route path="/donate" element={<DonatePage />} />
                <Route path="/sponsors" element={<SponsorsPage />} />
              </Routes>
            </React.Suspense>
          </Box>
          <Footer />
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
