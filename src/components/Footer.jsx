import React from 'react'
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
export default function Footer() {
  return (
  <footer
          className="text-center text-lg-start text-white"
         style={{background:'radial-gradient(circle, rgba(9,0,10,0.8800770308123249) 0%, rgba(51,13,63,1) 100%)'}}
          >
  
    <div className="container p-4 pb-0">
   
      <section className="">

        <div className="row">
        
          <div style={{textAlign:'left'}} className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              DAS STORE
            </h6>
            <p>
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis iste vitae ipsum corrupti iusto voluptatibus nulla illo dicta, accusamus sit voluptatem aliquam fugit dolore nostrum harum architecto, sapiente aliquid quidem.
            </p>
          </div>
     

          <hr className="w-100 clearfix d-md-none" />

     
          <div style={{textAlign:'left'}} className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
            <p>
              <a className="text-white">React</a>
            </p>
            <p>
              <a className="text-white">Mongodb</a>
            </p>
            <p>
              <a className="text-white">Express</a>
            </p>
            <p>
              <a className="text-white">Node</a>
            </p>
          </div>
 

          <hr className="w-100 clearfix d-md-none" />

        
          <div style={{textAlign:'left'}} className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              Useful links
            </h6>
            <p>
              <a className="text-white">Your Account</a>
            </p>
            <p>
              <a className="text-white">Become a Member</a>
            </p>
            <p>
              <a className="text-white">Shipping Rates</a>
            </p>
            <p>
              <a className="text-white">Help</a>
            </p>
          </div>

         
          <hr className="w-100 clearfix d-md-none" />

         
          <div style={{textAlign:'left'}} className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
            <p><i className="fas fa-home "></i> Singur, Hooghly</p>
            <p><i className="fas fa-envelope"></i>dasmayukh@gmail.com</p>
            <p><i className="fas fa-phone"></i>+ 91 8965412023</p>
            <p><i className="fas fa-print"></i> + 91 78445222036</p>
          </div>
       
        </div>
     
      </section>
   

      <hr style={{color:'whitesmoke',borderBottom:'1px solid whitesmoke'}} className="my-3"/>

      <section className="p-3 pt-0">
        <div className="row d-flex align-items-center">
       
          <div className="col-md-7 col-lg-8 text-center text-md-start">
        
            <div className="p-3">
              © 2023 Copyright :
              <a className="text-white" href=""
                 > DAS STORE.com</a>
                
            </div>
         
          </div>
  
          <div className="col-md-5 col-lg-4 ml-lg-0  text-center text-md-end">
      
            <a
               className="btn btn-outline-light btn-floating m-1 "
            
               role="button"
               >
                 <GoogleIcon/>
               </a>

            <a
               className="btn btn-outline-light btn-floating m-1"
               href='https://www.linkedin.com/in/mayukh-das-536185238/'
               role="button"
               >
                <LinkedInIcon/>
               </a>

            <a
               className="btn btn-outline-light btn-floating m-1"
              href='https://github.com/Mayukhy'
               role="button"
               ><GitHubIcon/></a>

<a
               className="btn btn-outline-light btn-floating m-1"
              
               role="button"
               ><FacebookIcon/></a>
          </div>

        </div>
      </section>

    </div>
  
  </footer>
  )
}
