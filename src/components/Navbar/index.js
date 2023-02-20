
import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/lovers" activeStyle>
            1. The Lovers
          </NavLink>
          <NavLink to="/fool" activeStyle>
            2. The Fool
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;
