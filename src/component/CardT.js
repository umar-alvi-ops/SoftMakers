import React from 'react';
import './Card.css'
import { NavLink } from 'react-router-dom';
export default function ProductCard() {
  return (
    <>
    <section className=' flip-main bg-dark '>
    <div className='card-main container-flud'>
    <h1 className='Heading text-center  pt-5'>OUR SERVICES</h1>
        <div className='row'>
            <div className='col-md-4 mt-5'>
            <div className="card text-center" style={{ borderRadius:'10px'}}>
  <img className="card-img-top text-center" src="/Images/card8-removebg-preview.png" alt="Card image cap"/>
  <div class="card-body">
    <h2 className="card-title font-weight-bold text-center" style={{fontSize:'30px'}}>WEB DEVELOPMENT</h2>
    <p class="card-text text-center">OUR WEB PROJECTS ARE UNIQUE</p>
    <NavLink to="/WebDevelopment" className=" button form-control mt-2 text-center ">GET STARTED</NavLink>
  </div>
</div>
            </div>
            <div className=' card-nav col-md-4 mt-5'>
            <div class="card" style={{borderRadius:'10px'}}>
  <img class="card-img-top" src="/Images/card9-removebg-preview.png" alt="Card image cap"/>
  <div class="card-body ">
    <h2 className="card-title font-weight-bold text-center" style={{fontSize:'30px'}}>MOBILE APP DEVELOPMENT</h2>
    <p class="card-text text-center">OUR MOBILE APP PROJECTS ARE UNIQUE</p>
    <NavLink to="/Mobileapp" className=" button form-control mt-2 text-center ">GET STARTED</NavLink>
  </div>
</div>
            </div>
            <div className=' card-nav col-md-4 mt-5 '>
            <div class="card" style={{borderRadius:'10px'}}>
  <img class="card-img-top" src="/Images/banner10-removebg-preview.png" alt="Card image cap"/>
  <div class="card-body bg-white">
    <div className=''>
    <h2 className="card-title font-weight-bold text-center " style={{fontSize:'30px'}}>SOFTWARE DEVELOPMENT</h2>
    <p class="card-text text-center">OUR DESKTOP APPLICATION PROJECTS ARE UNIQUE</p>
    <NavLink to="/SoftwareDevelopment" className=" button form-control mt-2 text-center ">GET STARTED</NavLink>
    </div>
  </div>
</div>
            </div>
        </div>
    </div>
    <div className='container-flud'>
        <div className='row'>
            <div className='col-md-4 mt-5'>
            <div class="card" style={{ borderRadius:'10px'}}>
  <img class="card-img-top" src="/Images/card7.jpg" alt="Card image cap"/>
  <div class="card-body">
    <h2 className="card-title font-weight-bold text-center" style={{fontSize:'30px'}}>S E O</h2>
    <p class="card-text text-center">OUR SEARCH ENGION OPTIMIZATION ARE UNIQUE</p>
    <NavLink to="/seo" className=" button form-control mt-2 text-center ">GET STARTED</NavLink>
  </div>
</div>
            </div>
            <div className='col-md-4 mt-5'>
            <div class="card" style={{borderRadius:'10px'}}>
  <img class="card-img-top" src="	https://www.infiniteblocktech.com/img/home/idea-segment.png" alt="Card image cap"/>
  <div class="card-body">
    <h2 className="card-title font-weight-bold text-center" style={{fontSize:'30px'}}>GAME DEVELOPMENT</h2>
    <p class="card-text text-center">OUR GAME PROJECTS ARE UNIQUE</p>
    <NavLink to="/WebDevelopment" className=" button form-control mt-2 text-center ">GET STARTED</NavLink>
  </div>
</div>
            </div>
            <div className='col-md-4 mt-5'>
            <div class="card" style={{borderRadius:'10px'}}>
  <img class="card-img-top" src="/Images/card2.webp" alt="Card image cap"/>
  <div class="card-body">
    <h2 className="card-title font-weight-bold text-center " style={{fontSize:'30px'}}>UI UX DESIGN</h2>
    <p class="card-text text-center">OUR UI & UX DESIGN ARE UNIQUE</p>
    <NavLink to="/WebDevelopment" className=" button form-control mt-2 text-center ">GET STARTED</NavLink>
  </div>
</div>
            </div>
        </div>
    </div>
    </section>
    </>
  );
}












