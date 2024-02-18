import React from "react";
import s from "./Header.module.css"
import img_header from "../images/Header-img.png"
import { Link, NavLink } from "react-router-dom"
import img1 from "../images/img1.png"
import img2 from "../images/img2.png"
import img3 from "../images/img3.png"
import Frame4 from "../images/Frame4.png"
import NavBar from "../NavBar/Nav"


const linkStyle = {
    textDecoration: "none",
    color: 'white'
  };

function Header() {
    return ( 
            <>
        <header>
            
            <div className={s.bgc}>
                <NavBar/>
       

            <nav>
                <ul className={s.BlockTextes}>
                    <div>
                        <li className={s.info}>The Health  Of <br /> Your  Body</li>
                        <li className={s.info2}>We make all cosmetics from natural ingredients <br /> and without the addition of dyes</li>
                        <div className={s.Images}>
                            <img src={img1} alt="" />
                            <img src={img2} alt="" />
                            <img src={img3} alt="" />
                        </div>
                        <li className={s.info2}>See catalog</li>

                    </div>
                    <div className={s.textes}>

                    <li className={s.name1}>FRACTAL <br /> GLITTER DUST</li>
                    <li className={s.name2}> Pigmented Loose Glitter <br /> 3.60g/0.13oz</li>
                    <div className={s.peremn}>

                    <img className={s.Frame4} src={Frame4} alt="Frame4" />
                    <button className={s.btn}>ADD CARD</button>
                    </div>
                    </div>
                  
                    {/* <img src={shoppingbag} alt="shoppingbag" />
                    <img src={search} alt="search" /> */}

                </ul>
                {/* <div className={s.nav}>
                    <li className={s.text1}> <img  src={phonebag} alt="phonebag" /> (+71) 7522369417 <img className={s.mailbag} src={mailbag} alt="mailbag" /> <li className={s.mail}>avalan@gmail.com</li>  <img className={s.locationbag} src={locationbag} alt="locationbag" /> <li className={s.location}>Location</li></li>
                    



                </div> */}
            </nav>
                <img className={s.img_header} src={img_header} alt="bgimg" />
               

                <div className={s.arrows}>
                {/* <img className={s.arrowRight} src={arrowRight} alt="arrow" /> */}
                {/* </div>
                <div className={s.nasdnas}>
                 <img className={s.arrowLeft} src={arrowLeft} alt="asd" /> */}
                </div>
            </div>




        </header>
            
            </>
            
     );
}

export default Header;