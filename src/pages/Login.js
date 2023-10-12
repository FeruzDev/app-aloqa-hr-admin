import React from 'react';

const Login = () => {
    return (
        <div className="main-login">
            <div className="login-top-title">
                <p>Добро пожаловать в</p>
                <h2>Aloqa HR Admin</h2>
            </div>
            <div className="login-box">
                <div className="login-inputs">
                    <h3 >Авторизоваться</h3>
                    <div className="inputs-box">
                        <label  className="font-family-medium" htmlFor="mainLogin">Login</label>
                        <input type="text" id="mainLogin" placeholder="Ваш номер телефона или логин"/>
                        <p>Вы можете получить логин в отделе кадров
                            0/0</p>
                    </div>
                    <div className="inputs-box">
                        <label  className="font-family-medium" htmlFor="mainPassword">Пароль </label>
                        <input type="text" id="mainPassword" placeholder="Ваш пароль"/>
                    </div>
                    <button className="login-btn">Вход</button>
                </div>
            </div>
        </div>
    );
};

export default Login;