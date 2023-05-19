import React from "react";
import styled from "styled-components";

function Waiting() {
  return (
    <Container>
      <h2>Waiting</h2>
    </Container>
  );
}

export default Waiting;

const Container = styled.div`
  background-color: #9cf65335;
  height: 40vh;
  padding: 30px;
`;
