import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Home from '../src/components/Home'
import ChooseUser from "./components/ChooseUser"
import SignIn from "./components/Signin"
import GuestSignIn from "./components/GuestSignin"
import AdminDashboard from "./pages/Admin/Dashboard"
import Challenge from "./pages/Admin/Challenge"
import Annoncement from "./pages/Admin/Annoncement"
import Courses from "./pages/Admin/Courses"
import Cohorte from "./pages/Admin/Cohorte"
import Blog from "./pages/Admin/blog"
import BlogSite from "./components/BlogSite"
import CompanySite from "./components/CompanySite"
import SettingsProfile from "./pages/Admin/SettingsProfile"
import Event from "./pages/Admin/Event"
import Company from "./pages/Admin/company"
import Member from "./pages/Admin/Member"
import Discussion from "./pages/Admin/Discussion"
import Users from "./pages/Admin/Users"
import Why from "./components/Why"
import AnnoncementMember from "./pages/Member/AnnoncementMember"
import ChallengeMember from "./pages/Member/ChallengeMember"
import ProfilesMember from "./pages/Member/ProfilesMember"

import CoursMember from "./pages/Member/CoursMember"
import BlogPage from "./components/blog/BlogPage"
import AdminRegister from "./components/AdminRegister"
import SoftwareDeveloper from "./pages/Member/cours/SoftwareDeveloper"
import MachineLearning from "./pages/Member/cours/MachineLearning"
import ModulePage from "./pages/Member/component/ModulePage"
import ErrorPage from "./components/ErrorPage"
import PrivateRoutes from "./components/PrivateRoutes"
import DashboardMember from "./pages/Member/DashboardMember"



function App() {


  return (
  
<BrowserRouter>

<Routes>
        <Route path="/" element= {<Home/>} />
        <Route path="/choose-user" element= {<ChooseUser/>} />  


        {/* web site bbc dev */}
      
        <Route path="/blog-site" element= {<BlogSite/>} />  
        <Route path="/company" element= {<CompanySite/>} />  
        <Route path="/why" element= {<Why/>} />  
        <Route path="/blogPage/:id" element= {<BlogPage/>} /> 


        


        {/* sigin pages  */}
         <Route   path="/signin" element= {<SignIn/>} />
         <Route  exact path="/register" element= {<AdminRegister/>} />
         <Route  exact path="/guest-signIn" element= {<GuestSignIn/>} />

{/* 
         Dashboard routes */}


<Route element={<PrivateRoutes/>}>
  <Route path='/admin/dashboard' element={<AdminDashboard/>}/>
  <Route path='/admin/courses' element={<Courses/>}/>
  <Route path='/admin/annoncement' element={<Annoncement/>}/>
  <Route path='/admin/challenge' element={<Challenge/>}/>
  <Route path='/admin/cohorte' element={<Cohorte/>}/>
  <Route path='/admin/blog' element={<Blog/>}/>
  <Route path='/admin/users' element={<Users/>}/>
  <Route path='/admin/member' element={<Member/>}/>
  <Route path='/admin/settings' element={<SettingsProfile/>}/>
</Route>
{/* private admin  page access */}

{/* <Route exact path="/admin/dashboard" element={
  <PrivateRoutes>
    <AdminDashboard />
  </PrivateRoutes>
} /> */}

{/* <Route exact path="/admin/annoncement" element={
  <PrivateRoutes>
    <Annoncement />
  </PrivateRoutes>
} /> */}
{/* <Route exact path="/admin/challenge"  element={
  <PrivateRoutes>
    <Challenge />
  </PrivateRoutes>
} /> */}
{/* <Route exact path="/admin/courses" element={
  <PrivateRoutes>
    <Courses />
  </PrivateRoutes>
} /> */}
{/* <Route exact path="/admin/cohorte" element={
  <PrivateRoutes>
    <Cohorte />
  </PrivateRoutes>
} /> */}

{/* <Route exact path="/admin/blog" element={
  <PrivateRoutes>
    <Blog/>
  </PrivateRoutes>
} /> */}
{/* <Route exact path="/admin/users" element={
  <PrivateRoutes>
    <Users/>
  </PrivateRoutes>
} /> */}
{/* <Route exact path="/admin/member" element={
  <PrivateRoutes>
    <Member/>
  </PrivateRoutes>
} /> */}


{/* <Route exact path="/admin/settings" element={
  <PrivateRoutes>
    <SettingsProfile/>
  </PrivateRoutes>
} /> */}


<Route exact path="/admin/events" element={
  <PrivateRoutes>
    <Event/>
  </PrivateRoutes>
} />


<Route exact path="/admin/company" element={
  <PrivateRoutes>
    <Company/>
  </PrivateRoutes>
} />






{/* private member page access */}



<Route exact path="/member/annonce" element={
  <PrivateRoutes>
    <AnnoncementMember />
  </PrivateRoutes>
} />


{/* <Route exact path="/member/dashboard" element={
  <PrivateRoutes>
    <DashboardMember />
  </PrivateRoutes>
} /> */}


<Route path="/member/dashboard" element={
  <PrivateRoutes>
    <DashboardMember />
  </PrivateRoutes>
} />


<Route exact path="/member/cours" element={
  <PrivateRoutes>
    <CoursMember />
  </PrivateRoutes>
} />


<Route exact path="/member/profile" element={
  <PrivateRoutes>
    <ProfilesMember />
  </PrivateRoutes>
} />

<Route exact path="/member/software-developer" element={
  <PrivateRoutes>
    <SoftwareDeveloper />
  </PrivateRoutes>
} />
<Route exact path="/member/machine-learning" element={
  <PrivateRoutes>
    <MachineLearning />
  </PrivateRoutes>
} />
<Route exact path="/modulepage/:id" element={
  <PrivateRoutes>
    <ModulePage />
  </PrivateRoutes>
} />








      {/* page error 404 */}


      <Route  path="*" element={<ErrorPage/>} />
      



   

    </Routes>
</BrowserRouter>


  )
}

export default App
