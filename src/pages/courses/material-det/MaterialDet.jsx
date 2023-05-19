import React from "react";
import { NavLink, Outlet, useNavigate, useParams } from "react-router-dom";
import { materials } from "./Material";
import styled from "styled-components";
import Button from "../../../components/UI/Button";

function MaterialDet() {
  const navigate = useNavigate();

  const goToStudentsPageHandler = () => {
    navigate(-1);
  };
  const params = useParams();
  const find = materials.filter((el) => el.id === +params.id);
  return (
    <Container>
      <DivDiv>
        <Div2>
          <h1>Material Detail Page:</h1>
          <GoBackButton onClick={goToStudentsPageHandler}>Go back</GoBackButton>
        </Div2>
        <p> {find.map((el) => el.title)}</p>
      </DivDiv>

      <ContainerD>
        <StyledUl>
          <StyledLink to="submitted">submitted </StyledLink>
          <StyledLink to="waiting">waiting </StyledLink>
          <StyledLink to="late">late </StyledLink>
        </StyledUl>
      </ContainerD>
      <Outlet />
    </Container>
  );
}

export default MaterialDet;

const Container = styled.div`
  background-color: #fff;
  width: 95%;
  margin-top: 30px;
  margin-left: 30px;
`;

const DivDiv = styled.div`
  padding: 30px;
  h1 {
    color: #2cb7dd;
    text-decoration: underline 2px solid grey;
  }
  p {
    margin-top: 20px;
    text-transform: capitalize;
    font-size: 30px;
    font-weight: 500;
  }
`;

const StyledUl = styled.div`
  margin: 0;
  display: flex;
  gap: 80px;
`;

const ContainerD = styled.ul`
  margin-top: 50px;
  background-color: #449717e6;
  width: 100%;
  height: 73px;
  display: flex;
  padding-left: 50px;
  align-items: center;
`;

const StyledLink = styled(NavLink)`
  transition: all 0.3s ease-in-out;

  text-transform: capitalize;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 22px;
  &.active {
    color: #46320f;
    text-decoration: underline yellow 2px;
  }
`;

const Div2 = styled.div`
  display: flex;
  justify-content: space-between;
`;
const GoBackButton = styled(Button)`
  padding: 0.8rem 1.7rem;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 1.4px;
  font-weight: 700;
  color: #000;
  background-color: #9dda2b;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px #9dda2bb6;
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #73a339;
    box-shadow: 0px 15px 20px #a9ff208f;
    color: #fff;
    transform: translateY(-7px);
  }

  &:active {
    transform: translateY(-1px);
  }
`;
