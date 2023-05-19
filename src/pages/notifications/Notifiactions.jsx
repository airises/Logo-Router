import React from "react";
import styled from "styled-components";
import Button from "../../components/UI/Button";
import { useNavigate } from "react-router-dom";

function Notifiactions() {
  const smth = [
    {
      id: 1,
      title: "You have a new notifiactions ",
    },
    {
      id: 2,
      title: "You have a new notifiactions ",
    },
    {
      id: 3,
      title: "You have a new notifiactions ",
    },
  ];
  const navigate = useNavigate();

  const goToAnouncementsPageHandler = () => {
    navigate("/anouncements");
  };
  return (
    <Container>
      <div>
        <h1>Notifiactions Pages </h1>

        <Divs>
          {smth.map((el) => (
            <div key={el.id}>
              <h3>{el.title}</h3>
            </div>
          ))}
        </Divs>
        <ButtonDiv onClick={goToAnouncementsPageHandler}>
          go to the Anouncements page
        </ButtonDiv>
      </div>
    </Container>
  );
}

export default Notifiactions;

const Container = styled.div`
  margin: 30px;
  display: flex;
  background-color: #fff;
  width: 79vw;
  height: 93vh;
  padding: 40px;
`;

const ButtonDiv = styled(Button)`
  margin-top: 50px;
  text-transform: capitalize;
  margin-top: 50px;
  text-transform: capitalize;
  padding: 0.8rem 1.7rem;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 1.4px;
  font-weight: 700;
  color: #000;
  background-color: #dcadfd;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px #531c3687;
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #3d1d78;
    box-shadow: 0px 15px 20px #5b347679;
    color: #fff;
    transform: translateY(-7px);
  }

  &:active {
    transform: translateY(-1px);
  }
`;

const Divs = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  div {
    background-color: #d4bdf8;
    box-shadow: 0px 15px 20px #21084d79;
    padding: 30px;
    border-radius: 8px;
  }
`;
