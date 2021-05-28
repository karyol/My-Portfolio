import * as React from "react"
import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Home from '../components/home'
import What from '../components/what'
import About from '../components/about'
import Contact from '../components/contact'

const IndexPage = () => {
  return (
    <main>
      <title>Baron Portfolio</title>
      <Navbar></Navbar>
      <Hero></Hero>
      <Home></Home>
      <What></What>
      <About></About>
      <Contact></Contact>
    </main>
  )
}

export default IndexPage
