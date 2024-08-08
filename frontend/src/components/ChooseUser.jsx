// ChooseUser.js
import React from 'react';
import { ChooseUserContainer, UserSection, Title, Button } from '../styles/ChooseUserStyles'; // Import styles
import { Link } from 'react-router-dom';

const ChooseUser = () => {
  return (
    <ChooseUserContainer>
      <UserSection>
        <Title>Admin</Title>
        <Button to="/admin-signIn">Login as Admin</Button>
      </UserSection>
      <UserSection>
        <Title>Guest</Title>
        <Button to="/guest-signIn">Login as Guest</Button>
      </UserSection>
      <UserSection>
        <Title>Member</Title>
        <Button to="/member-signIn">Login as Member</Button>
      </UserSection>
    </ChooseUserContainer>
  );
};

export default ChooseUser;