import {Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
        <nav className="navbar">
          <Link to="/">
            <button className="button button--one">
              &#47;&#47;01. &lt;Home&#47;&gt;
            </button>
          </Link>
          <Link to="/">
            <div className="navbar__logo">FK</div>
          </Link>
          <button className="button button--one">
            &#47;&#47;02. &lt;Portfolio&#47;&gt;
          </button>
        </nav>
         </div>
  );
};

export default Header;
