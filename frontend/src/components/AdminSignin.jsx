import { useState } from "react";
import {AdminSignInContainer,FormContainer,InputField, SubmitButton} from  "../styles/AdminSignInStyles"
const AdminSignIn  =()=>{

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('')
    const handleSignIn=()=>{
        console.log('Admin Signin',{email,password}); 
    };

    return(
        <AdminSignInContainer>
            <h2>Admini register</h2>
           <FormContainer>
           <InputField
            type="email"
            placeholder="adresse mail"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            />

<InputField
            type="password"
            placeholder="Password " 
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            />

            <SubmitButton to="/admin/dashboard" type="button" onClick={handleSignIn}>Sign In</SubmitButton>
           </FormContainer>
        </AdminSignInContainer>
    )
}

export default AdminSignIn;