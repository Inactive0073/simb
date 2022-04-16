import React from 'react';
import { Menu, Nav, NavLink } from './menu';
import './heading.css'
import LogoImage from './LogoImage';

const Header = () => {
    return (
        <>
            <Menu>
                <LogoImage/>
                <Nav>
                    <NavLink className={({ isActive }) => "navLink" + (isActive ? " active" : " inactive")} to="/competitions" >
                        Лиги
                    </NavLink>
                    <NavLink className={({ isActive }) => "navLink" + (isActive ? " active" : " inactive")} to="/teams" >
                        Команды
                    </NavLink>
                </Nav>
            </Menu>
        </>
    )
}
export default Header;