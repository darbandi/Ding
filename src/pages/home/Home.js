import React from "react";
import PropTypes from "prop-types";
import Login from "./../../components/ui-components/Login";
import Logout from "./../../components/ui-components/Logout";
import Header from "./../../components/header/Header";
import { logo } from "./../../assets/img";
import { Logo, Image, Wrapper } from "./../../components/ui-components";

const Home = (props) => {
  return (
    <Wrapper>
      <Header></Header>
      <Logo>
        <Image src={logo} alt="logo" />
      </Logo>
      <Login></Login>
      <Logout></Logout>
    </Wrapper>
  );
};

Home.propTypes = {};

export default Home;
