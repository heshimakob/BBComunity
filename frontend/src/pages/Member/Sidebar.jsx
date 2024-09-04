import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; 
import B from "../../assets/B.png"
import { BsGraphUp, BsPerson, BsFileText, BsBook, BsGraphDown, BsCalendar, BsGear, BsChatDots, BsCalendarEvent, BsQuestionSquare, BsAlarm, BsChat, BsPersonFillCheck, BsMenuApp, BsDash, BsThreeDots, BsBarChart, BsBarChartLine, BsDistributeHorizontal, BsDot, BsSendDash, BsUpload, BsArrowLeft } from 'react-icons/bs';

const SidebarContainer = styled.div`
  position: fixed;
  top: 60px; /* Adjusted to account for navbar height */
  left: 0;
  width: ${({ isOpen }) => (isOpen ? '150px' : '70px')};
  height: calc(100% - 60px); /* Adjusted to account for navbar height */
  background-color: #333; /* Dark blue background */
  color: white;
  overflow-y: auto; /* Enable vertical scrolling */
  padding-top: 20px;
  transition: width 0.3s ease; /* Smooth width transition */
  z-index: 100; /* Ensure sidebar stays above content */
`;


const SidebarNav = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SidebarNavItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 20px;
  font-size: 18px;
  border-bottom: 1px solid #3b3f45; /* Darker border */
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #3b3f45; /* Darker background on hover */
  }
`;

const SidebarIcon = styled.div`
  font-size: 20px;
  margin-bottom: 5px; /* Add some space between icon and label */
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  margin-left: 10px;
`;








const Sidebar=()=> {
    const [isOpen,setIsOpen]= useState(true);

    const toggleSidebar=()=>{
        setIsOpen(!isOpen);
    }

  return ( 
    <SidebarContainer isOpen={isOpen}>
    
    
         <SidebarNav>
             <SidebarNavItem className={window.location.pathname === '/member/dashboarder' ? 'active' : ''}>
                  <SidebarIcon> <BsGraphUp/></SidebarIcon>
                  <StyledLink to="/member/dashboard"> Dashboard</StyledLink>
              </SidebarNavItem>
    
             <SidebarNavItem className={window.location.pathname === '/member/courser' ? 'active' : ''}>
                 <SidebarIcon> <BsBook/></SidebarIcon>
                 <StyledLink to="/member/cours"> Apprendre</StyledLink>
              </SidebarNavItem>
              <SidebarNavItem className={window.location.pathname === '/member/challenger' ? 'active' : ''}>
                 <SidebarIcon> <BsPerson/></SidebarIcon>
                 <StyledLink to="/member/challenge"> Challenger</StyledLink>
             </SidebarNavItem> 
    
             <SidebarNavItem className={window.location.pathname === '/member/annoncer' ? 'active' : ''}>
                  <SidebarIcon> <BsAlarm/></SidebarIcon>
                 <StyledLink to="/member/annonce"> Notification</StyledLink>
             </SidebarNavItem>
    
              <SidebarNavItem className={window.location.pathname === '/member/profiler' ? 'active' : ''}>
                 <SidebarIcon> <BsPerson/></SidebarIcon>
                 <StyledLink to="/member/profile"> Profiler</StyledLink>
               </SidebarNavItem>
    
              <SidebarNavItem >
                 <SidebarIcon> <BsArrowLeft/></SidebarIcon>
                 <StyledLink to=""> Deconnexion</StyledLink>
             </SidebarNavItem>
               
    

        </SidebarNav>
    </SidebarContainer>
  )
}

export default Sidebar; 