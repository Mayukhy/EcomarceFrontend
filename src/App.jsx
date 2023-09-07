import { useEffect, useState } from 'react'
import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Navber from './components/Navber'
import Home from './components/home/Home'
import Product from './components/products/Product'
import Footer from './components/Footer'
import axios from 'axios'
import Contact from './components/Contact'
import Category from './components/Category'
function App() {
  const [categoryid ,setCategoryid] =useState()
  const [products,setProducts] = useState([])
  useEffect(()=>{
    const fetchData = async()=>{
    await axios.get('https://dummyjson.com/products')
    .then(({data})=>{setProducts(data?.products)
    console.log(products)})
    }
    fetchData()
  },[])
  return (
    <BrowserRouter>
    
      <Navber categoryid={categoryid} setCategoryid={setCategoryid}/>
      <Routes>
      <Route path="/" element={<Home products={products}/>}/>
      <Route path="/products" element={<Product products={products}/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/category" element={<Category categoryid={categoryid} setCategoryid={setCategoryid}/>}/>

      </Routes>
      <Footer/>
      </BrowserRouter>
  )
}

export default App
