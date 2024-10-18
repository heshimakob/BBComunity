import React from 'react';

const Questions = () => {
  return (
    <>
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-12">
            <div className="lg:w-1/3 lg:pr-16 mb-2 lg:mb-8">
              <h2 className="text-3xl md:text-4xl font-bold font-heading">Questions Fréquemment Posées</h2>
            </div>
            <div className="text-sm lg:text-base lg:w-1/3">
              <p className="leading-loose text-blueGray-500">
                <span>Vous ne trouvez pas la réponse que vous cherchez ? Contactez notre </span>
                <a className="text-blue-600 hover:text-blue-700" href="#">équipe de support client</a>.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <h4 className="mb-2 md:mb-4 text-xl font-semibold">Quels cours proposez-vous ?</h4>
              <p className="text-sm md:text-base leading-loose text-blueGray-500">
                Nous proposons une large gamme de cours dans divers domaines tels que le développement logiciel, l'apprentissage automatique, l'entrepreneuriat, l'art numérique, la réalité augmentée, la réalité virtuelle et le design.
              </p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <h4 className="mb-2 md:mb-4 text-xl font-semibold">Comment m'inscrire à un bootcamp ?</h4>
              <p className="text-sm md:text-base leading-loose text-blueGray-500">
                S'inscrire à nos bootcamps est simple ! Il vous suffit de parcourir nos bootcamps disponibles, de sélectionner celui qui répond à vos besoins et de compléter le processus d'inscription en ligne.
              </p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <h4 className="mb-2 md:mb-4 text-xl font-semibold">Quelle est la durée de vos bootcamps ?</h4>
              <p className="text-sm md:text-base leading-loose text-blueGray-500">
                Nos bootcamps varient en durée, allant de quelques semaines à plusieurs mois, selon le cours et sa complexité.
              </p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <h4 className="mb-2 md:mb-4 text-xl font-semibold">Offrez-vous des aides financières ou des bourses ?</h4>
              <p className="text-sm md:text-base leading-loose text-blueGray-500">
                Oui, nous proposons diverses options d'aide financière et des bourses pour rendre nos programmes accessibles à tous. Veuillez consulter notre page d'aide financière pour plus de détails.
              </p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <h4 className="mb-2 md:mb-4 text-xl font-semibold">Puis-je accéder aux supports de cours après la fin du bootcamp ?</h4>
              <p className="text-sm md:text-base leading-loose text-blueGray-500">
                Oui, une fois que vous avez terminé un bootcamp, vous aurez un accès à vie aux supports de cours et à toutes les mises à jour effectuées.
              </p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <h4 className="mb-2 md:mb-4 text-xl font-semibold">Quel type de support recevrai-je pendant le cours ?</h4>
              <p className="text-sm md:text-base leading-loose text-blueGray-500">
                Pendant votre cours, vous aurez accès à une équipe de support dédiée, à des mentors et à une communauté d'apprenants pour vous aider à réussir.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Questions;
