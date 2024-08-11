import React from 'react';
import { Navbar, Logo, NavigationLinks, NavLink, ButtonsContainer, LoginButton, GuestButton, HomeContainer, SchoolInfo, SchoolImage, Title, LoremTextContainer, AdminRegisterLink } from '../styles/styles'
import { LoremIpsum } from 'lorem-ipsum';
// import B from "../assets/B.png";
// import bg1 from "../assets/bg1.png";
import avatar2 from "../assets/avatar2.png"
import avatar from "../assets/avatar.png"
import home from "../assets/home.png"
 import NavBar from './NavBar';
import { Link, useNavigate } from 'react-router-dom'; 
import Footer from './Footer';

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
        <div className="pt-16 lg:pt-32 pb-24 lg:pb-52 bg-white overflow-hidden">
<div className="container px-4 mx-auto">
<div className="flex flex-wrap -m-8">
<div className="w-full md:w-1/2 p-8">
<div className="md:max-w-lg">
<h1 className="inline-block mb-8 px-3 py-1 text-white font-semibold bg-gray-800 rounded-full">#Black Born Community bootcamp(BBC dev)</h1>
<h1 className="font-heading tracking-tight text-black text-4xl md:text-6xl font-medium max-w-md md:max-w-2xl">With Bbc dev,  Learn, create, build and connect...</h1>


<p className="text-gray-500 text-xl max-w-xl">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

<div className="flex flex-wrap -m-1 mb-14">
  <div className="w-auto p-2"><a className="inline-block px-5 py-4 text-white font-semibold tracking-tight bg-indigo-800 hover:bg-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-400 transition duration-200" href="#">Apply now</a></div>
  <div className="w-auto p-2">
    <a className="inline-flex items-center px-5 py-4 bg-transparent hover:bg-indigo-800 border border-gray-800 hover:border-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-300 transition duration-200" href="#">
      <div className="inline-block">
        <svg className="mr-2.5" width={18} height={19} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 12.5L3 13.25C3 14.4926 4.00736 15.5 5.25 15.5L12.75 15.5C13.9926 15.5 15 14.4926 15 13.25L15 12.5M12 9.5L9 12.5M9 12.5L6 9.5M9 12.5L9 3.5" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <span className="text-black font-semibold tracking-tight">Make a donation</span>
    </a>
  </div>
</div>
<div className="max-w-md">
  <div className="flex flex-wrap -m-1.5">
    <div className="w-auto p-1.5">
      <div className="flex flex-wrap">
        <div className="w-auto">
          <img src={avatar} alt />
        </div>
        <div className="w-auto -ml-5">
          <img src={avatar2} alt />
        </div>
        <div className="w-auto -ml-5">
          <img src={avatar} alt />
        </div>
      </div>
    </div>
    <div className="flex-1 p-1.5">
      <p className="text-black tracking-tight">Rejoindre notre programme d'apprentissage de plus de 8 cours au profit du peuples africains.</p>
    </div>
  </div>
</div>
</div>
</div>
<div className="w-full md:w-1/2 p-8">
<img className="transform hover:-translate-y-2 transition duration-500" src={home} alt />
</div>
</div>
</div>
</div>
        <HomeContainer>
            <SchoolInfo>
            <Title> Black Born Community</Title>
            <AdminRegisterLink>Admin register</AdminRegisterLink>
            </SchoolInfo>
        </HomeContainer>

        <Footer/>
        </>
    )
};

export default Home;