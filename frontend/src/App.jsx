import { BrowserRouter as Router  ,Routes , Route } from "react-router-dom"
import Home from '../src/components/Home'
import ChooseUser from "./components/ChooseUser"
import AdminSignIn from "./components/AdminSignin"
import GuestSignIn from "./components/GuestSignin"


function App() {


  return (
  <Router>
    <Routes>
        <Route path="/" element= {<Home/>} />
        <Route path="/choose-user" element= {<ChooseUser/>} />  


        {/* sigin pages  */}
         <Route  exact path="/admin-signIn" element= {<AdminSignIn/>} />
         <Route  exact path="/guest-signIn" element= {<GuestSignIn/>} />
    </Routes>
  </Router>
  )
}

export default App
