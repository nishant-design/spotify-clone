

export const authEndPoint = "https://accounts.spotify.com/authorize";

// const redirectUrl = "https://spotify-4e923.web.app/";
const redirectUrl = "http://localhost:3000/"

const clientId =  "e1555c4359b945f393c7b21691e6b36b";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
];

export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`

export const getTokenFromUrl = ()=>{
    return window.location.hash
        .substring(1)
        .split("&")
        .reduce((initial, item)=>{
            let parts = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1]);

            return initial;
        }, {});
}