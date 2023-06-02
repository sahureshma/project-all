import React from 'react'
import Sidebar from './LeftNavBar/Sidebar'
import CreateTweet from './MiddleBar/CreateTweet'
import Tweets from './MiddleBar/Tweets'
import Post from './MiddleBar/Post'
import RightBar from './RightBar/RightBar'


function Home() {
  return (
    <div style={{display:"flex"}}>  
    <div style={{width:"25%"}}><Sidebar/></div>  
    <div style={{display:"flex", flexDirection:"column", width:"50%"}}>
    <Tweets/>
    <CreateTweet/>
    <Post/>
    </div> 
    <div style={{width:"25%"}}>
    <RightBar/>
    </div>       
    
    
    
    </div>
  )
}

export default Home


// need to inline style display:"flex" by separate div inside it line no. 11
