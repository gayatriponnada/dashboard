import React, { useState } from "react";
import Dashboardimage from "./dashboardimage.png";
import { IoClose } from "react-icons/io5";
import styled from "styled-components";
import Modalboxlogout from "./modalboxlogout.js";
import { RxDashboard } from "react-icons/rx";
import { LiaFileSolid } from "react-icons/lia";
import { GoDatabase } from "react-icons/go";
import { FaWarehouse } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
const Leftside = () => {
  const [modalOpen, setModalopen] = useState(false);
  const [show, setshow] = useState(false);

  const showModalopen = () => {
    setModalopen(!modalOpen);
  };

  const Shownavbar = () => {
    setshow(!show);
  };
  return (
    <Left show={show}>
      <Navbarcontainer show={show}>
        <Navbarheader>
          <Img src={Dashboardimage} alt="dashboard" onClick={Shownavbar} />
          {show && <IoClose className="icons" onClick={Shownavbar} />}
        </Navbarheader>
        <Navbarmiddle>
          <Items>
            <RxDashboard className="icons" title="Dashboard" />
            <div className="label">{show && "Dashboard"}</div>
          </Items>
          <Items>
            <LiaFileSolid className="icons" title="Files" />
            <div className="label">{show && "Files"}</div>
          </Items>
          <Items>
            <GoDatabase className="icons" title="Database" />
            <div className="label">{show && "Database"}</div>
          </Items>
          <Items>
            <FaWarehouse className="icons" title="Warehouse" />
            <div className="label">{show && "Warehouse"}</div>
          </Items>
        </Navbarmiddle>
        <Navbarfooter>
          <Items>
            <IoSettingsOutline className="icons" title="Settings" />
            <div className="label">{show && "Settings"}</div>
          </Items>
          <Items>
            <CiLogout
              className="icons"
              onClick={showModalopen}
              title="Logout"
            />
            <div className="label">{show && "Logout"}</div>
          </Items>
        </Navbarfooter>
      </Navbarcontainer>
      {modalOpen && <Modalboxlogout setModalopen={setModalopen} />}
    </Left>
  );
};

export default Leftside;

const Left = styled.div`
  width: 10%;
  // min-width: 60px;
  // max-width: 60px;

  min-width: ${(props) => (props.show ? "60px" : "")}
  max-width: ${(props) => (props.show ? "60px" : "")}
`;

const Navbarcontainer = styled.div`
  width: ${(props) => (props.show ? "145px" : "")};
  padding: 0.5rem 0;
  height: 100%;
  background: #00215e;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5rem;
  transform: all 0.7s ease-in-out;
`;
const Navbarheader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  cursor: pointer;
  .icons {
    font-size: 1.5rem;
    color: #fff;
  }
`;
const Navbarmiddle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 2rem;
  margin-left: 1rem;
  cursor: pointer;
  .icons {
    font-size: 1.5rem;
    color: #fff;
  }
`;
const Items = styled.div`
  display: flex;
  gap: 1rem;
  .label {
    color: #fff;
    letter-spacing: 0;
  }
`;
const Img = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  cursor: pointer;
`;
const Navbarfooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: space-evenly;
  gap: 2rem;
  margin-left: 1rem;
  cursor: pointer;
  .icons {
    font-size: 1.5rem;
    color: #fff;
  }
`;
