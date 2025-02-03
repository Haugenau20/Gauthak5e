// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import Combat from './components/Combat';
import Spells from './components/Spells';
import Adventure from './components/Adventure';
import Social from './components/Social';
import RitualAndMagic from './components/RitualAndMagic';

// Placeholder components for other pages
const HeritageAndIdentity = ({ onBack }) => (
  <div className="min-h-screen bg-slate-900 p-8">
    <button onClick={onBack} className="text-white">Back</button>
    <h1 className="text-white text-2xl">Heritage & Identity Page (Coming Soon)</h1>
  </div>
);

const ChallengeAndTriumph = ({ onBack }) => (
  <div className="min-h-screen bg-slate-900 p-8">
    <button onClick={onBack} className="text-white">Back</button>
    <h1 className="text-white text-2xl">Challenge & Triumph Page (Coming Soon)</h1>
  </div>
);

const RestAndReflection = ({ onBack }) => (
  <div className="min-h-screen bg-slate-900 p-8">
    <button onClick={onBack} className="text-white">Back</button>
    <h1 className="text-white text-2xl">Rest & Reflection Page (Coming Soon)</h1>
  </div>
);

function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  useEffect(() => {
    // Handle browser back button
    const handlePopState = (event) => {
      if (event.state?.page) {
        setCurrentPage(event.state.page);
      } else {
        setCurrentPage('landing');
      }
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const handleNavigation = (page, fromPage = null) => {
    window.history.pushState({ page, fromPage }, '', `/${page}`);
    setCurrentPage(page);
  };

  const handleBack = () => {
    window.history.back();
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'combat':
        return <Combat onBack={handleBack} onViewSpells={() => handleNavigation('spells')} />;
      case 'adventure':
        return <Adventure onBack={handleBack} />;
      case 'social':
        return <Social onBack={handleBack} />;
      case 'ritual':
        return <RitualAndMagic onBack={handleBack} onViewSpells={() => handleNavigation('spells')}/>;
      case 'heritage':
        return <HeritageAndIdentity onBack={handleBack} />;
      case 'challenge':
        return <ChallengeAndTriumph onBack={handleBack} />;
      case 'rest':
        return <RestAndReflection onBack={handleBack} />;
      case 'spells':
        return <Spells onBack={handleBack} />;
      default:
        return <LandingPage onNavigate={handleNavigation} />;
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen">
      {renderPage()}
    </div>
  );
}

export default App;