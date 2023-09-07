import React from 'react'

export default function Contact() {
  return (
<form style={{maxWidth:'600px',justifyContent:'center',margin:'auto'}}  className=' p-4' >
<h1 className=' font-weight-bolder text-center'>Contact Us</h1>
  <div className="form-outline mb-4 ">
    <input required type="text" id="form4Example1" className="form-control" />
    <label className="form-label" for="form4Example1">Name</label>
  </div>


  <div className="form-outline mb-4">
    <input required type="email" id="form4Example2" className="form-control" />
    <label className="form-label" for="form4Example2">Email address</label>
  </div>

  
  <div className="form-outline mb-4">
    <textarea required className="form-control" id="form4Example3" rows="4"></textarea>
    <label className="form-label" for="form4Example3">Message</label>
  </div>

 
  <div className="form-check d-flex justify-content-center mb-4">
    <input className="mr-2" type="checkbox" value="" id="form4Example4"/>
    <label className="form-check-label" for="form4Example4">
      Send me a copy of this message
    </label>
  </div>

 
  <button type="submit" className="btn btn-primary btn-block mb-4">Send</button>
</form>

  )
}
