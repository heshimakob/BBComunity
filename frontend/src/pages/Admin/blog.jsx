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

const Blog=()=> {

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
    <ClassesContent>

      <ClassesHeader> Blog managment</ClassesHeader>
      <AddClassForm>
        <AddClassInput type="text"
        placeholder='entrer le titre '
        value={titre}
        onChange={e=>setTitre(e.target.value)}
        
        />
           <AddClassInput type="text" required
        placeholder='adresse mail'
        value={contenu}
        onChange={e=>setContenu(e.target.value)} />
           <AddClassInput type="image"
        placeholder='entrer votre image'
        value={image}
        onChange={e=>SetImage(e.target.value)} />  


<AddClassInput type="text"
        placeholder='le nom auteur article'
        value={auteur}
        onChange={e=>setAuteur(e.target.value)}/>


        
        <AddClassButton type="submit" onClick={registerHandler} >Add post</AddClassButton>
      </AddClassForm>

      <ClassList>

        
      </ClassList>
    </ClassesContent>
  </Content>
</ClassesContainer>


    
    </>
  )
}

export default Blog;