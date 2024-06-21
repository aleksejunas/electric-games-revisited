import { Link } from 'react-router-dom'
import './MainHeader.css'

const MainHeader = () => {
  return (
    <div>
      <nav>
        <div className='navbar'>
          <div className="container nav-container">
            <input className="checkbox" type="checkbox" name="" id="" />
            <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>
            <div className="logo">
              <h1>Navbar</h1>
            </div>
            <div className="menu-items">
              <li className='nav-item active m-2 text-decoration-none'>
                <Link className='link' to="/">Home</Link>
              </li>
              <li className='nav-item active m-2'>
                <Link className='link' to="create-game-page">Add Game</Link>
              </li>
              <li className='nav-item active m-2'>
                <Link className='link' to="read-game-page">Games</Link>
              </li>
              <li className='nav-item active m-2'>
                <Link className='link' to="update-game-page">Update Game</Link>
              </li>
              <li className='nav-item active m-2'>
                <Link className='link' to="delete-game-page">Delete Game</Link>
              </li>
              {/* <li><a href="#">Home</a></li>
            <li><a href="#">about</a></li>
            <li><a href="#">blogs</a></li>
            <li><a href="#">portfolio</a></li>
            <li><a href="#">contact</a></li> */}
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default MainHeader
