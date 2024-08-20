import { useState } from 'react';
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

const CoursMember =()=>  {
  const [courses, setCourses] = useState([
    {
      title: 'Intro to Programming',
      description: 'Next up: Exercise: Arithmetic and Variables',
      icon: FaCode,
      progress: 10,
    },
    {
      title: 'Intro to Machine Learning',
      description: 'Next up: Exercise: Explore Your Data',
      icon: FaCogs,
      progress: 58,
    },
    {
      title: 'Pandas',
      description: 'Next up: Exercise: Creating, Reading and Writing',
      icon: FaTable,
      progress: 50,
    },
    {
      title: 'Intermediate Machine Learning',
      description: 'Next up: Exercise: Introduction',
      icon: FaTable,
      progress: 14,
    },
  ]);

  return (

   <>
   <Sidebar/>
   <ClassesContainer>
    <Content>
         <div className="bg-white min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto">
      <div className="flex   justify-between items-center py-12 px-6">
      <div className="w-2/3">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Learn</h1>
        <p className="text-gray-600 mb-12">
          Gain the skills you need to do independent data science projects.
        </p>
      </div>
      <div className="w-1/2">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH1t9B2bcBn8RpB9T_Mpk_ixrvbUPFADIj6g&s://www.shutterstock.com/image-vector/illustration-learning-with-computer-260nw-2076016010.jpg" alt="Learn" className="w-1/2" />
      </div>
    </div>

        <div className="bg-white rounded-md shadow-md p-6 mb-8">
          <div className="flex items-center mb-4">
            <FaUserCircle className="text-blue-500 mr-2" size={24} />
            <h2 className="text-xl font-bold text-gray-800">Your Courses</h2>
          </div>

          <div className="border-t border-gray-200">
            <h3 className="text-lg font-bold text-gray-800 mb-2 mt-4">Active</h3>
            {courses.map((course) => (
              <div
                key={course.title}
                className="flex items-center justify-between py-4 border-b border-gray-200"
              >
                <div className="flex items-center">
                  <course.icon className="text-blue-500 mr-3" size={24} />
                  <div>
                    <h4 className="text-base font-bold text-gray-800">
                      {course.title}
                    </h4>
                    <p className="text-sm text-gray-600">{course.description}</p>
                  </div>
                </div>
                <div className="relative w-16 h-16">
                  <svg
                    className="absolute top-0 left-0 w-full h-full"
                    viewBox="0 0 100 100"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      stroke="#e2e8f0"
                      strokeWidth="10"
                      fill="transparent"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      stroke="#4ade80"
                      strokeWidth="10"
                      fill="transparent"
                      strokeDasharray={282.7433388230814}
                      strokeDashoffset={282.7433388230814 - (282.7433388230814 * course.progress) / 100}
                    />
                  </svg>
                  <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-800 font-bold">
                    {course.progress}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-md shadow-md p-6">
          <div className="flex items-center mb-4">
            <FaBookOpen className="text-blue-500 mr-2" size={24} />
            <h2 className="text-xl font-bold text-gray-800">Courses</h2>
          </div>
          <p className="text-gray-600">
            We pare down complex topics to their key practical components, so you
            gain usable skills in a few hours (instead of weeks or months). The
            courses are provided at no cost to you, and you can now earn
            certificates.{' '}
            <a
              href="#"
              className="underline text-blue-500 hover:text-blue-700"
            >
              Learn more.
            </a>
          </p>
        </div>
      </div>
    </div>
    </Content>
   </ClassesContainer>

   </>
  );
}

export default CoursMember;