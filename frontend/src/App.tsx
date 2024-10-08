import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SignInSignUpPage from './pages/SignInSignUpPage';
import ProfilePage from './pages/ProfilePage';
import JobSearchPage from './pages/JobSearchPage';

const App = () => {
  const location = useLocation();

  // Define the paths where the Navbar should not be displayed
  const hideNavbarRoutes = ['/signin'];

  return (
    <>
      {/* Conditionally render the Navbar */}
      {!hideNavbarRoutes.includes(location.pathname) && 
      <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignInSignUpPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/jobsearch" element={<JobSearchPage />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;

