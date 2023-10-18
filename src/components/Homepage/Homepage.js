import React from 'react'
import Header from './Header/Header'
import Hero from './Hero/Hero'
import About from './About/About'
import Schedule from './Schedule/Schedule'
import Member from './Member/Member'
import Book from './Book/Book'
import Testimonial from './Testimonial/Testimonial'
function Homepage() {
  return (
    <div>
        <Header/>
        <main>
    
      <Hero/>
      <About/>
      <Schedule/>
      <Member/>
      <Book/>
      <Testimonial/>
     </main>
    
    </div>
  )
}

export default Homepage