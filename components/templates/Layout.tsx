import * as React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styled from 'styled-components';

type Props = {
    children: any;
};

const StyledDiv = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Layout: React.FC<Props> = ({ children }) => (
    <StyledDiv>
        <Header />
        {children}
        <Footer />
    </StyledDiv>
);

export default Layout;
