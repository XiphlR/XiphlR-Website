function GamesCreated() {
  const createdGames = [
    { 
      id: 1, 
      title: 'Queue Simulator', 
      engine: 'Django / Tailwind CSS', 
      desc: 'โปรเจกต์จำลองระบบจัดการคิวร้านอาหารที่ต่อยอดเป็นมินิเกมได้' 
    },
    { 
      id: 2, 
      title: 'Beat & Podcast Player', 
      engine: 'Flutter', 
      desc: 'แอปพลิเคชันเล่นเพลงและพอดแคสต์พร้อมลูกเล่นอินเทอร์เฟซที่ลื่นไหล' 
    },
  ];

  return (
    <div className="card">
      <h3>🎮 โปรเจกต์ & เกมที่สร้าง</h3>
      <div className="game-grid">
        {createdGames.map(game => (
          <div key={game.id} className="game-item">
            <h4>{game.title}</h4>
            <span className="badge">{game.engine}</span>
            <p>{game.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GamesCreated;
