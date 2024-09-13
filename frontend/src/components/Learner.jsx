import { useState } from 'react';

function Learner() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-gray-100 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
        Académie numérique en ligne : votre chemin vers l'excellence créative
        </h2>
        <p className="mt-4 text-lg text-gray-500">
         
        A moins qu'ils ne soient aveuglés par la luxure, ils ne sortent pas, ils sont en faute qui font leurs devoirs
        le désert s'adoucit
        </p>

        <div className="mt-12">
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
            <li>
              <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={`relative flex items-center justify-center p-4 rounded-md bg-white shadow-sm ${
                  isHovered ? 'hover:bg-gray-200' : ''
                }`}
              >
                <div className="absolute top-0 right-0 w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center">
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
                  Our Expert Trainers
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
                <div className="absolute top-0 right-0 w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center">
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
                  Online Remote Learning
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
                <div className="absolute top-0 right-0 w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center">
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
                  Easy to follow curriculum
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
                <div className="absolute top-0 right-0 w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center">
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
                  Lifetime Access
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Learner;