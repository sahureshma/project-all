import React from 'react'
import './Header.css'
import Navbar from '../Navbar/Navbar';
const Header=()=>{
    return(
        <div className='banner'>
            <Navbar/>
            <div className='banner-content'>
                <div className='container'>
                <div className='banner-text'>
                   
                    <h3>Food Delivery</h3>
                    <h1>Order Now</h1>
                    <p>Tasty is an informal way of expressing satisfaction with food. Almost like saying something is good. 
                        Delicious is more formal, but it also signifies
                         a greater enjoyment of food.</p>
                         <div className="banner__btn">
              <a href="" className="btn btn-smart">
                DEVLERY NOW
              </a>
            </div>
                </div>
            </div>

        </div>
        </div>
    )
}
export default Header;