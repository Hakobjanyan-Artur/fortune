import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../../images/logo.png'
import { CiSearch, CiShoppingBasket } from "react-icons/ci";
import { IoMdCloseCircle } from "react-icons/io";
import { useState } from 'react';

export default function Navbar() {
    const navigate = useNavigate()

    const [search, setSearch] = useState(false)

    return (
        <div className="navbar">
            <div className='container'>
                <div className='nav-link'>
                    <div
                        style={{
                            display: search ? 'none' : ''
                        }}
                        onClick={() => navigate('/')}
                        className='logo'>
                        <img src={logo} alt="SHOE FOR ALL" />
                    </div>
                    <div
                        style={{
                            display: !search ? 'none' : '',
                            padding: '20px 0 20px 0'
                        }}
                        className='search-form'>
                        <form>
                            <div className='nav-form-inp'>
                                <IoMdCloseCircle
                                    onClick={() => setSearch(false)}
                                    className='nav-form-close' />
                                <input
                                    placeholder='Поиск...'
                                    type="text" />
                            </div>
                        </form>
                    </div>
                    <div
                        style={{
                            display: search ? 'none' : ''
                        }}
                        className='sign-search'>
                        <button
                            onClick={() => navigate('login')}
                            className='nav-sign-btn'>Войти</button>
                        <div
                            onClick={() => navigate('basket')}
                            className='nav-basket'>
                            <div className='nav-b-count'>0</div>
                            <CiShoppingBasket className='nav-icon' />
                        </div>
                        <CiSearch
                            onClick={() => setSearch(true)}
                            className='nav-icon' />
                    </div>
                </div>
                <div className='links'>
                    <div><NavLink className={({ isActive }) => isActive ? 'click' : 'default'} to={'/men'}><span>Мужчинам</span></NavLink></div>
                    <div><NavLink className={({ isActive }) => isActive ? 'click' : 'default'} to={'/women'}><span>Женщинам</span></NavLink></div>
                    <div><NavLink className={({ isActive }) => isActive ? 'click' : 'default'} to={'/girls'}><span>Девочкам</span></NavLink></div>
                    <div><NavLink className={({ isActive }) => isActive ? 'click' : 'default'} to={'/boys'}><span>Мальчикам</span></NavLink></div>
                </div>
            </div>
        </div>
    )
}
