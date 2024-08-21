// import React from 'react'

// const Service = () => {
//   return (
//     <div className="container mx-auto px-4 py-16">
//     <h1 className="text-3xl font-bold text-center mb-8">Learn everything you need to know</h1>
//     <div className="grid grid-cols-3 gap-6">
//         <div className="rounded-md shadow-md bg-white p-6">
//             <div className="w-16 h-16 mx-auto rounded-full bg-gray-100 flex items-center justify-center">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V5a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2z" />
//                 </svg>
//             </div>
//             <h2 className="text-xl font-bold mt-4 text-center">Intermediate HTML and CSS</h2>
//         </div>
//         <div className="rounded-md shadow-md bg-white p-6">
//             <div className="w-16 h-16 mx-auto rounded-full bg-gray-100 flex items-center justify-center">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V5a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2z" />
//                 </svg>
//             </div>
//             <h2 className="text-xl font-bold mt-4 text-center">Advanced HTML and CSS</h2>
//         </div>
//         <div className="rounded-md shadow-md bg-white p-6">
//             <div className="w-16 h-16 mx-auto rounded-full bg-gray-100 flex items-center justify-center">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V5a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2z" />
//                 </svg>
//             </div>
//             <h2 className="text-xl font-bold mt-4 text-center">Databases</h2>
//         </div>
//         <div className="rounded-md shadow-md bg-white p-6">
//             <div className="w-16 h-16 mx-auto rounded-full bg-gray-100 flex items-center justify-center">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V5a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2z" />
//                 </svg>
//             </div>
//             <h2 className="text-xl font-bold mt-4 text-center">JavaScript</h2>
//         </div>
//         <div className="rounded-md shadow-md bg-white p-6">
//             <div className="w-16 h-16 mx-auto rounded-full bg-gray-100 flex items-center justify-center">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V5a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2z" />
//                 </svg>
//             </div>
//             <h2 className="text-xl font-bold mt-4 text-center">React</h2>
//         </div>
//         <div className="rounded-md shadow-md bg-white p-6">
//             <div className="w-16 h-16 mx-auto rounded-full bg-gray-100 flex items-center justify-center">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V5a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2z" />
//                 </svg>
//             </div>
//             <h2 className="text-xl font-bold mt-4 text-center">NodeJS</h2>
//         </div>
//         <div className="rounded-md shadow-md bg-white p-6">
//             <div className="w-16 h-16 mx-auto rounded-full bg-gray-100 flex items-center justify-center">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V5a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2z" />
//                 </svg>
//             </div>
//             <h2 className="text-xl font-bold mt-4 text-center">Ruby on Rails</h2>
//         </div>
//         <div className="rounded-md shadow-md bg-white p-6">
//             <div className="w-16 h-16 mx-auto rounded-full bg-gray-100 flex items-center justify-center">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V5a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2z" />
//                 </svg>
//             </div>
//             <h2 className="text-xl font-bold mt-4 text-center">Ruby</h2>
//         </div>
//         <div className="rounded-md shadow-md bg-white p-6">
//             <div className="w-16 h-16 mx-auto rounded-full bg-gray-100 flex items-center justify-center">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V5a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2z" />
//                 </svg>
//             </div>
//             <h2 className="text-xl font-bold mt-4 text-center">Getting Hired</h2>
//         </div>
//     </div>
// </div>
//   )
// }

// export default Service


import React from 'react';

const Card = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center p-4 rounded-md  bg-white">
      <img src={icon} alt={title} className="w-16 h-16" />
      <h3 className="text-xl font-bold mt-4">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
};

const Service = () => {
  const cards = [
    {
      icon: '/book.svg', // Replace with the actual path to your book icon
      title: 'Engager a distance et postuler',
      description: 'Our free, comprehensive curriculum will equip you to be a full stack developer, no matter your current experience level.',
    },
    {
      icon: '/keyboard.svg', // Replace with the actual path to your keyboard icon
      title: 'Learn by doing',
      description: 'The most effective learning happens while building projects, so we have strategically placed them throughout our curriculum. These projects will make a strong portfolio for you to showcase on your resume.',
    },
    {
      icon: '/people.svg', // Replace with the actual path to your people icon
      title: 'Receive support from others',
      description: 'The maintainers of the curriculum run a Discord community, with the help of countless other volunteers, where you can receive help with anything in our curriculum.',
    },
    {
      icon: '/globe.svg', // Replace with the actual path to your globe icon
      title: 'Rejoindre notre Communaute',
      description: 'Profiter des offres exterieur et travailler partoute dans monde dans les numerique',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16 p-10 gap-3">
      <h1 className="text-3xl font-bold text-center mb-8">
        Processus de black born community
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cards.map((card) => (
          <Card key={card.title} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Service;
