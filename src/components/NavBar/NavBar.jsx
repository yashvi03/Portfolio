import { Link } from "react-router-dom";
import './NavBar.css'

function NavBar() {
  return (
    <div className="nav">
      <Link to='/'><div className="portfolio">Portfolio</div></Link>
      <div className="contact">Contact me</div>
    </div>
  );
}

export default NavBar;
