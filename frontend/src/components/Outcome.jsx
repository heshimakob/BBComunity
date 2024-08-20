import React from 'react'


const  Outcome =()=>{
  return (
    <div className="bg-white min-h-screen flex flex-col justify-center items-center">
    <div className="bg-blue-100 p-8 rounded-lg shadow-md max-w-xl text-center">
      <p className="text-3xl font-bold text-blue-900">Black Born Community (BBC)</p>
      <p className="text-lg mt-4">Nous sommes une entreprise novatrice spécialisée dans la Réalité Virtuelle et Augmentée, l'Intelligence Artificielle et le développement web. Acteur clé de la transformation numérique des Industries Culturelles et Créatives, nous avons des partenariats solides, dont celui avec l'Institut français de Goma, pour promouvoir l'innovation et l'excellence technologique.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-5xl">
      <div className="bg-blue-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-blue-900">Prêts pour le futur</h2>
        <p className="mt-4">Nous façonnons le futur grâce à la technologie.</p>
        <img src="https://www.witorxstudio.com/images/hero.jpg" alt="Hero Image" className="w-full mt-4 rounded-md" />
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
          Nos projets
          <span className="ml-2">→</span>
        </button>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
          Notre expertise
          <span className="ml-2">→</span>
        </button>
      </div>

      <div className="bg-pink-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-pink-900">Consultez notre blog</h2>
        <p className="mt-4">Nous partageons notre voyage, nos passions et nos histoires.</p>
        <button className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded mt-4">
          <span className="ml-2">→</span>
        </button>

        <div className="bg-pink-100 p-6 rounded-lg shadow-md mt-8">
          <h2 className="text-2xl font-bold text-pink-900">Events</h2>
          <p className="mt-4">Nous organisons et participons à des événements passionnant</p>
          <button className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded mt-4">
            Découvrez nos événements
            <span className="ml-2">→</span>
          </button>
        </div>
      </div>

      <div className="bg-yellow-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-yellow-900">À propos de nous</h2>
        <p className="mt-4">Dans notre espace de co-création, les membres de notre équipe ont des talents divers</p>
        <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mt-4">
          <span className="ml-2">→</span>
        </button>
      </div>
    </div>
  </div>
  )
}
export default Outcome;