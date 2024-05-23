import { React, useState } from "react";
import styled from "styled-components";
import { CiMail } from "react-icons/ci";
import { AiOutlineApple } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { BsTwitterX } from "react-icons/bs";
import { FaRegEyeSlash } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const InitialCredentials = {
    email: "",
    password: "",
  };
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const [credentials, setcredentials] = useState(InitialCredentials);

  const onChangevalue = (title, value) => {
    setcredentials((prevCredentials) => ({
      ...prevCredentials,
      [title]: value,
    }));
  };

  const showPassword = () => {
    if (credentials.password.length > 0) {
      setShow(!show);
    }
  };

  const SigninClick = () => {
    if (credentials.email && credentials.password) {
      message.success("successful login");
      setcredentials(InitialCredentials);
      navigate("/dashboard");
    } else message.error("please enter email or password");
  };

  return (
    <Wrapper>
      <Logincard>
        <Loginheader>Welcome Back</Loginheader>
        <Subheader>
          <Loginsubheader>Don't have an account yet?</Loginsubheader>
          <SubButton>Signup</SubButton>
        </Subheader>
        <Inputcontainer>
          <CiMail />
          <Input
            placeholder="Enter Email Address"
            type="text"
            value={credentials.email}
            onChange={(e) => onChangevalue("email", e.target.value)}
          />
        </Inputcontainer>
        <Inputcontainer>
          {show ? (
            <MdOutlineRemoveRedEye onClick={showPassword} />
          ) : (
            <FaRegEyeSlash onClick={showPassword} />
          )}
          <Input
            placeholder="Enter Password"
            type={show ? " text" : "password"}
            value={credentials.password}
            onChange={(e) => onChangevalue("password", e.target.value)}
          />
        </Inputcontainer>
        <LoginButton onClick={SigninClick}>Login</LoginButton>
        <Or>OR</Or>
        <Buttoncontainer>
          <Alternativelogin>
            <AiOutlineApple />
          </Alternativelogin>
          <Alternativelogin>
            <FcGoogle />
          </Alternativelogin>
          <Alternativelogin>
            <BsTwitterX />
          </Alternativelogin>
        </Buttoncontainer>
      </Logincard>
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: #2d3250;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 2rem;
`;
const Loginheader = styled.div`
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: 1px;
  color: #333;
  margin: 0;
`;
const Logincard = styled.div`
  width: 30%;
  height: 70%;
  background: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
const Loginsubheader = styled.div`
  font-size: 1rem;
  letter-spacing: 0.5px;
  color: #31363f;
  font-weight: 400;
`;
const Subheader = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;
const SubButton = styled.button`
  border: none;
  background: transparent;
  padding: 0;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    color: #31363f;
  }
`;
const Inputcontainer = styled.div`
  display: flex;
  gap: 1rem;
  background: #ccc;
  border-radius: 5px;
  padding: 0.6rem;
  width: 70%;
`;
const Input = styled.input`
  background: transparent;
  border: none;
  &:focus {
    outline: none;
  }
`;
const LoginButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  width: 70%;
  background: #4477ce;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    opacity: 80%;
  }
`;

const Or = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 70%;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    width: 40%;
    height: 1px;
    border-bottom: 2px solid #ccc;
    bottom: 10px;
  }
  &::after {
    content: "";
    position: absolute;
    right: 5px;
    width: 40%;
    border-bottom: 2px solid #ccc;
    bottom: 10px;
  }
`;
const Buttoncontainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 70%;
  gap: 0.5rem;
`;
const Alternativelogin = styled.button`
  padding: 0.5rem 1rem;
  width: 70%;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background: #ccc;
`;
