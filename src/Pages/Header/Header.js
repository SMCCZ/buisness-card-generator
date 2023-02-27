import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo.png";
const Header = () => {
  return (
    <div className="header">
      {" "}
      <Link to="/">
        <img className="logo" src={logo} alt="logo" width={"120px"}></img>
      </Link>
     
      <Link className="tabs" to="/">
        About
      </Link>
      <Link className="tabs" to="/blogs">
        Blog
      </Link>
      <Link className="tabs" to="/">
        Services
      </Link>
      <Link className="tabs" to="/"></Link>
    </div>
  );
};

export default Header;
