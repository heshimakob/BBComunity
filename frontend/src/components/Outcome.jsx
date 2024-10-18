import React from 'react'
import quote from "../assets/icons/quote.svg"
import intersect from "../assets/background/intersect.svg"

const Outcome = () => {
  return (
    <>
      <section className="py-20 xl:bg-contain bg-top bg-no-repeat" style={{backgroundImage: `url(${intersect})`}}>
        <div className="max-w-7xl px-4 mx-auto">
          <div className="max-w-lg mx-auto mb-12 text-center">
            <img className="mx-auto" src={quote} alt="quote" />
            <h2 className="my-2 text-3xl md:text-4xl font-bold font-heading">Témoignages de nos étudiants et nos partenaires</h2>
            <p className="text-blueGray-400 leading-loose">Découvrez ce que disent nos étudiants de leurs expériences avec nos cours et bootcamps.</p>
          </div>
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out -m-10">
              <div className="flex-shrink-0 w-full md:w-1/3 p-10">
                <div className="p-8 mb-6 bg-white shadow rounded md:opacity-25 hover:opacity-100 transition duration-200">
                  <img src={quote} alt="quote" />
                  <p className="my-4 leading-loose text-blueGray-400">"Ce bootcamp a transformé ma carrière ! Les cours sont complets et les instructeurs sont très compétents. Je recommande vivement à tous ceux qui veulent se lancer dans le développement web."</p>
                  <div className="flex items-center">
                    <img className="h-16 w-16 rounded-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="profile" />
                    <div className="pl-4">
                      <p className="text-xl">Marie Dubois</p>
                      <p className="text-blue-600">Développeuse Web</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0 w-full md:w-1/3 p-10">
                <div className="p-8 mb-6 bg-white shadow rounded hover:opacity-100 transition duration-200">
                  <img src={quote} alt="quote" />
                  <p className="my-4 leading-loose text-blueGray-400">"Les cours en ligne sont bien structurés et faciles à suivre. J'ai pu apprendre à mon rythme et acquérir des compétences précieuses en science des données."</p>
                  <div className="flex items-center">
                    <img className="h-16 w-16 rounded-full object-cover" src="https://images.unsplash.com/photo-1502764613149-7f1d229e2300?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="profile" />
                    <div className="pl-4">
                      <p className="text-xl">Jean Martin</p>
                      <p className="text-blue-600">Analyste de Données</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0 w-full md:w-1/3 p-10">
                <div className="p-8 mb-6 bg-white shadow rounded opacity-25 hover:opacity-100 transition duration-200">
                  <img src={quote} alt="quote" />
                  <p className="my-4 leading-loose text-blueGray-400">"Grâce à ce programme, j'ai pu changer de carrière et décrocher un poste dans une grande entreprise de technologie. Les mentors sont incroyablement soutenants."</p>
                  <div className="flex items-center">
                    <img className="h-16 w-16 rounded-full object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="profile" />
                    <div className="pl-4">
                      <p className="text-xl">Sophie Leblanc</p>
                      <p className="text-blue-600">Ingénieure Logiciel</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center space-x-2">
            <button className="h-2 w-2 bg-blue-500 rounded-full" />
            <button className="h-2 w-2 bg-blueGray-300 rounded-full" />
            <button className="h-2 w-2 bg-blueGray-300 rounded-full" />
            <button className="md:hidden h-2 w-2 bg-blueGray-300 rounded-full" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Outcome;
