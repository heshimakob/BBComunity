import React from 'react'
import Sidebar from './Sidebar';
import CandTable from './componnent/CandTable';
import NavBar from './NavBar';

const Candidate=()=> {
  return (
    <>
    <NavBar/>
          <Sidebar/>
          <CandTable/>
    </>
  )
}

export default Candidate;