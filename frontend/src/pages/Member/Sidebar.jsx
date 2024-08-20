import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; 
import B from "../../assets/B.png"
import { BsGraphUp, BsPeople, BsPerson, BsFileText, BsBook, BsGraphDown, BsCalendar, BsGear, BsChatDots, BsCalendarEvent, BsQuestionSquare, BsAlarm, BsChat, BsPersonFillCheck, BsMenuApp, BsDash, BsThreeDots, BsBarChart, BsBarChartLine, BsDistributeHorizontal, BsDot, BsSendDash, BsUpload } from 'react-icons/bs';

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: ${({ isOpen }) => (isOpen ? '250px' : '80px')};
  height: 100%;
  background-color: white; /* White background */
  color: #333; /* Dark text color */
  overflow-y: auto; /* Enable vertical scrolling */
  padding-top: 60px;
  transition: width 0.3s ease; /* Smooth width transition */
  z-index: 100; /* Ensure sidebar stays above content */
`;

const SidebarHeader = styled.div`
  padding: 20px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

const SidebarNav = styled.ul`
  list-style: none;
  padding: 0;
`;

const SidebarNavItem = styled.li`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  font-size: 18px;
  border-bottom: 1px solid #eee; /* Light grey border */
  transition: background-color 0.3s ease;
  background-color: white;
  border-right: 2px solid #eee; /* Right border */
  &:hover {
    background-color: #f5f5f5; /* Light grey background on hover */
  }
  &.active {
    background-color: #f2f2f2;
    border-right: 2px solid #333; /* Dark grey border on active */
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #333;
  margin-left: 10px;
`;

const SidebarIcon = styled.div`
  margin-right: 10px;
`;

const Logo = styled.img`
  width: 50px;
  height: auto;
`;

const ToggleButton = styled.div`
  position: absolute;
  top: 20px;
  right: 0;
  width: 30px;
  height: 30px;
  background-color: #f2f2f2;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ToggleIcon = styled.span`
  color: #333;
  font-size: 20px;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.3s ease;
`;


const Sidebar=()=> {
    const [isOpen,setIsOpen]= useState(true);

    const toggleSidebar=()=>{
        setIsOpen(!isOpen);
    }

  return ( 
    <SidebarContainer isOpen={isOpen}>
        <SidebarHeader>
            <Logo src={B}/>
        </SidebarHeader>

        <SidebarNav>
            <SidebarNavItem className={window.location.pathname === '/member/dashboarder' ? 'active' : ''}>
                <SidebarIcon> <BsGraphUp/></SidebarIcon>
                <StyledLink to="/member/dashboarder"> Dashboard</StyledLink>
            </SidebarNavItem>

            <SidebarNavItem className={window.location.pathname === '/member/courser' ? 'active' : ''}>
                <SidebarIcon> <BsBook/></SidebarIcon>
                <StyledLink to="/member/courser"> Courses</StyledLink>
            </SidebarNavItem>
            <SidebarNavItem className={window.location.pathname === '/member/challenger' ? 'active' : ''}>
                <SidebarIcon> <BsPerson/></SidebarIcon>
                <StyledLink to="/member/challenger"> Challenger</StyledLink>
            </SidebarNavItem> 

            <SidebarNavItem className={window.location.pathname === '/member/annoncer' ? 'active' : ''}>
                <SidebarIcon> <BsAlarm/></SidebarIcon>
                <StyledLink to="/member/annoncer"> Notification</StyledLink>
            </SidebarNavItem>

            <SidebarNavItem className={window.location.pathname === '/member/profiler' ? 'active' : ''}>
                <SidebarIcon> <BsAlarm/></SidebarIcon>
                <StyledLink to="/member/profiler"> Profiler</StyledLink>
            </SidebarNavItem>
           

          
{/* 
            <ToggleButton onClick={toggleSidebar}>
                <ToggleIcon isOpen={isOpen}> <BsDot/></ToggleIcon>
            </ToggleButton> */}
        </SidebarNav>
    </SidebarContainer>
  )
}

export default Sidebar;