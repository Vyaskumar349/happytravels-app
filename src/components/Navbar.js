import "./NavbarStyle.css";
import { Menuitems } from "./MenuItems";
import { useState } from "react";
import { Link } from "react-router-dom";


const Navbar=()=>{


    const [icon,setIcon]=useState(true);

    const  handleIcon=(e)=>{
        // if(e.target.className==="fas fa-bars"){
        //     setIcon("fas fa-times");
        // }
        // else{
        //     setIcon("fas fa-bars");
        // }
        if(icon){
            setIcon(!icon);
        }
        else{
            setIcon(!icon);
        }
    }

    return(<nav className="NavbarItems">

<h1 className="Navbar-logo">HappyTravels</h1>

<div className="menu-icons">

    <i className={icon?"fas fa-bars":"fas fa-times"} onClick={handleIcon}></i>
   
</div>

<ul className={icon?"Navbar-menu":"Navbar-menu active"}>
    {Menuitems.map((item,index)=>{
        return( <li key={index}>
            <Link className={item.cName} to={item.url}> <i className={item.icon}></i> {item.title}</Link>
        </li>)
    })}
   <Link to="/register"><button>Sign Up</button></Link>
</ul>   
    </nav>) 
}
export default Navbar;
