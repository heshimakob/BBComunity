import React from 'react'
import { Link } from 'react-router-dom';
import instagram from "../assets/sociaux/instagram.svg"
import facebook from "../assets/sociaux/facebook.svg"
import twitter from "../assets/sociaux/twitter.svg"

export default function Footer() {
  return (
    

    <>
                <section className="py-16">
  <div className="container px-4 mx-auto">
    <div className="flex flex-col lg:flex-row mb-10">
      <a className="inline-block mx-auto mb-10 lg:mb-0 lg:ml-0 lg:mr-auto text-3xl font-semibold leading-none" href="#">
        <img className="h-10" src="metis-assets/logos/metis/metis.svg" alt width="auto" />
      </a>
      <ul className="flex lg:flex-row items-center justify-center space-x-12">
        <li><a className="text-lg font-bold font-heading hover:text-blueGray-600" href="#">Shop</a></li>
        <li><a className="text-lg font-bold font-heading hover:text-blueGray-600" href="#">About</a></li>
        <li><a className="text-lg font-bold font-heading hover:text-blueGray-600" href="#">Blog</a></li>
        <li><a className="text-lg font-bold font-heading hover:text-blueGray-600" href="#">Pricing</a></li>
      </ul>
    </div>
    <div className="flex flex-col lg:flex-row items-center lg:justify-between">
      <p className="text-xs text-blueGray-400">© 2020. All rights reserved.</p>
      <div className="order-first lg:order-last -mx-2 mb-4 lg:mb-0">
        <a className="inline-block px-2" href="#">
          <img src="metis-assets/icons/facebook-blue.svg" alt />
        </a>
        <a className="inline-block px-2" href="#">
          <img src="metis-assets/icons/twitter-blue.svg" alt />
        </a>
        <a className="inline-block px-2" href="#">
          <img src="metis-assets/icons/instagram-blue.svg" alt />
        </a>
      </div>
    </div>
  </div>
</section>


            </>

  )
}