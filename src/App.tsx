import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import GamesList from './pages/GamesList';
import About from './pages/About';
import History from './pages/History';
import GameDetails from './pages/GameDetails';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route index element={ <GamesList /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/history" element={ <History /> } />
        <Route path="/game/:id" element={ <GameDetails /> } />
      </Route>
    </Routes>
  );
}

export default App;
