import './Footer.css';
import ShuffleOutlinedIcon from '@material-ui/icons/ShuffleOutlined';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import PlayCircleFilledWhiteOutlinedIcon from '@material-ui/icons/PlayCircleFilledWhiteOutlined';
import RepeatOutlinedIcon from '@material-ui/icons/RepeatOutlined';
import VolumeDownRoundedIcon from '@material-ui/icons/VolumeDownRounded';
import PlaylistPlayRoundedIcon from '@material-ui/icons/PlaylistPlayRounded';
import { Grid, Slider } from '@material-ui/core';

function Footer(){
    return(
        <div className="footer">
            <div className="footer__left">
                <img className="footer__albumLogo" src="https://www.6amgroup.com/wp-content/uploads/2015/12/deadmau5-neon-logo-e1451279740432.jpg" alt=""/>
                <div className="footer__songInfo">
                    <h4>Yeah!</h4>
                    <p>Usher</p>
                </div>
            </div>

            <div className="footer__center">
                <ShuffleOutlinedIcon className="footer__green"/>
                <SkipPreviousIcon className="footer__icon"/>
                <PlayCircleFilledWhiteOutlinedIcon fontSize="Large" className="footer__icon" />
                <SkipNextIcon className="footer__icon"/>
                <RepeatOutlinedIcon className="footer__green"/>
            </div>

            <div className="footer__right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayRoundedIcon/>
                    </Grid>
                    <Grid item>
                        <VolumeDownRoundedIcon/>
                    </Grid>
                    <Grid item xs>
                        <Slider> </Slider>
                    </Grid>
                </Grid>
            </div>

        </div>
    )
}

export default Footer;