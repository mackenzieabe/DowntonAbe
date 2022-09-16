import React, {useState} from 'react';
import { validateEmail } from '../../utils/helpers';
import { useEffect } from 'react';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');
    const [name, email, message] = formState;

    function handleSubmit(e) {
        e.prevent.default();
        if (!errorMessage) {
            setFormState({ [e.target.name]: [e.target.value] });
            console.log('Form', setFormState);
        }
    };

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            if (!isValid) {
                setErrorMessage('Your email is invalid');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`);
            } else {
                setErrorMessage('');

            }
        };
    };

    return (
        <section>
            <h1> Contact me </h1>
            {/* <form id='contact-form' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="test" defaultValue={name} onBlur={handleChange} name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" defaultValue={email} onBlur={handleChange} name="email" />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} onBlur={handleChange}
                        rows="5" />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text"> {errorMessage}</p>
                    </div>
                )} */}
                <form id='contact-form' onSubmit={handleSubmit}>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Name</label>
                <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="name"></input>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput2" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput2" placeholder="name@example.com"></input>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="submit">Submit</button>
            </form>
        </section >
    )
}


export default ContactForm; 