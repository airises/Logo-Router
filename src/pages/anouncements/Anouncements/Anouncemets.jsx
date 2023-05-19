import React from "react";
import styled from "styled-components";
import Button from "../../../components/UI/Button";
import { useNavigate } from "react-router-dom";

function Anouncements() {
  const navigate = useNavigate();

  const goToStudentsPageHandler = () => {
    navigate("/courses/students");
  };
  return (
    <Container>
      <div>
        <h1>Anouncements Page</h1>
        <Divv>
          <h2>You don't have any Anouncements </h2>
        </Divv>
        <ButtonDIv onClick={goToStudentsPageHandler}>
          go to the students page
        </ButtonDIv>
      </div>
    </Container>
  );
}

export default Anouncements;

const Container = styled.div`
  margin: 30px;
  display: flex;
  background-color: #fff;
  width: 79vw;
  height: 93vh;
  padding: 40px;
`;

const ButtonDIv = styled(Button)`
  text-transform: capitalize;
  margin-top: 50px;
  padding: 0.8rem 1.7rem;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 1.4px;
  font-weight: 700;
  color: #000;
  background-color: #78bad6;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px #07556c85;
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #0b5786;
    box-shadow: 0px 15px 20px #0d476b79;
    color: #fff;
    transform: translateY(-7px);
  }

  &:active {
    transform: translateY(-1px);
  }
`;

const Divv = styled.div`
  margin-top: 30px;
  background-color: #badefd;
  color: red;
  padding: 30px;
  border-radius: 12px;
`;
