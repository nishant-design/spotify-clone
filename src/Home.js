import Body from './Body';
import Footer from './Footer';
import './Home.css';
import Sidebar from './Sidebar';

function Home(){

    return(
        <div className="home">
            <div className="home__body">
                <Sidebar/>
                <Body />
            </div>

            <Footer/>
        </div>
    )
}

export default Home