import React from "react";
import styled from "styled-components";

function Rating() {
  return (
    <Container>
      <h1>Rating Pages</h1>
      <div>
        <ol>
          <li>Eren Yeager</li>
          <li>Levi Ackerman</li>
          <li>Jean Kirstein</li>
          <li>Erwin Smith</li>
          <li>Mikasa Ackerman</li>
          <li>Gabi Braun</li>
          <li>Sasha Braus</li>
          <li>Armin Arlert</li>
          <li>Hange Zoe</li>
          <li>Reiner Braun</li>
        </ol>
      </div>
    </Container>
  );
}

export default Rating;

const Container = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 79vw;
  height: 82vh;
  padding: 40px;

  li {
    background-color: #ffff40;
    margin-top: 25px;
    font-size: 17px;
    font-weight: 600;
  }
`;
