import { Link } from 'react-router-dom';
import { Game } from '../types';

type GameProps = {
  game: Game
};

function Card({ game }: GameProps) {
  const { id, name, developer } = game;
  return (
    <div className="card">
      <Link to={ `/game/${id}` }>
        <img src={ `../src/assets/${id}.jpg` } alt={ name } />
      </Link>
      <h3>{name}</h3>
      <p>{developer}</p>
    </div>
  );
}

export default Card;
