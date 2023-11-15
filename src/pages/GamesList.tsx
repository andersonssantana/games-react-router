import games from '../services/data';
import Card from '../components/Card';

function GamesList() {
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
