import React from 'react';
import { FaBook, FaKeyboard,  FaGlobe, FaPersonBooth } from 'react-icons/fa';
import learner from"../assets/learner.jpeg"

const Card = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center p-4 rounded-md  bg-white">
      {icon}
      <h3 className="text-2xl font-bold mt-4">{title}</h3>
      <p className="text-gray-600 mt-2 text-xl">{description}</p>
    </div>
  );
};

const Service = () => {
  const cards = [
    {
      // icon: <FaBook size={40} />,
      title: 'Engager a distance et postuler',
      description: `Nous mettons en valeur le talent de la jeunesse congolaise et nous développons l'industrie culturelle et créative en République démocratique du Congo et en afrique. Les entreprises font appel à notre expertise pour trouver les meilleurs talents, les formations de leurs agents, et nous leur proposons les meilleurs profils et les meilleures formations. Les particuliers peuvent également postuler pour des opportunités d'apprentissage en ligne ou sur site de black born coomunity.`,
    },
    {
      // icon: <FaKeyboard size={40} />,
      title: 'Apprendre en agissant',
      description: `La période de bootcamp dure 16 semaines, pendant lesquelles vous bénéficierez d'un apprentissage intensif dans les domaines du développement logiciel, machine learning, du design et de la communication, entreprenariat, ainsi que de l'art numerique et augmentée. Ce programme est conçu pour les personnes ambitieuses qui souhaitent intégrer le secteur du numérique (innovation) et artistique et acquérir les compétences nécessaires pour réussir. Grâce à notre programme d'engagement avec les entreprises, vous aurez l'opportunité de vous connecter avec des professionnels du secteur et de développer votre réseau. À l'issue de la formation, vous serez capable de travailler  sur site et en remote(A distance)de manière collaborative et efficace, prêt à relever les défis du marché de numerique (innnovation) et artistique. Et pour vous aider à démarrer, nous offrons un tarif compétitif pour notre bootcamp en ligne : 50 dollars pour les 16 semaines.consulter notre page de tarification  `,
    },
    {
      // icon: <FaPersonBooth size={40} />,
      title: `Recevoir de l'aide des autres`,
      description: `Pendant votre période de bootcamp, vous bénéficierez d'un accompagnement et d'une assistance personnalisée 24h/24h de la part de nos experts du domaine. Le bootcamp se déroule du lundi au vendredi, de 8h à 16h, avec un briefing quotidien de 8h à 8h30, suivi d'une collaboration entre les apprenants de 15h30 à 16h.`,
    },
    {
      // icon: <FaGlobe size={40} />,
      title: 'Rejoindre notre Communaute',
      description: `Profiter des opportunités à l'étranger et travailler partout dans le monde dans le secteur numérique. De plus, notre startup bénéficiera de 10% de votre premier contrat.`,
    },
  ];

  return (
    <div className="pt-16 lg:pt-32 pb-24 lg:pb-52 bg-gray-900  overflow-hidden md:h-auto sm:h-auto" style={{
      backgroundImage: `url(${learner})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      // background: `linear-gradient(to right, rgba(0, 0, 0, 0.6) 60%, rgba(0, 0, 0, 0) 65%), url(${img})`,
    }}>
    <div className="container mx-auto px-4 py-16 p-10 gap-3">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-600" >
        Processus de black born community
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-500 rounded-3xl text-2xl ">
        {cards.map((card) => (
          <Card key={card.title} {...card} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Service;