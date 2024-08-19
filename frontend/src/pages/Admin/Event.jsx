import React, { useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import Sidebar from './Sidebar';
import {addBlog} from  '../../redux/actions/blogAction'
import {addBlogReducer} from '../../redux/reducers/blogReducer'
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

const Event=()=> {

  const [auteur,setAuteur]=useState('');
  const [titre,setTitre]=useState('');
  const [contenu,setContenu]=useState('');
  const [image,SetImage]=useState('');


  const registerState= useSelector((state)=> state.registerUserReducer);
  // const {error,success,loading}= registerState;

  const dispatch =useDispatch()
  const registerHandler =()=>{
    const blog={titre,auteur,contenu,image};
    dispatch(addBlog(blog))
  }
  return (
    <>
    <ClassesContainer>
  <Sidebar/>
  <Content>
  <div className=" h-screen w-1/3 p-10 mt-20">
        <h1 className="text-2xl mb-10">Ajouter un evenement </h1>
        <form  > 

        <label htmlFor="mobile-number" className="block text-gray-700 text-sm font-bold mb-2">
          Titre evenenement* 
        </label>
  <input
    type="text"
    placeholder="titre"
    className="w-full p-3 mb-6 border border-gray-200 rounded-md"
  />
  <label htmlFor="mobile-number" className="block text-gray-700 text-sm font-bold mb-2">
          Image evenenement*
        </label>
  <input
  type="file"
  accept="image/*"
  placeholder="image"
  className="w-full p-3 mb-6  border border-gray-200 rounded-md"
/>
<label htmlFor="mobile-number" className="block text-gray-700 text-sm font-bold mb-2">
          Auteur evenenement*
        </label>
   <input
    type="text"
    placeholder="auteur"
    className="w-full p-3 mb-6  border border-gray-200 rounded-md"
  />
  <label htmlFor="mobile-number" className="block text-gray-700 text-sm font-bold mb-2">
          Description evenement*
        </label>
 
 
        <textarea
  placeholder="Description du post"
  className="w-full p-3 mb-6  border border-gray-200 rounded-md resize-none h-80"
></textarea>
  <button
    className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
    type="submit" 
  >
    Ajouter un cour
  </button>
</form>
      </div>
  </Content>
</ClassesContainer>


    
    </>
  )
}

export default Event;