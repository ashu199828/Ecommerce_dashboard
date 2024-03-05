import React, { useEffect, useState } from "react";
import { baseurl, postApiWithoutToken } from "./apiCall";
import {useNavigate} from 'react-router-dom'


function SignUp(){

   const [name,setName] = useState(null)
   const [email,setEmail] = useState(null)
   const [password,setPassword] = useState(null)
   const navigate = useNavigate()

   useEffect(()=>{
     const auth =JSON.parse(localStorage.getItem('user'))
      if(auth){
         navigate('/')
      }
     })

   async function saveData(){
      const body = {name,email,password}
      const url = await baseurl() +'/register'
      const response =await postApiWithoutToken(`${url}`,body)
      if(response.statusCode===200){
         localStorage.setItem('user',JSON.stringify(response?.data))
         localStorage.setItem('token',JSON.stringify(response?.token))
         navigate('/')
      }
      else if(response.statusCode===203){
         alert(response.statusMessage)
      }
      else{
         alert('Something went wrong! Please try again later.')
      }
   }

   return(
      <div className="contentCenter">
         <h1 className="bigHeading">Register with us</h1>
         <div className="contentCenter">
         <input className="input" value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter your name" />
         <input className="input" value={email} onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Enter your Email" />
         <input className="input" value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Enter your Password" />
         <button className="button buttonMargin" onClick={saveData}>Sign up</button>
         </div>
      </div>
   )
}

export default SignUp;
