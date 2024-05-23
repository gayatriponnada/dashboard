import { React } from "react";
import styled from "styled-components";
import Right from "./right.js";
import Left from "./left.js";

const Dashboard = () => {
  return (
    <Wrapper>
      <Left />
      <Right />
    </Wrapper>
  );
};

export default Dashboard;
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: #f1f1f1;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
`;
