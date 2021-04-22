import { useStateValue } from './DataLayer';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import LibraryMusicOutlinedIcon from '@material-ui/icons/LibraryMusicOutlined';


function Sidebar(){
    const[{playlists}, dispatch] = useStateValue();

    return(
        <div className="sidebar">
            <img className="sidebar__logo" src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg" alt="spotify-logo"></img>

            <SidebarOption title="Home" Icon={HomeOutlinedIcon} />
            <SidebarOption title="Search" Icon={SearchOutlinedIcon}  />
            <SidebarOption title="Your Library" Icon={LibraryMusicOutlinedIcon} />

            <br/>
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr/>

            <div className="playlist_container">
                {playlists?.items?.map((item)=>{
                    return <SidebarOption title={item.name}/>
                })}
            </div>
        </div>
    )
}

export default Sidebar;