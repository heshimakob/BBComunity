import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'; // Assurez-vous d'avoir installé 'react-icons'
import logo from "../assets/logo.jpeg"

function NavBar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleloginClick = () => {
    navigate('/signin');
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <div className="bg-black ">
<div className="py-1 text-center bg-pink-500">
<div className="text-sm font-light text-light text-white">
<span>Get the Premium plan at a 15% discount using code</span>
<a href="#" className="inline-flex items-center">
<span className="mr-2 font-bold">WINTERisCOMING</span>
<span>
<svg xmlns="http://www.w3.org/2000/svg" width={12} height={13} viewBox="0 0 12 13" fill="none">
<path d="M6.51348 2.21443C6.4457 2.28417 6.39189 2.36715 6.35518 2.45857C6.31846 2.54999 6.29956 2.64804 6.29956 2.74708C6.29956 2.84612 6.31846 2.94418 6.35518 3.0356C6.39189 3.12702 6.4457 3.20999 6.51348 3.27973L8.89286 5.74793L1.66071 5.74793C1.46891 5.74793 1.28495 5.82697 1.14932 5.96766C1.0137 6.10835 0.9375 6.29917 0.9375 6.49814C0.9375 6.69711 1.0137 6.88793 1.14932 7.02862C1.28495 7.16931 1.46891 7.24835 1.66071 7.24835L8.89286 7.24835L6.51348 9.71654C6.4457 9.78629 6.39189 9.86926 6.35518 9.96068C6.31846 10.0521 6.29956 10.1502 6.29956 10.2492C6.29956 10.3482 6.31846 10.4463 6.35518 10.5377C6.39189 10.6291 6.4457 10.7121 6.51348 10.7818C6.64899 10.9216 6.83228 11 7.02335 11C7.21441 11 7.39771 10.9216 7.53321 10.7818L10.6358 7.55594C10.9074 7.27584 11.0609 6.89543 11.0625 6.49814C11.059 6.10345 10.9057 5.72609 10.6358 5.44784L7.53321 2.22193C7.39867 2.0812 7.2159 2.00142 7.02484 2.00002C6.83378 1.99861 6.64994 2.0757 6.51348 2.21443Z" fill="white" />
</svg>
</span>
</a>
</div>
</div>
<nav className="relative px-12 py-5">
<div className="flex items-center justify-between">
<Link className="relative z-10 pr-4 lg:pr-0" to="/">
<img className="h-12" src={logo} alt />
</Link>
<ul className="hidden xl:absolute xl:top-1/2 xl:left-1/2 xl:transform xl:-translate-y-1/2 xl:-translate-x-1/2 xl:flex lg:justify-center gap-14">
<li>
<Link className="text-lg text-white hover:text-gray-300 font-medium transition duration-200" to="/blog-site">Nos blogs</Link>
</li>
<li>
<Link className="text-lg text-white hover:text-gray-300 font-medium transition duration-200" to="/company">Pour les entreprises</Link>
</li>
<li>
<Link className="text-lg text-white hover:text-gray-300 font-medium transition duration-200" to="/why">Pourquoi nous ?</Link>
</li>
<li>
{/* <a href="#" className="flex items-center text-lg text-white hover:text-gray-300 font-medium transition duration-200">
<span className="mr-2.5">Use cases</span>
<div className="transform">
  <svg xmlns="http://www.w3.org/2000/svg" width={13} height={13} viewBox="0 0 13 13" fill="none">
    <g>
      <path d="M11.8098 3.51666C11.7362 3.43826 11.6487 3.37604 11.5523 3.33357C11.4559 3.2911 11.3525 3.26924 11.2481 3.26924C11.1436 3.26924 11.0402 3.2911 10.9438 3.33357C10.8474 3.37604 10.7599 3.43826 10.6864 3.51666L7.06305 7.34761C6.9895 7.42601 6.902 7.48824 6.8056 7.5307C6.70919 7.57317 6.60579 7.59503 6.50135 7.59503C6.39691 7.59503 6.29351 7.57317 6.19711 7.5307C6.1007 7.48824 6.0132 7.42601 5.93966 7.34761L2.31633 3.51666C2.24279 3.43826 2.15529 3.37604 2.05888 3.33357C1.96248 3.2911 1.85907 3.26924 1.75464 3.26924C1.6502 3.26924 1.5468 3.2911 1.45039 3.33357C1.35399 3.37604 1.26649 3.43826 1.19294 3.51666C1.0456 3.67338 0.962891 3.88538 0.962891 4.10636C0.962891 4.32734 1.0456 4.53934 1.19294 4.69606L4.82418 8.53537C5.26918 9.00529 5.87241 9.26924 6.50135 9.26924C7.13029 9.26924 7.73352 9.00529 8.17852 8.53537L11.8098 4.69606C11.9571 4.53934 12.0398 4.32734 12.0398 4.10636C12.0398 3.88538 11.9571 3.67338 11.8098 3.51666Z" fill="currentColor" />
    </g>
    <defs>
      <clipPath>
        <rect width={12} height={12} fill="white" transform="translate(0.5 0.5)" />
      </clipPath>
    </defs>
  </svg>
</div>
</a> */}
</li>
<li>
<a href="#" className="text-lg text-white hover:text-gray-300 font-medium transition duration-200">Nos formations &amp; prix</a>
</li>
</ul>
<div className="hidden xl:flex items-center gap-2">
<a className="hidden 2xl:block mr-8" href="#">
<svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
<g clipPath="url(#clip0_231_6677)">
  <path d="M19.6343 17.871L15.7634 13.9984C18.6598 10.1278 17.87 4.64195 13.9994 1.74551C10.1288 -1.15092 4.64292 -0.361157 1.74649 3.50949C-1.14994 7.38013 -0.36018 12.866 3.51046 15.7624C6.61969 18.0891 10.8901 18.0891 13.9994 15.7624L17.872 19.635C18.3587 20.1216 19.1477 20.1216 19.6343 19.635C20.121 19.1483 20.121 18.3593 19.6343 17.8727L19.6343 17.871ZM8.7872 15.015C5.34716 15.015 2.55848 12.2263 2.55848 8.78623C2.55848 5.34618 5.34716 2.55751 8.7872 2.55751C12.2273 2.55751 15.0159 5.34618 15.0159 8.78623C15.0123 12.2247 12.2257 15.0113 8.7872 15.015Z" fill="#19191B" />
</g>
<defs>
  <clipPath id="clip0_231_6677">
    <rect width={20} height={20} fill="white" />
  </clipPath>
</defs>
</svg>
</a>
<Link className="inline-flex justify-center items-center text-center h-12 p-5 px-6 font-semibold text-white hover:text-black focus:text-black bg-transparent hover:bg-white focus:bg-white border border-gray-300 rounded-full focus:ring-4 focus:ring-white focus:ring-opacity-50 transition duration-200" to="/signin">Login</Link>
<Link className="inline-flex justify-center items-center text-center h-12 p-5 px-6 font-semibold text-white hover:text-white focus:text-white bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 rounded-full focus:ring-4 focus:ring-blue-200 transition duration-200" to="/register">s'inscrire</Link>
</div>
<a className="flex items-center justify-center h-12 p-5 text-white border border-gray-300 xl:hidden rounded-full" href="#">
<svg width={20} height={16} viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.75 6.75003H1.25C0.559648 6.75003 0 7.30968 0 8.00003C0 8.69038 0.559648 9.25003 1.25 9.25003H18.75C19.4404 9.25003 20 8.69038 20 8.00003C20 7.30968 19.4404 6.75003 18.75 6.75003Z" fill="currentColor" />
<path d="M1.25 3.41669H18.75C19.4404 3.41669 20 2.85704 20 2.16669C20 1.47634 19.4404 0.916687 18.75 0.916687H1.25C0.559648 0.916687 0 1.47634 0 2.16669C0 2.85704 0.559648 3.41669 1.25 3.41669Z" fill="currentColor" />
<path d="M18.75 12.5834H1.25C0.559648 12.5834 0 13.143 0 13.8334C0 14.5237 0.559648 15.0834 1.25 15.0834H18.75C19.4404 15.0834 20 14.5237 20 13.8334C20 13.143 19.4404 12.5834 18.75 12.5834Z" fill="currentColor" />
</svg>
</a>
</div>
</nav>
<div className="hidden absolute w-full z-40 px-8 lg:px-20 2xl:px-40">
<div>
<div className="bg-white rounded-3xl">
<div className="flex flex-wrap divide-x divide-gray-100">
<div className="w-7/12 py-20">
<div className="flex px-16 -m-8">
  <div className="w-1-2 p-8">
    <h3 className="mb-10 font-heading text-2xl font-bold">By industry</h3>
    <a href="#" className="mb-6 block max-w-max text-lg hover:text-gray-700 font-medium">Creative &amp; Marketing agencies</a>
    <a href="#" className="mb-6 block max-w-max text-lg hover:text-gray-700 font-medium">Software &amp; Engineering firms</a>
    <a href="#" className="mb-6 block max- w-max text-lg hover:text-gray-700 font-medium">Architecture firms</a>
    <a href="#" className="mb-6 block max-w-max text-lg hover:text-gray-700 font-medium">Consulting businesses</a>
    <a href="#" className="block max-w-max text-lg hover:text-gray-700 font-medium">Educational institutions </a>
  </div>
  <div className="w-1/2 p-8">
    <h3 className="mb-10 font-heading text-2xl font-bold">By role</h3>
    <a href="#" className="mb-2.5 block max-w-max text-lg hover:text-gray-800 font-medium">For business owners</a>
    <p className="text-sm mb-6 text-gray-500 font-medium">Nullam bibendum mollis enim, sed tempus lacus tempus nec. Etiam cursus nec neque at tempor.</p>
    <a href="#" className="mb-2.5 block max-w-max text-lg hover:text-gray-800 font-medium">For project managers</a>
    <p className="text-sm mb-6 text-gray-500 font-medium">Nam ut neque nisi. Vestibulum volutpat feugiat libero, tempus ligula. Nullam ut diam sit amet turpis pretium.</p>
    <a href="#" className="mb-2.5 block max-w-max text-lg hover:text-gray-800 font-medium">For employees</a>
    <p className="text-sm mb-6 text-gray-500 font-medium">Vivamus sapien enim, consequat ac volutpat a, ultrices quis enim. Cras scelerisque vel eros in consequat.</p>
  </div>
</div>
</div>
<div className="flex-1 py-20">
<div className="px-16">
  <h3 className="mb-10 font-heading text-2xl font-bold">Recommended articles</h3>
  <div className="mb-6">
    <div className="flex flex-wrap items-center -m-4">
      <div className="w-auto p-4">
        <div className="overflow-hidden rounded-3xl" style={{width: 130, height: 130}}>
          <img className="w-full h-full object-cover" src="fily-assets/navigations/article.png" alt />
        </div>
      </div>
      <div className="flex-1 p-4">
        <h3 className="mb-6 text-xl font-medium leading-snug">2023 Remote Work: A Comprehensive Guide</h3>
        <a href="#" className="flex flex-wrap items-center text-blue-500 hover:text-blue-600">
          <span className="mr-2 font-semibold transition duration-200">Read more</span>
          <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.51348 1.71443C6.4457 1.78417 6.39189 1.86715 6.35518 1.95857C6.31846 2.04999 6.29956 2.14804 6.29956 2.24708C6.29956 2.34612 6.31846 2.44417 6.35518 2.53559C6.39189 2.62701 6.4457 2.70999 6.51348 2.77973L8.89286 5.24793L1.66071 5.24793C1.46891 5.24793 1.28495 5.32697 1.14932 5.46766C1.0137 5.60835 0.9375 5.79917 0.9375 5.99814C0.9375 6.19711 1.0137 6.38793 1.14932 6.52862C1.28495 6.66931 1.46891 6.74835 1.66071 6.74835L8.89286 6.74835L6.51348 9.21654C6.4457 9.28629 6.39189 9.36926 6.35518 9.46068C6.31846 9.5521 6.29956 9.65016 6.29956 9.74919C6.29956 9.84823 6.31846 9.94629 6.35518 10.0377C6.39189 10.1291 6.4457 10.2121 6.51348 10.2818C6.64899 10.4216 6.83229 10.5 7.02335 10.5C7.21441 10.5 7.39771 10.4216 7.53322 10.2818L10.6358 7.05593C10.9074 6.77584 11.0609 6.39543 11.0625 5.99814C11.059 5.60345 10.9057 5.22609 10.6358 4.94784L7.53322 1.72193C7.39867 1.5812 7.21591 1.50142 7.02484 1.50002C6.83378 1.49861 6.64994 1.5757 6.51348 1.71443Z" fill="currentColor" />
          </svg> 
        </a>
      </div>
    </div>
  </div>
  <div className="mb-6">
    <div className="flex flex-wrap items-center -m-4">
      <div className="w-auto p-4">
        <div className="overflow-hidden rounded-3xl" style={{width: 130, height: 130}}>
          <img className="w-full h-full object-cover" src="fily-assets/navigations/article2.png" alt />
        </div>
      </div>
      <div className="flex-1 p-4">
        <h3 className="mb-6 text-xl font-medium leading-snug">Mastering the Art of Project Management Success</h3>
        <a href="#" className="flex flex-wrap items-center text-blue-500 hover:text-blue-600">
          <span className="mr-2 font-semibold transition duration-200">Read more</span>
          <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.51348 1.71443C6.4457 1.78417 6.39189 1.86715 6.35518 1.95857C6.31846 2.04999 6.29956 2.14804 6.29956 2.24708C6.29956 2.34612 6.31846 2.44417 6.35518 2.53559C6.39189 2.62701 6.4457 2.70999 6.51348 2.77973L8.89286 5.24793L1.66071 5.24793C1.46891 5.24793 1.28495 5.32697 1.14932 5.46766C1.0137 5.60835 0.9375 5.79917 0.9375 5.99814C0.9375 6.19711 1.0137 6.38793 1.14932 6.52862C1.28495 6.66931 1.46891 6.74835 1.66071 6.74835L8.89286 6.74835L6.51348 9.21654C6.4457 9.28629 6.39189 9.36926 6.35518 9.46068C6.31846 9.5521 6.29956 9.65016 6.29956 9.74919C6.29956 9.84823 6.31846 9.94629 6.35518 10.0377C6.39189 10.1291 6.4457 10.2121 6.51348 10.2818C6.64899 10.4216 6.83229 10.5 7.02335 10.5C7.21441 10.5 7.39771 10.4216 7.53322 10.2818L10.6358 7.05593C10.9074 6.77584 11.0609 6.39543 11.0625 5.99814C11.059 5.60345 10.9057 5.22609 10.6358 4.94784L7.53322 1.72193C7.39867 1.5812 7.21591 1.50142 7.02484 1.50002C6.83378 1.49861 6.64994 1.5757 6.51348 1.71443Z" fill="currentColor" />
          </svg> 
        </a>
      </div>
    </div>
  </div>
  <div>
    <div className="flex flex-wrap items-center -m-4">
      <div className="w-auto p-4">
        <div className="overflow-hidden rounded-3xl" style={{width: 130, height: 130}}>
          <img className="w-full h-full object-cover" src="fily-assets/navigations/article3.png" alt />
        </div>
      </div>
      <div className="flex-1 p-4">
        <h3 className="mb-6 text-xl font-medium leading-snug">Optimal Work Management Software for Firms</h3>
        <a href="#" className="flex flex-wrap items-center text-blue-500 hover:text-blue-600">
          <span className="mr-2 font-semibold transition duration-200">Read more</span>
          <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.51348 1.71443C6.4457 1.78417 6.39189 1.86715 6.35518 1.95857C6.31846 2.04999 6.29956 2.14804 6.29956 2.24708C6.29956 2.34612 6.31846 2.44417 6.35518 2.53559C6.39189 2.62701 6.4457 2.70999 6.51348 2.77973L8.89286 5.24793L1.66071 5.24793C1.46891 5.24793 1.28495 5.32697 1.14932 5.46766C1.0137 5.60835 0.9375 5.79917 0.9375 5.99814C0.9375 6.19711 1.0137 6.38793 1.14932 6.52862C1.28495 6.66931 1.46891 6.74835 1.66071 6.74835L8.89286 6.74835L6.51348 9.21654C6.4457 9.28629 6.39189 9.36926 6.35518 9.46068C6.31846 9.5521 6.29956 9.65016 6.29956 9.74919C6.29956 9.84823 6.31846 9.94629 6.35518 10.0377C6.39189 10.1291 6.4457 10.2121 6.51348 10.2818C6.64899 10.4216 6.83229 10.5 7.02335 10.5C7.21441 10.5 7.39771 10.4216 7.53322 10.2818L10.6358 7.05593C10.9074 6.77584 11.0609 6.39543 11.0625 5.99814C11.059 5.60345 10.9057 5.22609 10.6358 4.94784L7.53322 1.72193C7.39867 1.5812 7.21591 1.50142 7.02484 1.50002C6.83378 1.49861 6.64994 1.5757 6.51348 1.71443Z" fill="currentColor" />
          </svg> 
        </a>
      </div>
    </div>
  </div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="hidden fixed top-0 left-0 bottom-0 w-5/6 max-w-xs z-50">
<div className="fixed inset-0 bg-black opacity-20" />
<nav className="relative p-8 w-full h-full bg-white overflow-y-auto">
<div className="flex flex-col justify-between h-full">
<div className="flex items-center justify-between mb-8">
<a className="pr-4" href="#">
<img className="h-8" src="fily-assets/logos/fily-treck-black-logo.svg" alt />
</a>
<a href="#">
<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M6 18L18 6M6 6L18 18" stroke="#252E4A" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
</svg>
</a>
</div>
<ul className="flex flex-col gap-8 py-16">
<li>
<a href="#" className="text-lg text-black hover:text-gray-800 font-medium transition duration-200">Our features</a>
</li>
<li>
<a href="#" className="text-lg text-black hover:text-gray-800 font-medium transition duration-200">How to use?</a>
</li>
<li>
<a href="#" className="inline-flex items-center text-lg text-black hover:text-gray-800 font-medium transition duration-200">
  <span className="mr-2.5">Use cases</span>
  <svg xmlns="http://www.w3.org/2000/svg" width={13} height={13} viewBox="0 0 13 13" fill="none">
    <g>
      <path d="M11.8098 3.51666C11.7362 3.43826 11.6487 3.37604 11.5523 3.33357C11.4559 3.2911 11.3525 3.26924 11.2481 3.26924C11.1436 3.26924 11.0402 3.2911 10.9438 3.33357C10.8474 3.37604 10.7599 3.43826 10.6864 3.51666L7.06305 7.34761C6.9895 7.42601 6.902 7.48824 6.8056 7.5307C6.70919 7.57317 6.60579 7.59503 6.50135 7.59503C6.39691 7.59503 6.29351 7.57317 6.19711 7.5307C6.1007 7.48824 6.0132 7.42601 5.93966 7.34761L2.31633 3.51666C2.24279 3.43826 2.15529 3.37604 2.05888 3.33357C1.96248 3.2911 1.85907 3.26924 1.75464 3.26924C1.6502 3.26924 1.5468 3.2911 1.45039 3.33357C1.35399 3.37604 1.26649 3.43826 1.19294 3.51666C1.0456 3.67338 0.962891 3.88538 0.962891 4.10636C0.962891 4.32734 1.0456 4.53934 1.19294 4.69606L4.82418 8.53537C5.26918 9.00529 5.87241 9.26924 6.50135 9.26924C7.13029 9.26924 7.73352 9.00529 8.17852 8.53537L11.8098 4.69606C11.9571 4.53934 12.0398 4.32734 12.0398 4.10636C12.0398 3.88538 11.9571 3.67338 11.8098 3.51666Z" fill="currentColor" />
    </g>
    <defs>
      <clipPath>
        <rect width={12} height={12} fill="white" transform="translate(0.5 0.5)" />
      </clipPath>
    </defs>
  </svg>
</a>
</li>
<li>
<a href="#" className="text-lg text-black hover:text-gray-800 font-medium transition duration-200">Plans &amp; pricing</a>
</li>
</ul>
<div className="flex flex-col items-center gap-2">
<a className="inline-flex justify-center items-center text-center w-full h-12 p-5 px-6 font-semibold text-black hover:text-black focus:text-black bg-transparent hover:bg-white focus:bg-white border border-gray-100 rounded-full focus:ring-4 focus:ring-white focus:ring-opacity-50 transition duration-200" href="#">Login</a>
<a className="inline-flex justify-center items-center text-center w-full h-12 p-5 px-6 font-semibold text-white hover:text-white focus:text-white bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 rounded-full focus:ring-4 focus:ring-blue-200 transition duration-200" href="#">Get started</a>
</div>
</div>
</nav>
</div>
</div>


</>
  );
}

export default NavBar;