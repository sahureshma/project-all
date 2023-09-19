import React from 'react'
import './Leftpart.css'
import { AiFillAppstore, AiOutlineLogout  } from "react-icons/ai";
import {  RiPlantFill } from "react-icons/ri";
import {  FaPuzzlePiece } from "react-icons/fa";
import {  FcFaq } from "react-icons/fc";
import {   MdSupportAgent } from "react-icons/md";
import logo from '../../../assests/log.png';
import { Link } from 'react-router-dom';
function Leftpart() {

    return (
        <>
            <div className='sidebar'>
                <ul>
                    <li>
                <div className='imgcreate'>
                    <img src={logo} alt='image name' />
                </div>
                </li>
                <li>
                <a>
                    <div className='image'>
                        <img src='https://images.pexels.com/photos/4939592/pexels-photo-4939592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
                    </div><br/>
                    </a>
                    </li>
                    <li>
                      <a href="#" className='name'>
                    <div>
                    <h3 className='hh'>Ram Mohan</h3><br/>  
                    <p className='para'>romma@gmail.com</p>
                    </div>
                    </a>
                    </li> 
                <li>
                <a href="#" className='dsh'>
                < AiFillAppstore className='dash' />
              Dashbord
                </a>
                </li>
                <li>
                <a href='#' className='pl'>
                < RiPlantFill className='per' />
              Perk
                </a>
                </li>
                <li>
                <a href='#' className='puzz'>
                <FaPuzzlePiece className='puz' />
              Addons
                </a>
                </li>
                <li>
                <a href='#' className='far'>
                < FcFaq className='faq' />
              FAQ
                </a>
                </li>
                <li>
                <a href='#' className='md'>
                < MdSupportAgent className='support' />
              Support
                </a>
                </li>
                <li>
                
                  <Link to="/signin" className='out'>
                <AiOutlineLogout className='log' />
                Logout
                </Link>
                
                
                </li>
                </ul>
        </div >
        </>

    )
}

export default Leftpart