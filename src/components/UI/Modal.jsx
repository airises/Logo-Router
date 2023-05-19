import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

export const Modal = ({ onClose, children }) => {
  return ReactDOM.createPortal(
    <>
      <Backdrop onClick={onClose}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          {children}
        </ModalContent>
      </Backdrop>
    </>,
    document.getElementById("modal")
  );
};

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #27221aac;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background-color: #fff;
  width: 42%;
  height: 50vh;
  padding: 20px;
  border-radius: 8px;
`;
