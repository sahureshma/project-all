import React from 'react'
import Whotofollow from './WhoToFollow/Whotofollow'
import SearchBar from './SearchBar/SearchBar';
import Trending from './Trending/trending';
import Twitterdata from'../../../DATA.json';


function RightBar() {
  return (
    <div style={{display:"flex",flexDirection:"column",alignContent:"center",height:"auto",border:"1px solid lightgray"}}>
        <SearchBar data={Twitterdata}/>
        <Trending/>
        <Whotofollow/>
    </div>
  )
}

export default RightBar;