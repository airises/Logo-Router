import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function NavBar() {
  return (
    <Container>
      <Logo>logo</Logo>
      <NavList>
        <StyledLink to="courses">courses</StyledLink>
        <StyledLink to="anouncements">anouncements</StyledLink>
        <StyledLink to="notifications">notifications</StyledLink>
        <StyledLink to="schedule">schedule</StyledLink>
      </NavList>
    </Container>
  );
}

export default NavBar;

const Container = styled.div`
  padding-top: 20px;
  width: 17vw;
  height: 100vh;
  background-color: #f5e5be;
`;

const Logo = styled.h1`
  color: #6969c3;
  text-align: center;
  padding-bottom: 80px;
  text-transform: uppercase;
`;

const NavList = styled.ul`
  text-decoration: none;
  padding: 0;
`;
const StyledLink = styled(NavLink)`
  transition: all 0.3s ease;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  padding: 0 0 0 10px;
  background-color: #fff;
  height: 50px;
  text-decoration: none;
  color: #4fbce1;
  font-size: 1.1rem;
  font-weight: 650;

  &.active {
    color: #36332b;
    background-color: #e0beff;
  }
`;
