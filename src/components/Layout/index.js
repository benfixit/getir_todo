import React from 'react';
import NavBar from './NavBar';
import { Container, ContentWrapper } from './styles';

const Layout = props => {
    const { children } = props;
    return (
        <Container>
            <NavBar />
            <ContentWrapper>
                {children}
            </ContentWrapper>
        </Container>
    )
}

export default Layout;