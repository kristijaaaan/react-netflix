import { Link } from "react-router-dom";
import { useLogout } from "../pages/useLogout";
import { useUser } from "../pages/useUser";
import "./Navbar.css";

export default function Navbar() {
  const { logout } = useLogout();
  const { isAuth } = useUser();

  return (
    <nav className="navbar">
      <Link to="/">NETFLIX</Link>
      {isAuth ? (
        <div>
          <Link to="/profile">My profile</Link>
          {/* <button>My profile</button> */}
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <Link to="/sign-in">Sign in</Link>
          <Link to="/sign-up">Sign up</Link>
        </div>
      )}
    </nav>
  );
}
