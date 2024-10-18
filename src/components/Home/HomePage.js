import videoHomePage from '../../assets/video_homepage.mp4';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const HomePage = (props) => {
    // To check whether a user is authenticated
    const isAuthenticated = useSelector(state => state.user.isAuthenticated);
    const navigate = useNavigate(); // Redirect pages

    return (
        <div className="homepage-container">
            <video autoPlay muted loop>
                <source src={videoHomePage} type='video/MP4' />
            </video>

            <div className='homepage-content'>
                <div className='title-1'>Make your quiz feel worth taking</div>
                <div className='title-2'>Call quiz takers by their name and show different results, like specific product recommendations, based on how they answer your quiz.</div>
                <div className='title-3'>
                    {isAuthenticated === false ?
                        <button onClick={() => navigate('/login')}>Get started. It's free</button>
                        :
                        <button onClick={() => navigate('/users')}>Doing quiz now</button>
                    }

                </div>
            </div>

        </div>

    )
}

export default HomePage;