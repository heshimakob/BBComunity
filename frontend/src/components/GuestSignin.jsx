import { useState } from "react";
import {StudentSignInContainer,FormContainer,InputField, SubmitButton} from  "../styles/StudentSignInStyles"
const GuestSignIn  =()=>{

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('')
    const handleSignIn=()=>{
        console.log('Admin Signin',{email,password}); 
    };

    return(
        <StudentSignInContainer>
            <h2>Guest sign In</h2>
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

            <SubmitButton to="/guest/dashboard" type="button" onClick={handleSignIn}>Sign In</SubmitButton>
           </FormContainer>
        </StudentSignInContainer>
    )
}

export default GuestSignIn;