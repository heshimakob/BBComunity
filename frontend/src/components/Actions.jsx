import React from 'react'
import three from "../assets/background/three-iphones.png"
import { Link } from 'react-router-dom'
const Actions = () => {
  return (
      <>
                         <section className="py-20">
  <div className="container px-4 mx-auto">
    <div className="pt-20 pb-24 px-8 md:px-16 bg-blue-600 rounded">
      <div className="flex flex-wrap -mx-8">
        <div className="w-full lg:w-1/2 px-8 flex">
          <div className="my-auto">
            <h2 className="text-3xl lg:text-4xl font-semibold text-white">Rejoignez-nous dès aujourd'hui !</h2>
            <p className="mt-2 mb-6 text-blueGray-50 leading-loose">Inscrivez-vous pour découvrir nos formations en ligne et sur mesure qui vous aideront à atteindre vos objectifs. Ne manquez pas cette opportunité de faire avancer votre carrière !</p>
            <Link className="inline-block py-4 px-8 text-xs border bg-white text-blue-600 font-semibold leading-none hover:bg-blue-600 hover:border-white hover:text-white rounded transition duration-300" to="/signin">Se Connecter</Link>
          </div>
        </div>
        <div className="w-full lg:w-1/2 px-8 mt-12 lg:mt-0">
          <div className="relative max-w-sm sm:max-w-md mx-auto">
            <div className="absolute bg-blue-600" style={{top: '22.8%', left: '3%', width: '25.2%', height: '72%'}}>
              <img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80" alt />
            </div>
            <div className="absolute bg-blue-600" style={{top: '3.8%', left: '37%', width: '25.2%', height: '72%'}}>
              <img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=350&q=80" alt />
            </div>
            <div className="absolute bg-blue-600" style={{top: '12.8%', left: '70%', width: '25.2%', height: '72%'}}>
              <img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80" alt />
            </div>
            <img className="relative mx-auto" src={three} alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


            </>
  )
}

export default Actions
