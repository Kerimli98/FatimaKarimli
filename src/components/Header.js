import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <nav className="navbar">
        <Link to="/">
          <div className="navbar__logo">
            <span>F</span>
            <span>K</span>
          </div>
        </Link>
        <Link to="/projects">
          <button className="button button--one">
            02. &lt;Portfolio&#47;&gt;
          </button>
        </Link>
      </nav>
    </div>
  );
};

export default Header;
