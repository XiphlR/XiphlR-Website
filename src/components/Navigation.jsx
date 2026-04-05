import React from 'react';

function Navigation({ currentPage, setCurrentPage }) {
  return (
    <nav className="navbar">
      <div className="nav-brand">XiphlR</div>
      <ul className="nav-links">
        <li>
          <a 
            href="profile" 
            className={currentPage === 'profile' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); setCurrentPage('profile'); }}
          >
            โปรไฟล์
          </a>
        </li>
        <li>
          <a 
            href="created" 
            className={currentPage === 'created' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); setCurrentPage('created'); }}
          >
            ผลงาน
          </a>
        </li>
        <li>
          <a 
            href="played" 
            className={currentPage === 'played' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); setCurrentPage('played'); }}
          >
            เกมที่เล่น
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
