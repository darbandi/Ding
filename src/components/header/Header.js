import React from "react";
import styled from "styled-components";
import { Icon } from "./../../components/ui-components";

export const Wrapper = styled.div`
  background-image: ${(props) => props.theme.login.btn.bgColor};
  width: 100%;
`;
export const Navbar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

export const DateTime = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
`;

export const DateSection = styled.div`
  font-size: 20px;
`;

export const DayName = styled.div`
  font-size: 20px;
`;

export const Date = styled.div`
  font-size: 20px;
`;

export const TimeSection = styled.div`
  font-size: 60px;
`;

const Header = (props) => {
  return (
    <Wrapper>
      <Navbar>
        <Icon className="icon icon-menu" />
        <Icon className="icon icon-time" />
      </Navbar>
      <DateTime>
        <DateSection>
          <DayName>سه‌شنبه</DayName>
          <Date>1399/12/12</Date>
        </DateSection>
        <TimeSection>12:56</TimeSection>
      </DateTime>
    </Wrapper>
  );
};

export default Header;
