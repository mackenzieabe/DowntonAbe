import React from 'react';
// import myMug from "../../assets/aboutme/mymug.JPG"

function About() {

    return (

        <section className="container-fluid my-5" >
          
            
            <div class="row">
                <div id="about-me" className="col text-center font-weight-bold">
                    <p>
                        Hi! I'm Mackenzie, a web developer based out of Charlotte, NC. I love to learn, create and problem-solve.
                        <br>
                        </br>
                        My interests include reading, gardening, animals and making things.</p>
                    <p>
                        <br>
                        </br>
                        You can reach me at mackenzieabe@gmail.com. Let's connect!
                    </p>
                </div>
                <div class="col-3">
                    <img src='/images/mymug.JPG' id="myface" className="m-6 rounded" style={{ width: "80%" }} alt="my face" />
                </div>

            </div>
        </section>
    )
}

export default About;
