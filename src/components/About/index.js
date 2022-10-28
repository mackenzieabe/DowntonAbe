import React from 'react';
import './about.css'
import Homepage from '../../assets/images/homepage.jpg'



export default function About() {


    return (

        <section>
            <div className='container'>
                <div className='homepage-text'>
                    <p className='intro'> Hi! I'm Mackenzie</p>
                    <p className="col text-center font-weight-bold">
                        I'm a full stack web developer based out of Charlotte, NC.
                        <br></br>
                        {/* </p>
                        <p className='focus'> */}
                        I have spent the last six months learning and growing as a developer
                         in UNCC's coding bootcamp. 
                         <br></br>
                        My focus has been creating web applications using MongoDB, Express.js, React.js, and Node.js.
                        <br></br>
                        </p>
                    

                </div>
                <div className='homepage-pic'>
                    <img src={Homepage} id='homepage' alt='my smiley face'></img>
                </div>
            </div>
        </section>

    )
}
