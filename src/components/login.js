import React from 'react';
import {Link} from "react-router-dom";
import {getAlbumData} from "../redux/reducers/images";
import {useDispatch} from "react-redux";

const Login = () => {
    const facebookLogo = 'https://i.pinimg.com/originals/af/9c/cb/af9ccb82cd058e86d5a487223980e31c.png'
    const dispatch = useDispatch();
    return (
        <div className='login-page'>
            <form action="" className='login-form'>
                <img className="inst-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1024px-Instagram_logo.svg.png" alt=""/>
                <input type="text" placeholder='Номер телефона, или имя пользователя'/>
                <input type="text" placeholder='Пароль'/>
                <Link className="login-btn" to='/albums' onClick={() => dispatch(getAlbumData())}>Войти</Link>
                <span  className="or-span">-------------------   или   ------------------</span>
                <Link to='/' className="facebook-link"><img className="facebook-logo" src={facebookLogo} alt=""/>Войти через Facebook</Link>
                <Link to='/' className="password-link">Забыли пароль?</Link>

            </form>

            <div className="auth-block">

                <span className="auth-span">У вас еще нет аккаунта?<Link className="auth-link" to="/">Зарегестриваться</Link></span>
            </div>

        </div>
    );
};

export default Login;