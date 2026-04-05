function GamesCreated() {
  const createdGames = [
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
