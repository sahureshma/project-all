import React from 'react'

import './Tweets.css';
function Tweets() {
    return (
        <>
        {/* <div className="posts"> */}
            <div className="posts_home">
                <div style={{margin:"10px 10px"}}>Home</div>
            <div className='posts_home1'>
                <p style={{fontSize:"18px",border:"0px","text-decoration": "underline", "text-decoration-color":"rgba(0, 149, 255, 0.688)", "text-decoration-thickness":"1.1vh"}}>For you</p>
                <p>Following</p>
            </div>
            </div>
        {/* </div> */}
        </>
    )
}

export default Tweets