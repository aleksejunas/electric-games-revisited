import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import './NavBar.css';
import { useState } from 'react';
import styled from 'styled-components';

interface MenuProps {
  open: boolean;
}

const MenuIcon = styled.div`
  cursor: pointer;
`;

const Menu = styled.div<MenuProps>`
  display: ${props => (props.open ? 'block' : 'none')};
  position: absolute;
  right: 0;
  background: #f0f0f0;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
`;

const MenuItems = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background: #ccc;
  }
`;

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="flex-1 flex-col justify-between items-center p-2">
        <div
          className="flex flex-row justify-between items-center border-2 p-2 rounded shadow-lg"
          style={{
            boxShadow: '10px 10px 10px rgba(0, 128, 0, 0.702)',
          }}
        >
          <div>
            <Link to="/">
              <h1
                className="text-5xl text-green-600 font-bold"
                style={{
                  fontFamily: "'Syne Mono', monospace",
                }}
              >
                Ǝlectric Games
              </h1>
            </Link>
          </div>

          {isMobile ? (
            <div className="flex flex-row justify-self-end gap-4 mr-1 ">
              <button onClick={toggleMenu} className="hamburger-menu">
                <MenuIcon
                  className="text-5xl text-green-600"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  ☰
                </MenuIcon>
                <Menu open={isOpen}>
                  <MenuItems>
                    <Link to="/">Home</Link>
                  </MenuItems>
                  <MenuItems>
                    <Link to="/games-page">Games</Link>
                  </MenuItems>
                  <MenuItems>
                    <Link to="/about-page">About</Link>
                  </MenuItems>
                </Menu>
              </button>
            </div>
          ) : (
            <div className="flex flex-row justify-self-end gap-4 mr-1 ">
              <Link
                className="text-green-600 text-3xl font-normal p-2 rounded shadow-md
        no-underline transition-colors hover:bg-green-600 hover:text-white
        active:bg-yellow-500 active:text-green-600"
                style={{
                  fontFamily: "'Syne Mono', monospace",
                  boxShadow: '3px 3px 3px rgba(0, 128, 0, 0.702)',
                }}
                to="/"
              >
                Home
              </Link>
              <Link
                className="text-green-600 text-3xl font-normal p-2 rounded shadow-md
        no-underline transition-colors hover:bg-green-600 hover:text-white
        active:bg-yellow-500 active:text-green-600"
                style={{
                  fontFamily: "'Syne Mono', monospace",
                  boxShadow: '3px 3px 3px rgba(0, 128, 0, 0.702)',
                }}
                to="/games-page"
              >
                Games
              </Link>
              <Link
                className="text-green-600 text-3xl font-normal p-2 rounded shadow-md
        no-underline transition-colors hover:bg-green-600 hover:text-white
        active:bg-yellow-500 active:text-green-600"
                style={{
                  fontFamily: "'Syne Mono', monospace",
                  boxShadow: '3px 3px 3px rgba(0, 128, 0, 0.702)',
                }}
                to="/about-page"
              >
                About
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
