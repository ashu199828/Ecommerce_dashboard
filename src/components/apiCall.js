
export async function postApi(url,body){
  let token = JSON.parse(localStorage.getItem('token'))
 const response =await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authorization':`bearer ${token}`
      },
      body: JSON.stringify(body)
    })

    const result = await response.json()
   return result
}

export async function postApiWithoutToken(url,body){
 const response =await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    })

    const result = await response.json()
   return result
}

export async function getApi(url){
  let token = JSON.parse(localStorage.getItem('token'))

  const response =await fetch(url, {
       method: 'GET',
       headers: {
         'Content-Type': 'application/json',
         'authorization':`bearer ${token}`
       },
     })
 
     const result = await response.json()
    return result
 }

 export async function deleteApi(url){
  let token = JSON.parse(localStorage.getItem('token'))
    const response =await fetch(url, {
         method: 'DELETE',
         headers: {
           'Content-Type': 'application/json',
           'authorization':`bearer ${token}`
         },
       })
   
       const result = await response.json()
      return result
   }

   export async function putApi(url,body){
    let token = JSON.parse(localStorage.getItem('token'))
      const response =await fetch(url, {
           method: 'PUT',
           headers: {
             'Content-Type': 'application/json',
             'authorization':`bearer ${token}`
           },
           body: JSON.stringify(body)
         })
     
         const result = await response.json()
        return result
     }



export async function baseurl(){
   let url = 'http://localhost:5000'
   return url
}