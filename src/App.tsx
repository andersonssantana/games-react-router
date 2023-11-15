import { Routes, Route } from 'react-router-dom';
import './App.css';
import GamesList from './pages/GamesList';
import About from './pages/About';
import History from './pages/History';
import Header from './components/Header';
import GameDetails from './components/GameDetails';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={ <GamesList /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/history" element={ <History /> } />
        <Route path="/game/:id" element={ <GameDetails /> } />
      </Routes>
    </>
  );
}

export default App;
