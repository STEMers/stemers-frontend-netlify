import { Link } from 'react-router-dom';
import './styles.css';
import photo from '../../json-data/home/cristi.png' 
import logo from '../../json-data/nav/logo.png';
import { FaBars } from 'react-icons/fa';
import { FaAngleDown } from 'react-icons/fa';

export default function Header () {

    return( 
        <header className="header">                      
            <nav className='navbar'>
                <Link to="/"><img src={logo} alt="logo" className='logo'/></Link> 
                <ul className='nav-right-unloggedIn'>
                   <Link to="/signin" style={{textDecoration:'none'}}><li>SignIn/SignUp</li></Link>
                </ul>
                <ul className='nav-right-loggedIn'>
                    <li><img src={photo} alt="avatar"/></li>
                    <li className='angle-down'><FaAngleDown /></li>
                        <ul className='dropdown-list'>
                            <li>my profile</li>
                            <li>change password</li>
                            <li>logout</li>
                        </ul>
                </ul>
                <ul className='toggle-menu'>
                    <li><button><FaBars /></button></li>
                </ul>
            </nav>            
        </header>
    )
}