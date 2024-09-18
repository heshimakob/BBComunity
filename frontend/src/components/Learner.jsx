import { useState } from 'react';
import home from "../assets/home.jpeg"
import learner from"../assets/learner.jpeg"
import { BsCode, BsFileEarmarkBarGraphFill, BsFillBuildingsFill, BsMarkdown, BsScissors, BsWindowDesktop } from 'react-icons/bs';
import { AiOutlineRight } from 'react-icons/ai';

function CourseCategory({ icon, title, count }) {
  return (
    <div className="rounded-full shadow-md p-4 flex  justify-between items-center gap-4 justify-center hover:scale-105 transition-transform duration-300">
      <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gray-100">
        {icon}
      </div>
      <div className='flex flex-col'>
      <h3 className="mt-4 text-xl font-semibold text-gray-800">{title}</h3>
      <p className="mt-1 text-gray-600">{count} Courses</p>
      </div>
    </div>
  );
}

function Learner() {
  const [isHovered, setIsHovered] = useState(false);


  return (
    <div className="pt-16 lg:pt-32 pb-24 lg:pb-52 bg-gray-900  overflow-hidden md:h-auto sm:h-auto" style={{
      backgroundImage: `url(${learner})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      // background: `linear-gradient(to right, rgba(0, 0, 0, 0.6) 60%, rgba(0, 0, 0, 0) 65%), url(${img})`,
    }}>
    <div className="bbc-container flex  mx-auto bg-gray-100 min-h-screen justify-center items-center py-16 px-4 sm:px-6 lg:px-8 border-none">
      <div className="flex flex-wrap -m-8 mt-10"  style={{
      backgroundImage: `url(${learner})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      // background: `linear-gradient(to right, rgba(0, 0, 0, 0.6) 60%, rgba(0, 0, 0, 0) 65%), url(${img})`,
    }}>
        
      <div className="w-full md:w-1/2 p-8  bg-transparent"  >
      <img className="transform hover:-translate-y-2 transition duration-500 rounded-lg border-none bg-transparent" src={home} alt />

       </div>



       <div className="w-full md:w-1/2 p-8  ">





       <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
        Académie numérique en ligne : votre chemin vers l'excellence créative
        </h2>
        <p className="mt-4 text-lg text-gray-500">
         
        A moins qu'ils ne soient aveuglés par la luxure, ils ne sortent pas, ils sont en faute qui font leurs devoirs
        le désert s'adoucit
        </p>

        <div className="mt-12 flex flex-col">
          <ul className="grid grid-cols-1 gap-6 ">
            <li>
              <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={`relative flex  items-center justify-center p-4 rounded-md bg-white shadow-sm ${
                  isHovered ? 'hover:bg-gray-200' : ''
                }`}
              >
                <div className=" absolute top-0 right-0 w-8 h-8 rounded-full bg-gray-950 text-white flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-gray-900 font-medium">
                Nos formateurs experts
                </span>
              </div>
            </li>
            <li>
              <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={`relative flex items-center justify-center p-4 rounded-md bg-white shadow-sm ${
                  isHovered ? 'hover:bg-gray-200' : ''
                }`}
              >
                <div className="absolute top-0 right-0 w-8 h-8 rounded-full bg-gray-950 text-white flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-gray-900 font-medium">
                Apprentissage à distance en ligne
                </span>
              </div>
            </li>
            <li>
              <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={`relative flex items-center justify-center p-4 rounded-md bg-white shadow-sm ${
                  isHovered ? 'hover:bg-gray-200' : ''
                }`}
              >
                <div className="absolute top-0 right-0 w-8 h-8 rounded-full bg-gray-950 text-white flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-gray-900 font-medium">
                Programme facile à suivre
                </span>
              </div>
            </li>
            <li>
              <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={`relative flex items-center justify-center p-4 rounded-md bg-white shadow-sm ${
                  isHovered ? 'hover:bg-gray-200' : ''
                }`}
              >
                <div className="absolute top-0 right-0 w-8 h-8 rounded-full bg-gray-950 text-white flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-gray-900 font-medium">
                Accès à vie
                </span>
              </div>
            </li>
          </ul>
        </div>
       </div>




      </div>
    </div>

    

    </div>
  );
}

export default Learner;