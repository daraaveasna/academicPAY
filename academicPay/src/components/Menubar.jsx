import React from "react";
import "../components/Menubar.css";
import { FiSearch } from "react-icons/fi";
import logoitc from "../assets/ITC.png";
import Dropdet from "./Dropdet";
import Dropyear from "./Dropyear";

const Menubar = () => {
  return (
    <div className="container">
      <div className="left">
        <img src={logoitc} alt="" />
        <div className="double-left">
          <div className="dropdown dropdown-year">
            {/* <button>
                  <span>2023</span>
                  <FaChevronUp/>
                </button> */}
            <Dropyear />
          </div>
          <div className="dropdown-det">
            {/* <button>
                  <span>ALL</span>
                  <FaChevronUp/>
                </button> */}
            <Dropdet />
          </div>
        </div>
      </div>
      <div className="right">
        <div className="search-bar">
          <FiSearch className="search" />
          <form action="">
            <input type="text" placeholder="ស្វែងរក..." />
          </form>
        </div>
        <button className="btn-add">
          <h1>+</h1>
        </button>
      </div>
    </div>
  );
};

export default Menubar;
