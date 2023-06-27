import React from 'react'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import { Grid, Slider } from "@mui/material";
import "./Footer.css";


function Footer() {
  return (
    <div className='footer'>
      <div className="footer__left">
        <img className='footer__albumLogo' src="https://sg-res.9appsdownloading.com/sg/res/jpg/76/05/a3e2478c7f6c2d5bd5fc5e5da176-qcg.jpg?x-oss-process=style/mq200" alt="albumlogo" />
        <div className="footer__songInfo">
          <h4>Yeahhh!</h4>
          <p>XYZabcd</p>
        </div>
      </div>
      <div className="footer__middle">
          <ShuffleIcon className='footer__green'/>
          <SkipPreviousIcon  className='footer__icon'/>
          <PlayCircleIcon fontSize='large' className='footer__icon'/>
          <SkipNextIcon className='footer__icon'/>
          <RepeatIcon className='footer__green'/>
      </div>
      <div className="footer__right">
      <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Footer
