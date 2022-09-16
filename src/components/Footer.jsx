import React from "react";
import '../styles/footer.css'
import arrow from '../assets/icons/arrow.svg'
import logo from "../assets/icons/logo.svg"
const Footer = () =>{
    return<div className="container">
        <div className="f-column">
            <img style={{width:'70px'}} src={logo}/>
            <div style={{height:'10px'}}></div>
            <span>instagram</span>
            <span>facebook</span>
            <span>twitter</span>
            <span>instagram</span>
            <span>blabla</span>
            <span>blabla</span>

        </div>
        <div className="column">
            <span>Logo</span>
            <div style={{height:'10px'}}></div>
            <span>instagram</span>
            <span>facebook</span>
            <span>twitter</span>
            <span>instagram</span>
            <span>blabla</span>
            <span>blabla</span>

        </div>
        <div className="column">
            <span>Logo</span>
            <div style={{height:'10px'}}></div>
            <span>instagram</span>
            <span>facebook</span>
            <span>twitter</span>
            <span>instagram</span>
            <span>blabla</span>
            <span>blabla</span>

        </div>

        <div className="column">
            <span>Logo</span>
            <div style={{height:'10px'}}></div>
            <span>instagram</span>
            <span>facebook</span>
            <span>twitter</span>
            <span>instagram</span>
            <span>blabla</span>
            <span>blabla</span>

        </div>
        <div className="column">
            <span>Subscribe to our newsletter</span>
            <div style={{height:'10px'}}>
                
            </div>
            <div className="email">
          
                <span>
                    Email
                </span>
                <img style={{height:'15px'}} src={arrow}/>
               
            </div>
        </div>
    </div>
}
export default Footer