import React, {useEffect, useState}from 'react'
import Sidebar from './Sidebar';
import axios from 'axios';

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
  { title: "les chapitres", icon: <MdGridView /> },
  { title: "Gestion des cours", icon: <FaList /> },
];
const Courses=()=> {

  const [selected, setSelected] = useState(0);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  return (

<>
<NavBar/>
<Sidebar/>
<div className='container  mx-auto mt-20 p-10'>
  
<div className='container mb-20'>
<Tabs tabs={TABS} setSelected={setSelected}>
    

    {selected !== 1 ? (
     <AddChapitre/>
    ) : (
      <div className='w-full'>
        <AjouterCours/>
      </div>
    )}
  </Tabs>
</div>

<div className='container mt-20'>
{/* <CoursTable/> */}
</div>









</div>

</>
    
   
  )
}

export default Courses;