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

const Courses=()=> {
  return (
<ClassesContainer>
  <Sidebar/>
  <Content>
    <ClassesContent>

      <ClassesHeader> Gestion des cours </ClassesHeader>
      {/* <AddClassForm>
        <AddClassInput type="text"
        placeholder='entre la chohorte'/>
        <AddClassButton type="submit">Add Cohorte</AddClassButton>

      </AddClassForm> */}

<div className=" h-screen w-1/3 p-10 mt-20">
        <h1 className="text-2xl mb-10">Ajouter un cours </h1>
        <form  > 
        <label htmlFor="mobile-number" className="block text-gray-700 text-sm font-bold mb-2">
          Mobile number*
        </label>
  <input
    type="text"
    placeholder="Nom"
    className="w-full p-3 mb-6 border border-gray-200 rounded-md"
  />
   <label htmlFor="mobile-number" className="block text-gray-700 text-sm font-bold mb-2">
          Mobile number*
        </label>
  <input
    type="email"
    placeholder="titre"
    className="w-full p-3 mb-6  border border-gray-200 rounded-md"
  />

<label htmlFor="mobile-number" className="block text-gray-700 text-sm font-bold mb-2">
          Mobile number*
        </label>
 
 
  <textarea
    placeholder="Message"
    className="w-full p-3 mb-6  border border-gray-200 rounded-md"
  ></textarea>
  <button
    className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
    type="submit" 
  >
    Ajouter un cour
  </button>
</form>
      </div>

      <ClassList>

        
      </ClassList>
    </ClassesContent>
  </Content>
</ClassesContainer>
  )
}

export default Courses;