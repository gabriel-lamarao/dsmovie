import {ReactComponent as GithubIcon} from 'assets/img/github.svg';

function Navbar(){
    return (
        <nav className='container'>
        <div>
          <h1>DSMovie</h1>
          <a href="https://github.com/gabriel-lamarao">/gabriel-lamarao</a>
          <div>
            <GithubIcon/>
          </div>
        </div>
      </nav>
    )
}
export default Navbar;