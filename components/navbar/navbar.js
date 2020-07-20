import React, { Fragment } from "react";
import styled from "styled-components";

export default () => {
  return (
    <NavBar>
      <BrandLogo href='#'>logo image</BrandLogo>
      <NavItem href='#'>classified</NavItem>
      <NavItem href='#'>login</NavItem >
    </NavBar>
  );
};

const NavBar = styled.nav`
  list-style: none;
  display: flex;
  /* justify-content: space-around; */
`;
const BrandLogo = styled.a`
text-decoration:none;
color:black;
`
const NavItem  = styled.a`
text-decoration:none;
color:black;
`