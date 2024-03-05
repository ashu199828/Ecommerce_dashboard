import React, { useEffect, useState } from "react";
import { baseurl, putApi } from "./apiCall";
import { useNavigate,useLocation,} from "react-router-dom";

function UpdateProduct(props){

   const [name,setName] = useState(null)
   const [price,setPrice] = useState(null)
   const [category,setCategory] = useState(null)
   const [company,setCompany] = useState(null)
   const [productId,setProductId] = useState(null)
   const [error,setError] = useState(false)
   const navigate = useNavigate()
   const location = useLocation()

   useEffect(()=>{
     const data = location?.state
     if(data){
        setName(data?.name)
         setPrice(data?.price)
         setCategory(data?.category)
         setCompany(data?.company)
         setProductId(data?._id)
     }
// eslint-disable-next-line
   },[])

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
      let url = await baseurl() + `/product/${productId}`
      let response = await putApi(url,body)
      if(response.statusCode===200){
         alert(response?.statusMessage)
         navigate('/')
      }  
      else{
         alert(response?.statusMessage)
      }
   }

   return(
      <div className="contentCenter" >
         <h1>Update Product</h1>
         <div className="contentCenter">
            <input className="input productInput" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Name'type='text' />
           {error&&!name&& <span className="error" >Enter valid name </span>}
            <input className="input productInput" value={price} onChange={(e)=>setPrice(e.target.value)} placeholder='Enter Price' type='number' />
           {error&&!price&& <span className="error" >Enter valid price </span>}
            <input className="input productInput" value={category} onChange={(e)=>setCategory(e.target.value)} placeholder='Enter Category' type='text' />
            {error&&!category&&<span className="error" >Enter valid category </span>}
            <input className="input productInput" value={company} onChange={(e)=>setCompany(e.target.value)} placeholder='Enter Company' type='text' />
           {error&&!company&& <span className="error" >Enter valid company </span>}
            <button className="button buttonMargin" onClick={saveData}>Update Product</button>
         </div>
      </div>
   )
}

export default UpdateProduct;