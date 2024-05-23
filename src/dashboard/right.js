import React, { useState } from "react";
import styled from "styled-components";
import { Avatar } from "antd";
import Profile from "./profileimage.jpg";
import { IoMdArrowDropdown } from "react-icons/io";
import Modalboxprofile from "./modalboxprofile";

const Rightside = () => {
  const [profileOpen, setProfileopen] = useState(false);
  const showProfile = () => {
    setProfileopen(!profileOpen);
  };
  const tabledata = [
    {
      name: "Emery Betrovs",
      sent: 1274,
      document: 1123,
      completed: 1123,
      close: "78%",
    },
    {
      name: "Alfredo stanton",
      sent: 1274,
      document: 1123,
      completed: 1123,
      close: "78%",
    },
    {
      name: "John",
      sent: 1274,
      document: 1123,
      completed: 1123,
      close: "78%",
    },
    {
      name: "Phlilip Franci",
      sent: 1274,
      document: 1123,
      completed: 1123,
      close: "78%",
    },
    {
      name: "Hanna Gouse",
      sent: 1274,
      document: 1123,
      completed: 1123,
      close: "78%",
    },
    {
      name: "Emery Betrovs",
      sent: 1274,
      document: 1123,
      completed: 1123,
      close: "78%",
    },
    {
      name: "John",
      sent: 1274,
      document: 1123,
      completed: 1123,
      close: "78%",
    },
    {
      name: "Phlilip Franci",
      sent: 1274,
      document: 1123,
      completed: 1123,
      close: "78%",
    },
    {
      name: "Hanna Gouse",
      sent: 1274,
      document: 1123,
      completed: 1123,
      close: "78%",
    },
    {
      name: "Emery Betrovs",
      sent: 1274,
      document: 1123,
      completed: 1123,
      close: "78%",
    },
  ];
  return (
    <Right>
      <DashboardContainer>
        <Headercontainer>
          <HeaderDashboard>Dashboard</HeaderDashboard>
          <HeaderProfile onClick={showProfile}>
            <Avatar size={30} src={Profile} />
            <UserName>Gayatri Lavanya Ponnada</UserName>
          </HeaderProfile>
        </Headercontainer>
        <Userscontainer>
          <UserstextContainer>
            <Users>All users</Users>
            <IoMdArrowDropdown />
          </UserstextContainer>
          <UserstextContainer>
            <Users>New user</Users>
            <IoMdArrowDropdown />
          </UserstextContainer>
        </Userscontainer>
        <CardContainer>
          <Card style={{ borderLeft: "5px solid #2a629a" }}>
            <Cardtextleft>SENT</Cardtextleft>
            <CardtextmiddleContainer>
              <CardnumMiddle>4029</CardnumMiddle>
              <CardtextMiddle>Documents</CardtextMiddle>
            </CardtextmiddleContainer>
          </Card>
          <Card style={{ borderLeft: "5px solid #ff7f3e" }}>
            <Cardtextleft>DOCUMENT OPEN</Cardtextleft>
            <CardtextmiddleContainer>
              <CardnumMiddle>2074</CardnumMiddle>
              <CardtextMiddle>Documents</CardtextMiddle>
            </CardtextmiddleContainer>
          </Card>
          <Card style={{ borderLeft: "5px solid #65B741" }}>
            <Cardtextleft>COMPLETED</Cardtextleft>
            <CardtextmiddleContainer>
              <CardnumMiddle>2458</CardnumMiddle>
              <CardtextMiddle>Documents</CardtextMiddle>
            </CardtextmiddleContainer>
          </Card>
          <Card style={{ borderLeft: "5px solid #850F8D" }}>
            <Cardtextleft>COMPLETION RATE</Cardtextleft>
            <CardtextmiddleContainer>
              <CardnumMiddle>76%</CardnumMiddle>
              <CardtextMiddle>Documents Completed</CardtextMiddle>
            </CardtextmiddleContainer>
          </Card>
        </CardContainer>
        <TableContainer>
          <Tableheading>Leaderboard</Tableheading>
          <Table>
            <Tablerow className="header-row">
              <Tableheader className="start">User</Tableheader>
              <Tableheader>Sent</Tableheader>
              <Tableheader>Document Opened</Tableheader>
              <Tableheader>Completed</Tableheader>
              <Tableheader>Close Rate</Tableheader>
            </Tablerow>
            {tabledata.map((data) => {
              return (
                <Tablerow>
                  <Tabledata className="start">{data.name}</Tabledata>
                  <Tabledata>{data.sent}</Tabledata>
                  <Tabledata>{data.document}</Tabledata>
                  <Tabledata>{data.completed}</Tabledata>
                  <Tabledata>{data.close}</Tabledata>
                </Tablerow>
              );
            })}
          </Table>
        </TableContainer>
      </DashboardContainer>
      {profileOpen && <Modalboxprofile />}
    </Right>
  );
};

export default Rightside;

const Right = styled.div`
  width: calc(100vw-60px);fgh
`;

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Headercontainer = styled.div`
  width: 96vw;
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #fff;
  box-shadow: 5px 5px 5px #dddddd;
  overflow: hidden;
`;
const HeaderDashboard = styled.div`
  letter-spacing: 0;
  font-weight: 600;
  cursor: pointer;
`;
const HeaderProfile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;
const UserName = styled.h6`
  letter-spacing: 0;
  font-weight: 400;
  margin: 0;
`;
const Userscontainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 1rem;
  width: 97%;
`;
const UserstextContainer = styled.div`
  width: 100px;
  height: 30px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 5px 5px 5px #dddddd;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 5px;
`;
const Users = styled.h4`
  letter-spacing: 0;
  font-weight: 400;
  margin: 0;
  cursor: pointer;
`;
const CardContainer = styled.div`
  width: 93vw;
  display: flex;
  justify-content: space-between;
  gap: 0.1rem;
  margin: 0 1rem;
`;
const Card = styled.div`
  width: 25%;
  height: 120px;
  background: #fff;
  border-radius: 0 5px 5px 0;
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  cursor: pointer;
`;
const Cardtextleft = styled.h4`
  letter-spacing: 0;
  font-weight: 400;
  margin: 0;
  padding-left: 7px;
  padding-top: 7px;
  font-size: small;
`;
const CardtextmiddleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const CardnumMiddle = styled.div`
  letter-spacing: 0;
  font-weight: 600;
  font-size: x-large;
`;
const CardtextMiddle = styled.div`
  letter-spacing: 0;
`;
const TableContainer = styled.div`
  width: 93vw;
  height: 60vh;
  margin: 0 1rem;
`;
const Tableheading = styled.h3`
  letter-spacing: 0;
  font-weight: 600;
  padding: 1rem 0.5rem;
  margin: 0;
  background: #fff;
  border-radius: 5px 5px 0 0;
`;
const Table = styled.table`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  border-radius: 0 0 5px 5px;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  .header-row {
    position: sticky;
    top: 0;
    z-index: 2;
  }
`;
const Tablerow = styled.tr`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: #fff;
  padding: 0.3rem 0;
  gap: 0;
  box-shadow: 5px 5px 5px #dddddd;
  z-index: 1;
  .start {
    display: flex;
    justify-content: start;
    margin-left: 0.5rem;
  }
`;
const Tableheader = styled.th`
  width: 20%;
  font-weight: 600;
  cursor: pointer;
`;
const Tabledata = styled.td`
  width: 20%;
  display: flex;
  justify-content: center;
  padding: 0.6rem;
`;
