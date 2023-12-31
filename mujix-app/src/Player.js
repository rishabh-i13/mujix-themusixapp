import React from 'react'
import "./Player.css";
import Sidebar from "./Sidebar";
import Body from './Body';
import Footer from './Footer';

function Player({spotify}) {
  return (
    <div className='player'>
    <div className="player__body">
      <Sidebar/>
      {/*Sidebar*/}
      <Body spotify={spotify}/>
      {/*body */}
    </div>
    <Footer spotify={spotify}/>     {/*footer */}
    </div>
  )
}

export default Player
