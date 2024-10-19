import React, { useEffect, useState } from 'react';

const Stat = () => {
  const [followers, setFollowers] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [projects, setProjects] = useState(0);

  // Valeurs cibles
  const targetFollowers = 248;
  const targetCustomers = 12;
  const targetProjects = 8;

  // Fonction pour animer le chiffre
  const animateCounter = (setValue, target) => {
    let start = 0;
    const increment = Math.ceil(target / 100); // Increment pour chaque étape

    const interval = setInterval(() => {
      if (start < target) {
        start += increment;
        if (start > target) start = target; // Limiter à la valeur cible
        setValue(start);
      } else {
        clearInterval(interval); // Arrêter l'intervalle une fois la cible atteinte
      }
    }, 25); // Ajuster la vitesse d'animation ici
  };

  useEffect(() => {
    animateCounter(setFollowers, targetFollowers);
    animateCounter(setCustomers, targetCustomers);
    animateCounter(setProjects, targetProjects);
  }, []);

  return (
    <>
      <section className="pt-8 pb-2 bg-blueGray-50">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap -mx-3">
            <div className="w-full md:w-1/3 px-3 mb-6">
              <div className="p-6 shadow bg-white rounded">
                <div className="flex justify-between">
                  <p className="text-sm md:text-base text-blueGray-400">Membre community</p>
                  <span className="text-xs py-1 px-2 rounded-full font-semibold text-blue-600 bg-blue-100 uppercase">Par mois</span>
                </div>
                <p className="text-3xl lg:text-4xl font-bold font-heading">{followers.toLocaleString()}</p>
                <p className="text-sm md:text-base text-blueGray-500">
                  <span className="text-green-600">+10%</span>
                  Deniere semaine
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6">
              <div className="p-6 shadow bg-white rounded">
                <div className="flex justify-between">
                  <p className="text-sm md:text-base text-blueGray-400">Entreprise partenaire</p>
                  <span className="text-xs py-1 px-2 rounded-full font-semibold text-blue-600 bg-blue-100 uppercase">Ans</span>
                </div>
                <p className="text-3xl lg:text-4xl font-bold font-heading">{customers.toLocaleString()}</p>
                {/* <p className="text-sm md:text-base text-blueGray-500">
                  <span className="text-green-600">2024</span>
                  Annee
                </p> */}
              </div>
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6">
              <div className="p-6 shadow bg-white rounded">
                <div className="flex justify-between">
                  <p className="text-sm md:text-base text-blueGray-400">Solution Tech</p>
                  <span className="text-xs py-1 px-2 rounded-full font-semibold text-blue-600 bg-blue-100 uppercase">Dans la community</span>
                </div>
                <p className="text-3xl lg:text-4xl font-bold font-heading">{projects}</p>
                <p className="text-sm md:text-base text-blueGray-500">
                  <span className="text-red-500">2 </span>
               Dernieres Annees
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Stat;
