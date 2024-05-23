import React from "react";
import styled from "styled-components";
import { Avatar } from "antd";
import Profile from "./profileimage.jpg";

const Modalboxprofile = () => {
  const details = [
    {
      label: "EmpId",
      value: "001",
    },
    {
      label: "Email",
      value: "gayatri@gmail.com",
    },
    {
      label: "Contact",
      value: "1234567890",
    },
  ];
  return (
    <Boxcontainer>
      <Profilecontainer>
        <Avatar size={55} src={Profile} />
        <Username>Gayatri Lavanya Ponnada</Username>
      </Profilecontainer>
      <DetailsContainer>
        {details.map((data) => {
          return (
            <Details>
              <Label>{data.label}</Label>
              <div>:</div>
              <Label>{data.value}</Label>
            </Details>
          );
        })}
      </DetailsContainer>
    </Boxcontainer>
  );
};

export default Modalboxprofile;

const Boxcontainer = styled.div`
  width: 30vw;
  height: 40vh;
  display: flex;
  flex-direction: column;

  border-radius: 10px;
  background: #fff;
  box-shadow: 5px 5px 5px #dddddd;
  position: absolute;
  top: 10vh;
  right: 2rem;
  z-index: 5;
`;
const Profilecontainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0;
`;
const Username = styled.h4`
  letter-spacing: 0;
  font-weight: 400;
`;
const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;
const Details = styled.div`
  width: 50%;

  display: flex;
  justify-content: space-evenly;
`;
const Label = styled.div`
  width: 23%;
  font-weight: 500;
  // text-align: right;
`;
