import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <Link to="/">Nominated Games</Link>
      <Link to="/about">About</Link>
      <Link to="/history">History</Link>
    </header>
  );
}

export default Header;
