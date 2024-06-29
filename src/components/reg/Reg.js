import { useState } from 'react'
import man from '../../images/man.webp'
import woman from '../../images/woman.avif'
import back from '../../images/csinoBackground.jpg'
import { useNavigate } from 'react-router-dom'


export default function Reg() {
    const [gen, setGen] = useState(true)
    const [sog, setSog] = useState(false)

    const navigate = useNavigate()

    return (
        <div
            style={{
                background: `url(${back})`,
                backgroundPosition: 'center',
                WebkitBackgroundSize: 'cover',
            }}
            className="reg">
            <div className="reg-content">
                <form>
                    <div className="form-img">
                        <span
                            className='form-gen'
                            onClick={() => setGen(true)}
                            style={{
                                backgroundColor: gen ? '#5176D6' : '',
                                color: gen ? '#fff' : ''
                            }}
                        >Мужчина</span>
                        <label>
                            <img src={gen ? man : woman} alt="" />
                        </label>
                        <span
                            style={{
                                backgroundColor: gen ? '' : '#5176D6',
                                color: gen ? '' : '#fff'
                            }}
                            className='form-gen'
                            onClick={() => setGen(false)}
                        >Девушка</span>
                    </div>
                    <div className='form-inp'>
                        <span className='inp-txt'>Ваше имя</span>
                        <input type="text" />
                    </div>
                    <div className='form-inp'>
                        <span className='inp-txt'>Ваша Фамилия</span>
                        <input type="text" />
                    </div>
                    <div className='form-inp'>
                        <span className='inp-txt'>Электронная почта</span>
                        <input type="text" />
                    </div>
                    <div className='form-inp'>
                        <span className='inp-txt'>Придумайте пароль</span>
                        <input type="password" />
                    </div>
                    <div className='form-inp'>
                        <span className='inp-txt'>Подтвердите пароль</span>
                        <input type="password" />
                    </div>
                    <div className='form-check'>
                        <span
                            onClick={() => setSog(!sog)}
                            style={{
                                backgroundColor: !sog ? '' : '#5176D6'
                            }}
                            className='checkbox'></span>
                        <span>Я прочитал и согласен</span>
                        <span className='sog'>Пользовательское соглашение</span>
                    </div>
                    <button>Регистрация</button>
                    <div className='form-sign'>
                        <span>Уже Зарегестрирован</span>
                        <span
                            onClick={() => navigate('/')}
                            className='sign'>Войти</span>
                    </div>
                </form>
            </div>
        </div>
    )
}