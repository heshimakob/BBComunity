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

const Cohorte=()=> {
  return (
<ClassesContainer>
  <Sidebar/>
  <Content>
    <ClassesContent>

      <ClassesHeader> Cohorte</ClassesHeader>
      <AddClassForm>
        <AddClassInput type="text"
        placeholder='entre la chohorte'/>
        <AddClassButton type="submit">Add Cohorte</AddClassButton>
      </AddClassForm>

      <ClassList>

        
      </ClassList>
    </ClassesContent>
  </Content>
</ClassesContainer>
  )
}

export default Cohorte;