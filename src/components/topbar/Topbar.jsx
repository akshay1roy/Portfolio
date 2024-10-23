import React from "react";
import "./topbar.scss";
import {} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";

function Topbar({menuOpen,setMenuOpen}) {
  return (
    <div className={"topbar "+ (menuOpen && "active")}>
      <div className="wrappper">
        <div className="left">
          <a href="#intro" className="logo">
            genius.
          </a>
          <div className="itemContainer">
            <PersonIcon className="icon" />
            <span>+91 7667248361</span>
          </div>

          <div className="itemContainer">
            <EmailIcon className="icon" />
            <span>genius.@gamil.com</span>
          </div>
        </div>

        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
