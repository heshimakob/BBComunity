import React from 'react'
import Sidebar from './Sidebar'
import { useState } from 'react';
import {
  FaDatabase,
  FaFileCode,
  FaTrophy,
  FaGraduationCap,
  FaCompass,
  FaCommentAlt,
} from 'react-icons/fa';

  import NavBar from './NavBar';
import { useSelector } from 'react-redux';

const DashboardMember = () => {
  const { currentUser } = useSelector((state) => state.users);

  
  const { user } = currentUser;
  const [name, setName] = useState(user ? user.name : '');

    const [showSurvey, setShowSurvey] = useState(false);

    return (
        <>
        <NavBar/>
 <Sidebar/>
     <div className="h-screen w-1/2 p-10  ml-32">
         
            <div className="bg-white min-h-screen flex flex-col">
        <div className="flex items-center justify-between px-10 py-6">
        
          <div className="flex items-center">
          
      
          </div>
        </div>
        <div className="flex  mt-10">
          <h1 className="text-3xl font-bold">
            Welcome, {user.name}
          </h1>
        </div>
        <div className="flex justify mt-4">
          <p className="text-gray-500">
            Jump back in, or start something new.
          </p>
        </div>



        <div className="mt-16 px-10">
          <div className="grid grid-cols-6 gap-10">
            <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6">
              <FaDatabase className="text-4xl text-blue-500 mb-4" />
              <div>
                <h3 className="text-lg font-bold mb-2">Datasets</h3>
                <span className="text-gray-500">0 total created</span>
              </div>
            </div>
            <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6">
              <FaFileCode className="text-4xl text-green-500 mb-4" />
              <div>
                <h3 className="text-lg font-bold mb-2">Notebooks</h3>
                <span className="text-gray-500">
                  4
                  <span className="text-xs text-gray-400 ml-1">
                    ^3
                  </span>{' '}
                  total created
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6">
              <FaTrophy className="text-4xl text-yellow-500 mb-4" />
              <div>
                <h3 className="text-lg font-bold mb-2">Competitions</h3>
                <span className="text-gray-500">0 total joined</span>
              </div>
            </div>
            <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6">
              <FaCommentAlt className="text-4xl text-purple-500 mb-4" />
              <div>
                <h3 className="text-lg font-bold mb-2">Discussions</h3>
                <span className="text-gray-500">0 total posted</span>
              </div>
            </div>
            <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6">
              <FaGraduationCap className="text-4xl text-blue-500 mb-4" />
              <div>
                <h3 className="text-lg font-bold mb-2">Courses</h3>
                <span className="text-gray-500">0 total completed</span>
              </div>
            </div>
          </div>
        </div>





        <div className="mt-16 px-10">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold mb-4">
              How to start: Choose a focus for today
            </h2>
          
          </div>
          <p className="text-gray-500 mb-8">
            Help us make relevant suggestions for you
          </p>





        </div>
   
      </div>
      </div>
        </>
    
    );
}

export default DashboardMember;