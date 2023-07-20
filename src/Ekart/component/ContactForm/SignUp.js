import { React, useEffect, useState } from 'react';
import './contactform.css';
import { useNavigate } from 'react-router-dom';

function SignUp(props) {
    const arr = props.userdata;
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');

    function person(fname, lname, email, pass) {
        this.firstname = fname;
        this.lastname = lname;
        this.email = email;
        this.password = pass;
    }
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
        const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        // console.log(` ${firstName} ${lastName} ${email} ${password} ${repassword}`);

        if (email.match(validEmail) && password === repassword) {
            arr.push(new person(firstName, lastName, email, password))
            console.log(arr)
            props.updateuserdata(arr)
            navigate('/login')
        } else {

            // 👇️ clear all input values in the form
            setFirstName('');
            setLastName('');
            setEmail('');
            setPassword('');
            setRepassword('');
            // answerContainer.innerHTML = '<span class="text-danger">invalid email or password did not match</span>';
        }
    };
    // function forms() {
    //     document.forms['form-auth'].addEventListener('submit', function (e) {
    //         e.preventDefault();
    //         const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //         const answerContainer = this.querySelector('.auth-form__answer');
    //         const FirstName = this.elements.firstname.value;
    //         const LastName = this.elements.lastname.value;
    //         const Email = this.elements.email.value;
    //         const Password = this.elements.password.value;
    //         const Repassword = this.elements.repassword.value;
    //         const placeholders = document.querySelectorAll('.auth-form__placeholder');

    //         if (Email.match(validEmail) && Password === Repassword) {
    //             arr.push(new person(FirstName, LastName, Email, Password))

    //             props.updateuserdata(arr)
    //             navigate('/login')
    //         }
    //         else {
    //             placeholders.forEach(function (placeholder) {
    //                 placeholder.classList.remove('focus');
    //             });
    //             this.elements.firstname.value = '';
    //             this.elements.lastname.value = '';
    //             this.elements.email.value = '';
    //             this.elements.password.value = '';
    //             this.elements.repassword.value = '';
    //             answerContainer.innerHTML = '<span class="text-danger">invalid email or password did not match</span>';
    //         }
    //     });
    // }

    const open = () => {
        window.location.href = "/login";
    };

    const Signup = (
        <div className="modal__background">
            <div className="modal__window">
                <form className="auth-form" name="form-auth" onSubmit={handleSubmit} >
                    <h1>Sign Up</h1>
                    <div className='name'>
                        <label className="auth-form__label">
                            <span className="auth-form__placeholder">FirstName</span>
                            <input className="auth-form__input input-email " type="text" name="firstname"
                                value={firstName} onChange={event => setFirstName(event.target.value)} autoComplete="off" />
                        </label>
                        <label className="auth-form__label">
                            <span className="auth-form__placeholder">LastName</span>
                            <input className="auth-form__input input-email "
                                value={lastName} onChange={event => setLastName(event.target.value)} type="text" name="lastname" autoComplete="off" />
                        </label>
                    </div>

                    <label className="auth-form__label">
                        <span className="auth-form__placeholder">Email</span>
                        <input className="auth-form__input input-email" value={email}
                            onChange={event => setEmail(event.target.value)} type="email" name="email" autoComplete="off" required />
                    </label>
                    <label className="auth-form__label">
                        <span className="auth-form__placeholder">Set a Password</span>
                        <input className="auth-form__input input-password" value={password}
                            onChange={event => setPassword(event.target.value)} type="password" name="password" autoComplete="off" required />
                        <div className="auth-form__toggler">
                            <i className="auth-form__icon"></i>
                            <input type="checkbox" class="auth-form__checkbox password-toggler" />
                        </div>
                    </label>
                    <label className="auth-form__label">
                        <span className="auth-form__placeholder">Retype Password</span>
                        <input className="auth-form__input input-password " value={repassword}
                            onChange={event => setRepassword(event.target.value)} type="password" name="repassword" autoComplete="off" required />
                    </label>
                    <div className="auth-form__answer"></div>

                    {/* <input className="auth-form__submit" type="submit" value="Get started" /> */}
                    <button className="auth-form__submit" type="submit">Get started</button>

                    <div className="auth-form__bottom">
                        <span>Already have an account.</span><a onClick={open}>Login</a>
                    </div>
                </form>

            </div>
        </div>
    );

    return Signup;
}
export default SignUp;