/*import { HiMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'*/

import logo from '../Image/logo.png'

const NavbarItem = ({ title, classprops }) => {
    return (<li className={`listStyle ${classprops}`}>
        {title}
    </li>)
}

const features = ["Market", "Mining", "Tutorials", "Wallets"]

const Navbar = () => {
    return (<nav className='navbar'>
        <div>
            <img src={logo} alt="logo" className='navbar-logo' />
        </div>
        <ul className='flatenn'>
            {features.map((item, index) => (
                <NavbarItem key={item + index} title={item} />
            ))}
            {/*<li className='loginlist'>
                Login
            </li>*/}
        </ul>

    </nav>)
}

export default Navbar