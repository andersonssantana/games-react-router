import { useEffect, useState } from 'react';
import Card from '../components/Card';
import { Game } from '../types';

function GamesList() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    const getGames = async () => {
      const response = await fetch('http://localhost:3000/games');
      const gamesData = await response.json();
      setGames(gamesData);
    };
    getGames();
  }, []);

  if (!games || games.length === 0) return <p>Loading...</p>;

  return (
    <div>
      <h1>Nominated games in 2023</h1>
      <div className="games-list-container">
        {games.map((game) => <Card key={ game.id } game={ game } />)}
      </div>
    </div>
  );
}

export default GamesList;
