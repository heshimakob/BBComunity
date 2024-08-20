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
import {
    ClassesContainer,
    Content,
    ClassesContent,
    ClassesHeader,
    ClassList,
  
    AddClassForm,
    AddClassInput,
    AddClassButton,
  } from '../../styles/ClassesStyles';

const DashboardMember = () => {
    const [showSurvey, setShowSurvey] = useState(false);

    return (
        <>
        <Sidebar/>
        <ClassesContainer>
            <Content>
            <div className="bg-white min-h-screen flex flex-col">
        <div className="flex items-center justify-between px-10 py-6">
        
          <div className="flex items-center">
          
      
          </div>
        </div>
        <div className="flex  mt-10">
          <h1 className="text-3xl font-bold">
            Welcome, heshima kob!
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
            <button
              className="bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full"
              onClick={() => setShowSurvey(true)}
            >
              X
            </button>
          </div>
          <p className="text-gray-500 mb-8">
            Help us make relevant suggestions for you
          </p>



          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
              <div className="flex justify-center items-center rounded-lg overflow-hidden h-40">
                <div className="bg-yellow-400 flex justify-center items-center rounded-tl-full rounded-br-full w-full h-full">
                  <FaTrophy className="text-4xl text-white" />
                </div>
                <div className="bg-green-400 flex justify-center items-center rounded-tr-full rounded-bl-full w-full h-full">
                </div>
                <div className="bg-blue-400 flex justify-center items-center rounded-br-full rounded-tl-full w-full h-full">
                </div>
              </div>
              <h3 className="text-lg font-bold mt-4">
                Learn to compete on Kaggle
              </h3>
              <p className="text-gray-500 mt-2">
                Improve and test your skills
              </p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4">
                Get started
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
              <div className="flex justify-center items-center rounded-lg overflow-hidden h-40">
                <div className="bg-yellow-400 flex justify-center items-center rounded-tl-full rounded-br-full w-full h-full">
                  <FaGraduationCap className="text-4xl text-white" />
                </div>
                <div className="bg-green-400 flex justify-center items-center rounded-tr-full rounded-bl-full w-full h-full">
                </div>
                <div className="bg-blue-400 flex justify-center items-center rounded-br-full rounded-tl-full w-full h-full">
                </div>
              </div>
              <h3 className="text-lg font-bold mt-4">
                Take a short course
              </h3>
              <p className="text-gray-500 mt-2">
                Our courses are the fastest way to learn data science
              </p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4">
                Get started
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
              <div className="flex justify-center items-center rounded-lg overflow-hidden h-40">
                <div className="bg-yellow-400 flex justify-center items-center rounded-tl-full rounded-br-full w-full h-full">
                  <FaCompass className="text-4xl text-white" />
                </div>
                <div className="bg-green-400 flex justify-center items-center rounded-tr-full rounded-bl-full w-full h-full">
                </div>
                <div className="bg-blue-400 flex justify-center items-center rounded-br-full rounded-tl-full w-full h-full">
                </div>
              </div>
              <h3 className="text-lg font-bold mt-4">
                Browse inspiring data and code
              </h3>
              <p className="text-gray-500 mt-2">
                Improve your data science projects
              </p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4">
                Get started
              </button>
            </div>
          </div>


        </div>
        {showSurvey && (
          <div className="fixed bottom-0 left-0 w-full bg-white p-4 rounded-t-lg shadow-lg z-10">
            <p className="text-gray-500">
              Help us improve Kaggle
            </p>
            <div className="flex justify-end mt-4">
              <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full mr-4"
                onClick={() => setShowSurvey(false)}
              >
                No Thanks
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                onClick={() => setShowSurvey(false)}
              >
                Take our Survey
              </button>
            </div>
          </div>
        )}
      </div>
            </Content>
        </ClassesContainer>
        </>
    
    );
}

export default DashboardMember;