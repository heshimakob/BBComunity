import React, { useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
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
import { registerUser } from '../../redux/actions/userActions';
import {registerUserReducer} from '../../redux/reducers/userReducer'
import Sidebar from './Sidebar';
const Users=()=> {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [confirmPassword,setConfirmPassword]=useState('');

  const registerState= useSelector((state)=> state.registerUserReducer);
  // const {error,success,loading}= registerState;


  const dispatch =useDispatch()
  const registerHandler =()=>{
      if (password !== confirmPassword){
          alert(' diffrent password')
      }else{
          const user={name,email,password,confirmPassword};
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
      <AddClassForm>
        <AddClassInput type="text"
        placeholder='entrer le nom utilisateur'
        value={name}
        onChange={e=>setName(e.target.value)}
        
        />
           <AddClassInput type="email" required
        placeholder='adresse mail'
        value={email}
        onChange={e=>setEmail(e.target.value)} />
           <AddClassInput type="password"
        placeholder='entre le mot de pass'
        value={password}
        onChange={e=>setPassword(e.target.value)} />  


<AddClassInput type="password"
        placeholder='confirme le password'
        value={confirmPassword}
        onChange={e=>setConfirmPassword(e.target.value)}/>

<AddClassInput type="text"
        placeholder='entre la cohorte'/>
        
        <AddClassButton type="submit" onClick={registerHandler} >Add user</AddClassButton>
      </AddClassForm>

      <ClassList>

        
      </ClassList>
    </ClassesContent>
  </Content>
</ClassesContainer>


    
    </>
  )
}

export default Users;