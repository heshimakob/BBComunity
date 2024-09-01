import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import B from "../../assets/B.png"
import { BsGraphUp, BsPeople, BsPerson, BsFileText, BsBook, BsGraphDown, BsCalendar, BsGear, BsChatDots, BsCalendarEvent, BsQuestionSquare, BsAlarm, BsChat, BsPersonFillCheck, BsMenuApp, BsDash, BsThreeDots, BsBarChart, BsBarChartLine, BsDistributeHorizontal, BsDot, BsSendDash, BsUpload } from 'react-icons/bs';

const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: #2f343a; /* Dark blue background */
  color: white;
  display: flex;
  align-items: center;
  padding: 0 20px;
  z-index: 100; /* Ensure navbar stays above content */
`;

const NavbarLogo = styled.img`
  width: 50px;
  height: auto;
  margin-right: 20px;
`;

const NavbarInput = styled.input`
  width: 200px;
  height: 30px;
  padding: 10px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
`;

const NavbarTab = styled.div`
  margin-right: 100px;
  font-size: 18px;
  cursor: pointer;
`;

const NavbarProfile = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

const NavbarProfileImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 500px;
`;

const NavbarProfileUsername = styled.span`
  font-size: 16px;
`;

const NavBar = () => {
  return (
    <NavbarContainer>
    <NavbarLogo src={B} />
    <NavbarInput type="text" placeholder="Search" />
    <NavbarTab>Chat</NavbarTab>
    <NavbarProfile>
      <NavbarProfileImage src="https://via.placeholder.com/30" />
      <NavbarProfileUsername>Username</NavbarProfileUsername>
    </NavbarProfile>
  </NavbarContainer>
  )
}

export default NavBar
