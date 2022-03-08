import { ReactComponent as GithubIcon } from 'assets/img/github.svg';
import './styles.css';

function Navbar() {
  return (
    <header>
      <nav className="container">
        <div className='dsmovie-nav-content'>
          <h1>DSMovie</h1>
          <a href="https://github.com/gabriel-lamarao">
            <div className='dsmovie-contact-container'>
              <GithubIcon />
              <p className='dsmovie-contact-link'>/gabriel-lamarao</p>
            </div>
          </a>

        </div>
      </nav>
    </header >
  )
}
export default Navbar;