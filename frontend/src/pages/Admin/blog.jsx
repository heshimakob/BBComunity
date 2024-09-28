import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Sidebar from './Sidebar';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import NavBar from './NavBar';
import axios from 'axios';
import toast,{Toaster} from 'react-hot-toast';
import BlogTable from './componnent/BlogTable';
import { MdGridView } from 'react-icons/md';
import { FaList } from 'react-icons/fa';
import Tabs from '../../components/Tabs';
import AddBlog from './componnent/AddBlog';

const TABS = [
    { title: "Ajouter blog", icon: <MdGridView/> },
    { title: "Gestion des blogs", icon: <FaList/> },
  ];


const Blog = () => {

  const [selected, setSelected] = useState(0);
    
    return (
        <>
        <Sidebar/>
      <div className='container  mx-auto mt-20 p-10'>
      <div className='container mb-20'>

      <Tabs tabs={TABS} setSelected={setSelected}>
    

    {selected !== 1 ? (
     <AddBlog/>
    ) : (
      <div className='w-full'>
        <BlogTable/>
      </div>
    )}
  </Tabs>

        </div>

          </div>
      
        </>
    );
}

export default Blog;