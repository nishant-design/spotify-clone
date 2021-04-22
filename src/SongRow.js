import './SongRow.css';

function SongRow(prop){
    const item = prop.prop
    return(
        <div className="songRow">
            <div className="songRow__left">
                <div className="songRow__index">{prop.value}</div>
                <img src={item.album.images[0].url} alt="" className="songRow__album" />

                <div className="songRow__info">
                    <h3>{item.name}</h3>
                    <small>{item.artists[0].name}</small>
                </div>
            </div>

            <div className="songRow__center">
                {item.album.name}
            </div>

            <div className="songRow__right">
                {new Date(item.duration_ms).toISOString().slice(11,19) }
            </div>

        </div>
    )
}

export default SongRow;