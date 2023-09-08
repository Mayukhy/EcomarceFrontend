import axios from 'axios'
import React, { useEffect, useState,useRef } from 'react'
import Featured from './home/Featured'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import IconButton from '@mui/material/IconButton'
import { Box } from '@mui/joy';
export default function Category({categoryid ,setCategoryid}) {
    const [productscate,setProductscate] = useState([])
    const featureRef = useRef()
    useEffect(()=>{
      const fetchData = async()=>{
      await axios.get(`https://dummyjson.com/products/category/${categoryid}?limit=0`)
      .then(({data})=>{setProductscate(data?.products)
      console.log(productscate)})
      }
      fetchData()
    },[categoryid])
  return (
    <div className=' mb-4'>
          <h1 style={{marginBottom:'-45px'}} className=' mt-4  font-weight-bolder text-center'>Selected Category "{categoryid}"</h1>

          <Box sx={{flexDirection:'row-reverse',gap:'10px',opacity:{md:1,sm:1,xs:0}}} className=' d-flex mb-3 mr-4'>

<IconButton  aria-label="" onClick={()=>{featureRef.current.scrollLeft +=400 }}>
  <NavigateNextIcon sx={{transform:'scale(1.7)',background:'#c1adf7',borderRadius:'50%'}}/>
</IconButton>
<IconButton aria-label="" onClick={()=>{featureRef.current.scrollLeft -=400}}>
  <NavigateBeforeIcon sx={{transform:'scale(1.7)',background:'#c1adf7',borderRadius:'50%'}}/>
</IconButton>
</Box>

          <div ref={featureRef} style={{scrollBehavior:'smooth'}}  className='overflow-auto pl-4 pr-5 mr-4 ml-4'>
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
