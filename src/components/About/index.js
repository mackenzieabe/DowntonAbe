import React from 'react';
import './about.css'



export default function About() {


    return (

        <section>
            <div className='container'>
                <div className='homepage-text'>
                    <p className='intro'> Hi! I'm Mackenzie</p>
                    <p className="col text-center font-weight-bold">
                        I'm  a web developer based out of Charlotte, NC. I love to learn, create and organize.
                        <br>
                        </br>
                        My interests include reading, gardening, and making things.</p>
                        <br></br>
                        <p className='welcome'>i'm glad you're here</p>

                </div>
                <div className='homepage-pic'>
                  <img src='/images/homepage.jpg' id='homepage' alt='my smiley face'></img>
                </div>
            </div>
        </section>

    )
}
 