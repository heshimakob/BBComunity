import React, { useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {  ClassesContainer,ClassesHeader,Content, ClassesContent
 } from '../../styles/ClassesStyles';
import { registerUser } from '../../redux/actions/userActions';
import {registerUserReducer} from '../../redux/reducers/userReducer'
import Sidebar from './Sidebar';
const Users=()=> {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [cohorte,setCohorte]=useState('');
  const [password,setPassword]=useState('');
  const [confirmPassword,setConfirmPassword]=useState('');

  const registerState= useSelector((state)=> state.registerUserReducer);
  // const {error,success,loading}= registerState;


  const dispatch =useDispatch()
  const registerHandler =()=>{
      if (password !== confirmPassword){
          alert(' diffrent password')
      }else{
          const user={name,email,password,confirmPassword,cohorte};
          dispatch(registerUser(user))
      }
  }
  return (
    <>
    <ClassesContainer>
  <Sidebar/>
  <Content>
    <ClassesContent>

      <ClassesHeader> Users Magment</ClassesHeader>
      <div className=" h-screen w-1/3 p-10 mt-20">
        <h1 className="text-2xl mb-10">Ajouter un cours </h1>
        <form  > 

        <label htmlFor="mobile-number" className="block text-gray-700 text-sm font-bold mb-2">
          Lien video du module *
        </label>
  <input
    type="text"
    placeholder="Nom"
    className="w-full p-3 mb-6 border border-gray-200 rounded-md"
  />

<label htmlFor="mobile-number" className="block text-gray-700 text-sm font-bold mb-2">
          Lien video du module *
        </label>
  <input
    type="email"
    placeholder="titre"
    className="w-full p-3 mb-6  border border-gray-200 rounded-md"
  />

<label htmlFor="mobile-number" className="block text-gray-700 text-sm font-bold mb-2">
          Lien video du module *
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
     
    </ClassesContent>
  </Content>
</ClassesContainer>


    
    </>
  )
}

export default Users;