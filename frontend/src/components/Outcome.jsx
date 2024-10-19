import React, { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import des icônes de navigation
import quote from "../assets/icons/quote.svg";
import intersect from "../assets/background/intersect.svg";

const testimonials = [
  {
    text: "Ce bootcamp a transformé ma carrière ! Les cours sont complets et les instructeurs sont très compétents. Je recommande vivement à tous ceux qui veulent se lancer dans le développement web.",
    name: "Yasmine Kashemwa",
    title: "Développeuse Web",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    text: "Les cours en ligne sont bien structurés et faciles à suivre. J'ai pu apprendre à mon rythme et acquérir des compétences précieuses en machine learning.",
    name: "Vincent Asani",
    title: "CTO Wito Xr Studio",
    img: "https://images.unsplash.com/photo-1502764613149-7f1d229e2300?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    text: "Grâce à ce programme, j'ai pu changer de carrière et décrocher un poste dans une grande entreprise de technologie. Les mentors sont incroyablement soutenants.",
    name: "David Bugobe",
    title: "Ingénieure Logiciel",
    img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  }
];

const Outcome = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrent(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent(prev => (prev + 1) % testimonials.length);
  };

  return (
    <>
      <section className="py-20 xl:bg-contain bg-top bg-no-repeat" style={{backgroundImage: `url(${intersect})`}}>
        <div className="max-w-7xl px-4 mx-auto">
          <div className="max-w-lg mx-auto mb-12 text-center">
            <img className="mx-auto" src={quote} alt="quote" />
            <h2 className="my-2 text-3xl md:text-4xl font-bold font-heading">Témoignages de nos étudiants et nos partenaires</h2>
            <p className="text-blueGray-400 leading-loose">Découvrez ce que disent nos étudiants de leurs expériences avec nos cours et bootcamps.</p>
          </div>
          <div className="relative overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-shrink-0 w-full md:w-full p-10">
                  <div className={`p-8 mb-6 bg-white shadow rounded transition duration-200 ${current === index ? 'opacity-100' : 'opacity-0'}`}>
                    <img src={quote} alt="quote" />
                    <p className="my-4 leading-loose text-blueGray-400">"{testimonial.text}"</p>
                    <div className="flex items-center">
                      <img className="h-16 w-16 rounded-full object-cover" src={testimonial.img} alt="profile" />
                      <div className="pl-4">
                        <p className="text-xl">{testimonial.name}</p>
                        <p className="text-blue-600">{testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button onClick={handlePrev} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow">
              <FaChevronLeft size={24} />
            </button>
            <button onClick={handleNext} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow">
              <FaChevronRight size={24} />
            </button>
          </div>
          <div className="flex justify-center space-x-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full ${current === index ? 'bg-blue-500' : 'bg-blueGray-300'}`}
                onClick={() => setCurrent(index)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Outcome;
