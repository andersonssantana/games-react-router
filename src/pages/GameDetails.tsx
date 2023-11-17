import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Game } from '../types';

function GameDetails() {
  const { id } = useParams();
  const [game, setGame] = useState<Game | null>(null);

  useEffect(() => {
    const getGame = async () => {
      const response = await fetch(`http://localhost:3000/${id}`);
      const gameData = await response.json();
      setGame(gameData);
    };
    getGame();
  }, [id]);

  if (!game) return <p>Loading...</p>;

  if (!game.id) return <p>Game Not Found</p>;

  return (
    <div className="game-details">
      <h1>{`${game.name}`}</h1>
      <div>
        <img src={ `../src/assets/${id}.jpg` } alt={ id } />
        <p>{`Developer: ${game.developer}`}</p>
        <p>{`Publisher: ${game.publisher}`}</p>
        <p>{`Genre: ${game.genre}`}</p>
        <p>{`Story: ${game.story}`}</p>
        <p>{`Gameplay: ${game.gameplay}`}</p>
        <p>{`Platforms: ${game.platforms.map((platform) => platform).join(', ')}`}</p>
      </div>
    </div>
  );
}

export default GameDetails;
