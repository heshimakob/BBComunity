import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; 
import B from "../../assets/B.png"
import { BsGraphUp, BsPerson, BsFileText, BsBook, BsGraphDown, BsCalendar, BsGear, BsChatDots, BsCalendarEvent, BsQuestionSquare, BsAlarm, BsChat, BsPersonFillCheck, BsMenuApp, BsDash, BsThreeDots, BsBarChart, BsBarChartLine, BsDistributeHorizontal, BsDot, BsSendDash, BsUpload } from 'react-icons/bs';


import { signoutSuccess } from '../../store/userSlice';
import { useDispatch } from 'react-redux';
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
  const dispatch=useDispatch()

  const handleSignout=async()=>{
    try {
      const res= await fetch("http://localhost/api/users/signout",{
        method: 'POST',

      });
      const data= await res.json();
      if (!res.ok){
        console.log(data.message);
      }else{
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message)
      
    }
  }
    const [isOpen,setIsOpen]= useState(true);

    const toggleSidebar=()=>{
        setIsOpen(!isOpen);
    }

  return ( 
    <SidebarContainer isOpen={isOpen}>
        {/* <SidebarHeader>
            <Logo src={B}/>
        </SidebarHeader> */}

<SidebarNav>
<SidebarNavItem>
  <SidebarIcon><BsGraphUp/></SidebarIcon>
  <StyledLink to="/admin-dashboard">Dashboard</StyledLink>
</SidebarNavItem>

        <SidebarNavItem>
            <SidebarIcon> <BsBook/></SidebarIcon>
            <StyledLink to="/admin-cours"> Courses</StyledLink>
        </SidebarNavItem>
     

        <SidebarNavItem>
            <SidebarIcon> <BsAlarm/></SidebarIcon>
            <StyledLink to="/admin/cohorte"> Cohorte</StyledLink>
        </SidebarNavItem>

        <SidebarNavItem>
            <SidebarIcon> <BsAlarm/></SidebarIcon>
            <StyledLink to="/admin-annonce"> Annoncement</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
            <SidebarIcon> <BsChat/></SidebarIcon>
            <StyledLink to="/admin/discussion"> Discussion</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
            <SidebarIcon> <BsSendDash/></SidebarIcon>
            <StyledLink to="/admin-blog"> Blog</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
            <SidebarIcon> <BsCalendarEvent/></SidebarIcon>
            <StyledLink to="/admin/events"> Event</StyledLink>
        </SidebarNavItem>

        <SidebarNavItem>
            <SidebarIcon> <BsCalendarEvent/></SidebarIcon>
            <StyledLink to="/admin/company"> Company</StyledLink>
        </SidebarNavItem>

        <SidebarNavItem>
            <SidebarIcon> <BsUpload/></SidebarIcon>
            <StyledLink to="/admin-users"> Users</StyledLink>
        </SidebarNavItem>


        <SidebarNavItem>
            <SidebarIcon> <BsUpload/></SidebarIcon>
            <StyledLink to="/admin/settings"> Settings Pofile</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
            <SidebarIcon> <BsGraphUp/></SidebarIcon>
            <StyledLink onClick={() => handleSignout()}> Deconnexion</StyledLink>
        </SidebarNavItem>
        </SidebarNav>
    </SidebarContainer>
  )
}

export default Sidebar;