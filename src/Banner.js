import './Banner.css';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

function Banner(props){
    const recommendation = props.props;
    
    return(
        <div className="banner">
            <div className="banner__container">
                <img className="banner__img" src={recommendation.images[0].url} alt=""/>
                <h3>{recommendation.name}</h3>
            </div>
            <PlayCircleFilledIcon style={{fontSize : 42}} className="banner__playBtn" />
        </div>
    )
}

export default Banner;