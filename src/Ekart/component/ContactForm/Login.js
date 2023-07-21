import React, { useState, useEffect } from 'react';
import './contactform.css';
import { useNavigate } from 'react-router-dom';

function ContactForm(props) {
    const arr = props.userdata;
    const loggedin = props.loggedin;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        focus()
        togglers()
    }, []);

    function focus() {
        const inputText = document.querySelectorAll('.auth-form__input');
        inputText.forEach(
            function (input) {
                input.addEventListener('focus',
                    function () {
                        this.classList.add('focus');
                        this.parentElement.querySelector('.auth-form__placeholder').classList.add('focus');
                    });
                input.addEventListener('blur',
                    function () {
                        this.classList.remove('focus');
                        if (!this.value) {
                            this.parentElement.querySelector('.auth-form__placeholder').classList.remove('focus');
                        }
                    });
            });
    }

    function togglers() {
        const togglers = document.querySelectorAll('.password-toggler');

        togglers.forEach(
            function (checkbox) {
                checkbox.addEventListener('change',
                    function () {
                        const toggler = this.parentElement,
                            input = toggler.parentElement.querySelector('.input-password'),
                            icon = toggler.querySelector('.auth-form__icon');

                        if (checkbox.checked) {
                            input.type = 'text';
                            icon.classList.add('la-eye-slash');
                        }
                        else {
                            input.type = 'password';
                            icon.classList.remove('la-eye-slash');
                        }
                    });
            });
    }
    const handleSubmit = event => {
        event.preventDefault(); // 👈️ prevent page refresh
        // console.log(` ${email} ${password} `);
        arr.map((val) => {
            if (val.email === email && val.password === password) {
                props.updateloginstatus(true)
                props.updatelogindetails(val)
            }
        })
        if (loggedin===true) {
            navigate('/products')
        } else {
            // 👇️ clear all input values in the form
            setEmail('');
            setPassword('');
        }
    };


    const open = () => {
        navigate('/')
    };
    const contactForm = (

        <div className="modal__background">
            <div className="modal__window">
                <form class="auth-form" name="form-auth"  onSubmit={handleSubmit}>
                    <h1>Login In</h1>
                    <label class="auth-form__label">
                        <span class="auth-form__placeholder">Email</span>
                        <input class="auth-form__input input-email" value={email}
                            onChange={event => setEmail(event.target.value)} type="email" name="email" autocomplete="off" required />
                    </label>
                    <label class="auth-form__label">
                        <span class="auth-form__placeholder">Password</span>
                        <input class="auth-form__input input-password" value={password}
                            onChange={event => setPassword(event.target.value)} type="password" name="password" autocomlete="off" required />
                        <div class="auth-form__toggler">
                            <i class="auth-form__icon"></i>
                            <input type="checkbox" class="auth-form__checkbox password-toggler" />
                        </div>
                    </label>
                    <div class="auth-form__answer"></div>

                    {/* <input class="auth-form__submit" onClick={forms} type="submit" value="Login" /> */}
                    <button className="auth-form__submit" type="submit">Login</button>

                    <div class="auth-form__bottom">
                        <span>Have no account?</span><a onClick={open}>Register</a>
                    </div>
                </form>
            </div>
        </div>

    );

    return contactForm;
}
export default ContactForm;