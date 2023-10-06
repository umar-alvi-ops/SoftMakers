import React from 'react'
import '../component/Card.css'
function Uiux() {
  return (
    <div>
      <section className='py-4 bg-dark'>
      <div className='Container-fluid mt-5 bg-primary'>
        <div className='row'>
          <div className='col-md-6 mt-5 pt-5 text-center'>
            <h1 className='text-center font-weight-bold mt-5 text-white' style={{fontSize:'40px' }}>UI & UX DEVELOPMENT</h1>
            <p className="ml-5 mt-5 text-light"style={{lineHeight:'2'}}>At  SoftMaker Solutions, our big goal is to provide you with the tools you need to succeed.Whether that’s guiding you with our expertise or offering end-to-end solutions,we are here to help you overcome the challenges you face in this competitive digital space. We believe in building lasting relationships with our clients. Come be a part of the  SoftMaker Solutions family and enjoy everything we have to offer.</p>
          </div>
          <div className='col-md-6 text-center'>
            <img className='card-img-top' src='	https://www.infiniteblocktech.com/img/home/idea-segment.png' width='80%' alt=''></img>
            
          </div>
        </div>
      </div>
      </section>
    </div>
  )
}

export default Uiux
