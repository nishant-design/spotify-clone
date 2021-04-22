import './Body.css';
import Header from './Header';
import SongRow from './SongRow';
import { useStateValue } from './DataLayer';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Banner from './Banner';

function Body(){
    const [{ recently_played, recommendation}, dispatch] = useStateValue();

    return(
        <div className="body">
            <Header />

            <div className="body__banner">
                {recommendation?.playlists?.items.slice(0,6).map((item)=>{
                    return <Banner props={item} />
                })}
            </div>

            <h2 className="body__recentlyPLayed">Recently Played</h2>

            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilledIcon  style={{fontSize: 54}} className="body__playBtn" />
                    <FavoriteBorderIcon style={{fontSize: 32}} className="body__favIcon" />
                    <MoreHorizIcon className="body__showMore"/>
                </div>
            </div>

            <div className="body__titleBar">
                <div className="title">
                    <span>#</span>
                    <p><small>TITLE</small></p>
                </div>

                <small className="artist">ALBUM</small>

                <small>DURATION</small>
            </div>

            <div className="body__songList">
                {recently_played?.items.map((item, i)=> {
                    return <SongRow prop={item.track} value={i+1} />
                })}
            </div>
            
        </div>
    )
}

export default Body;