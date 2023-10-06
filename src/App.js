import React from 'react'
import './App.css';
import Blog from './Pages/Blog';
import Team from './Pages/Team'
import Navbar from './Header/Navbar';
import {Routes,Route } from 'react-router-dom'
import Contact  from './Pages/Contact'
import Home from './Pages/Home'
// import About from './Pages/About'
import NavContact from './Header/NavContact';
import AboutUs from './Pages/AboutUs';
import WebDevelopment from './Pages/WebDevelopment';
import Seo from './Pages/Seo';
import SoftwareDevpment from './Pages/SoftwareDevpment';
import MobileApp from './Pages/MobileApp';
import Footer from './Pages/Footer';
import Login from './Pages/Login';
import Details from './Pages/Detail';
import Errror from './Pages/Error';
import Video from './Pages/Video';
import Game from './Pages/Game';
import Uiux from './Pages/Uiux';
function App() {
  return (
    <div>
      <NavContact></NavContact>
      <Navbar></Navbar>
      <Routes>
      <Route path='/'element={<Home></Home>}/>
        <Route path='/Home'element={<Home></Home>}/>
        <Route path='/Contact'element={<Contact></Contact>}/>
        <Route path='/Blog'element={<Blog></Blog>}/> 
        <Route path='/Team'element={<Team></Team>}/> 
        <Route path='/AboutUs'element={<AboutUs></AboutUs>}/>
        <Route path='/WebDevelopment'element={<WebDevelopment></WebDevelopment>}/>
        <Route path='/SoftwareDevelopment'element={<SoftwareDevpment></SoftwareDevpment>}/>
        <Route path='/Mobileapp'element={<MobileApp></MobileApp>}/> 
        <Route path='/seo'element={<Seo></Seo>}/>
        <Route path='/video'element={<Video></Video>}/>
        <Route path='/game'element={<Game></Game>}/> 
        <Route path='/ui&ux'element={<Uiux></Uiux>}/> 
        <Route path='/login' element={<Login />} />
      <Route path='/details' element={<Details />} />
      <Route path='*' element={<Errror />} />
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App