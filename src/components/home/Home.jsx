import React, { useRef } from 'react'
import Carosal from './Carosal'
import Featured from './Featured'
import Services from './Services'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import IconButton from '@mui/material/IconButton'
import { Box } from '@mui/joy';
export default function Home({products}) {
  let start = Math.floor(Math.random()*5)
  let end = 5+ Math.floor(Math.random()*5)
  const featureRef = useRef()
  return (
    <div>
      <Carosal/>
      <h1 style={{marginBottom:'-45px'}} className=' mt-5 font-weight-bolder text-center'>Featured Products</h1>
      <Box sx={{flexDirection:'row-reverse',gap:'10px',opacity:{md:1,sm:1,xs:0}}} className=' d-flex mb-3 mr-4'>

      <IconButton  aria-label="" onClick={()=>{featureRef.current.scrollLeft +=400 }}>
        <NavigateNextIcon sx={{transform:'scale(1.7)',background:'#c1adf7',borderRadius:'50%'}}/>
      </IconButton>
      <IconButton aria-label="" onClick={()=>{featureRef.current.scrollLeft -=400}}>
        <NavigateBeforeIcon sx={{transform:'scale(1.7)',background:'#c1adf7',borderRadius:'50%'}}/>
      </IconButton>
      </Box>
<div ref={featureRef} style={{scrollBehavior:'smooth'}} className='overflow-auto pl-4 pr-5 mr-4 ml-4 relative'>
      <div className=' mt-2' style={{display:'flex',flexDirection:'row',gap:'15px'}}>
        
        { products.slice(start,end).length>=5 ?
(         products.slice(start,end)?.map((product,id)=>(
        <Featured product={product} id={id}/>
        ))) :

(        products.slice(0,6)?.map((product,id)=>(
          <Featured product={product} id={id}/>
          )))
        
        }
      </div>
    </div>
    <h1 className=' mt-5  font-weight-bolder text-center'>New Arrival</h1>
    <div style={{gap:'20px'}} className=' d-flex flex-wrap pl-5 pr-5 justify-content-center mt-3'>
      { products.slice(5,13)?.map((product,id)=>(
          <Featured product={product} id={id}/>
          ))}
    </div>
    {/* NewsLetters */}
    <section className="mt-5 newsletter">
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="content">
                        <form>
                            <h2>Subcribe To Our Newsletter</h2>
                            <div className="input-group">
                                <input type="email" className="form-control" placeholder="Enter your email"/>
                                <span className="input-group-btn">
                                    <button className="btn" type="submit">Subscribe Now</button>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Features */}

    <Services/>
    </div>
  )
}
