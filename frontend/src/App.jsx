import { BrowserRouter as Router  ,Routes , Route } from "react-router-dom"
import Home from '../src/components/Home'
import ChooseUser from "./components/ChooseUser"
import AdminSignIn from "./components/AdminSignin"
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


        


        {/* sigin pages  */}
         <Route  exact path="/admin-signIn" element= {<AdminSignIn/>} />
         <Route  exact path="/guest-signIn" element= {<GuestSignIn/>} />

{/* 
         Dashboard routes */}

<Route  exact path="/admin/dashboard" element= {<AdminDashboard/>} />

        {/* admin module here  */}

        <Route  exact path="/admin/annoncement" element= {<Annoncement/>} />
        <Route  exact path="/admin/Challenge" element= {<Challenge/>} />
        <Route  exact path="/admin/courses-post" element= {<AdminDashboard/>} />
        <Route  exact path="/admin/courses" element= {<Courses/>} />
        <Route  exact path="/admin/cohorte" element= {<Cohorte/>}/>
        <Route  exact path="/admin/blog" element= {<Blog/>}/>

        <Route  exact path="/admin/events" element= {<Event/>}/>

        <Route  exact path="/admin/users" element= {<Users/>}/>


        <Route  exact path="/admin/member" element= {<Member/>}/>
        <Route  exact path="/admin/discussion" element= {<Discussion/>}/>

        <Route  exact path="/admin/settings" element= {<SettingsProfile/>}/>
        <Route  exact path="/admin/company" element= {<Company/>}/>



      {/* routes member */}


      <Route  exact path="/member/annoncer" element= {<AnnoncementMember/>}/>
      <Route  exact path="/member/courser" element= {<CoursMember/>}/>
      <Route  exact path="/member/challenger" element= {<ChallengeMember/>}/>
      <Route  exact path="/member/profiler" element= {<ProfilesMember/>}/>
      <Route  exact path="/member/dashboarder" element= {<DashboarMember/>}/>



   

    </Routes>
  </Router>
  )
}

export default App
