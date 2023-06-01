import React from 'react'
import Sidebar from './LeftNavBar/Sidebar'
import CreateTweet from './MiddleBar/CreateTweet'
import Tweets from './MiddleBar/Tweets'
import Post from './MiddleBar/Post'
import RightBar from './RightBar/RightBar'


function Home() {
  return (
    <div >
    <Sidebar/>
    <Tweets/>
    <CreateTweet/>
    <Post/>
    <RightBar/>
    </div>
  )
}

export default Home