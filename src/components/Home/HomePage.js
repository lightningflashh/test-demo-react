import videoHomePage from '../../assets/video_homepage.mp4';

const HomePage = (props) => {
    return (
        <div className="homepage-container">
            <video autoPlay muted loop>
                <source src={videoHomePage} type='video/MP4' />
            </video>

            <div className='homepage-content'>
                <div className='title-1'>Make your quiz feel worth taking</div>
                <div className='title-2'>Call quiz takers by their name and show different results, like specific product recommendations, based on how they answer your quiz.</div>
                <div className='title-3'>
                    <button>Get started. It's free</button>
                </div>
            </div>

        </div>

    )
}

export default HomePage;