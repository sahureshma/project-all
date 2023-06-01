import React from 'react'
import Sidebar from './LeftNavBar/Sidebar'
import CreateTweet from './MiddleBar/CreateTweet'
import Tweets from './MiddleBar/Tweets'
import Post from './MiddleBar/Post'

function Home() {
  return (
    <div >
    <Sidebar/>
    <Tweets/>
    <CreateTweet/>
    <Post/>
    
    </div>
  )
}

export default Home