/*import { HiMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'*/

import logo from '../Image/logo2.png'

/*const NavbarItem = ({ title, classprops }) => {
    return (<a className={`listStyle ${classprops}`}>
        {title}
    </a>)
}*/

/*const features = ["Market", "Mining", "Tutorials", "Wallets"]*/

const Navbar = () => {
    return (<nav className='navbar'>
        <div>
            <img src={logo} alt="logo" className='navbar-logo' />
        </div>

        <div className='listStyle'>
            <a href='http://localhost:4500/' target='_blank' rel='noreferrer'>
                <i class="fa-solid fa-arrow-trend-up"></i>
            </a>
            <a href='http://localhost:3500/' target='_blank' rel='noreferrer'>
                <i class="fa-solid fa-gavel"></i>
            </a>
            <a href='http://localhost:4000/' target='_blank' rel='noreferrer'>
                <i class="fa-solid fa-wallet"></i>
            </a>
            <a href='http://localhost:4000/' target='_blank' rel='noreferrer'>
                <i class="fa-solid fa-house-chimney"></i>
            </a>
        </div>
    </nav>)
}

export default Navbar