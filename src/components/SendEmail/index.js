import React, { useState, useRef } from 'react';
import emailjs from "emailjs-com"


export const Contact = (props) => {
    const form = useRef();

    const [error, setError] = useState('')


    const sendEmail = (e) => {
        e.preventDefault();

        if(document.querySelector('.userName').value === '' || document.querySelector('.userEmail') === '') {
            setError('All inputs are required!')
            return
        }

        console.log(form.current)

        emailjs.sendForm('service_y8hv959', 'template_7rytmg4', form.current, 'nUNfDds0PBESJrg33')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            }
            )
        e.target.reset();

    }

    return (
        <div>
            <div className="container">
                <form ref={form} onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control userName" placeholder="Name" name="name" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control userEmail" placeholder="Email Address" name="email" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control userSubject" placeholder="Subject" name="subject" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control userMessage" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Send Message"></input>
                        </div>
                        <p className="col-8 pt-3 mx-auto">{error}</p>
                    </div>
                </form>
            </div>
        </div>
    )
};


export default Contact;