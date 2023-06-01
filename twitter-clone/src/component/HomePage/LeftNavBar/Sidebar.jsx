import React from 'react'
import './Sidebar.css'
import { FaHome, FaHashtag, FaRegBell, FaTwitter, FaEnvelope, FaRegBookmark, FaClipboardList, FaUserAlt, FaMehBlank } from 'react-icons/fa'
import Tweets from '../MiddleBar/Tweets'



function Sidebar() {
  return (
    <>
    <div className='sidebar'>
      <ul>
        <li>
          <a>
            <FaTwitter className='icon logo' />
          </a>
        </li>
        <li>
          <a>
            <FaHome className='icon logo' />
            Home
          </a>
        </li>
        <li>
          <a>
            <FaHashtag className='icon' />
            Explore
          </a>
        </li>
        <li>
          <a>
            <FaRegBell className='icon' />
            Notifications
          </a>
        </li>
        <li>
          <a>
            <FaEnvelope className='icon' />
            Messages
          </a>
        </li>
        <li>
          <a>
            <FaRegBookmark className='icon' />
            Bookmarks
          </a>
        </li>
        <li>
          <a>
            <FaClipboardList className='icon' />
            Lists
          </a>
        </li>
        <li>
          <a>
            <FaUserAlt className='icon' />
            Profile
          </a>
        </li>
        <li>
          <a>
            <FaMehBlank className='icon' />
            More
          </a>
        </li>
        <div className="sidebar_btn">
          <a href=''>profile</a>
        </div>

      </ul>
    </div>
    <div>
      {/* <Tweets/> */}
    </div>
    </>
    
  )
}

export default Sidebar