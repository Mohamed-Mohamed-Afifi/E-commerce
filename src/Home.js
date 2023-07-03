import React from 'react'
import FeactureProducts from './components/FeactureProducts';
// import styled from 'styled-components'
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Truested from './components/Truested';
const Home = () => {
  const data={
    name:"Afify Store",
  }
  return (
     <>
      <HeroSection myData={data}/>
      <FeactureProducts/>
      <Services/>
      <Truested/>
      </>
    
  )
}


export default Home
