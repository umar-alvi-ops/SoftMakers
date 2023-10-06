import React from 'react'
import Slider from '../Banner/Banner'
import Whatsap from '../component/Whatsap'
import ProductCard from '../component/CardT'
import ServiceBottom from '../component/ServiceBottom'
import Team from '../Pages/Team'
import Contact from './Contact'
import Writer from '../component/Writer'
import Logo from '../component/Logo'
function Home() {
  return (
    <div>
      <Slider></Slider>
      <ProductCard></ProductCard>
      <Whatsap></Whatsap>
      <ServiceBottom></ServiceBottom>
      <Team></Team>
      <Logo></Logo>
      <Writer></Writer>
      <Contact></Contact>
    </div>
  )
}

export default Home
