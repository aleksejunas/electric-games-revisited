import { Link } from "react-router-dom";
// import "./MainHeader.css";

const MainHeader = () => {
  return (
    <div>
      <nav>
        <div className="navbar">
          <div className="flex justify-between shadow-lg">
            <div className="logo">
              <h1>Navbar</h1>
            </div>
            <div className="flex space-x-4">
              <li className="nav-item active m-2 text-decoration-none">
                <Link className="link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item active m-2">
                <Link className="link" to="create-game-page">
                  Add Game
                </Link>
              </li>
              <li className="nav-item active m-2">
                <Link className="link" to="read-game-page">
                  Games
                </Link>
              </li>
              <li className="nav-item active m-2">
                <Link className="link" to="update-game-page">
                  Update Game
                </Link>
              </li>
              <li className="nav-item active m-2">
                <Link className="link" to="delete-game-page">
                  Delete Game
                </Link>
              </li>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MainHeader;
