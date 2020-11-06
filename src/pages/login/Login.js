import React, { useRef } from "react";
import { logo } from "./../../assets/img";
import styled from "styled-components";
import { Logo, Image, Wrapper } from "./../../components/ui-components";


const Form = styled.form``;
const Row = styled.div`
  width: 80%;
  margin: 0 auto;
`;
const Icon = styled.i`
  color: #e8feff;
  position: relative;
  top: 25px;
`;
const Input = styled.input`
  background-color: transparent !important;
  border: none;
  border-bottom: 2px solid #14858a;
  padding: 0px 30px 10px 0px;
  width: 100%;
  color: white;
  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus {
    border: none;
    border-bottom: 2px solid #14858a;
    -webkit-text-fill-color: white;
    -webkit-box-shadow: 0 0 0px 1000px transparent inset;
    transition: background-color 5000s ease-in-out 0s;
  }
  :focus,
  :active {
    outline: none;
  }
  ::selection {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;
const BtnLogin = styled.button`
  margin-top: 50px;
  width: 100%;
  padding: 8px 15px;
  background-image: ${(props) => props.theme.login.btn.bgColor};
  border: none;
  border-radius: 30px;
  color: ${(props) => props.theme.login.btn.color};
  :hover {
    cursor: pointer;
  }
  :focus,
  :active,
  ::selection {
    outline: none;
  }
`;

const Login = () => {
  const userRef = useRef(null);
  const passRef = useRef(null);
  return (
    <Wrapper>
      <Logo>
        <Image src={logo} alt="logo" />
      </Logo>
      <Form>
        <Row>
          <Icon className="icon icon-user"></Icon>
          <Input
            ref={userRef}
            type="text"
            placeholder="نام دیتاکی"
            onClick={() => userRef.current.select()}
          />
        </Row>
        <Row>
          <Icon className="icon icon-password"></Icon>
          <Input
            ref={passRef}
            onClick={() => passRef.current.select()}
            type="password"
            id="pass"
            name="password"
            minlength="8"
            required
            placeholder="رمز عبور"
          />
        </Row>
        <Row>
          <BtnLogin type="button" className="btn-login">
            ورود
          </BtnLogin>
        </Row>
      </Form>
    </Wrapper>
  );
};

export default Login;
