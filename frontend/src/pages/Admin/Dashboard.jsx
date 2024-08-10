import React,{useState, useEffect} from 'react'
import Sidebar from "./Sidebar"
import Courses from './Courses'
import Annoncement from './Annoncement'
import SettingsProfile from "./SettingsProfile"
import Challenge from "./Challenge"
import Performance from "./Performance"
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

const AdminDashboard=()=> {
  return (
    <>
    <AdminDashboardContainer>
      <Sidebar/>
        <Content>
          <TopContent>
            <Section>
              <SectionTitle>  Welcome  on BBC ezra</SectionTitle>
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