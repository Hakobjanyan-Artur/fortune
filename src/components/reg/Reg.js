import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import regImg from '../../images/reg.jpg'
import { BiHide, BiShow } from "react-icons/bi";


export default function Reg() {
    const [passShow, setPassShow] = useState(false)

    const navigate = useNavigate()
    const formRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        const name = formRef.current[0].value
        const lastName = formRef.current[1].value
        const phone = formRef.current[2].value
        const city = formRef.current[4].value
        const street = formRef.current[5].value
        const numHous = formRef.current[6].value
        const appartament = formRef.current[7].value
        const email = formRef.current[8].value
        const password = formRef.current[9].value
        const currentPassword = formRef.current[10].value


        console.log(numHous);
    }

    return (
        <div className="reg">
            <div className="reg-content">
                <div className='reg-form'>
                    <div className='reg-form-left'>
                        <img src={regImg} alt="" />
                    </div>
                    <div className='reg-form-right'>
                        <form
                            ref={formRef}
                            onSubmit={handleSubmit}
                        >
                            <h2>Добро пожаловать</h2>
                            <div className='form-inp'>
                                <span>*</span>
                                <input
                                    placeholder='Имя'
                                    type="text" />
                            </div>
                            <div className='form-inp'>
                                <input
                                    placeholder='Фамилия'
                                    type="text" />
                            </div>
                            <div className='form-inp'>
                                <span>*</span>
                                <span className='regTel'>+7</span>
                                <input
                                    placeholder='Телефон'
                                    pattern="[0-9]{10}" required
                                    type="text" />
                            </div>
                            <div className='form-inp'>
                                <input
                                    disabled={true}
                                    defaultValue="Московская область"
                                    type="text" />
                            </div>
                            <div className='form-inp'>
                                <span>*</span>
                                <input
                                    placeholder='Город'
                                    type="text" />
                            </div>
                            <div className='form-inp'>
                                <span>*</span>
                                <input
                                    placeholder='Улица'
                                    type="text" />
                            </div>
                            <div className='form-inp'>
                                <span>*</span>
                                <input
                                    placeholder='Дом'
                                    type="text" />
                            </div>
                            <div className='form-inp'>
                                <input
                                    placeholder='Квартира'
                                    type="text" />
                            </div>
                            <div className='form-inp'>
                                <span>*</span>
                                <input
                                    placeholder='Электронная почта'
                                    type="email" />
                            </div>
                            <div className='form-inp'>
                                <span>*</span>
                                <div className='inp-pass'>
                                    <input
                                        placeholder='Пароль'
                                        type={!passShow ? 'password' : 'text'} />
                                    <div
                                        onClick={() => setPassShow(!passShow)}
                                        className='icon-pass'>
                                        {!passShow ? <BiShow /> : <BiHide />}
                                    </div>
                                </div>
                            </div>
                            <div className='form-inp'>
                                <span>*</span>
                                <input
                                    placeholder='Подтвердите пароль'
                                    type={!passShow ? 'password' : 'text'} />
                            </div>
                            <button>Регистрация</button>
                        </form>
                        <div className='login-form-reg'>
                            <span>Уже есть аккаунт ? </span>
                            <span
                                onClick={() => navigate('/login')}
                                className='login-reg'>Войти</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}