import { Link, useLocation } from "react-router-dom"
import "./navbar.scss";
import { useEffect, useState } from "react";
import { expandMore } from '@material-ui/icons';
import axios from "axios";


function checkActive(path, location, subMenu = false) {
    if(path === location) return true;
    if(location.startsWith(subMenu)) return true;
    return false;
}

function NavBar(props) {
    const [dogs, setDogs] = useState([])
    const [dropDown, setDropdown] = useState(false);
    useEffect(() => {
        axios.get("http://localhost:1337/website/menu")
        .then(respons => {
            setDogs(respons.data.menu)
            console.log("getting menu")
        })
        .catch(error =>  {
            console.log(error)
        })
    }, [])
    return (
        <nav className="navbar">
            <ul className="inner-navbar"> 
                <NavItem to="/" name="Startsida" />
                <NavItem to="/contact" name="Kontakt"/>
                <NavItem to="/images" name="Galleri"/>
                <NavItem name="Hundar" to="#" subMenu="/dogs" open={dropDown} setOpen={setDropdown}>
                    {dropDown && <DropdownMenu dogs={dogs} setOpen={setDropdown} open={dropDown}/> }
                </NavItem>
            </ul>

        </nav>
    );
}

function NavItem(props) {
    let navClass = "nav-item";


    if(checkActive(props.to, useLocation().pathname, props.subMenu)) {
        console.log(props.to)
        navClass = navClass + " active";
    }
    if(props.setOpen) {
        return(
            <li className={navClass} >
                <Link  to={props.to} onClick={() => props.setOpen(!props.open)} >{props.name}</Link >
                {props.open && props.children}
            </li>
            ); 
    }
    return(
    <li className={navClass} >
        <Link  to={props.to} >{props.name}</Link >
        {props.open && props.children}
    </li>
    );
}

function DropdownMenu(props) {
    const dogs = props.dogs
    useEffect(() => {
        function eventListner() {
            props.setOpen(!props.open)
        }

        document.addEventListener("click", eventListner);

        return(() => {
            console.log("removing listner")
            document.removeEventListener("click", eventListner);
        })
    })
    return (
        <div className="dropdown">
            {dogs.map((value) => {
                const link = `/dogs/${value.id}`
                return <DropdownItem to={link} name={value.dogName} key={value.id}/>
            })}
            
        </div>
    )

    function DropdownItem(props) {

        return (
            <Link className="menu-item" to={props.to} >{props.name}</Link >
        )
        
    }
}
  
export default NavBar;
  