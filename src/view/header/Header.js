import "./header.scss"
import NavBar from "./navbar/Navbar";
import {Image} from "react-bootstrap"
function Header() {
    return (
        <header className="outer-header">
            <div className="outer-navbar">
                <div className="logo-text"><span>Wildlife_aussie </span></div>
    
                <NavBar> 
                </NavBar>
            </div>
            <div className="inner-header">


                 <div className="header-img"style={{backgroundImage: `url(/img/hund.jpeg)`}}></div> 
                
            </div>
        </header>
    );
  }
  
  export default Header;
