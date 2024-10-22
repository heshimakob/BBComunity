import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Home from '../src/components/Home'
import ChooseUser from "./components/ChooseUser"
import SignIn from "./components/Signin"
import GuestSignIn from "./components/GuestSignin"

import BlogSite from "./components/BlogSite"
import CompanySite from "./components/CompanySite"

import Users from "./pages/Admin/Users"
import Why from "./components/Why"
import ChallengeMember from "./pages/Member/ChallengeMember"

import BlogPage from "./components/blog/BlogPage"



import ErrorPage from "./components/ErrorPage"


import PrivateRoutes from "./components/PrivateRoutes";

import AdminDashboard from "./pages/Admin/Dashboard";
import CoursMember from "./pages/Member/CoursMember";
import ModulePage from "./pages/Member/component/ModulePage";
import ProfilesMember from "./pages/Member/ProfilesMember";
import DashboardMember from "./pages/Member/DashboardMember";
import Courses from "./pages/Admin/Courses";
import Annoncement from "./pages/Admin/Annoncement";
import Blog from "./pages/Admin/blog";
import Register from "./components/Register";
import AddChapitre from "./pages/Admin/componnent/addChapitre";
import LoadingBar from "react-top-loading-bar"
import { useState } from "react";
import Chat from "./pages/Member/Chat";
import Candidate from "./pages/Admin/Candidate";
import Formules from "./components/Formules";
import Term from "./components/Term";
import Privacy from "./components/Privacy";





function App() {
  const [progress,setProgress]=useState(0)


  return (
  
<BrowserRouter>



<LoadingBar
  color="#f11946"
  progress={progress}
  onLoaderFinished={() => setProgress(0)}
  className="w-full h-10 md:h-6 lg:h-8"
/>

<Routes>
        <Route path="/" element= {<Home setProgress={setProgress}/>} />
        <Route path="/choose-user" element= {<ChooseUser/>} />  


        {/* web site bbc dev */}
      
        <Route path="/blog-site" element= {<BlogSite setProgress={setProgress}/>} />  
        <Route path="/company" element= {<CompanySite setProgress={setProgress}/>} />  
        <Route path="/formule" element= {<Formules setProgress={setProgress}/>} />  
        <Route path="/why" element= {<Why setProgress={setProgress}/>} />  
        <Route path="/term" element= {<Term setProgress={setProgress}/>} />  
        <Route path="/privacy" element= {<Privacy setProgress={setProgress}/>} />  
        <Route path="/blogPage/:id" element= {<BlogPage setProgress={setProgress}/>} /> 


        


        {/* sigin pages  */}
         <Route   path="/signin" element= {<SignIn setProgress={setProgress}/>} />
         <Route  exact path="/register" element= {<Register setProgress={setProgress}/>} />
         <Route  exact path="/guest-signIn" element= {<GuestSignIn/>} />






<Route element={<PrivateRoutes adminOnly />}>
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path='/admin-cours' element={<Courses/>}/>
          <Route path='/candidate' element={<Candidate/>}/>
          <Route path='/admin-annonce' element={<Annoncement/>}/>
          <Route path='/admin-users' element={<Users/>}/>
          <Route path='/admin-blog' element={<Blog/>}/>
          <Route path='/addChapitre/:id' element={<AddChapitre/>}/>
        </Route>


        <Route element={<PrivateRoutes />}>
          <Route path="/user-dashboard" element={<DashboardMember />} />
          <Route path='/member-cours' element={<CoursMember/>}/>
          <Route path='/modulepage/:id' element={<ModulePage/>}/>
          <Route path='/member-profile' element={<ProfilesMember/>}/>
          <Route path='/chat' element={<Chat/>}/>
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
