import React from 'react';
import "./Body.css";
import Header from './Header';
import SongRow from './SongRow';
import { useDataLayerValue } from './DataLayer';
import logodis2 from "./logodis2.png"
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function Body({spotify}) {
   const [{discover_weekly},dispatch]=useDataLayerValue();
   const playPlaylist = (id) => {
    spotify
      .play({
        context_uri: `spotify:playlist:37i9dQZEVXcRRQxlX4eEa2?si=0b9c68287a774362`,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };


  return (
    <div className='body'>
      <Header spotify={spotify}/>
      <div className="body__info">
        <img src={logodis2} alt="dicoverWeekly" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon className='body__shuffle' onclick={playPlaylist}/>
          <FavoriteIcon fontSize='large'/>
          <MoreHorizIcon/>
        </div>
        {discover_weekly?.tracks.items.map((item)=>
        <SongRow playSong={playSong} track={item.track}/>
        )}
      </div>
    </div>
  )
}

export default Body
