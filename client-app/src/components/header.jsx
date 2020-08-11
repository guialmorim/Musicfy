import React from 'react';
import { 
    Nav, 
    NavHeader, 
    NavLeft, 
    NavCenter,
    MenuLink,
    Input,
    NavRight 
    } from '../styles/headerStyle';

import { User, Album, Band } from '../components/svg';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

const Header = () => {
    return(
        <Nav>
            <NavHeader>
                <NavLeft>
                    <Link className='nav-link' to="/">Musicfy</Link>
                    <MenuLink href='http://localhost:8888/login' className='nav-link'>Login</MenuLink>
                </NavLeft>

                <NavCenter>
                    <Input type='text' placeholder='Search...' />
                </NavCenter>

                <NavRight>
                        <Link to="/me">
                            <User /> 
                        </Link>
                </NavRight>
            </NavHeader>
        </Nav>
    );
}

export default Header;