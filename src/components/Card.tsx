import { Game } from '../types';

type GameProps = {
  game: Game
};

function Card({ game }: GameProps) {
  console.log(game);
  return (
    <div className="card">
      {/* renderizar imagem a partir do id */}
      {/* renderizar h3 com o name do game */}
      {/* renderizar p com developer do game */}
    </div>
  );
}

export default Card;
