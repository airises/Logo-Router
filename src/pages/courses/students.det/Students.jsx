import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../../../components/UI/Button";

export const students = [
  {
    id: 1,
    name: "students  name 1",
  },
  {
    id: 2,
    name: "students  name 2",
  },
];

function Students() {
  return (
    <Container>
      {students.map((students) => (
        <MaterialCont key={students.id}>
          <h2>{students.name}</h2>
          <Link to={`${students.id}/details`}>
            <DetButton> Details</DetButton>
          </Link>
        </MaterialCont>
      ))}
    </Container>
  );
}

export default Students;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 90px;
  margin-left: 50px;
  margin-top: 76px;
`;

const MaterialCont = styled.div`
  text-transform: capitalize;
  padding: 30px;
  background-color: #fff;
  width: 95%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const DetButton = styled(Button)`
  padding: 0.8rem 1.7rem;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 1.4px;
  font-weight: 700;
  color: #000;
  background-color: #96fca5;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px #36531c88;
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #50b619;
    box-shadow: 0px 15px 20px #80e52e79;
    color: #fff;
    transform: translateY(-7px);
  }

  &:active {
    transform: translateY(-1px);
  }
`;
