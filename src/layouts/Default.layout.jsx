import React, { Component } from "react";
import Navbar from '../components/Navbar/Navbar.component'

const DefaultHOCLayout = (Component) => ({ ...props }) => {
  return (
    <div>
      <Navbar/>
      <Component {...props} />
      <h1>Footer</h1>
    </div>
  );
}

export default DefaultHOCLayout;
