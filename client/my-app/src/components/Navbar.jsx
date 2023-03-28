/*import { HiMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'*/

import logo from '../Image/logo.png'

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
            <a href='http://localhost:4500/' target='_blank' rel='noreferrer'>Markets</a>
            <a href='http://localhost:3500/' target='_blank' rel='noreferrer'>Mining</a>
            <a href='http://localhost:4000/' target='_blank' rel='noreferrer'>Balance</a>
            <a href='http://localhost:4000/' target='_blank' rel='noreferrer'>Home</a>
        </div>
    </nav>)
}

export default Navbar