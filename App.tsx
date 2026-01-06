import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import Booking from './pages/Booking';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Layout = ({ children }: { children?: React.ReactNode }) => {
  const location = useLocation();
  const isProfile = location.pathname === '/profile';

  return (
    <div className={`min-h-screen flex flex-col ${isProfile ? 'bg-background-dark' : 'bg-background-light'}`}>
      {!isProfile && <Navbar />}
      <main className="flex-grow w-full">
        {children}
      </main>
      {!isProfile && <Footer />}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;