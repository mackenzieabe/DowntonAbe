import React from 'react';
// import myMug from "../../assets/aboutme/mymug.JPG"

function About() {

    return (

        <section className="container-fluid my-5" >
            {/* <h2 id="about" className="">About Me</h2> */}
            <div class="row">
                <div class="col-lg-3">
                    <img src='/images/mymug.JPG' className="my-2 rounded" style={{ width: "70%" }} alt="my face" />
                </div>
                <div id="about-me" className="col-lg-6 text-center font-weight-bold">
                    <p>
                        Hi! I'm Mackenzie, a web developer based out of Charlotte, NC. I love to learn, create and problem-solve. My interests include reading, gardening, animals and making things.</p>
                    <p>
                        You can reach me at mackenzieabe@gmail.com. Let's connect!
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About;
