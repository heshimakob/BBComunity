// import { useState } from "react";
// import {AdminSignInContainer,FormContainer,InputField, SubmitButton} from  "../styles/AdminSignInStyles"

import Textbox from "../components/Textbox";
import Button from "../components/Button"
import home from "../assets/home.png"
const AdminSignIn  =()=>{

    // const [email,setEmail]=useState('');
    // const [password,setPassword]=useState('')
    // const handleSignIn=()=>{
    //     console.log('Admin Signin',{email,password}); 
    // };

    return(
//         <AdminSignInContainer>
//             <h2>Admini register</h2>
//            <FormContainer>
//            <InputField
//             type="email"
//             placeholder="adresse mail"
//             value={email}
//             onChange={(e)=> setEmail(e.target.value)}
//             />

// <InputField
//             type="password"
//             placeholder="Password " 
//             value={password}
//             onChange={(e)=> setPassword(e.target.value)}
//             />

//             <SubmitButton to="/admin/dashboard" type="button" onClick={handleSignIn}>Sign In</SubmitButton>
//            </FormContainer>
//         </AdminSignInContainer>
<div className='w-full min-h-screen flex items-center justify-center flex-col lg:flex-row bg-gray-100'>
<div className='w-full md:w-auto flex gap-0 md:gap-40 flex-col md:flex-row items-center justify-center'>
  {/* left side */}
  <div className='h-full w-full lg:w-1/2 flex flex-col '>

  

  
    <div className='w-full md:max-w-lg 2xl:max-w-3xl flex flex-col items-center justify-center gap-5 md:gap-y-10 2xl:-mt-20'>

      <span className='flex gap-1 py-1 px-3 border rounded-full text-sm md:text-base bordergray-300 text-gray-600'>
        Manage all your task in one place!
      </span>
      <img className="transform hover:-translate-y-2 transition duration-500 rounded-lg" src={home} alt />

     
    </div>
  </div>

  {/* right side */}
  <div className='w-full md:w-1/4 p-4 md:p-1 flex flex-col justify-center items-center'>
    <form
    //   onSubmit={handleSubmit(submitHandler)}
      className='form-container w-full md:w-[400px] flex flex-col gap-y-8 bg-gray-100 px-10 pt-14 pb-14'
    >
      <div className=''>
        <p className='text-blue-600 text-3xl font-bold text-center'>
          Welcome back!
        </p>
        <p className='text-center text-base text-gray-700 '>
          Keep all your credential safge.
        </p>
      </div>

      <div className='flex flex-col gap-y-5'>
        <Textbox
          placeholder='email@example.com'
          type='email'
          name='email'
          label='Email Address'
          className='w-full rounded-full'
        //   register={register("email", {
        //     required: "Email Address is required!",
        //   })}
        //   error={errors.email ? errors.email.message : ""}
        />
        <Textbox
          placeholder='your password'
          type='password'
          name='password'
          label='Password'
          className='w-full rounded-full'
        //   register={register("password", {
        //     required: "Password is required!",
        //   })}
        //   error={errors.password ? errors.password.message : ""}
        />

        <span className='text-sm text-gray-500 hover:text-blue-600 hover:underline cursor-pointer'>
          Forget Password?
        </span>

        <Button
          type='submit'
          label='Submit'
          to="/admin/dashboard" 
          className='w-full h-10 bg-blue-700 text-white rounded-full'
        /> 
      </div>
    </form>
  </div>
</div>
</div>
    )
}

export default AdminSignIn;