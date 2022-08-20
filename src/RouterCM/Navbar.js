import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
          <NavLink to='/' style={({isActive})=>({color: isActive ? 'red' : 'blue'})}>
            Home
          </NavLink>
          <NavLink to='/addContact' activeStyle>
            Add Contact
          </NavLink>
          <NavLink to='/updateContact' activeStyle>
            Update Contact
          </NavLink>
          <NavLink to='/deleteContact' activeStyle>
            Delete Contact
          </NavLink>
          {/* <NavLink to='/blogs' activeStyle>
            Blogs
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
            Sign Up
          </NavLink> */}
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        {/* <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn> */}
      </Nav>
    </>
  );
};
  
export default Navbar;