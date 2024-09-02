import React, {useEffect, useState}from 'react'
import Sidebar from './Sidebar';
import axios from 'axios';
import {
  ClassesContainer,
  Content,
  ClassesContent,
  ClassesHeader,
  ClassList,
  ClassItem,
  AddClassForm,
  AddClassInput,
  AddClassButton,
} from '../../styles/ClassesStyles';
import NavBar from './NavBar';

const Cohorte=()=> {
  return (
<ClassesContainer>

  <NavBar/>
  <Sidebar/>
  <Content>
    <ClassesContent>

      <ClassesHeader> Cohorte</ClassesHeader>
      <div className="container ">
      <div className="mb-4">
        <label htmlFor="mobile-number" className="block text-gray-700 text-sm font-bold mb-2">
          Mobile number*
        </label>
        <div className="flex items-center">
          <div className="flex-shrink-0">
            {/* Your country code selector goes here */}
          </div>
          <input
            type="text"
            id="mobile-number"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="+243 999 401 974"
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="first-name" className="block text-gray-700 text-sm font-bold mb-2">
          First name*
        </label>
        <input
          type="text"
          id="first-name"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Ezra"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="last-name" className="block text-gray-700 text-sm font-bold mb-2">
          Last name*
        </label>
        <input
          type="text"
          id="last-name"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="HESHIMA MAGALABАНА"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="gender" className="block text-gray-700 text-sm font-bold mb-2">
          Gender identity*
        </label>
        <select
          id="gender"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="date-of-birth" className="block text-gray-700 text-sm font-bold mb-2">
          Date of birth*
        </label>
        <input
          type="date"
          id="date-of-birth"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="1997-06-23"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="testing-experience" className="block text-gray-700 text-sm font-bold mb-2">
          Years of testing experience
        </label>
        <input
          type="number"
          id="testing-experience"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="3"
        />
      </div>

      {/* Add your submit button here */}
    </div>
    </ClassesContent>
  </Content>
</ClassesContainer>
  )
}

export default Cohorte;