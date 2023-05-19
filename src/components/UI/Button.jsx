import React from "react";
import styled from "styled-components";

function Button({ onClick, children, ...otherProps }) {
  return (
    <div>
      <ButtonStyle onClick={onClick} {...otherProps}>
        {children}
      </ButtonStyle>
    </div>
  );
}

export default Button;

const ButtonStyle = styled.button`
  padding: 8px 20px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  background-color: #42c197;
`;
