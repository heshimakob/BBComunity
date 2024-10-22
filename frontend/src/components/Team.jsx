import React from 'react'
import pdg from "../assets/avatar/pdg.jpeg"
import manager from "../assets/avatar/manager.jpeg"
import market from "../assets/avatar/market.jpeg"
import pdga from "../assets/avatar/pdga.jpeg"

const Team = () => {
  return (
    <>
    <section className="py-20">
<div className="container px-4 mx-auto text-center">
<div className="max-w-lg mx-auto mb-16">
<span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl">Notre equipe</span>
<h2 className="text-3xl md:text-4xl mt-2 mb-4 font-bold font-heading">Des Experts Passionnés et Dévoués à Votre Réussite</h2>
<p className="text-blueGray-400 leading-loose">Chez Black Born Community, notre équipe est composée d'experts passionnés et dévoués qui partagent une mission commune : vous aider à atteindre vos objectifs éducatifs et professionnels. Nos instructeurs, mentors et support technique travaillent ensemble pour créer une expérience d'apprentissage enrichissante et engageante</p>
</div>
<div className="flex flex-wrap -mx-5">
<div className="w-1/2 lg:w-1/4 px-5 mb-12">
<img className="h-20 w-20 mx-auto rounded-full object-cover object-top" src={pdg} alt />
<p className="mt-6 mb-2 text-xl">Ezra HESHIMA MAGALABAHA</p>
<p className="text-blue-600">CEO and Software developer</p>
</div>
<div className="w-1/2 lg:w-1/4 px-5 mb-12">
<img className="h-20 w-20 mx-auto rounded-full object-cover object-top" src={manager} alt />
<p className="mt-6 mb-2 text-xl">Nathalie kayembe</p>
<p className="text-blue-600">Project Manager</p>
</div>
<div className="w-1/2 lg:w-1/4 px-5 mb-12">
<img className="h-20 w-20 mx-auto rounded-full object-cover object-top" src={market} alt />
<p className="mt-6 mb-2 text-xl">Valerie DUMBO WABULENGANYI</p>
<p className="text-blue-600">DAF</p>
</div>
<div className="w-1/2 lg:w-1/4 px-5 mb-12">
<img className="h-20 w-20 mx-auto rounded-full object-cover object-top" src={pdga} alt />
<p className="mt-6 mb-2 text-xl">MAKIESE MAMIZA</p>
<p className="text-blue-600">Director, Product Development</p>
</div>
<div className="w-1/2 lg:w-1/4 px-5 mb-12">
<img className="h-20 w-20 mx-auto rounded-full object-cover object-top" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt />
<p className="mt-6 mb-2 text-xl">Julie Brown</p>
<p className="text-blue-600">frontend developer</p>
</div>
<div className="w-1/2 lg:w-1/4 px-5 mb-12">
<img className="h-20 w-20 mx-auto rounded-full object-cover object-top" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt />
<p className="mt-6 mb-2 text-xl">Ian Bailey</p>
<p className="text-blue-600">CTO and Software developer</p>
</div>





</div>
</div>
</section>


</>
  )
}

export default Team