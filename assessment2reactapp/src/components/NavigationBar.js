import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { Navbar, NavbarBrand, NavItem, Container } from "reactstrap";


// Navbar for the application

export default function NavigationBar() {


return (
<>

<div className="justify-content-end">
 <Navbar className="" color="dark" dark>
{/* Home Button */}
    <NavbarBrand href="/rooms">
      <img alt="home_logo" src="/homelogo.png" style={{height: 50, width: 50}}/>
      </NavbarBrand>

{/* Center text */}
      <NavbarBrand>
      Clinical Space
      </NavbarBrand>

{/* Data Button (links to data screen) */}
      <NavbarBrand href="/data">
      <img alt="data_logo" src="/datalogo.png" style={{height: 75, width: 75}}/>
      </NavbarBrand>   
        </Navbar>
        </div>
  
        </>

    )
};



