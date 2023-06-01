import React from 'react'
import Whotofollow from './WhoToFollow/Whotofollow'
import SearchBar from './SearchBar/SearchBar';
import Twitterdata from'../../../DATA.json';


function RightBar() {
  return (
    <div style={{display:"flex",justifyContent:"end",alignItems:"flex-end",height:"100vh"}}>
        <SearchBar data={Twitterdata}/>
        <Whotofollow/>
    </div>
  )
}

export default RightBar

//     /* flex-direction: column; */
//     justify-content: end;
//     align-items: flex-end;
//     height: 100vh;