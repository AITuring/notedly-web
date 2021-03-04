import React from 'react'
import logo from '../img/rocket.svg'
import styled from 'styled-components';

const Header = () => {
    return (
        <header>
            <img src={logo} alt='Notedly Logo' height='40' />
            <h1>Notedly</h1>
        </header>
    )
}

export default Header