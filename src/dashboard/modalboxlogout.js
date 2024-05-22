import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const Modalbox = ({ modalOpen, setModalopen }) => {
  const navigate = useNavigate();
  const Cancelclick = () => {
    setModalopen(false);
  };
  const Logoutclick = () => {
    navigate("/");
    setModalopen(false);
  };
  return (
    <Wrapper open={modalOpen}>
      <Boxcontainer open={modalOpen}>
        <Modalheader>Logout</Modalheader>
        <Message>Are you sure you want to logout?</Message>
        <ButtonContainer>
          <Button className="cancel" onClick={Cancelclick}>
            Cancel
          </Button>
          <Button onClick={Logoutclick}>Ok</Button>
        </ButtonContainer>
      </Boxcontainer>
    </Wrapper>
  );
};

export default Modalbox;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: ${(props) => (props.open ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  inset: 0;
  position: fixed;
  background: RGB(0, 0, 0, 0.7);
  z-index: 5;
`;
const Boxcontainer = styled.div`
  width: 30vw;
  height: 30vh;
  flex-direction: column;
  top: 0;
  left: 0;
  display: ${(props) => (props.open ? "flex" : "none")};
  background: #fff;
  transform: ${(props) =>
    props.open ? "translate(40vw, 40vh)" : "translate(-100vw, -100vh)"};
  border-radius: 10px;
  transition: all 1s ease-in-out;
  position: fixed;
`;
const Modalheader = styled.h2`
  letter-spacing: 0;
  text-align: center;
`;
const Message = styled.p`
  letter-spacing: 0;
  font-weight: 400;
  text-align: center;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding-top: 1rem;
  .cancel {
    background: #ccc;
  }
`;
const Button = styled.button`
  padding: 0.5rem 1rem;
  letter-spacing: 0;
  font-weight: 400;
  background: #5bbcff;
  border-radius: 10px;
  cursor: pointer;
  border: none;
`;
