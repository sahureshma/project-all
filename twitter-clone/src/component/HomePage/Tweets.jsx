import React from 'react'
import CreateTweet from './CreateTweet'

import './Tweets.css'

function Tweets() {
    return (
        <>
        <div className="posts">
            <div className="posts_home">Home</div>
            <CreateTweet/>
        </div>
        </>
    )
}

export default Tweets