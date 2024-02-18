import React from "react";
import s from "./Nav.module.css"
import img_header from "../images/Header-img.png"
import { Link, NavLink } from "react-router-dom"
import Frame4 from "../images/Frame4.png"

const linkStyle = {
    textDecoration: "none",
    color: 'white'
  };

function Header() {
    return ( 
            <>
        <header>
        <div className={s.bgc}>
            <Link to="/"><div className={s.Cosmo}>COSMO</div></Link> 
                <nav>
                    <ul className={s.BlockTextes}>
                        <Link  to="Home" style={linkStyle}><li className={s.beril0}>HOME</li></Link>
                        <Link to="COOLECTION" style={linkStyle}><li className={s.beril1}>COOLECTION</li></Link> 
                        <Link to="PRODUCTS" style={linkStyle}><li className={s.beril2}>PRODUCTS</li></Link>
                        <Link to="CONTACT" style={linkStyle}><li className={s.beril3}>CONTACT</li> </Link>
                    </ul>
                </nav>
        </div>
        </header>
            </>
     );
}

export default Header;