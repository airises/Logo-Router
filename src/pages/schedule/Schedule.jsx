import React from "react";
import styled from "styled-components";
import Button from "../../components/UI/Button";
import { useNavigate } from "react-router-dom";

function Schedule() {
  const info = [
    {
      id: 1,
      title: "Monday",
      sub: "biology",
      subj: "chemistry",
      subje: "comp.since",
      subject: "Geometry",
    },
    {
      id: 2,
      title: "Sunday",
      sub: "math",
      subj: "english",
      subje: "history",
      subject: "Russian",
    },
  ];
  const navigate = useNavigate();

  const goToSchedulePageHandler = () => {
    navigate("/notifications");
  };
  return (
    <Container>
      <div>
        <h1>Schedule Pages</h1>
        <div>
          <DIv2>
            {info.map((el) => (
              <Card>
                <Title>{el.title}</Title>
                <ol>
                  <li>{el.sub}</li>
                  <li>{el.subj}</li>
                  <li>{el.subje}</li>
                  <li>{el.subject}</li>
                </ol>
              </Card>
            ))}
          </DIv2>
        </div>
        <ButtonDiv onClick={goToSchedulePageHandler}>
          go to the notifications page
        </ButtonDiv>
      </div>
    </Container>
  );
}

export default Schedule;

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
  padding: 0.8rem 1.7rem;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 1.4px;
  font-weight: 700;
  color: #000;
  background-color: #f9fc96;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px #36531c88;
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #a78e0f;
    box-shadow: 0px 15px 20px #e1ff0079;
    color: #fff;
    transform: translateY(-7px);
  }

  &:active {
    transform: translateY(-1px);
  }
`;

const Card = styled.div`
  margin-top: 40px;
  max-width: 320px;
  padding-left: 5rem;
  padding-right: 5rem;
  padding-top: 2rem;
  padding-bottom: 3rem;
  background-color: #ffffd4;
  border-radius: 10px;
  box-shadow: 20px 20px 30px rgba(62, 62, 62, 0.212);

  p {
    margin-top: 1rem;
    font-size: 1rem;
    line-height: 1.25rem;
    font-weight: 600;
    color: rgb(75 85 99);
  }
  li {
    margin-top: 10px;
    text-transform: capitalize;
  }
`;

const Title = styled.h3`
  font-weight: 600;
  color: rgb(31 41 55);
  margin-bottom: 1rem;
`;

const DIv2 = styled.div`
  display: flex;
  gap: 30px;
`;
