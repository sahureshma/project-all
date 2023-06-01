import React, { useState } from 'react'
import './Post.css'
import { FaComment, FaHeart, FaLeaf, FaRegChartBar, FaRegCheckCircle, FaRetweet } from 'react-icons/fa'
import item from '../../../DATA1.json'
import { useEffect } from 'react'

function Post() {

  const [data1, setData] = useState([])
  


  useEffect(() => {
    setData(item);

  }, []);



  return (
    <>
      {
        data1.map((item)=>(

       

        <div className='post_post'>

          <div className="first_post">
            <div className="first_img">
              <img src={item.image_url}  />
            </div>
            <div className="post_name">
              <strong>{item.user_name}</strong> <FaRegCheckCircle className='vrf' />
            </div>
            <div className="post_username">
             {item.username} <span>{item.post_date}</span>
            </div>
          </div>
          <div className="post_detail">
            <div className="post_detail_msg">
             {item.desc}
            </div>
            <div className="post_detail_img">
              <img src={item.img_post} alt='none' />
            </div>
            <div className="comment">
              <span><FaComment className='com' />{item.likes} </span>
              <span><FaHeart />{item.comments}</span>
              <span><FaRetweet />{item.retweets}</span>
              <span> <FaRegChartBar />{item.views} </span>
            </div>
          </div>

        </div>
       ))}
    </>
  )
}

export default Post