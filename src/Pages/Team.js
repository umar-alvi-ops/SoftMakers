import React from 'react'
import '../component/Card.css'
import '../component/CardFlip.css'
function Team() {
  return (
    <div>
      <section className='py-4 bg-dark'>
      <div className='Container-fluid mt-5 bg-primary'>
        <div className='row'>
          <div className='col-md-6 mt-5 pt-5 text-center'>
            <h1 className='text-center font-weight-bold mt-5 text-white' style={{fontSize:'40px' }}>OUR DEVELOPER TEAM</h1>
            <p className="ml-5 mt-5 text-light"style={{lineHeight:'2'}}>At  SoftMaker Solutions, our big goal is to provide you with the tools you need to succeed.Whether that’s guiding you with our expertise or offering end-to-end solutions,we are here to help you overcome the challenges you face in this competitive digital space. We believe in building lasting relationships with our clients. Come be a part of the  SoftMaker Solutions family and enjoy everything we have to offer.</p>
          </div>
          <div className='col-md-6 text-center'>
            <img className='card-img-top mt-5' src='	https://www.infiniteblocktech.com/img/home/idea-segment.png' width='80%' alt=''></img>
            
          </div>
        </div>
      </div>
      </section>
      <section className='Flip-main py-2 bg-dark '>
        <h1 className='Heading text-center  py-3'>OUR TEAM MEMBERS</h1>
      <div className='container-fluid bg-dark '>
        <div className='row'>
            <div className='col-md-3 mt-4'>
            <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="/Images/men3.jpg" alt="Avatar" style={{width:'300px',height:'200px',}}/>
    </div>
    <div class="flip-card-back">
    <h1 className='name'>UMAR ALVI</h1>
      <p className='profession'>WEB DEVELOPER</p>
      <p className='love'>We love that guy</p>
    </div>
  </div>
</div>
            </div>
            <div className='col-md-3 mt-4'>
            <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="/Images/men1.jpg" alt="Avatar" style={{width:'300px',height:'200px',}}/>
    </div>
    <div class="flip-card-back">
    <h1 className='name'>UMAR ALVI</h1>
      <p className='profession'>WEB DEVELOPER</p>
      <p className='love'>We love that guy</p>
    </div>
  </div>
</div>
            </div>
            <div className='col-md-3 mt-4'>
            <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="/Images/men4.jpg" alt="Avatar" style={{width:'300px',height:'200px',}}/>
    </div>
    <div class="flip-card-back">
    <h1 className='name'>UMAR ALVI</h1>
      <p className='profession'>WEB DEVELOPER</p>
      <p className='love'>We love that guy</p>
    </div>
  </div>
</div>
            </div>
            <div className='col-md-3 mt-4'>
            <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="/Images/men4.jpg" alt="Avatar" style={{width:'300px',height:'200px',}}/>
    </div>
    <div class="flip-card-back">
    <h1 className='name'>UMAR ALVI</h1>
      <p className='profession'>WEB DEVELOPER</p>
      <p className='love'>We love that guy</p>
    </div>
  </div>
</div>
            </div>
        </div>
      </div>
      <div className='container-fluid bg-dark pt-4 text-center'>
        <div className='row'>
            <div className='col-md-3 mt-4'>
            <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="/Images/men5.jpg" alt="Avatar" style={{width:'300px',height:'200px',}}/>
    </div>
    <div class="flip-card-back">
    <h1 className='name'>UMAR ALVI</h1>
      <p className='profession'>WEB DEVELOPER</p>
      <p className='love'>We love that guy</p>
    </div>
  </div>
</div>
            </div>
            <div className='col-md-3 mt-4'>
            <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="/Images/men6.webp" alt="Avatar" style={{width:'300px',height:'200px',}}/>
    </div>
    <div class="flip-card-back">
    <h1 className='name'>UMAR ALVI</h1>
      <p className='profession'>WEB DEVELOPER</p>
      <p className='love'>We love that guy</p>
    </div>
  </div>
</div>
            </div>
            <div className='col-md-3 mt-4'>
            <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="/Images/men2.webp" alt="Avatar" style={{width:'300px',height:'200px',}}/>
    </div>
    <div class="flip-card-back">
    <h1 className='name'>UMAR ALVI</h1>
      <p className='profession'>WEB DEVELOPER</p>
      <p className='love'>We love that guy</p>
    </div>
  </div>
</div>
            </div>
            <div className='col-md-3 mt-4 '>
            <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="/Images/men3.jpg" alt="Avatar" style={{width:'300px',height:'200px',}}/>
    </div>
    <div class="flip-card-back">
    <h1 className='name'>UMAR ALVI</h1>
      <p className='profession'>WEB DEVELOPER</p>
      <p className='love'>We love that guy</p>
    </div>
  </div>
</div>
            </div>
        </div>
      </div>
      </section>
    </div>
  )
}

export default Team
