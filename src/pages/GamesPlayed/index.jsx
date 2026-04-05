import React, { useEffect, useState } from 'react';
import { supabase } from '../../supabaseClient';

function GamesPlayed() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    async function fetchGames() {
      const { data, error } = await supabase
        .from('GamesPlayed')
        .select('*'); 

      if (error) {
        console.error("ดึงข้อมูลไม่ได้:", error);
      } else {
        setGames(data); // เอาข้อมูลที่ได้ไปเก็บไว้ใน State
      }
      setLoading(false);
    }

    fetchGames();
  }, []);

  return (
    <div className="card">
      <h3>🕹️ เกมที่กำลังเล่นอยู่</h3>
      
      {loading ? (
        <p>กำลังโหลดข้อมูล...</p>
      ) : (
        <ul className="game-list">
          {games.map((game) => (
            <li key={game.id} className="game-list-item">
              <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                <img 
                  src={game.image_url} 
                  alt={game.title} 
                  style={{ width: '50px', height: '50px', borderRadius: '8px', objectFit: 'cover' }} 
                />
                <div>
                  <h4>{game.title}</h4>
                  <p style={{ fontSize: '0.85em', color: '#666' }}>Username: {game.ingame_name}</p>
                  <p style={{ fontSize: '0.85em', color: '#666' }}>UID: {game.uid}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default GamesPlayed;
