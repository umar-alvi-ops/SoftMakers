import React from 'react'
import './NavContact.css';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import { NavLink } from 'react-router-dom';
import { Google, LinkedIn, Twitter } from '@mui/icons-material';
function NavContact() {
  return (
    <div>
      <div className=' mainc container-fluid py-3 mb-5 bg-dark '>
        <div className='row'>
            <div className='col-md-6 text-center d-flex'>
               <a className='dis d-flex text-center ml-4' href='mailto:umard9205@gmail.com'>
                < EmailIcon />
                <p className='dis ml-1 mt-1'>Umard9205@gmail.com</p>
                </a>   
                <a className='dis d-flex text-center ml-4' href='tel:+4733378901'>
                < PhoneIcon />
                <p className='dis ml-1 mt-1'>0412343545</p>
                </a>  
                <a className='dis d-flex text-center ml-4' href='tel:03124452113'>
                < PhoneAndroidIcon />
                <a href='tel:03124452113' className='dis ml-1 mt-1'>03124452113</a>
                </a>    
            </div>
            <div className=' icon col-md-6 text-right pr-5 '>
                <a className='dis facebook-log ml-4' href='https://www.facebook.com/'><FacebookIcon/></a>
                <a className=' dis youtube-log ml-4' href='https://www.youtube.com/'><YouTubeIcon/></a>
                <a className=' dis linked-log ml-4' href='https://www.linkedin.com/'><LinkedIn/></a>
                <a className='dis google-log ml-4' href='https://www.softmaker.com/'><Google/></a>
                <a className='dis Twitter ml-4 pr-4' href='https://www.twitter.com/'><Twitter/></a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default NavContact
