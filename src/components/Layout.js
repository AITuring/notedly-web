import React from 'react'

import styled from 'styled-components';

import Header from './Header'
import Navigation from './Navigation'

const Wrapper = styled.div`
    @media (min-width: 700px) {
        display: flex;
        top:
    }
`

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Header />
            <div className="wrapper">
                <Navigation />
                <main>{children}</main>
            </div>
        </React.Fragment>
    )
}

export default Layout