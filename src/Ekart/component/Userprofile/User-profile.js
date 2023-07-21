
import React from 'react';
import './user.css';

import { useNavigate } from 'react-router-dom';

function Userprofile(props) {
    const userdetail = props.logindetails;
    const navigate = useNavigate();
    const logoff = () => {
        props.updatelogindetails([]);
        props.updateloginstatus(false)
        console.log(userdetail)
    }
    const login = () => {
        navigate('/login')
    }
    const user = (
        <section class="profile">
            <header class="header">
                {userdetail === [] ?
                    <div class="details">
                        <img src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=b38c22a46932485790a3f52c61fcbe5a" alt="John Doe" class="profile-pic" />
                        <h1 class="heading">{userdetail.firstname}</h1>
                        <div class="stats">
                            <div class="col-4">
                                <h4>{props.cartcount}</h4>
                                <p>CartItems</p>
                            </div>
                            <div class="col-4">
                                <h4>{props.whishlistcount}</h4>
                                <p>WhishlistItems</p>
                            </div>
                            <div class="col-4">
                                <h4>5</h4>
                                <p>Ordered</p>
                            </div>
                        </div>
                        <div>
                            <button onClick={logoff}>Log out</button>
                        </div>
                    </div>
                    :
                    <div>
                        <button onClick={login}>Log in</button>
                    </div>
                }

            </header>
        </section>);
    return user;
}
export default Userprofile
