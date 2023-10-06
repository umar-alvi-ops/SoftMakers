import React from 'react'
import '../Header/Navbar.css';
import './Footer.css'
import { Google, LinkedIn, Twitter } from '@mui/icons-material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import { NavLink } from 'react-router-dom';
function Footer() {
  return (
    <div>
      <section className='bg-dark' style={{borderTop:'1px solid white'}}>
      <div className='container-fluid py-4'>
        <div className='row'>
            <div className='col-md-3 d-flex text-center'>
            <NavLink to='Home ' > <img src='/Images/logo-removebg-preview.png' className="navbar-brand ml-2" alt='logo' width={100} /> </NavLink>
             <h1 className='logotext mt-4'>SOFT<span className='span' style={{}}>MAKER</span></h1>

            </div>
            <div className='col-md-4 text-center'>
              <h1 className='pt-4 font-weight-bold' style={{fontSize:'30px', color:'white'}}> PORTFOLIO</h1>
              <div className='pt-2'>
              <NavLink className='footer-link mt-4' to="WebDevelopment">CLIENT WEBSITE</NavLink>
              </div>
                <div className='pt-2'>
                <NavLink className='footer-link mt-4' to="/">LOGO PORTFOLIO</NavLink>
                </div>
                <div className='pt-2'>
                <NavLink className='footer-link' to="/">VIDEO PORTFOLIO</NavLink>
                </div>
                <div className='pt-2'>
                <NavLink className='footer-link' to="WebDevelopment">WEB APPLICATION</NavLink>
                </div>
                <div className='pt-2'>
                <NavLink className='footer-link' to="SoftwareDevelopment">DESKTOP APPLICATION</NavLink>
                </div>
                <div className='pt-2'>
                <NavLink className='footer-link' to="Mobileapp">MOBILE APPLICATION</NavLink>
                </div>
            </div>
            <div className='col-md-3 text-center'>
            <h1 className='pt-4 font-weight-bold' style={{fontSize:'30px', color:'white'}}> LOCATION</h1>
            <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6814.799832933951!2d73.22914570000002!3d31.347941699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1696508400242!5m2!1sen!2s" width="300" height="100"  allowfullscreen="" className="mt-4" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            </div>
            <div className='col-md-2 mt-4 text-center'>
            <h1 className=' font-weight-bold' style={{fontSize:'30px', color:'white'}}>CONTACT</h1>
            <div className='mt-5'>
            <a className='dis facebook-log ml-2' href='https://www.Facebook.com/'><FacebookIcon/></a>
                <a className=' dis youtube-log ml-2' href='https://www.Youtube.com/'><YouTubeIcon/></a>
                <a className=' dis linked-log ml-2' href='https://www.Linkedin.com/'><LinkedIn/></a>
                <a className='dis google-log ml-2' href='https://www.softmaker.com/'><Google/></a>
                <a className='dis Twitter ml-2' href='https://www.twitter.com/'><Twitter/></a>
            </div>
            </div>
        </div>
      </div>
      <div className='container-fluid text-center py-5 bg-dark text-white' style={{borderTop:'1px solid white'}}>
       <div className='col-md-12'>
       <h1>OUR TERMS AND CONDITIONS ARE CONSIDERD</h1>
       </div>
      </div>
      </section>
    </div>
  )
}

export default Footer
