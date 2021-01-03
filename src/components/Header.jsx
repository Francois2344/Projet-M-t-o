import React from 'react';
import styled from 'styled-components';

const DIV = styled.div`
background-color: #38B6FF;
color: white;
`;

const Header = () => {

    return (
        <DIV className="title">
            <h1>Wild Météo</h1>
        </DIV>
    );
};

export default Header;