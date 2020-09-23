import React from 'react';
import { Container } from 'semantic-ui-react'
import './Header.css';

const Header = (props) => {
    return(
        <header data-test="page-header" className="page-header">
            <Container>
                <h2>Sample Profile</h2>
            </Container>            
        </header>
    )
}

export default Header;