import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { baseurl, postApiWithoutToken } from "./apiCall";

function Login(){

   const [email,setEmail] = useState(null)
   const [password,setPassword] = useState(null)
   const navigate = useNavigate()

   async function saveData(){
      const body = {email,password}
      const url = await baseurl() + '/login'
      const response =await postApiWithoutToken(`${url}`,body)
      if(response.statusCode===200){
         localStorage.setItem('user',JSON.stringify(response?.data))
         localStorage.setItem('token',JSON.stringify(response?.token))
         navigate('/')
      }
      else if(response.statusCode===203){
         alert(response?.statusMessage)
      }
      else if(response.statusCode===404){
         alert(response?.statusMessage)
      }
      else{
         alert('Something went wrong! Please try again later')
      }
   }

   return(
      <div className="contentCenter">
       <h1 className="bigHeading">Welcome to E-commerce</h1>
         <div className="contentCenter">
         <input className="input" value={email} onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Enter your Email" />
         <input className="input" value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Enter your Password" />
         <div className="flexDisplay">
         <p className="signUpFont">Don't have an account?&nbsp;</p>
         <Link className="signUpFont" to='/signup'><p>&nbsp;Sign up</p></Link>
         </div>
         <button className="button loginMargin" onClick={saveData} >Login</button>
         </div>
      </div>
   )
}

export default Login;