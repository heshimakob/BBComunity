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
import AjouterCours from './componnent/ajouterCoursEssaie';
import AddCourseChapter from './componnent/courchapteradd';
import AddChapitre from './componnent/addChapitre';
import ajouterCoursEssaie from './componnent/ajouterCoursEssaie';

import Tabs from '../../components/Tabs';
import { FaList } from 'react-icons/fa';
import { MdGridView } from 'react-icons/md';
import NavBar from './NavBar';
import CoursTable from './componnent/CoursTable';

const TABS = [
  { title: "Liste des cours", icon: <MdGridView /> },
  { title: "List View", icon: <FaList /> },
];
const Courses=()=> {

  const [selected, setSelected] = useState(0);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
<ClassesContainer>
  <NavBar/>
  <Sidebar/>
  <Content>
    <ClassesContent>
    <Tabs tabs={TABS} setSelected={setSelected}>
    

    {selected !== 1 ? (
     <AddChapitre/>
    ) : (
      <div className='w-full'>
        <AjouterCours/>
      </div>
    )}
  </Tabs>

      <ClassesHeader> Gestion des cours </ClassesHeader>
      {/* <AddClassForm>
        <AddClassInput type="text"
        placeholder='entre la chohorte'/>
        <AddClassButton type="submit">Add Cohorte</AddClassButton>

      </AddClassForm> */}

{/* <div className=" h-screen w-1/3 p-10 mt-20">
        <h1 className="text-2xl mb-10">Ajouter un cours </h1>
        <form  > 
        <label htmlFor="mobile-number" className="block text-gray-700 text-sm font-bold mb-2">
          titre du cours*
        </label>
  <input
    type="text"
    placeholder="Nom"
    className="w-full p-3 mb-6 border border-gray-200 rounded-md"
  />
   <label htmlFor="mobile-number" className="block text-gray-700 text-sm font-bold mb-2">
          Categories du cours *
        </label>
  <input
    type="text"
    placeholder="Description"
    className="w-full p-3 mb-6  border border-gray-200 rounded-md"
  />

<label htmlFor="gender" className="block text-gray-700 text-sm font-bold mb-2">
          Gender identity*
        </label>
        <select
          id="gender"
          className="w-full p-3 mb-6  border border-gray-200 rounded-md"
        >
          <option value="male">Software  Development</option>
          <option value="female">Artivicial intelligence</option>
          <option value="other">UI ,X</option>
        </select>

<label htmlFor="mobile-number" className="block text-gray-700 text-sm font-bold mb-2">
Description du cours *
        </label>
 
 
  <textarea
    placeholder="Message"
    className="w-full p-3 mb-6  border border-gray-200 rounded-md h-80"
  ></textarea>
  <button
    className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
    type="submit" 
  >
    Ajouter un cour
  </button>
</form>
      </div> */}







<CoursTable/>
      <ClassList>

        
      </ClassList>
    </ClassesContent>
  </Content>
</ClassesContainer>
  )
}

export default Courses;