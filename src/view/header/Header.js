import "./header.scss"
import NavBar from "./navbar/Navbar";
import {Image} from "react-bootstrap"
import ResponsiveNav from "./navbar/ResponsiveNav.js";

function Header() {
    return (
        <header className="outer-header">
            <div className="outer-navbar">
                <div className="logo"><img className="logo-img" src="/img/logo.png"></img></div>
    
                <NavBar /> 
                <ResponsiveNav />
            </div>
            <div className="inner-header">
                 <div className="header-img"style={{backgroundImage: `url(/img/hund2.jpg)`}}></div> 
                
            </div>
        </header>
    );
  }
  
  export default Header;
