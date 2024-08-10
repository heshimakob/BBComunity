import React from 'react';
import { Navbar, Logo, NavigationLinks, NavLink, ButtonsContainer, LoginButton, GuestButton, HomeContainer, SchoolInfo, SchoolImage, Title, LoremTextContainer, AdminRegisterLink } from '../styles/styles'
import { LoremIpsum } from 'lorem-ipsum';
import B from "../assets/B.png";
// import bg1 from "../assets/bg1.png";
 import NavBar from './NavBar';
import { Link, useNavigate } from 'react-router-dom'; 

const lorem = new LoremIpsum();


const Home =()=>{

    const navigate = useNavigate();
    const loremText = lorem.generateParagraphs(1);

    const handleloginClick =()=>{
        navigate('/choose-user')

    };

    return (
        <>
        <NavBar/>
        {/* <Navbar>
        <Logo src={B} alt="Logo" />
            <NavigationLinks>
                <NavLink href='# '> Blog</NavLink>
                <NavLink href='# '> For Compagny</NavLink>
                <NavLink href='# '> Events</NavLink>
            </NavigationLinks>

            <ButtonsContainer>
                <LoginButton onClick={handleloginClick}> Sign In</LoginButton>
                <GuestButton onClick={handleloginClick}>Join our Community</GuestButton>
            </ButtonsContainer>

        </Navbar> */}
        <HomeContainer>
            <SchoolInfo>
            <Title> Black Born Community</Title>
            <AdminRegisterLink>Admin register</AdminRegisterLink>
            </SchoolInfo>
        </HomeContainer>
        </>
    )
};

export default Home;