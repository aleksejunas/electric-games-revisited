// TODO: Convert styling to Tailwind

import { Link } from "react-router-dom";
import "./NavBar.css";
// import './bootstrap-with-modified-colors.scss';

const NavBar = () => {
  return (
    <>
      <nav>
        <div className="flex-1 flex-row justify-between items-center p-2">
          <div className=" flex-1 flex-row justify-between items-center ">
            <h1
              className="text-5xl border-2 p-2 rounded shadow-lg text-green-600 font-bold m-4"
              style={{
                fontFamily: "'Syne Mono', monospace",
                boxShadow: "10px 10px 10px rgba(0, 128, 0, 0.702)",
              }}
            >
              Ǝlectric<span> Games </span>
            </h1>
            <ul className="flex flex-col md:flex-row space-x-0 md:space-x-4">
              <Link
                className="text-green-600 text-3xl font-normal p-2 rounded shadow-md no-underline transition-colors hover:bg-green-600 hover:text-white active:bg-yellow-500 active:text-green-600"
                style={{
                  fontFamily: "'Syne Mono', monospace",
                  boxShadow: "3px 3px 3px rgba(0, 128, 0, 0.702)",
                }}
                to="/"
              >
                Home
              </Link>
              <li className="container-fluid list-none">
                <Link className="link" to="about-page">
                  About
                </Link>
              </li>
              <li className="nav-item active m-2 list-none">
                <Link className="link" to="read-game-page">
                  Games
                </Link>
              </li>
              <li className="nav-item active m-2 list-none">
                <Link className="link" to="create-game-page">
                  Add Game
                </Link>
              </li>
              <li className="nav-item active m-2 list-none">
                <Link className="link" to="update-game-page">
                  Update Game
                </Link>
              </li>
              <li className="nav-item active m-2 list-none">
                <Link className="link" to="delete-game-page">
                  Delete Game
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
