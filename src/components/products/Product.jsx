import React, { useRef, useState } from 'react'
import Featured from '../home/Featured'
export default function Product({products}) {
  const [page,setPage] = useState(1)
  const productRef = useRef()
  return (
    <div ref={productRef}>
         <h1 className=' mt-4  font-weight-bolder text-center'>Our Products</h1>
    <div style={{gap:'20px'}} className=' d-flex flex-wrap pl-5 pr-5 justify-content-center mt-3'>
      { products.slice(page*8-8,page*8)?.map((product,id)=>(
          <Featured product={product} id={id}/>
          ))}
    </div>
    <nav style={{cursor:'pointer'}} className='mt-5 d-flex justify-content-center ' aria-label="Page navigation example">
  <ul className="pagination">
   { page >1 && <li onClick={()=>{
     productRef.current.scrollIntoView({behavior: "smooth"})
    setPage(page-1)}} className="page-item"><a className="page-link">Previous</a></li>}
    {([...Array(Math.floor(products?.length / 7.5))])?.map((_,id)=>(
      <li onClick={()=>{
        productRef.current.scrollIntoView({behavior: "smooth"})
        setPage(id+1)}}  className="page-item"><a style={{background:page===id+1?'#6e7d96':'white',color:page===id+1?'white':''}} className="page-link">{id+1}</a></li>
    ))}
    { page !== Math.floor(products?.length/7.5) && <li
     onClick={()=>{
      productRef.current.scrollIntoView({behavior: "smooth"})
      setPage(page+1)}} class="page-item"><a class="page-link" >Next</a></li>}
    
  </ul>
</nav>
    </div>
  )
}
