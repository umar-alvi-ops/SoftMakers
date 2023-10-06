import React from 'react'
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Google, LinkedIn, Twitter } from '@mui/icons-material';
function Navbar() {
  return (
    <div className='nav'>
      <nav className=" main navbar navbar-expand-lg navbar-light tex-center bg-dark my-5">
  <NavLink to='Home'> <img src='/Images/logo-removebg-preview.png' className="navbar-brand ml-2" alt='logo' width={100} /> </NavLink>
  <h1 className='logotext'>SOFT<span className='span'>MAKER</span></h1>
  <div className='d-flex text-right '>
  <button class="navbar-toggler text-white bg-white text-right ml-5" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon text-white bg-white text-right"></span>
  </button>
  </div>
  <div class="collapse navbar-collapse text-white" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto mr-5 text-center text-light">
      <li class="nav-item active">
        <NavLink className="active-nav nav-link mt-2 text-white" to="Home">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
      <div class="dropdown">
  <NavLink className=" dropdown nav-link  mt-2 text-white">PORTFOLIO</NavLink>
  <div class="dropdown-content ">
    <NavLink to="WebDevelopment">CLIENT WEBSITE</NavLink>
    <NavLink to="ui&ux">LOGO PORTFOLIO</NavLink>
    <NavLink to="video">VIDEO PORTFOLIO</NavLink>
    <NavLink to="WebDevelopment">WEB APPLICATION</NavLink>
    <NavLink to="SoftwareDevelopment">DESKTOP APPLICATION</NavLink>
    <NavLink to="Mobileapp">MOBILE APPLICATION</NavLink>
    <NavLink to="game">GAMES PORTFOLIO</NavLink>
    <NavLink to="video">360 WALKTHROW</NavLink>
  </div>
</div>
      </li>
      <li className="nav-item">
      <div class="dropdown">
  <NavLink className=" dropdown nav-link  mt-2 text-white">SERVICES</NavLink>
  <div class="dropdown-content">
    <NavLink to="seo">SEO</NavLink>
    <NavLink to="Mobileapp">MOBILE APP</NavLink>
    <NavLink to="WebDevelopment">WEB DEVELOPMENT</NavLink>
    <NavLink to="SoftwareDevelopment">SOFTWARE DEVELOPMENT</NavLink>
    <NavLink to="game">GAMES DEVELOPMENT</NavLink>
  </div>
</div>
      </li>
      <li className="nav-item">
      <NavLink className="nav-link mt-2 text-white" to="Contact">CONTACT US </NavLink>
      </li>
      <li className="nav-item">
      <NavLink className="nav-link mt-2 text-white" to="Team">TEAM </NavLink>
      </li>
      <li className="nav-item">
      <NavLink className="nav-link mt-2 text-white" to="Blog">BLOG </NavLink>
      </li>
      <li className="nav-item">
      <NavLink className="nav-link mt-2 text-white" to="AboutUs">ABOUT US </NavLink>
      </li>
    </ul>
    <div className=' iconnav col-md-6 text-center pl-5'>
                <a className='dis facebook-log ml-4' href=''><FacebookIcon/></a>
                <a className=' dis youtube-log ml-4' href=''><YouTubeIcon/></a>
                <a className=' dis linked-log ml-4' href=''><LinkedIn/></a>
                <a className='dis google-log ml-4' href='https://www.softmaker.com/'><Google/></a>
                <a className='dis Twitter ml-4' href=''><Twitter/></a>
            </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar

