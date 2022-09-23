import React from 'react';
import './home.css'


const Home = () => {
    return (
        <section>
            <div className='container'>
                <div className='homepage-text'>
                    <p className='intro'> hi, i'm mackenzie</p>
                    <p className='welcome'>welcome</p>
                </div>
                <div className='homepage-pic'>
                    {/* <div className='col'> */}
                    {/* <div className='float-right'> */}
                    <img src='/images/homepage.jpg' id='homepage' alt='my smiley face'></img>
                    {/* </div> */}
                    {/* </div> */}
                </div>
            </div>
        </section>
    )
}

export default Home 