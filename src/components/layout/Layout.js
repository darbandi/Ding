import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
`;
const LayoutHeader = styled.div`
  height: 25px;
  width: 100%;
`;
const LayoutBody = styled.div`
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;
const LayoutFooter = styled.div`
  height: 50px;
  width: 100%;
`;

const Layout = (props) => {
  const { children } = props;
  return (
    <Wrapper>
      <LayoutHeader>
        <Header />
      </LayoutHeader>
      <LayoutBody>{children}</LayoutBody>
      <LayoutFooter>
        <Footer />
      </LayoutFooter>
    </Wrapper>
  );
};

export default Layout;
