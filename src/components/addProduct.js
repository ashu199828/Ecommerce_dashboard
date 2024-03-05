import React, { useState } from "react";
import { baseurl, postApi } from "./apiCall";
import { useNavigate } from "react-router-dom";

function AddProduct(){

   const [name,setName] = useState(null)
   const [price,setPrice] = useState(null)
   const [category,setCategory] = useState(null)
   const [company,setCompany] = useState(null)
   const [error,setError] = useState(false)
   const navigate = useNavigate()

   async function saveData(){
      if(!name||!price||!category||!company){
         setError(true)
         return false
      }
      const auth = JSON.parse(localStorage.getItem('user'))
      let body = {
         name,
         price,
         category,
         company,
         userId:auth._id
      }
      const url = await baseurl() +'/add-product'
      const response =await postApi(`${url}`,body)
      if(response.statusCode===200){
         alert('product added successfully')
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
      <div className="contentCenter" >
         <h1>Add Product</h1>
         <div className="contentCenter">
            <input className="input productInput" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Name'type='text' />
           {error&&!name&& <span className="error" >Enter valid name </span>}
            <input className="input productInput" value={price} onChange={(e)=>setPrice(e.target.value)} placeholder='Enter Price' type='number' />
           {error&&!price&& <span className="error" >Enter valid price </span>}
            <input className="input productInput" value={category} onChange={(e)=>setCategory(e.target.value)} placeholder='Enter Category' type='text' />
            {error&&!category&&<span className="error" >Enter valid category </span>}
            <input className="input productInput" value={company} onChange={(e)=>setCompany(e.target.value)} placeholder='Enter Company' type='text' />
           {error&&!company&& <span className="error" >Enter valid company </span>}
            <button className="button buttonMargin" onClick={saveData}>Add Product</button>
         </div>
      </div>
   )
}

export default AddProduct;