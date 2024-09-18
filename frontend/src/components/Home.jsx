import React from 'react';
import { Navbar, Logo, NavigationLinks, NavLink, ButtonsContainer, LoginButton, GuestButton, HomeContainer, SchoolInfo, SchoolImage, Title, LoremTextContainer, AdminRegisterLink } from '../styles/styles'
import { LoremIpsum } from 'lorem-ipsum';
// import B from "../assets/B.png";
// import bg1 from "../assets/bg1.png";
// import home from "../assets/home.jpeg"
import avatar2 from "../assets/avatar2.png"
import avatar from "../assets/avatar.png"
import home from "../assets/home.png"
 import NavBar from './NavBar';
import { Link, useNavigate } from 'react-router-dom'; 
import Footer from './Footer';
import Outcome from './Outcome';
import Details from './Details';
import Marque from './marque/Marque';
import Service from './Service';
import Informations from './Informations';
import img from "../assets/img.jpg"
import Learner from './Learner';
import Category from './Category';
import Centre from './Centre';

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
<div className="pt-16 lg:pt-32 pb-24 lg:pb-52 bg-gray-900 overflow-hidden md:h-auto sm:h-auto" style={{
  backgroundImage: `url(${img})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  background: `linear-gradient(to right, rgba(0, 0, 0, 0.6) 60%, rgba(0, 0, 0, 0) 65%), url(${img})`,
}}>
          
<div className="bbc-container px-4 mx-auto " >
<div className="flex flex-wrap -m-8">
<div className="w-full md:w-1/2 p-8 ">
<div className="w-full ">
<h1 className="inline-block mb-5 px-3 py-1 text-white font-semibold bg-gray-800 rounded-full  mt-16 ">👋BIENVENUE</h1>
<h1 className="font-heading tracking-tight text-gray-100 text-4xl md:text-6xl font-medium max-w-md md:max-w-4xl">Transformer </h1>



<h1 className="mb-4 text-3xl font-extrabold text-black dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 sm:max-w-2xl md:max-w-4xl">l'apprentissage des  </span> <span className='relative font-serif font-bold italic text-gray-400'>métiers du futur</span></h1>
{/* <p className="text-gray-500 text-xl max-w-xl">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p> */}

<div className="flex flex-wrap -m-1 mb-14 mt-14">
  <div className="w-auto p-2"><a className="inline-block px-5 py-4 text-white font-semibold tracking-tight bg-indigo-800 hover:bg-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-400 transition duration-200" href="/register">Inscription</a></div>
  <div className="w-auto p-2">
  
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
      <p className="mt-4 max-w-xl text-lg text-gray-400">Rejoindre notre programme d'apprentissage de plus de 8 cours au profit du peuples africains.</p>
    </div>
  </div>
</div>
</div>
</div>
<div className="w-full md:w-1/2 p-8 ">
{/* <img className="transform hover:-translate-y-2 transition duration-500 rounded-lg" src={home} alt /> */}
</div>



</div>


</div>
</div>
<div className='pb-24 lg:pb-10 bg-white overflow-hidden'>

<Centre/>
  <Learner/>
  <Marque/>



  

  
  <Service/>
  
  <Outcome/>
 
  {/* <Service/> */}
  
</div>
        
        <Details/>

        <Footer/>
        </>
    )
};

export default Home;