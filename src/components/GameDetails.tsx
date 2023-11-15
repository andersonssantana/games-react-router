import { useParams } from 'react-router-dom';
import games from '../services/data';

function GameDetails() {
  const { id } = useParams();
  const game = games.find((e) => e.id === id);

  if (!game) return <p>Game not found</p>;

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
