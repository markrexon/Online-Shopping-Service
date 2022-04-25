import React, { useState } from "react";
import Menu from "./Menu";
import "../styles.css";
import { Link } from "react-router-dom";

const Base = ({
  description = "My description",
  className = "bg-dark text-white p-4",
  
  children,
}) =>
 {
  return (
    <div>
      <Menu />
      <div className="card_area">
      <div className="container-fluid">
       
        
        <div className="inner">
          <h3 className="display-6">{description}</h3>
        </div>
        
        </div>
      
        <div className={className}>{children}</div>
      
      
      </div>
      <footer className="footer bg-dark mt-auto py-3">
        <div className="container-fluid bg-success text-white text-center py-3">
          <h4>If you got any questions, reach me out at instagram</h4>
          <button className="btn btn-warning btn-lg"
          >
            <Link to="contact" >Contact Us
            </Link></button>
          <div className="container">
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Base;
