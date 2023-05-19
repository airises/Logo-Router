import React from "react";
import styled from "styled-components";
import { students } from "./Students";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import Button from "../../../components/UI/Button";

function StudentsDet() {
  const navigate = useNavigate();

  const goToStudentsPageHandler = () => {
    navigate(-1);
  };
  const params = useParams();
  const find = students.filter((el) => el.id === +params.id);
  return (
    <div>
      <Container>
        <DivDiv>
          <Div2>
            <h1>Students Detail Page:</h1>
            <GoBackButton onClick={goToStudentsPageHandler}>
              Go back
            </GoBackButton>
          </Div2>
          <p> {find.map((el) => el.name)}</p>
        </DivDiv>

        <Outlet />
      </Container>
    </div>
  );
}

export default StudentsDet;

const Container = styled.div`
  background-color: #fff;
  width: 95%;
  margin-top: 30px;
  margin-left: 30px;
  height: 82vh;
`;

const DivDiv = styled.div`
  padding: 30px;
  h1 {
    color: #ff3a6f;
    text-decoration: underline 2px solid black;
  }
  p {
    margin-top: 20px;
    text-transform: capitalize;
    font-size: 30px;
    font-weight: 500;
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
  background-color: #ffb066;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px #ecac0b73;
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #b85e0a;
    box-shadow: 0px 15px 20px #e6c019b7;
    color: #fff;
    transform: translateY(-7px);
  }

  &:active {
    transform: translateY(-1px);
  }
`;
