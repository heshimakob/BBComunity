import React from 'react';

const Saving = () => {
  return (
    <>
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-lg mb-16">
            <h2 className="mb-4 text-3xl lg:text-4xl font-bold font-heading">
              <span>Optimisez vos équipes dès aujourd'hui et </span>
              <span className="text-blue-600"> profitez </span>
              <span> de tarifs avantageux pour la formation</span>
            </h2>
            <p className="text-base lg:text-lg text-blueGray-400">
              Idéal pour les entreprises souhaitant former leurs agents à moindre coût et améliorer leur processus de recrutement.
            </p>
          </div>
          <div className="bg-white border rounded shadow">
            {/* Petite Entreprise */}
            <div className="border-b">
              <div className="flex flex-wrap p-6 -mx-3">
                <div className="w-full lg:w-1/6 text-center lg:text-left text-lg lg:text-base font-semibold lg:font-normal mb-2 lg:mb-0 px-3">
                  Petite (1-5 employés)
                </div>
                <div className="w-full lg:w-4/6 mb-6 lg:mb-0 px-3">
                  <p className="mb-4 lg:mb-6 leading-loose">
                    Profitez d'une réduction de 40 % sur votre second réabonnement pour bénéficier de mises à jour continues de nos cours. Avec un abonnement annuel à partir de 150 $ par trimestre, formez vos équipes efficacement.
                  </p>
                  <ul className="flex flex-col lg:flex-row justify-start space-y-2 lg:space-y-0 lg:space-x-8">
                    <li className="flex">
                      <svg className="h-6 w-6 mr-2 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-blueGray-400">5 comptes full options</span>
                    </li>
                    <li className="flex">
                      <svg className="h-6 w-6 mr-2 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-blueGray-400">Assistance 7/7 jours</span>
                    </li>
                    <li className="flex">
                      <svg className="h-6 w-6 mr-2 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-blueGray-400">Possibilité d'ajouter 5 cours</span>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-1/6 self-center text-xs px-3">
                  <a className="block mb-2 py-4 text-center hover:text-white font-semibold bg-blueGray-200 hover:bg-blue-600 rounded" href="#">
                    Complétez le formulaire en bas 150$
                  </a>
                  <p className="text-center text-blueGray-400">pour 3 mois</p>
                </div>
              </div>
            </div>

            {/* Moyenne Entreprise */}
            <div className="border-b">
              <div className="flex flex-wrap p-6 -mx-3">
                <div className="w-full lg:w-1/6 text-center lg:text-left text-lg lg:text-base font-semibold lg:font-normal mb-2 lg:mb-0 px-3">
                  Moyenne (6-15 employés)
                </div>
                <div className="w-full lg:w-4/6 mb-6 lg:mb-0 px-3">
                  <p className="mb-4 lg:mb-6 leading-loose">
                    Bénéficiez d'une réduction de 30 % sur votre second réabonnement pour garantir des formations continues à vos employés. Avec un abonnement annuel à partir de 300 $ par trimestre, boostez la productivité de votre équipe.
                  </p>
                  <ul className="flex flex-col lg:flex-row justify-start space-y-2 lg:space-y-0 lg:space-x-8">
                    <li className="flex">
                      <svg className="h-6 w-6 mr-2 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-blueGray-400">10 comptes full options</span>
                    </li>
                    <li className="flex">
                      <svg className="h-6 w-6 mr-2 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-blueGray-400">Assistance 24/7 standard</span>
                    </li>
                    <li className="flex">
                      <svg className="h-6 w-6 mr-2 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-blueGray-400">Possibilité d'ajouter 10 cours</span>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-1/6 self-center text-xs px-3">
                  <a className="block mb-2 py-4 text-center hover:text-white font-semibold bg-blueGray-200 hover:bg-blue-600 rounded" href="#">
                    Complétez le formulaire en bas 300$
                  </a>
                  <p className="text-center text-blueGray-400">pour 3 mois</p>
                </div>
              </div>
            </div>

            {/* Grande Entreprise */}
            <div>
              <div className="flex flex-wrap p-6 -mx-3">
                <div className="w-full lg:w-1/6 text-center lg:text-left text-lg lg:text-base font-semibold lg:font-normal mb-2 lg:mb-0 px-3">
                  Grande (16+ employés)
                </div>
                <div className="w-full lg:w-4/6 mb-6 lg:mb-0 px-3">
                  <p className="mb-4 lg:mb-6 leading-loose">
                    Accédez à une réduction de 20 % sur votre second réabonnement pour garantir des formations de pointe à vos employés. Avec un abonnement annuel à partir de 500 $ par trimestre, maximisez les compétences de votre équipe.
                  </p>
                  <ul className="flex flex-col lg:flex-row justify-start space-y-2 lg:space-y-0 lg:space-x-8">
                    <li className="flex">
                      <svg className="h-6 w-6 mr-2 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-blueGray-400">15 comptes full options</span>
                    </li>
                    <li className="flex">
                      <svg className="h-6 w-6 mr-2 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-blueGray-400">Assistance 24/7 premium</span>
                    </li>
                    <li className="flex">
                      <svg className="h-6 w-6 mr-2 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-blueGray-400">Possibilité d'ajouter 15 cours</span>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-1/6 self-center text-xs px-3">
                  <a className="block mb-2 py-4 text-center hover:text-white font-semibold bg-blueGray-200 hover:bg-blue-600 rounded" href="#">
                    Complétez le formulaire en bas 500$
                  </a>
                  <p className="text-center text-blueGray-400">pour 3 mois</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Saving;
