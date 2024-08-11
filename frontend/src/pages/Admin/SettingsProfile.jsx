// SettingsProfile.js
import React from 'react';
import Sidebar from './Sidebar';
import {
  ProfileContainer,
  SidebarContainer,
  Content,
  ProfileHeader,
  ProfileDetails,
  ProfileLabel,
  ProfileInfo,
  EditButton,
} from '../../styles/SettingsProfileStyles';

const SettingsProfile=()=> {
  return (
   <ProfileContainer>
    <SidebarContainer>
        <Sidebar/>
    </SidebarContainer>
    <ProfileHeader> Details du profiles</ProfileHeader>
    <ProfileDetails>
      <ProfileInfo>Nom:  </ProfileInfo>
      <ProfileLabel></ProfileLabel>

      <ProfileInfo>Nom:  </ProfileInfo>
      <ProfileLabel></ProfileLabel>

      <ProfileInfo>Nom:  </ProfileInfo>
      <ProfileLabel></ProfileLabel>

      <ProfileInfo>Nom:  </ProfileInfo>
      <ProfileLabel></ProfileLabel>
    </ProfileDetails>
    <EditButton> Update information</EditButton>

   </ProfileContainer>
  )
}

export default SettingsProfile;