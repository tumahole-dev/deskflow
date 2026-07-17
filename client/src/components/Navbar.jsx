import { useAuth } from '../context/AuthContext';

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <header className="navbar">
      <h1>DeskFlow</h1>
      <div className="navbar-user">
        <span>{user?.name} ({user?.role})</span>
        <button onClick={logout}>Log out</button>
      </div>
    </header>
  );
}

export default Navbar;