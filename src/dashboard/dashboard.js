import React from "react";
import styled from "styled-components";
import { Avatar } from "antd";
import Profile from "./profileimage.jpg";
import Dashboardimage from "./dashboardimage.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { ImFilesEmpty } from "react-icons/im";
import { FiDatabase } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";
const dashboard = () => {
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
  ];
  return (
    <Wrapper>
      <Left>
        <Navbarcontainer>
          <Navbarheader>
            <Img src={Dashboardimage} alt="dashboard" />
            <RxDashboard className="icons" />
            <ImFilesEmpty className="icons" />
            <FiDatabase className="icons" />
          </Navbarheader>
          <Navbarfooter>
            <IoSettingsOutline className="icons" />
            <CiLogout className="icons" />
          </Navbarfooter>
        </Navbarcontainer>
      </Left>
      <Right>
        <Dashboard>
          <Headercontainer>
            <HeaderDashboard>Dashboard</HeaderDashboard>
            <HeaderProfile>
              <Avatar size={30} src={Profile} />
              <MdKeyboardArrowDown />
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
              <Tablerow>
                <Tableheader>User</Tableheader>
                <Tableheader>Sent</Tableheader>
                <Tableheader>Document Opened</Tableheader>
                <Tableheader>Completed</Tableheader>
                <Tableheader>Close Rate</Tableheader>
              </Tablerow>
              {tabledata.map((data) => {
                return (
                  <Tablerow>
                    <Tabledata>{data.name}</Tabledata>
                    <Tabledata>{data.sent}</Tabledata>
                    <Tabledata>{data.document}</Tabledata>
                    <Tabledata>{data.completed}</Tabledata>
                    <Tabledata>{data.close}</Tabledata>
                  </Tablerow>
                );
              })}
            </Table>
          </TableContainer>
        </Dashboard>
      </Right>
    </Wrapper>
  );
};

export default dashboard;
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: #ccc;
  display: flex;
  overflow: hidden;
`;
const Left = styled.div`
  width: 10%;
  min-width: 80px;
  max-width: 80px;
`;
const Right = styled.div`
  width: 90%;
`;

const Dashboard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
const Headercontainer = styled.div`
  width: 95vw;
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #fff;
  box-shadow: 0 0 20px 0 #31304d;
  overflow: hidden;
`;
const HeaderDashboard = styled.div`
  letter-spacing: 0;
  font-weight: 600;
`;
const HeaderProfile = styled.div`
  display: flex;
  gap: 0.5rem;
`;
const Userscontainer = styled.div`
  display: flex;
  justify-content: space-between;
  // margin: 0 2rem 0 2rem;
`;
const UserstextContainer = styled.div`
  width: 100px;
  height: 30px;
  background: #fff;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 3px;
`;
const Users = styled.h4`
  letter-spacing: 0;
  font-weight: 400;
  margin: 0;
`;
const CardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 0.1rem;
  margin: 0 2rem 0 2rem;
`;
const Card = styled.div`
  width: 25%;
  height: 120px;
  background: #fff;
  border-radius: 0 5px 5px 0;
  // border-left: 5px solid #2a629a;
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
`;
const Cardtextleft = styled.h4`
  letter-spacing: 0;
  font-weight: 400;
  margin: 0;
  padding-left: 5px;
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
  width: 100%;
  height: 40vh;
  gap: 2rem;
  margin: 0 2rem;
`;
const Tableheading = styled.h3`
  letter-spacing: 0;
  font-weight: 600;
  padding: 1rem 0.2rem;
  margin: 0;
  background: #fff;
`;
const Table = styled.table`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;
const Tablerow = styled.tr`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: #fff;
`;
const Tableheader = styled.th`
  width: 20%;
`;
const Tabledata = styled.td`
  width: 20%;
  display: flex;
  justify-content: center;
  padding: 0.6rem;
`;
const Navbarcontainer = styled.div`
  padding: 1rem 0;
  height: 100%;
  background: #00215e;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Navbarheader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  .icons {
    font-size: 1.5rem;
    color: #fff;
  }
`;
const Img = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
`;
const Navbarfooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  .icons {
    font-size: 1.5rem;
    color: #fff;
  }
`;
