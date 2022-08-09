import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <nav className="navbar">
        <Link to="/">
          <button className="button button--one">
           01. &lt;Home&#47;&gt;
          </button>
        </Link>
        <Link to="/">
          <div className="navbar__logo">FK</div>
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
