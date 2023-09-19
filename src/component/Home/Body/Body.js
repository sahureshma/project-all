import React from 'react'
import Top from '../Top/Top'
import Pricing from '../Middlepart/Price'
import Starter from '../Middlepart/Starter/Starter'
import './Body.css';
function Body() {
  return (
    <div className='top'>
        <Top/>
    <div className='price'>
        <Pricing/>
        <Starter/>
        </div>
        
    </div>
  )
}

export default Body