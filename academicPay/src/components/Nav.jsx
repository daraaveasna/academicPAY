import logo from "../assets/AcademicPay_black.png";
import "../components/Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header>
      <img src={logo} alt="" />
      <div className="nav">
        <Link className="action" to="/">
          ព័ត៌មានទូទៅ
        </Link>
        <Link to="/about">ព័ត៌មានលម្អិត</Link>
      </div>
      <div className="account">
        <span></span>
        <div>
          <h3>academicPay</h3>
          <p>Admin</p>
        </div>
        <span></span>
      </div>
    </header>
  );
};

export default Nav;
