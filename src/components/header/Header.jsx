import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <nav>
        <StyledUl>
          <StyledLink to="materials">Material</StyledLink>
          <StyledLink to="students">Students</StyledLink>
          <StyledLink to="rating">Rating</StyledLink>
        </StyledUl>
      </nav>
    </Container>
  );
};

export default Header;

const StyledUl = styled.ul`
  margin: 0;
  display: flex;
  gap: 80px;
`;

const Container = styled.div`
  background-color: #6969c3;
  width: 83vw;
  height: 73px;
  display: flex;
  padding-left: 50px;
  align-items: center;
`;

const StyledLink = styled(NavLink)`
  transition: 0.4s;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 24px;
  &.active {
    color: #292522;
    text-decoration: underline pink 2px;
  }
`;
