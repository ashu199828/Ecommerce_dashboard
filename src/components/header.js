import React, {} from "react";
import {Link, useNavigate } from "react-router-dom";

function Navbar() {
   const navigate = useNavigate()
   const auth = JSON.parse(localStorage.getItem('user'))

   function logout() {
      localStorage.clear()
      navigate('/login')
   }
   return (
      <div>
         <img
        className="logo"
         src='https://logo.com/image-cdn/images/kts928pd/production/0089b7ae1ed394f041c5f7929e111c11e8eafe4d-424x421.png?w=1080&q=72'
         alt='logo'
         />
         {auth ? <div className="navbar">
            <Link className="nav" to='/'><p>Home</p></Link>
            <Link className="nav" to='/add'><p>Add Products</p></Link>
            {/* <Link className="nav" to='/update'><p >Update Products</p></Link> */}
            <Link className="nav" to='/profile'><p>Profile</p></Link>
            <Link onClick={logout} className="nav" to='/login'><p>Logout ( {auth.name} )</p></Link>
         </div> :
            <div className="navbar authHeader">
               <Link className="nav" to='/signup'><p>Sign up</p></Link>
               <Link className="nav" to='/login'><p>Login</p></Link>
            </div>
         }
      </div>
   )
}

export default Navbar;