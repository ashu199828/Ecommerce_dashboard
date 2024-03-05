import React, { useEffect, useState } from "react";
import { baseurl, deleteApi, getApi } from "./apiCall";
import { useNavigate } from "react-router-dom";

function ProductList(){

   const [products,setProducts] = useState([])
   const navigate = useNavigate()

   useEffect(()=>{
      getProducts()

   },[])

   async function getProducts(){

      let url = await baseurl() + "/products"
      let response = await getApi(url)
      if(response.statusCode===200){
         setProducts(response?.data)
      }
   }

   async function deleteItem(id){
      
      let url = await baseurl() + `/product/${id}`
      let response = await deleteApi(url)
      if(response.statusCode===200){
         alert('Record deleted successfully')
         getProducts()
      }
      else{
         alert('Something went wrong! Please try again later.')
      }
   }

   function itemUpdate(item){
      navigate('/update',{state:item})
   }

   async function searchItem(e){
      let key = e.target.value
      if(key){
         let url = await baseurl() + `/search/${key}`
         let response = await getApi(url)
         if(response.statusCode === 200){
            setProducts(response?.data)
         }
         else{
            alert('Something went wrong! Please try again later.')
         }
      }
      else{
         getProducts()
      }
   }
   

   return(
      <div className="product-list">
         <h1>Product List</h1>
         <input onChange={(e)=>searchItem(e)} placeholder="Search" className="input search" type="text"/>
        {products?.length>0?<div> <ul className="red">
            <li>S.No</li>
            <li>Name</li>
            <li>Price</li>
            <li>Company</li>
            <li>Category</li>
            <li>Actions</li>
         </ul>
         { products?.map((item,i)=>{
            return(
               <ul key={i}>
            <li>{i+1}</li>
            <li>{item?.name}</li>
            <li>{item?.price}</li>
            <li>{item?.company}</li>
            <li>{item?.category}</li>
           <li><button onClick={()=>deleteItem(item?._id)} className='button redBackground'>Delete</button>
          &nbsp; <button onClick={()=>itemUpdate(item)} className='button'>Update</button></li>
         </ul>
            )
         })}
         </div>
      :<h1>No Result Found.</h1>}
      </div>
   )

}

export default ProductList;