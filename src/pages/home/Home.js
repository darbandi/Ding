import React from "react";
import PropTypes from "prop-types";
import Login from "./../../components/ui-components/Login";
import Logout from "./../../components/ui-components/Logout";
import Header from "./../../components/header/Header";
import { logo } from "./../../assets/img";
import { Logo, Image, Wrapper } from "./../../components/ui-components";
import styled from "styled-components";

const ButtonsSection = styled.div`
  position: absolute;
  bottom: 50px;
  left: 0;
  right: 0;
`;
const HomeLogo = styled(Logo)`
  margin-top: 30%;
`;

const Home = (props) => {
  return (
    <Wrapper>
      <Header></Header>
      <HomeLogo>
        <Image src={logo} alt="logo" />
      </HomeLogo>
      <ButtonsSection>
        <Login></Login>
        <Logout></Logout>
      </ButtonsSection>
    </Wrapper>
  );
};

Home.propTypes = {};

export default Home;
