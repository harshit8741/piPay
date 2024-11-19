import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from '../src/layouts/MainLayout';

const HomePage = lazy(() => import('./pages/HomePage'));
// const AuthPage = lazy(() => import('./pages/AuthPage'));
const DashboardPage = lazy(() => import('./pages/Dashboard'));

const App = () => (
  <Router>
    <MainLayout>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          {/* Add more routes as needed */}
        </Routes>
      </Suspense>
    </MainLayout>
  </Router>
);

export default App;
