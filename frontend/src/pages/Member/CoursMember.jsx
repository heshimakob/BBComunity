


import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  FaUserCircle,
  FaCode,
  FaCogs,
  FaTable,
  FaBookOpen,
} from 'react-icons/fa';
import {
  ClassesContainer,
  Content,
} from '../../styles/ClassesStyles';
import Sidebar from './Sidebar';
import CoursList from './component/coursListe';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

const CoursMember = () => {

  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <>
    <NavBar/>
      <Sidebar />
      <ClassesContainer>
        <Content>
          <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-8">
              Learn everything you need to know
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link to="/member/cours/software-developer">
  <div
    className={`rounded-lg shadow-md p-4 cursor-pointer transition duration-300 ease-in-out hover:scale-105 ${
      selectedCategory === 1 && 'bg-blue-500 text-white'
    }`}
    onClick={() => setSelectedCategory(1)}
  >
    <div className="flex items-center justify-center mb-2">
      <span
        className={`text-3xl font-bold ${
          selectedCategory === 1 ? 'text-white' : 'text-gray-700'
        }`}
      >
        &lt;/&gt;
      </span>
    </div>
    <h2
      className={`text-lg font-medium ${
        selectedCategory === 1 ? 'text-white' : 'text-gray-900'
      }`}
    >
    Developpememt Logiciel full programme
    </h2>
    <p
      className={`text-sm ${
        selectedCategory === 1 ? 'text-white' : 'text-gray-600'
      }`}
    >
     Vous allez apprendre les developpement frontale avec html css et javascript ,avec le framework reactjs et tailwind pour le 
     developpement backend vous allez apprendre nodejs avec le framework express et les systeme de gestion de base de donnees
    </p>
  </div>
</Link>

<Link to="/member/cours/machine-learning">
              <div
                className={`rounded-lg shadow-md p-4 cursor-pointer transition duration-300 ease-in-out hover:scale-105 ${
                  selectedCategory === 2 && 'bg-blue-500 text-white'
                }`}
                onClick={() => setSelectedCategory(2)}
              >
                <div className="flex items-center justify-center mb-2">
                  <span
                    className={`text-3xl font-bold ${
                      selectedCategory === 2 ? 'text-white' : 'text-gray-700'
                    }`}
                  >
                    &lt;/&gt;
                  </span>
                </div>
                <h2
                  className={`text-lg font-medium ${
                    selectedCategory === 2 ? 'text-white' : 'text-gray-900'
                  }`}
                >
                 Machine Learning
                </h2>
                <p
                  className={`text-sm ${
                    selectedCategory === 2 ? 'text-white' : 'text-gray-600'
                  }`}
                >
                 Vous allez apprendre les base de la programmation python , utilisation de quelque biblootheque de machines learnin et participer au projet concret
                </p>
              </div>


              </Link>





              <div
                className={`rounded-lg shadow-md p-4 cursor-pointer transition duration-300 ease-in-out hover:scale-105 ${
                  selectedCategory === 3 && 'bg-blue-500 text-white'
                }`}
                onClick={() => setSelectedCategory(3)}
              >
                <div className="flex items-center justify-center mb-2">
                  <span
                    className={`text-3xl font-bold ${
                      selectedCategory === 3 ? 'text-white' : 'text-gray-700'
                    }`}
                  >
                    🗄️
                  </span>
                </div>
                <h2
                  className={`text-lg font-medium ${
                    selectedCategory === 3 ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  Databases
                </h2>
                <p
                  className={`text-sm ${
                    selectedCategory === 3 ? 'text-white' : 'text-gray-600'
                  }`}
                >
                  Learn about different types of databases and how to interact with them.
                </p>
              </div>

              </div>
          
     
      
    </div>
        
    <CoursList/>
    </Content>
   </ClassesContainer>

   </>
  );
}

export default CoursMember;