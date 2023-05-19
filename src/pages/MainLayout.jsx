import React from "react";
import NavBar from "../components/navigateBar/Aside";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

function MainLayout() {
  return (
    <>
      <Container>
        <NavBar />
        <div>
          <Outlet />
        </div>
      </Container>
    </>
  );
}

export default MainLayout;

const Container = styled.div`
  display: flex;
  height: 100vh;
`;
