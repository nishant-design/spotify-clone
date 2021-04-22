import './Login.css';
import { loginUrl } from './spotify';

function Login(){
    return(
        <div className="login">
            {/* logo img */}
            <img className="login__logo-img" src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg" alt="spotify-logo"></img>
            {/* login btn */}
            <a href={loginUrl} className="login__link">LOGIN</a>
        </div>
    )
}

export default Login;