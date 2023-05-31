import React from 'react'
import './CreateTweet.css'
import { FaCalendarCheck, FaListAlt, FaRegImage, FaRegSmile } from 'react-icons/fa'
function CreateTweet() {
    return (
        <div className='create_container'>
            <div className='first'>
                <div className='img_create'>
                    <img src='https://images.pexels.com/photos/15654378/pexels-photo-15654378/free-photo-of-a-very-beautiful-street-dog.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load' />
                </div>
                <div className='inp_create'>
                    <input type='text'
                        placeholder="What's happening?"
                        className='inp_control' />
                </div>
            </div>
            <div className='second'>
                <div className="ic_create">
                <FaRegImage className='icon_tweet' />
                <FaListAlt className='icon_tweet' />
                <FaRegSmile className='icon_tweet' />
                <FaCalendarCheck className='icon_tweet' />
                </div>
                <div className="btn_create">
                    <a href=''>Tweet</a>
                </div>
            </div>
        </div>
    )
}

export default CreateTweet