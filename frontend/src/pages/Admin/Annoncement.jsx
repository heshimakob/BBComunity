import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import {
  AnnouncementContainer,
  Content,
  Title,
  AnnouncementForm,
  FormGroup,
  Label,
  TextArea,
  Button,
  AnnouncementList,
  AnnouncementItem,
  AnnouncementContent,
} from '../../styles/AnnouncementStyles';
import NavBar from './NavBar';

const Annoncement=()=> {
  return (
      <AnnouncementContainer>
        <NavBar/>
        <Sidebar/>
        <Content>
          <Title>Annoncement</Title>
          <AnnouncementForm>
            <FormGroup>
              <Label htmlFor='announcement'>Announcement:  </Label>
            <TextArea required
            rows={4}
            cols={50}/>
            </FormGroup>
            <Button>Send Annoncement</Button>
          </AnnouncementForm>
        </Content>
      </AnnouncementContainer>
  )
}

export default Annoncement;