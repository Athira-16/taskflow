import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { user, setUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");

    setUser(null);

    navigate("/");
  };

  return (
    <div className="navbar">
      <h2>TaskFlow</h2>

      <div className="nav-right">
        <span>Welcome, {user?.name}</span>

        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}

export default Navbar;
