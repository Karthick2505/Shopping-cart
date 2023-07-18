import React from 'react';
import './contactform.css';

function ContactForm() {
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

        (function () {
            const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                validPassword = '123';

            document.forms['form-auth'].addEventListener('submit',
                function (e) {
                    e.preventDefault();

                    const answerContainer = this.querySelector('.auth-form__answer');
                    const email = this.elements.email.value;
                    const password = this.elements.password.value;
                    const placeholders = document.querySelectorAll('.auth-form__placeholder');

                    if (email.match(validEmail) && password === validPassword) {
                        window.location.href = "/";
                    }
                    else {
                        placeholders.forEach(
                            function (placeholder) {
                                placeholder.classList.remove('focus');
                            });
                        this.elements.email.value = '';
                        this.elements.password.value = '';
                        answerContainer.innerHTML = '<span class="text-danger">invalid email or password</span>';
                    }
                });
        })();
    };
    

  const open = () => {
    window.location.href = "/signup";
  };
    const contactForm = (
        <div class="modal__background">
            <div class="modal__window">
                <form class="auth-form" name="form-auth" method="post">
                    <h1>Login In</h1>
                    <label class="auth-form__label">
                        <span class="auth-form__placeholder">Email</span>
                        <input class="auth-form__input input-email" type="email" name="email" autocomplete="off" required />
                    </label>
                    <label class="auth-form__label">
                        <span class="auth-form__placeholder">Password</span>
                        <input class="auth-form__input input-password" type="password" name="password" autocomlete="off" required />
                        <div class="auth-form__toggler">
                            <i class="auth-form__icon"></i>
                            <input type="checkbox" class="auth-form__checkbox password-toggler" />
                        </div>
                    </label>
                    <div class="auth-form__answer"></div>

                    <input class="auth-form__submit" type="submit" value="Login" />

                    <div class="auth-form__bottom">
                        <span>Have no account?</span><a onClick={open}>Create new</a>
                    </div>
                </form>
            </div>
        </div>
    );

    return contactForm;
}
export default ContactForm;