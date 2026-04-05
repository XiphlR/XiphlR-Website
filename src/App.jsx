import React, { useState } from 'react';

import Navigation from './components/Navigation';
import Footer from './components/Footer';

import Profile from './pages/Profile';
import GamesCreated from './pages/GamesCreated';
import GamesPlayed from './pages/GamesPlayed';

import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('profile');

  const renderContent = () => {
    switch (currentPage) {
      // หน้าโปรไฟล์
      case 'profile':
        return (
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <Profile />
          </div>
        );
      // หน้าเกมที่สร้าง
      case 'created':
        return (
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <GamesCreated />
          </div>
        );
      // หน้าเกมที่กำลังเล่น
      case 'played':
        return (
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <GamesPlayed />
          </div>
        );
      default:
        return (
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <Profile />
          </div>
        );
    }
  };

  return (
    <div className="app-wrapper">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <div className="page-content">
        <div className="app-container">
          {renderContent()}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
