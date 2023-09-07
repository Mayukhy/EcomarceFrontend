import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
export default function Navber({categoryid ,setCategoryid}) {
  const navigate = useNavigate()
  const Catagories = [
    { name: 'Sunglasses',id:'0',image:'https://cdn-icons-png.flaticon.com/512/146/146637.png' ,value:'sunglasses' },
    { name: 'Mobiles',id:'1',image:'https://cdn-icons-png.flaticon.com/512/190/190507.png',value:'Smartphones' },
    { name: 'Laptops',id:'2',image:'https://cdn-icons-png.flaticon.com/512/428/428001.png',value:'laptops' },
    { name: 'Home',id:'3',image:'https://cdn-icons-png.flaticon.com/512/6290/6290488.png',value:'home-decoration' },
    { name: 'Ladies shoes',id:'4',image:'https://i.pinimg.com/originals/ff/0d/67/ff0d6731dfaeea124f0ac4e917ec02c2.png',value:'womens-shoes' },
    { name: 'Parfum',id:'5',image:'https://cdn.pixabay.com/photo/2020/11/29/07/06/aroma-5786653_1280.png',value:'fragrances' },
    { name: 'Groceries',id:'6',image:'https://cdn-icons-png.flaticon.com/512/1261/1261163.png',value:'groceries' },
    { name: 'Furniture',id:'7',image:'https://cdn-icons-png.flaticon.com/512/1198/1198368.png',value:'furniture' },
    { name: 'Dresses',id:'8',image:'https://cdn.iconscout.com/icon/premium/png-256-thumb/tops-3057336-2553441.png',value:'tops' },
    { name: 'Ladies dresses',id:'9',image:'https://cdn-icons-png.flaticon.com/512/26/26282.png',value:'womens-dresses' },
    { name: 'Gents shirts',id:'10',image:'https://png.pngtree.com/png-vector/20221206/ourmid/pngtree-formal-man-shirt-vector-png-image_6513927.png',value:'mens-shirts' },
    { name: 'Gents shoes',id:'11',image:'https://cdn-icons-png.flaticon.com/512/5499/5499206.png',value:'mens-shoes' },
    { name: 'Ladies watches',id:'12',image:'https://icons-for-free.com/iconfiles/png/512/female+hand+time+watch+woman+wrist+icon-1320183138206894846.png',value:'womens-watches' },
    { name: 'Ladies bags',id:'13',image:'https://cdn-icons-png.flaticon.com/512/3566/3566722.png',value:'womens-bags' },
    { name: 'Jewellery',id:'14',image:'https://cdn-icons-png.flaticon.com/512/3774/3774155.png',value:'womens-jewellery' },
    { name: 'Automotive ',id:'15',image:'https://cdn-icons-png.flaticon.com/512/4451/4451008.png',value:'automotive' },
    { name: 'Motorcycle',id:'16',image:'https://cdn-icons-png.flaticon.com/512/3721/3721619.png',value:'motorcycle' },
    { name: 'Lighting',id:'17',image:'https://images.vexels.com/media/users/3/135415/isolated/preview/7e630ac75979f1e9351904ba6a0e0c74-bedroom-lamp-round-icon.png',value:'lighting' },
  ];



  return (
<nav style={{background:'radial-gradient(circle, rgba(235,249,255,0.8408613445378151) 0%, rgba(249,237,253,0.8772759103641457) 100%)'}} className="navbar navbar-expand-lg navbar-light bg-dark">
  <a onClick={()=>navigate('/')} className="navbar-brand font-weight-bolder logo">DAS STORE</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul style={{fontSize:'18px'}} className="navbar-nav mr-auto">
     <NavLink style={{textDecoration:'none',color:'#414c57',height:'38px',marginTop:'auto',marginBottom:'auto',maxWidth:'100px'}} to='/'> <li style={{marginTop:'-2px'}} className="nav-item ">
        <a  className="nav-link text-decoration-none ">Home </a>
      </li>
      </NavLink>
     <NavLink style={{textDecoration:'none',color:'#414c57',height:'38px',marginTop:'auto',marginBottom:'auto',maxWidth:'100px'}} to='/products'><li style={{marginTop:'-2px'}} className="nav-item">
        <a className="nav-link">Products</a>
      </li></NavLink> 

     <NavLink style={{textDecoration:'none',color:'#414c57',height:'38px',marginTop:'auto',marginBottom:'auto',maxWidth:'100px'}} to='/contact'> <li style={{marginTop:'-2px'}} className="nav-item">
        <a className="nav-link">Contact Us</a>
      </li>
      </NavLink>
    </ul>
  
    <div className="nav-item mr-2 ">
    <Select
      placeholder="Select Category"
      indicator={<KeyboardArrowDown />}
      sx={{
        width: 200,
        [`& .${selectClasses.indicator}`]: {
          transition: '0.2s',
          [`&.${selectClasses.expanded}`]: {
            transform: 'rotate(-180deg)',
          },
        },
      }}
    >
      {Catagories?.map((item,id)=>(
 <Option  onClick={()=>{
  setCategoryid(item?.value)
  console.log(categoryid)
  navigate(`/category`)
  }} value={item.value}><img width='40px' src={item?.image} alt="" />
  <p style={{fontSize:'15px',marginLeft:'10px',marginTop:'13px'}}>{item.name}</p></Option>
      ))}
     
    </Select>
      </div>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn btn-primary my-2 my-sm-0" style={{background:'#442370'}} type="submit">Search</button>
    </form>
  </div>
</nav>
  )
}
