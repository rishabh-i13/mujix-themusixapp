import React, { useEffect, useState } from "react";
import Login from './Login';
import './App.css';
import { getTokenFromUrl } from "./spotify";
import Player from "./Player";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {

  const [{user,token},dispatch]=useDataLayerValue();

//Run code based upon a condition -> this is the use of useEffect
useEffect(()=>{
    const hash=getTokenFromUrl();
    window.location.hash="";
    const _token=hash.access_token;
    if(_token){
      dispatch({
        type:"SET_TOKEN",
        token:_token
      });

      //working with the installed spotify web api
      spotify.setAccessToken(_token); // connnect spotify to react
      spotify.getMe().then((user)=>{ //getMe()->user ka sara detail nikal rah hai

        dispatch({
          type: 'SET_USER',
          user:user,
        })
      }); 
      spotify.getUserPlaylists(user?.id).then((playlists)=>{
        dispatch({
          type:"SET_PLAYLISTS",
          playlists:playlists,
        })
      });
    
      spotify.getPlaylist("37i9dQZEVXcRRQxlX4eEa2?si=0b9c68287a774362").then((response)=>
      dispatch({
          type:"SET_DISCOVER_WEEKLY",
          discover_weekly:response,
      })
      )
      spotify.getMyTopArtists().then((response) =>
      dispatch({
        type: "SET_TOP_ARTISTS",
        top_artists: response,
      })
    );

    dispatch({
      type: "SET_SPOTIFY",
      spotify: spotify,
    });

    spotify.getMe().then((user) => {
      dispatch({
        type: "SET_USER",
        user,
      });
    });

    spotify.getUserPlaylists().then((playlists) => {
      dispatch({
        type: "SET_PLAYLISTS",
        playlists,
      });
    });
  }
}, [token, dispatch]);


  // console.log('👨',user);
  // console.log('🚲',token);
  
  return (
    <div className="app">
    {
      token? (
        <Player spotify={spotify}/>  // use of turnary operator
      ):
      (
        <Login/>
      )
    } 
    </div>
  );
}

export default App;
