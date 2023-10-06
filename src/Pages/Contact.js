import React from 'react'
import './About.css'
function Contact() {
  return (
    <div>
      <form className='control'>
      <section className='bg-dark'>
        <h1 className='heading text-center pt-4' style={{fontSize:'40px'}}>CONNECT WITH US</h1>
      <div className='container bg-dark py-4'>
        <div className='col-md-12'>
            <input className=' form-control mt-4 ' type='text' style={{backgroundColor:'black', color:'white',textTransform:'uppercase', border:'0px'}} placeholder='Name'/>
            <input className=' form-control mt-4 ' type='number' style={{backgroundColor:'black', color:'white',textTransform:'uppercase', border:'0px'}} placeholder='Mobile'/>
            <input className=' form-control mt-4' type='email' style={{backgroundColor:'black', color:'white', border:'0px'}} placeholder='Email'/>
            <textarea className=' form-control mt-4' style={{backgroundColor:'black', color:'white', border:'0px'}} placeholder='Message'/>
            <button className='click form-control mt-4'>Submit</button>
        </div>
        </div>
      </section>
      </form>
    </div>
  )
}

export default Contact
