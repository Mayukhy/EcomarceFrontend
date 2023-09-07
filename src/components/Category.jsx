import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Featured from './home/Featured'
export default function Category({categoryid ,setCategoryid}) {
    const [productscate,setProductscate] = useState([])
    useEffect(()=>{
      const fetchData = async()=>{
      await axios.get(`https://dummyjson.com/products/category/${categoryid}`)
      .then(({data})=>{setProductscate(data?.products)
      console.log(productscate)})
      }
      fetchData()
    },[categoryid])
  return (
    <div className=' mb-4'>
          <h1 className=' mt-4  font-weight-bolder text-center'>Selected Category "{categoryid}"</h1>
          <div className='overflow-auto pl-4 pr-5 mr-4 ml-4'>
      <div className=' mt-2' style={{display:'flex',flexDirection:'row',gap:'15px'}}>
        
        { 
         productscate?.map((product,id)=>(
        <Featured product={product} id={id}/>
        ))
 }
      </div>
    </div>
    <br />
    </div>
  )
}
