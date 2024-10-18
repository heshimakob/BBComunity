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
// import CoursTable from './componnent/CoursTable';
import TableCours from './componnent/TableCours';

const TABS = [
  { title: "les chapitres", icon: <MdGridView /> },
  { title: "Ajouts de chapitre a un cours", icon: <FaList /> },
  { title: "Table des cours", icon: <FaList /> },
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
      {selected === 0 ? (
        <AddChapitre />
      ) : selected === 1 ? (
        <AjouterCours />
      ) : (
        <TableCours /> // Affichez le tableau des cours ici
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