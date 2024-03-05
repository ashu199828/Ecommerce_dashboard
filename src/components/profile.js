import React, { useEffect, useState } from "react";

function Profile(){
   const [name,setName] = useState(null)
   const [email,setEmail] = useState(null)
   useEffect(()=>{
      let data = JSON.parse(localStorage.getItem('user'))
      setName(data?.name)
      setEmail(data?.email)

   },[])

   return (
      <div className="contentCenter">
         <h1 className="underline" >My Profile</h1>
         <h2 className="red" >Name: <span className="black" >{name}</span></h2>
         <h2 className="red" >Email: <span className="black" >{email}</span></h2>
      </div>
   )
}

export default Profile;