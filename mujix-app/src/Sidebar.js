import React, { useState } from 'react'
import "./Sidebar.css"
import logo3 from './logo3.png'
import SidebarOption from './SidebarOption'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useDataLayerValue } from './DataLayer';
function Sidebar() {
  const [{playlists},dispatch]=useDataLayerValue();
  return (
    <div className='sidebar'>
      <div className="sidebar_logo">
      <img src={logo3} alt="logo3" />
      </div>
      <SidebarOption Icon={HomeIcon}title="Home"/>
      <SidebarOption Icon={SearchIcon} title="Search"/>
      <SidebarOption Icon={LibraryMusicIcon}title="Library"/>
      <br/>
      <strong className='sidebar__title'>PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map(playlist=>(
        <SidebarOption title={playlist.name}/>
      ))}
    </div>
  )
}

export default Sidebar
