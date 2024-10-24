import React from 'react';

import { Link } from 'react-router-dom';
import work from "../assets/illustration/work-tv.png"
import financial from "../assets/illustration/financial-report.png"
import people from "../assets/illustration/people-watching.png"


const Informations = () => {
  return (
    <>
    <section className="py-20 bg-blueGray-50">
<div className="container px-4 mx-auto">
<div className="flex flex-wrap items-center justify-between max-w-2xl lg:max-w-full mb-12">
<div className="w-full lg:w-1/2 mb-4 lg:mb-0">
<h2 className="text-3xl md:text-4xl font-bold font-heading">
<span>Pourquoi choisir notre plateforme de </span>
<span className="text-blue-600">    e-learning et bootcamps </span>
<span>en trois étapes
</span>
</h2>
</div>
<div className="w-full lg:w-1/2 lg:pl-16">
<p className="text-blueGray-400 leading-loose">Rejoindre Black Born Community, c'est bénéficier de l'accompagnement de spécialistes qui sont à la pointe de l'innovation et de la pédagogie. Ensemble, nous bâtissons un avenir où chacun peut réaliser son plein potentiel.</p>
</div>
</div>
<div className="flex flex-wrap -mx-3 -mb-6 text-center">
<div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
<div className="p-12 bg-white shadow rounded">
<div className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">1</div>
<img className="h-48 mx-auto my-4" src={work} alt />
<h3 className="mb-2 font-bold font-heading"> Approche Personnalisée et Interactive</h3>
<p className="text-sm text-blueGray-400 leading-relaxed">Black Born Community plateforme de e-learning et bootcamps offre une expérience d'apprentissage personnalisée, adaptée aux besoins et aux objectifs de chaque étudiant. Grâce à une combinaison de contenus interactifs, de sessions en direct avec des instructeurs expérimentés et de forums de discussion, nous nous assurons que chaque apprenant bénéficie d'un soutien constant et d'un environnement d'apprentissage dynamique.</p>
</div>
</div>
<div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
<div className="p-12 bg-white shadow rounded">
<div className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">2</div>
<img className="h-48 mx-auto my-4" src={people} alt />
<h3 className="mb-2 font-bold font-heading">Expertise et Qualité des Contenus</h3>
<p className="text-sm text-blueGray-400 leading-relaxed">Nous collaborons avec des experts reconnus dans leurs domaines pour créer des programmes de formation de haute qualité. Nos cours couvrent une large gamme de sujets, des compétences techniques aux soft skills, garantissant ainsi une formation complète et pertinente. Chaque module est conçu pour être pratique et axé sur les compétences, permettant aux apprenants de mettre immédiatement en pratique ce qu'ils ont appris.</p>
</div>
</div>
<div className="w-full lg:w-1/3 px-3 mb-6">
<div className="p-12 bg-white shadow rounded">
<div className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">3</div>
<img className="h-48 mx-auto my-4" src={financial}alt />
<h3 className="mb-2 font-bold font-heading">Communauté et Réseau Professionnel</h3>
<p className="text-sm text-blueGray-400 leading-relaxed">En rejoignant notre plateforme, les apprenants intègrent une communauté active et solidaire de professionnels et de pairs. Nos bootcamps et e-learning favorisent le réseautage et les collaborations, offrant aux participants des opportunités de développement professionnel et de progression de carrière. Nous organisons également des événements exclusifs, des ateliers et des sessions de mentorat pour aider nos membres à se connecter et à grandir ensemble.

Choisir notre plateforme, c'est s'assurer d'un apprentissage de qualité, d'un soutien personnalisé et d'un réseau professionnel solide pour réussir dans votre carrière.</p>
</div>
</div>
</div>
</div>
</section>


</>
  );
};

export default Informations;