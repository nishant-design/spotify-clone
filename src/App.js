import { useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import './App.css';
import Home from './Home';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import { useStateValue } from './DataLayer';

const spotify = new SpotifyWebApi();
console.log(spotify) 

function App() {
  const [{token, recommendation}, dispatch] = useStateValue();
  const id = recommendation?.playlists.items[3].id;
  console.log(id)

  useEffect(()=>{
    const hash = getTokenFromUrl();
    window.location.hash = "";

    const _token = hash.access_token;

    if(_token){
      dispatch({
        type: "SET_TOKEN",
        token: _token
      })

      spotify.setAccessToken(_token);

      spotify.getMe()
        .then(user => {   
          dispatch({
            type: "SET_USER",
            user : user
          })
        });

      spotify.getUserPlaylists()
        .then((playlists)=>{
          dispatch({
            type: "SET_PLAYLISTS",
            playlists : playlists
          })
        })

        spotify.getMyRecentlyPlayedTracks()
          .then((tracklist)=> {
            dispatch({
              type: "SET_RECENTLY_PLAYED",
              recently_played : tracklist
            })
          })

        spotify.getFeaturedPlaylists()
        .then(dog => {
          dispatch({
            type: "SET_RECOMMENDATION",
            recommendation : dog
          })
        })

        spotify.getPlaylistTracks("37i9dQZF1DX9OZisIoJQhG")
          .then((abc) => {console.log(abc)})
          .catch((e) => {console.log("error")})
    }
  }, []);

  return (
    <div className="app">
      {token ? <Home /> : <Login/>}
    </div>
  );
}

export default App;
