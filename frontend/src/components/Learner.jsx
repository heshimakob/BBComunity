import { useState } from 'react';
import home from "../assets/home.jpeg"
import learner from"../assets/learner.jpeg"
import { BsCode, BsFileEarmarkBarGraphFill, BsFillBuildingsFill, BsMarkdown, BsScissors, BsWindowDesktop } from 'react-icons/bs';
import { AiOutlineRight } from 'react-icons/ai';


function Learner() {
  const [isHovered, setIsHovered] = useState(false);


  return (
    <>
    <section className="py-20">
<div className="container px-4 mx-auto">
<div className="flex flex-wrap -mx-8">
<div className="w-full lg:w-1/2 px-8">
<div className="mb-12 lg:mb-0 pb-12 lg:pb-0 border-b lg:border-b-0">
<h2 className="mb-4 text-3xl lg:text-4xl font-bold font-heading">Transformez Votre Avenir avec Notre Plateforme de E-Learning et Bootcamps</h2>
<p className="mb-8 leading-loose text-blueGray-400">Plongez dans une expérience d'apprentissage de qualité, accessible à tous, et conçue pour vous préparer aux défis du monde réel. Rejoignez notre communauté dynamique et commencez votre parcours vers le succès dès aujourd'hui.</p>
<a className="inline-block text-xs py-4 px-8 text-white font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded" href="#">Apprendre plus</a>
</div>
</div>
<div className="w-full lg:w-1/2 px-8">
<ul className="space-y-12">
<li className="flex -mx-4">
<div className="px-4">
  <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-blue-600">1</span>
</div>
<div className="px-4">
  <h3 className="my-4 text-xl font-semibold">Accessibilité pour Tous</h3>
  <p className="text-blueGray-400 leading-loose">Nous croyons que l'éducation de qualité devrait être accessible à tous, quel que soit leur emplacement géographique ou leur situation financière. Nos cours en ligne sont conçus pour être inclusifs et disponibles 24/7, afin de permettre à chacun de se former à son propre rythme.</p>
</div>
</li>
<li className="flex -mx-4">
<div className="px-4">
  <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-blue-600">2</span>
</div>
<div className="px-4">
  <h3 className="my-4 text-xl font-semibold">Apprentissage Pratique et Pertinent

</h3>
  <p className="text-blueGray-400 leading-loose"> : Nous nous engageons à offrir un apprentissage qui ne soit pas seulement théorique, mais aussi pratique et applicable dans le monde réel. Nos bootcamps sont conçus pour fournir des compétences directement transférables à l'industrie, avec des projets concrets et des expériences immersives</p>
</div>
</li>
<li className="flex -mx-4">
<div className="px-4">
  <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-blue-600">3</span>
</div>
<div className="px-4">
  <h3 className="my-4 text-xl font-semibold">Communauté et Collaboration</h3>
  <p className="text-blueGray-400 leading-loose">Apprendre ensemble est plus enrichissant que d'apprendre seul. Nous valorisons la construction d'une communauté solidaire où les étudiants peuvent collaborer, partager leurs connaissances et s'entraider pour réussir ensemble.</p>
</div>
</li>
</ul>
</div>
</div>
</div>
</section>


</>
  );
}

export default Learner;