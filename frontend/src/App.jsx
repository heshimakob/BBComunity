import { BrowserRouter as Router  ,Routes , Route, BrowserRouter } from "react-router-dom"
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
import DashboarMember from "./pages/Member/DashboardMember"
import CoursMember from "./pages/Member/CoursMember"
import BlogPage from "./components/blog/BlogPage"
import AdminRegister from "./components/AdminRegister"
import SoftwareDeveloper from "./pages/Member/cours/SoftwareDeveloper"
import MachineLearning from "./pages/Member/cours/MachineLearning"
import ModulePage from "./pages/Member/component/ModulePage"
import ErrorPage from "./components/ErrorPage"
import PrivateRoutes from "./components/PrivateRoutes"



function App() {


  return (
  
  <Router>
    <Routes>
        <Route path="/" element= {<Home/>} />
        <Route path="/choose-user" element= {<ChooseUser/>} />  


        {/* web site bbc dev */}
      
        <Route path="/blog-site" element= {<BlogSite/>} />  
        <Route path="/company" element= {<CompanySite/>} />  
        <Route path="/why" element= {<Why/>} />  
        <Route path="/blogPage/:id" element= {<BlogPage/>} /> 


        


        {/* sigin pages  */}
         <Route  exact path="/signin" element= {<SignIn/>} />
         <Route  exact path="/register" element= {<AdminRegister/>} />
         <Route  exact path="/guest-signIn" element= {<GuestSignIn/>} />

{/* 
         Dashboard routes */}



{/* private admin  page access */}

<Route exact path="/admin/dashboard" element={
  <PrivateRoutes>
    <AdminDashboard />
  </PrivateRoutes>
} />

<Route exact path="/admin/annoncement" element={
  <PrivateRoutes>
    <Annoncement />
  </PrivateRoutes>
} />
<Route exact path="/admin/Challenge"  element={
  <PrivateRoutes>
    <Challenge />
  </PrivateRoutes>
} />
<Route exact path="/admin/courses" element={
  <PrivateRoutes>
    <Courses />
  </PrivateRoutes>
} />
<Route exact path="/admin/cohorte" element={
  <PrivateRoutes>
    <Cohorte />
  </PrivateRoutes>
} />

<Route exact path="/admin/blog" element={
  <PrivateRoutes>
    <Blog/>
  </PrivateRoutes>
} />
<Route exact path="/admin/users" element={
  <PrivateRoutes>
    <Users/>
  </PrivateRoutes>
} />
<Route exact path="/admin/member" element={
  <PrivateRoutes>
    <Member/>
  </PrivateRoutes>
} />


<Route exact path="/admin/settings" element={
  <PrivateRoutes>
    <SettingsProfile/>
  </PrivateRoutes>
} />


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


<Route exact path="/member/dashboard" element={
  <PrivateRoutes>
    <DashboarMember />
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





{/* <Route  exact path="/admin/dashboard" element= {<AdminDashboard/>} /> */}

        {/* admin module here  */}

        {/* <Route  exact path="/admin/annoncement" element= {<Annoncement/>} /> */}
        {/* <Route  exact path="/admin/Challenge" element= {<Challenge/>} /> */}
        {/* <Route  exact path="/admin/courses-post" element= {<AdminDashboard/>} /> */}
        {/* <Route  exact path="/admin/courses" element= {<Courses/>} /> */}
        {/* <Route  exact path="/admin/cohorte" element= {<Cohorte/>}/> */}
        {/* <Route  exact path="/admin/blog" element= {<Blog/>}/> */}

        {/* <Route  exact path="/admin/events" element= {<Event/>}/>

        <Route  exact path="/admin/users" element= {<Users/>}/>


        <Route  exact path="/admin/member" element= {<Member/>}/>
        <Route  exact path="/admin/discussion" element= {<Discussion/>}/>

        <Route  exact path="/admin/settings" element= {<SettingsProfile/>}/>
        <Route  exact path="/admin/company" element= {<Company/>}/> */}



      {/* routes member */}


      {/* <Route  exact path="/member/annonce" element= {<AnnoncementMember/>}/> */}
      {/* <Route  exact path="/member/cours" element= {<CoursMember/>}/>
      <Route  exact path="/member/challenge" element= {<ChallengeMember/>}/>
      <Route  exact path="/member/profile" element= {<ProfilesMember/>}/>
      <Route  exact path="/member/dashboard" element= {<DashboarMember/>}/>
      <Route  exact path="/member/cours/software-developer" element= {<SoftwareDeveloper/>}/>
      <Route  exact path="/member/cours/machine-learning" element= {<MachineLearning/>}/> */}

   






      {/* page error 404 */}


      <Route  path="*" element={<ErrorPage/>} />
      



   

    </Routes>
  </Router>

  )
}

export default App
