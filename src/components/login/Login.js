import { useNavigate } from 'react-router-dom';
import image from '../../images/shoes.avif'
import { BiHide, BiShow } from "react-icons/bi";
import { useState } from 'react';

export default function Login() {
    const navigate = useNavigate()

    const [passShow, setPassShow] = useState(false)

    return (
        <div className="login">
            <div className='login-content'>
                <div className='login-form'>
                    <div className='login-form-left'>
                        <img src={image} alt="" />
                    </div>
                    <div className='login-from-right'>
                        <form>
                            <h2>Вход в учетную запитсь</h2>
                            <div className='form-inp'>
                                <span>Почта</span>
                                <input type="email" />
                            </div>
                            <div className='form-inp'>
                                <span>Пароль</span>
                                <div className='inp-pass'>
                                    <input type={!passShow ? 'password' : 'text'} />
                                    <div
                                        onClick={() => setPassShow(!passShow)}
                                        className='icon-pass'>
                                        {!passShow ? <BiShow /> : <BiHide />}
                                    </div>
                                </div>
                            </div>
                            <div className='form-inp-pass'>
                                <span>Я не помню пароль</span>
                            </div>
                            <button>Войти</button>
                        </form>
                        <div className='login-form-reg'>
                            <span>В первые здесь? </span>
                            <span
                                onClick={() => navigate('/reg')}
                                className='login-reg'>Зарегестрироватся</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}