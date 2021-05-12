import React from "react"
import Layout from "../components/layout"
import FeaturedSection from "../components/section"
import {Navigation} from "../components/navbar"
import About from "../components/about"
import Hero from "../components/hero"
import Contact from "../components/contact"

export default () => (
  <Layout>
     <Navigation/>

  <Hero/>
    <FeaturedSection/>
    <About/>
    <Contact/>
  </Layout>
)
