import React,{useState, useEffect} from 'react'
import Sidebar from "./Sidebar"
import Courses from './Courses'
import Annoncement from './Annoncement'
import SettingsProfile from "./SettingsProfile"
import Challenge from "./Challenge"
import Performance from "./Performance"
import Cohorte from './Cohorte'
import Blog from './blog'
import {
  AdminDashboardContainer,
  Content,
  TopContent,
  BottomContent,
  Section,
  SectionTitle,
  CardContainer,
  Card,
  CardTitle,
  CardContent,
} from '../../styles/DashboardStyles';
import NavBar from './NavBar'
import { useSelector } from 'react-redux'

const AdminDashboard=()=> {
  const {currentUser}= useSelector(state=> state.users)
  return (
    <>
    <AdminDashboardContainer>
      <NavBar/>
      <Sidebar/>
        <Content>
          <TopContent>
            <Section>
              <SectionTitle>  Welcome  on BBC {currentUser?.name}</SectionTitle>
              <CardContainer>
                <Card>
                  <CardTitle>Total students</CardTitle>
                  <CardContent>7000</CardContent>
                </Card>
                <Card>
                  <CardTitle>Total candidate</CardTitle>
                  <CardContent>7000</CardContent>
                </Card>
                <Card>
                  <CardTitle>Total Courses</CardTitle>
                  <CardContent>7000</CardContent>
                </Card>
                <Card>
                  <CardTitle>Total Cohortes</CardTitle>
                  <CardContent>7000</CardContent>
                </Card>

              </CardContainer>
            </Section>
            <Section>
              <SectionTitle>Companny submit listes</SectionTitle>
            </Section>
          </TopContent>
          <BottomContent>
           <Performance/> 
           <Annoncement/>
        
    
          </BottomContent>
        </Content>
    </AdminDashboardContainer>
    </>
  )
}

export default AdminDashboard;