import { Link, useLocation } from "react-router-dom"
import "./navbar.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL} from "./../../../config.json";
import { Menu, Close } from "@material-ui/icons";
import $ from "jquery";

function ResponsiveMenu(props) {
    const [dogs, setDogs] = useState([])
    const [open, setOpen] = useState(false);
    useEffect(() => {
        axios.get(`${API_URL}website/menu`)
        .then(respons => {
            setDogs(respons.data.menu)
            console.log("getting menu")
        })
        .catch(error =>  {
            console.log(error)
        })
    }, [])
    function openMenu() {
        $(".outer-responsive-dropdown").toggleClass("show")
        $(".resposnive-nav-icon").toggleClass("hide")
        $(".wrap-all").toggleClass("lock")

    }

     return (
        <nav className="responsive-nav" >
            <Menu className="resposnive-nav-icon" fontSize="inherit" onClick={openMenu}/>
            <div className="outer-responsive-dropdown">
            <div className="responsive-dropdown">
                <Close className="align-right" fontSize="small"   onClick={openMenu}/>
                <ul className="responsive-links">
                <li><Link className="white" to="/" onClick={openMenu}>Startsida</Link></li>
                <li><Link className="white" to="/images" onClick={openMenu}>Galleri</Link></li>
                <li><Link className="white" to="/contact" onClick={openMenu}>Kontakt</Link></li>
                <li><Link className="white" to="/dogs/1" onClick={openMenu}>Aiko</Link></li>
                <li><Link className="white" to="/dogs/2" onClick={openMenu}>Storm</Link></li>
                </ul>
            </div>
            </div>
    </nav>)     
    
}


  
export default ResponsiveMenu;
  