import React from 'react'
import './Post.css'
import { FaComment, FaHeart, FaLeaf, FaRegChartBar, FaRegCheckCircle, FaRetweet } from 'react-icons/fa'
import item from '../../../DATA1.json'

function Post() {
  return (
    <div className='post_post'>
        <div className="first_post">
            <div className="first_img">
              <img src='https://pbs.twimg.com/profile_images/1562753500726976514/EPSUNyR3_400x400.jpg' alt='profileImg'/>
            </div>

            <div className="post_name">
              <strong>Virat Kohli</strong> <FaRegCheckCircle className='vrf'/>
            </div>
            <div className="post_username">
              @iamVkohli<span>10m</span>
              </div>
        </div>
        <div className="post_detail">
          <div className="post_detail_msg">
          Happy Holi to all 🙌
          </div>
          <div className="post_detail_img">
            <img src='https://pbs.twimg.com/media/Fqn_gbxWcAMbsFq?format=jpg&name=small' alt='none'/>
          </div>
          <div className="comment">
            <span><FaComment className='com'/>50K</span>
            <span> <FaRegChartBar />70K</span>
            <span><FaHeart/>40K</span>
            <span><FaRetweet/>12K</span>
          </div>
        </div>

    </div>
  )
}

export default Post