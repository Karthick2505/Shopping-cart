import React from 'react';
import './contactform.css';

function SignUp() {

    window.onload = function () {
        (function () {
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
        })();
        (function () {
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
        })();
    }
    const open = () => {
        window.location.href = "/login";
    };
    const Signup = (
        <div class="modal__background">
            <div class="modal__window">
                <form class="auth-form" name="form-auth" method="post">
                    <h1>Sign Up</h1>
                    <div className='name'>
                        <label class="auth-form__label">
                            <span class="auth-form__placeholder">FirstName</span>
                            <input class="auth-form__input input-email" type="text" name="email" autocomplete="off" required />
                        </label>
                        <label class="auth-form__label">
                            <span class="auth-form__placeholder">LastName</span>
                            <input class="auth-form__input input-email" type="text" name="email" autocomplete="off" required />
                        </label>
                    </div>

                    <label class="auth-form__label">
                        <span class="auth-form__placeholder">Email</span>
                        <input class="auth-form__input input-email" type="email" name="email" autocomplete="off" required />
                    </label>
                    <label class="auth-form__label">
                        <span class="auth-form__placeholder">Set a Password</span>
                        <input class="auth-form__input input-password" type="password" name="password" autocomlete="off" required />
                        <div class="auth-form__toggler">
                            <i class="auth-form__icon"></i>
                            <input type="checkbox" class="auth-form__checkbox password-toggler" />
                        </div>
                    </label>
                    <label class="auth-form__label">
                        <span class="auth-form__placeholder">Retype Password</span>
                        <input class="auth-form__input input-password" type="password" name="password" autocomlete="off" required />
                    </label>
                    <div class="auth-form__answer"></div>

                    <input class="auth-form__submit" type="submit" value="Get started" />

                    <div class="auth-form__bottom">
                        <span>Already have an account.</span><a onClick={open}>Login</a>
                    </div>
                </form>

            </div>
        </div>);

    return Signup;
}
export default SignUp;