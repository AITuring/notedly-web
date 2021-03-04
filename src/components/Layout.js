import React from 'react'

import styled from 'styled-components';

import Header from './Header'
import Navigation from './Navigation'

const Wrapper = styled.div`
    @media (min-width: 700px) {
        display: flex;
        top:64px;
        position:relative;
        height: calc(100% -64px);
        width: 100%;
        flex: auto;
        flex-direction: column;
    }
`

const Main = styled.main`
    position: fixed;
    height: calc(100% -185px);
    
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