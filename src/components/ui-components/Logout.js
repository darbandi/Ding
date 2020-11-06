import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Wrapper, Icon } from "./../../components/ui-components";

const BackSection = styled.div`
  width: 80%;
  margin: auto;
  height: 50px;
  background-image: linear-gradient(
    45deg,
    rgb(10 63 65 / 0.2),
    rgb(20 133 138 / 0.2)
  );
  border-radius: 50px;
  position: relative;
  margin-bottom: 50px;
`;
const Button = styled.div`
  width: 100px;
  height: 50px;
  background-image: ${(props) => props.theme.login.btn.bgColor};
  border-radius: 50px;
  justify-content: center;
  display: flex;
  align-items: center;
  box-shadow: 0 0 5px black;
  right: ${(props) => (props.logout ? "calc(100% - 100px)" : "0")};
  position: absolute;
  transition: all 0.3s;
  cursor: pointer;
`;
const Text = styled.span`
  line-height: 1.1;
`;

const AngleLeft = styled(Icon)`
  margin-left: -15px;
`;

const Logout = (props) => {
  const [logout, setLogout] = useState(false);
  return (
    <Wrapper>
      <BackSection>
        <Button onClick={() => setLogout(true)} logout={logout}>
          <Text>خروج</Text>
          <AngleLeft className="icon icon-angle-left"></AngleLeft>
        </Button>
      </BackSection>
    </Wrapper>
  );
};

Logout.propTypes = {};

export default Logout;
