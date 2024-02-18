import React from "react";
import s from "./Main.module.css";
import { Link, NavLink } from "react-router-dom";
import product_iamge1 from "../images/product_iamge1.png"
import product_iamge2 from "../images/product_iamge2.png"
import product_iamge3 from "../images/product_iamge3.png"
import Subtract1 from "../images/Subtract1.png"
import Subtract2 from "../images/Subtract2.png"


const linkStyle = {
  textDecoration: "none",
  color: "white",
};

function Main() {
  return (
    <>
      <header className={s.Main}>
        <div className={s.Lines}>
        <div className={s.Line6}></div>
            <div className={s.Line1}></div>
            <div className={s.Textes_Lines}> 
                <li className={s.Home}>HOME</li>
            <div className={s.Line2}></div>
                <li className={s.Home}>COOLECTION</li>
            <div className={s.Line3}></div>
            <li className={s.Home}>PRODUCTS</li>
            <div className={s.Line4}></div>
            <li className={s.Home}>CONTACT</li>
            <div className={s.Line5}></div>
            </div>
        </div>
        <div className={s.full}>
            <li className={s.product_list}>PRODUCT LIST <span className={s.number_10}>(10)</span></li>
            <li className={s.product_info}>we are your safe space. your chotees are ccon fidential, they won`t be <br /> shared to the 3rd part(es, we take care of your personal data to let you <br /> take care of your skin whit  so worries. </li>
            <br /> <br />
            <li className={s.moisturasing}>MOISTURASING</li>
            <li className={s.moisturasing_info}>choose one of the optiona</li>
        </div>
        <div className={s.Product_images}>
            <img className={s.product_iamge1} src={product_iamge1} alt="product_iamge1" />
            <img className={s.product_iamge2} src={product_iamge2} alt="product_iamge2" />
            <img className={s.product_iamge3} src={product_iamge3} alt="product_iamge3" />
        </div>
            <li className={s.Unlock}>Unlock Your Best Skin,<br />Get Ready To Glow Like Never Before!</li>

        <div className={s.images_subtract}>
            <img className={s.Subtract1} src={Subtract1} alt="Subtract1" />
            <img className={s.Subtract2}  src={Subtract2} alt="Subtract2"  /> 
        </div>
            <button className={s.btn}>skincare by adrien</button>

            <div className={s.Lines_btn}>
                <div className={s.Line_btn1}>
                </div>
                <div className={s.butons}>
                <button className={s.btn1}>La Roche-Posay</button>
                <button className={s.btn2}>The Ordinary</button>
                <button className={s.btn3}>Neutrogena</button>
                <button className={s.btn4}>Dermalogica</button>
                <button className={s.btn5}>Paula’s Choise</button>
                <button className={s.btn6}>Skinceuticals</button>
                <div className={s.Line_btn2}>
                </div>
                </div>

            </div>
      </header>
    </>
  );
}

export default Main;
