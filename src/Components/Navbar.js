import React from 'react';
import '../Styling/Navbar.css';
import { Nav, NavLink } from 'react-router-dom';
function Navbar() {
    return (
        <div>
            <nav  className='navbar'>
                <div className='nav_container'>
                    {/* logo */}
                    <NavLink exact to='/' className='nav_image'>
                        <img className='nav_img'
                        src='./ImageAssets/tesla.svg'
                        alt='' />
                    </NavLink>

                    {/* central page links */}
                    <ul className='nav_menuCentral'>
                        <li className='nav_item'>
                            <NavLink exact to='/ModelS' className='nav_link'>
                                Model S
                            </NavLink>
                        </li>
                        <li className='nav_item'>
                            <NavLink exact to='/Model3' className='nav_link'>
                                Model 3
                            </NavLink>
                        </li>                        
                        <li className='nav_item'>
                            <NavLink exact to='/ModelX' className='nav_link'>
                                Model X
                            </NavLink>
                        </li>                        
                        <li className='nav_item'>
                            <NavLink exact to='/ModelY' className='nav_link'>
                                Model Y
                            </NavLink>
                        </li>                        
                        <li className='nav_item'>
                            <NavLink exact to='/SolarRoof' className='nav_link'>
                                Solar Roof
                            </NavLink>
                        </li>                        
                        <li className='nav_item'>
                            <NavLink exact to='/SolarPanels' className='nav_link'>
                                Solar Panels
                            </NavLink>
                        </li>
                    </ul>

                    {/* end page links */}
                    <ul className='nav_menuEnd'>
                        <li className='nav_item'>
                            <NavLink exact to='' className='nav_link'>
                                Shop
                            </NavLink>
                        </li>
                        <li className='nav_item'>
                            <NavLink exact to='' className='nav_link'>
                                Account
                            </NavLink>
                        </li>
                        <li className='nav_item'>
                            <NavLink exact to='' className='nav_link'>
                                Menu
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>

        </div>
    )
}

export default Navbar
