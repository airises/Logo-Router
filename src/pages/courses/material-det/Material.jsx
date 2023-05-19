import React from "react";
import styled from "styled-components";
import Button from "../../../components/UI/Button";
import { Link, useSearchParams } from "react-router-dom";
import { Modal } from "../../../components/UI/Modal";

export const materials = [
  {
    id: 1,
    title: "material 1",
  },
  {
    id: 2,
    title: "material 2",
  },
];
function Material() {
  const [searchParams, setSearchParams] = useSearchParams();
  const openModal = () => {
    searchParams.set("modal", "newMaterial");
    setSearchParams(searchParams);
  };

  const closeModal = () => {
    searchParams.delete("modal");
    setSearchParams(searchParams);
  };
  return (
    <Container>
      <ButtonDiv>
        <Buttons onClick={openModal}> Add new material </Buttons>
      </ButtonDiv>
      {materials.map((el) => (
        <MaterialCont div key={el.id}>
          <h2>{el.title}</h2>
          <Link to={`${el.id}/details`}>
            <DetButton> Details</DetButton>
          </Link>
        </MaterialCont>
      ))}
      {searchParams.has("modal") ? (
        <Modal>
          <Add>Material Descriptions</Add>
          <Paragraph>
            Когда я снова открыла глаза, передо мною простиралась свобода. Если
            судьба существует, мне осталось только посмеяться над её капризами.
            И тогда, я поклялась, больше я не буду лгать. Никогда не буду
            обманываться себя. Буду честной с собой. <br />
            Легко сказать — «мы должны были сделать вот так» уже после того, как
            всё закончилось. Однако никто не знает, чем обернётся твой выбор и
            сколькими жертвами, пока его не сделаешь. И ты должен его сделать!
          </Paragraph>
          <ButtonsDiv>
            <CloseButton onClick={closeModal}>close</CloseButton>
          </ButtonsDiv>
        </Modal>
      ) : null}
    </Container>
  );
}

export default Material;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 90px;
  margin-left: 50px;
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

const ButtonDiv = styled.div`
  width: 76vw;
  display: flex;
  justify-content: end;
  margin-bottom: 30px;
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

const Buttons = styled(Button)`
  padding: 12.5px 30px;
  border: 0;
  border-radius: 100px;
  background-color: #cf2121;
  color: #ffffff;
  font-weight: Bold;
  transition: all 0.5s;
  -webkit-transition: all 0.5s;

  &:hover {
    background-color: #e33c1e;
    box-shadow: 0 0 20px #ff8f7b;
    transform: scale(1.1);
  }

  &:active {
    background-color: #c63d25;
    transition: all 0.25s;
    -webkit-transition: all 0.25s;
    box-shadow: none;
    transform: scale(0.98);
  }
`;

const Paragraph = styled.p`
  padding: 20px;
  font-size: 17px;
  font-weight: 600;
`;

const Add = styled.h1`
  text-align: center;
`;
const ButtonsDiv = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 15px;
  margin-right: 20px;
`;
const CloseButton = styled(Button)`
  text-transform: capitalize;
  padding: 8px 30px;
  background-color: transparent;
  color: #000;
  font-weight: bold;
  border-width: 2px;
  border: 2px solid #3080b1;
  border-radius: 20px;
  transition: all 0.3s;
  letter-spacing: 1.7px;

  &:hover {
    transform: translateY(-10px);
    background-color: #3080b1;
    color: #fff;
  }

  &::after {
    transform: translateY(0);
  }
`;
