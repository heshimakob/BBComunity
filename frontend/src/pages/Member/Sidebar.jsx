import React, { useState } from 'react'; 
import styled from 'styled-components'; 
import { Link } from 'react-router-dom'; 
import { BsAlarm, BsArrowLeft, BsBook, BsGraphUp, BsPerson } from 'react-icons/bs';
import axios from 'axios';
import swal from "sweetalert";
// ... autres imports

const ModalContainer = styled.div` 
  position: fixed; 
  top: 0; 
  left: 0; 
  right: 0; 
  bottom: 0; 
  background-color: rgba(0, 0, 0, 0.5); 
  display: flex; 
  justify-content: center; 
  align-items: center; 
  z-index: 200; /* S'assurer que la modal est au-dessus du contenu */
`; 

const Modal = styled.div` 
  background-color: white; 
  padding: 20px; 
  border-radius: 5px; 
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); 
`;

const ModalButton = styled.button` 
  margin: 0 10px; 
`;

const SidebarContainer = styled.div` 
  position: fixed; 
  top: 60px; 
  left: 0; 
  width: 150px; 
  height: calc(100% - 60px); 
  background-color: #1A1D23; 
  color: white; 
  overflow-y: auto; 
  padding-top: 20px; 
  transition: width 0.3s ease; 
  z-index: 100; 
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
  border-bottom: 1px solid #3b3f45; 
  transition: background-color 0.3s ease; 
  &:hover {
    background-color: #3b3f45; 
  } 
`; 

const SidebarIcon = styled.div` 
  font-size: 20px; 
  margin-bottom: 5px; 
`; 

const StyledLink = styled(Link)` 
  text-decoration: none; 
  color: white; 
  margin-left: 10px; 
`; 

const Sidebar = () => { 
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const handleLogout = async () => { 
    try { 
      await axios.post('http://localhost:8080/api/users/logout'); 
      localStorage.removeItem('token'); 
      window.location.href = '/signin'; 
      swal("Deconnexion!", "Dedonnexion réussie!", "success");
    } catch (error) { 
      console.error("Erreur lors de la déconnexion:", error); 
    } 
  }; 
  
  const confirmLogout = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = (confirm) => {
    setIsModalOpen(false);
    if (confirm) {
      handleLogout();
    }
  };

  return (
    <>
      {isModalOpen && (
        <ModalContainer>
          <Modal className=' rounded-3xl p-10'>
            <h2 className='text-2xl text-red-500'>Confirmation de Déconnexion</h2>
            <p className='text-xl'>Voulez-vous vraiment vous déconnecter ?</p>
            <ModalButton className='bg-red-500 text-xl text-white font-bold rounded-xl w-full mb-5' onClick={() => handleModalClose(true)}>Oui</ModalButton>
            <ModalButton className='bg-blue-500 text-xl text-white font-bold rounded-xl w-full mt-5'   onClick={() => handleModalClose(false)}>Non</ModalButton>
          </Modal>
        </ModalContainer>
      )}
      <SidebarContainer>                    
        <SidebarNav>
          <SidebarNavItem className={window.location.pathname === '/member/dashboarder' ? 'active' : ''}>
            <SidebarIcon> <BsGraphUp/></SidebarIcon>
            <StyledLink to="/user-dashboard"> Dashboard</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem className={window.location.pathname === '/member/courser' ? 'active' : ''}>
            <SidebarIcon> <BsBook/></SidebarIcon>
            <StyledLink to="/member-cours"> Apprendre</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem className={window.location.pathname === '/member/challenger' ? 'active' : ''}>
            <SidebarIcon> <BsPerson/></SidebarIcon>
            <StyledLink to="/challenge"> Challenger</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem className={window.location.pathname === '/member/annoncer' ? 'active' : ''}>
            <SidebarIcon> <BsAlarm/></SidebarIcon>
            <StyledLink to="/member/annonce"> Notification</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem className={window.location.pathname === '/member/profiler' ? 'active' : ''}>
            <SidebarIcon> <BsPerson/></SidebarIcon>
            <StyledLink to="/member-profile"> Profiler</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem onClick={confirmLogout}>
            <SidebarIcon> <BsArrowLeft/></SidebarIcon>
            <StyledLink> Deconnexion</StyledLink>
          </SidebarNavItem>
        </SidebarNav>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;