import coins from '../../images/coins.png'
import fortune from '../../images/fortune.png'
import man from '../../images/man.webp'


export default function Navbar() {
    return (
        <div className="navbar">
            <div className='container'>
                <div className="navbar-user">
                    <div className='nav-us-img'>
                        <img src={man} alt="" />
                    </div>
                    <span>User name</span>
                </div>
                <div className="navbar-spiner">
                    <div className='nav-spiner-img'>
                        <img src={fortune} alt="" />
                    </div>
                    <div className='nav-spin-info'>
                        <span className='nav-s-txt'>Бесплатное врашение через</span>
                        <span className='nav-s-time'>00:00:00</span>
                    </div>
                </div>
                <div className="navbar-coins">
                    <img src={coins} alt="" />
                    <span className='coin-count'>500</span>
                    <span>Монеты</span>
                </div>
            </div>
        </div>
    )
}
