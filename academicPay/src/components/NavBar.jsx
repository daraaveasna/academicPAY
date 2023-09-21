import logo from "../assets/AcademicPay_black.png";
import "../components/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <img src={logo} alt="" />
      <nav>
        <Link to="/">ព័ត៌មានទូទៅ</Link>
        <Link className="active" to="/about">
          ព័ត៌មានលម្អិត
        </Link>
      </nav>
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

export default Navbar;
