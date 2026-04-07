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
        setGames(data);
      }
      setLoading(false);
    }

    fetchGames();
  }, []);

  return (
    <div className="card games-card">
      <h3 className="page-title">🕹️ เกมที่กำลังเล่นอยู่</h3>
      
      {loading ? (
        <p className="loading-text">กำลังโหลดข้อมูล...</p>
      ) : (
        <ul className="game-list">
          {games.map((game) => (
            <li key={game.id} className="game-list-item">
              
              <img 
                src={game.image_url || 'https://via.placeholder.com/80'} 
                alt={game.title} 
                className="game-image"
              />
              
              <div className="game-info">
                <h4 className="game-title">{game.title}</h4>
                
                <div className="game-tags">
                  {game.ingame_name && (
                    <span className="tag tag-username">
                      Username: {game.ingame_name}
                    </span>
                  )}
                  
                  {game.uid && (
                    <span className="tag tag-uid">
                      UID: {game.uid}
                    </span>
                  )}
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
