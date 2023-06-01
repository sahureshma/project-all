import React from 'react'
import Whotofollow from './WhoToFollow/Whotofollow'

function RightBar() {
  return (
    <div style={{display:"flex",justifyContent:"end",alignItems:"flex-end",height:"100vh"}}>
        <Whotofollow/>
    </div>
  )
}

export default RightBar

//     /* flex-direction: column; */
//     justify-content: end;
//     align-items: flex-end;
//     height: 100vh;