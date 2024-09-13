import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Home from '../src/components/Home'
import ChooseUser from "./components/ChooseUser"
import SignIn from "./components/Signin"
import GuestSignIn from "./components/GuestSignin"
// import AdminDashboard from "./pages/Admin/Dashboard"
// import Challenge from "./pages/Admin/Challenge"
// import Annoncement from "./pages/Admin/Annoncement"
// import Courses from "./pages/Admin/Courses"
// import Cohorte from "./pages/Admin/Cohorte"
// import Blog from "./pages/Admin/blog"
import BlogSite from "./components/BlogSite"
import CompanySite from "./components/CompanySite"
// import SettingsProfile from "./pages/Admin/SettingsProfile"
// import Event from "./pages/Admin/Event"
// import Company from "./pages/Admin/company"
// import Member from "./pages/Admin/Member"
// import Discussion from "./pages/Admin/Discussion"
import Users from "./pages/Admin/Users"
import Why from "./components/Why"
// import AnnoncementMember from "./pages/Member/AnnoncementMember"
import ChallengeMember from "./pages/Member/ChallengeMember"
// import ProfilesMember from "./pages/Member/ProfilesMember"

// import CoursMember from "./pages/Member/CoursMember"
import BlogPage from "./components/blog/BlogPage"
import AdminRegister from "./components/AdminRegister"
// import SoftwareDeveloper from "./pages/Member/cours/SoftwareDeveloper"

// import ModulePage from "./pages/Member/component/ModulePage"
import ErrorPage from "./components/ErrorPage"

// import MemberRoutes from "./components/PrivateRoutes"
// import DashboardMember from "./pages/Member/DashboardMember"
import PrivateRoutes from "./components/PrivateRoutes";
// import UserDashboard from "./components/UserDashboard";
import AdminDashboard from "./pages/Admin/Dashboard";
import CoursMember from "./pages/Member/CoursMember";
import ModulePage from "./pages/Member/component/ModulePage";
import ProfilesMember from "./pages/Member/ProfilesMember";
import DashboardMember from "./pages/Member/DashboardMember";
import Courses from "./pages/Admin/Courses";
import Annoncement from "./pages/Admin/Annoncement";
import Blog from "./pages/Admin/blog";



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

{/* <Route element={<PrivateRoutes AdminRoutes />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Route>
        <Route element={<PrivateRoutes />}>
          <Route path="/member/dashboard" element={<DashboardMember />} />
        </Route> */}




<Route element={<PrivateRoutes adminOnly />}>
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path='/admin-cours' element={<Courses/>}/>
          <Route path='/admin-annonce' element={<Annoncement/>}/>
          <Route path='/admin-users' element={<Users/>}/>
          <Route path='/admin-blog' element={<Blog/>}/>
        </Route>


        <Route element={<PrivateRoutes />}>
          <Route path="/user-dashboard" element={<DashboardMember />} />
          <Route path='/member-cours' element={<CoursMember/>}/>
          <Route path='/modulepage/:id' element={<ModulePage/>}/>
          <Route path='/member-profile' element={<ProfilesMember/>}/>
          <Route path='/challenge' element={<ChallengeMember/>}/>
        </Route>
{/* <Route element={<PrivateRoutes AdminRoutes/>}>


<Route element={<AdminRoutes />}>
                        <Route path='/admin/dashboard' element={<AdminDashboard />} />
                        <Route path='/admin/courses' element={<Courses />} />
                        <Route path='/admin/annoncement' element={<Annoncement />} />
                        <Route path='/admin/challenge' element={<Challenge />} />
                        <Route path='/admin/users' element={<Users />} />
                     
                    </Route>



                    <Route element={<MemberRoutes />}>
<Route path='/member/dashboard' element={<DashboardMember />} />


<Route path='/modulepage/:id' element={<ModulePage/>}/>
<Route  exact path='/member/cours/software-developer' element={<SoftwareDeveloper/>}/>

</Route>




                        
                    </Route> */}












      {/* page error 404 */}


      <Route  path="*" element={<ErrorPage/>} />
      



   

    </Routes>
</BrowserRouter>


  )
}

export default App
