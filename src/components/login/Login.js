import man from '../../images/man.webp'
import back from '../../images/csinoBackground.jpg'
import { GrHide } from "react-icons/gr";
import { BiShow } from "react-icons/bi";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [hide, setHide] = useState(false)
    const [check, setCheck] = useState(false)

    const navigate = useNavigate()

    return (
        <div
            style={{
                background: `url(${back})`,
                backgroundPosition: 'center',
                WebkitBackgroundSize: 'cover',
            }}
            className="login">
            <div className="form-content">
                <form>
                    <div className="form-contet-img">
                        <img src={man} alt="" />
                    </div>
                    <div className="form-inp">
                        <span className='inp-txt'>Введите электронную почту</span>
                        <input
                            placeholder='Email'
                            type="email" />
                    </div>
                    <div className="form-inp">
                        <span className='inp-txt'>Введите пароль</span>
                        <div className='form-inp-pass'>
                            <input
                                placeholder='Password'
                                type={!hide ? 'password' : 'text'} />
                            <span
                                onClick={() => setHide(!hide)}
                                className='pass-hide'>
                                {
                                    hide ? <GrHide /> : <BiShow />
                                }
                            </span>
                        </div>
                    </div>
                    <div className="remember">
                        <span
                            style={{
                                backgroundColor: check ? '#5176D6' : ''
                            }}
                            onClick={() => setCheck(!check)}
                            className='checkbox'></span>
                        <span className='member-txt'>Запомнить</span>
                    </div>
                    <button>Войти</button>
                    <div className="sign-up">
                        <span
                            onClick={() => navigate('reg')}
                            className="sign-txt">Зарегестрироваться</span>
                    </div>
                    <span className='guest'>Попробовать как Гость</span>
                </form>
            </div>
        </div>
    )
}