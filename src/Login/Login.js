import React from 'react';
import { accessUrl } from '../Helper/spotify';
import './Login.css'

const Login = () => {
    return (
        <div className="login">
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt="" />
            <a href={accessUrl}>Login With Sotify</a>
        </div>
    )
}

export default Login;