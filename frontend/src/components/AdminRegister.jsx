import { useState } from "react";
import {AdminRegisterContainer,FormContainer,InputField, SubmitButton} from  "../styles/AdminRegisterStyles"
const AdminRegister  =()=>{

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('')
    const handleRegister=()=>{
        console.log('Adminn Register',{email,password}); 
    };

    return(
        <AdminRegisterContainer>
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

            <SubmitButton type="button" onClick={handleRegister}>Register</SubmitButton>
           </FormContainer>
        </AdminRegisterContainer>
    )
}

export default AdminRegister;