import React from "react";
import Header from "../../components/header/Header";
import { Outlet } from "react-router-dom";

const Courses = () => {
  return (
    <>
      <Header />
      <>
        <Outlet />
      </>
    </>
  );
};

export default Courses;
