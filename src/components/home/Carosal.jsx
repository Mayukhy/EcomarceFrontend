import { Box, Button } from '@mui/joy'
import React from 'react'

export default function Carosal() {
  return (
<div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
  </ol>
  <div className="carousel-inner">
  <div className="carousel-item active ">
      <div className='position-relative'>
      <img style={{width:'100%',height:'600px',objectFit:'cover'}} src="https://hypeabis.id/assets/content/20230208073308000000galaxys23ultrahighlightskv.jpg" className="d-block w-100" alt="..."/>
      <div style={{display:'flex',textAlign:'left',zIndex:9, color:'white',top:'10%'}} className="position-absolute p-2 ml-4 flex-column  ">
        <Box sx={{fontSize:{md:'50px',xs:'35px'}}}>Samsung S23</Box >
        <Box sx={{fontSize:{md:'30px',xs:'20px'}}} className='font-weight-normal'>Epic nights are coming.</Box>
        <Button sx={{maxWidth:'200px',mt:2}}  type="Button" className="btn btn-primary ">Buy Now</Button>
      </div>
    </div>
    </div>
    <div className="carousel-item">
      <div className='position-relative'>
      <img style={{width:'100%',height:'600px',objectFit:'cover'}} src="https://www.three.ie/content/dam/3ie-wotf/images/blogs/desktop-imagery-updates/three-blogs-desktop_iphone-14-ultimate-guide-2020x580.jpg.transform/transformer-hero-width-2020-height-580/image.jpg" className="d-block w-100" alt="..."/>
      <div style={{display:'flex',textAlign:'left',zIndex:9, color:'white',top:'10%'}} className="position-absolute p-2 ml-4 flex-column  ">
        <Box sx={{fontSize:{md:'50px',xs:'35px'}}}>Iphone 14 Pro max</Box >
        <Box sx={{fontSize:{md:'30px',xs:'20px'}}} className='font-weight-normal'> Hello Siri nice Dynamic Island.</Box>
        <Button sx={{maxWidth:'200px',mt:2}}  type="Button" className="btn btn-primary ">Buy Now</Button>
      </div>
    </div>
    </div>
    <div className="carousel-item ">
      <div className='position-relative'>
      <img style={{width:'100%',height:'600px',objectFit:'cover'}} src="https://www.smarttech-tv.com/image/cache/catalog/home_banner/HomeBanner_1920x960_monitor-1920x960.jpg" className="d-block w-100" alt="..."/>
      <div style={{display:'flex',textAlign:'left',zIndex:9, color:'white',top:'10%'}} className="position-absolute p-2 ml-4 flex-column  ">
        <Box sx={{fontSize:{md:'50px',xs:'35px'}}} >Sony Smart Tv 43 inch</Box >
        <Box sx={{fontSize:{md:'30px',xs:'20px'}}} className='font-weight-normal'>Bigger the screen bigger the entertainment.</Box>
        <Button sx={{maxWidth:'200px',mt:2}}  type="Button" className="btn btn-primary ">Buy Now</Button>
      </div>
      </div>
    </div>

    <div className="carousel-item ">
      <div className='position-relative'>
      <img style={{width:'100%',height:'600px',objectFit:'cover'}} src="https://cdn.cs.1worldsync.com/syndication/feeds/SPAF/Acer/inline-content/F9/C52713CA9C8E0692B57B0D9A6E3B8E4C34743029_SECONDARYHEROXL_i_fs_featurtn.jpg" className="d-block w-100" alt="..."/>
      <div style={{display:'flex',textAlign:'left',zIndex:9, color:'white',top:'10%'}} className="position-absolute p-2 ml-4 flex-column  ">
        <Box sx={{fontSize:{md:'50px',xs:'35px'}}} >Acer Nitro 5</Box >
        <Box sx={{fontSize:{md:'30px',xs:'20px'}}} className='font-weight-normal'>Not only play feel it.</Box>
        <Button sx={{maxWidth:'200px',mt:2}}  type="Button" className="btn btn-primary ">Buy Now</Button>
      </div>
      </div>
    </div>
  </div>
  <button style={{background:'black',width:'60px',height:'60px',display:'flex',justifyContent:'center',alignItems:'center', margin:'auto',borderRadius:'50%'}} className="carousel-control-prev ml-3" type="Button" data-target="#carouselExampleCaptions" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </button>
  <button style={{background:'black',width:'60px',height:'60px',display:'flex',justifyContent:'center',alignItems:'center', margin:'auto',borderRadius:'50%'}} className="carousel-control-next mr-3" type="Button" data-target="#carouselExampleCaptions" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </button>
</div>
  )
}
