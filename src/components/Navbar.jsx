import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div
      className="navbar"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        backgroundColor: 'navy', // Optional: for visual clarity
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
          NSTConnect
        </Link>
      </h1>
      <div style={{ display: 'flex', gap: '1.2rem' }}>
        <Link to="/juniors" style={{ color: 'white', textDecoration: 'none' }}>
          Junior Forum
        </Link>
        <Link to="/seniors" style={{ color: 'white', textDecoration: 'none' }}>
          Senior Forum
        </Link>
        <Link to="/events" style={{ color: 'white', textDecoration: 'none' }}>
          Events
        </Link>
        <Link to="/sports" style={{ color: 'white', textDecoration: 'none' }}>
          Sports
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
