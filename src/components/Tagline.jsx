import React from 'react';
import styled from 'styled-components';

const DIV = styled.div`
margin: 20px;
`;

const Tagline = () => {
    return (
        <DIV className="tag-line">
            <p>Entrer le nom d'une ville</p>
        </DIV>
    );
};

export default Tagline;