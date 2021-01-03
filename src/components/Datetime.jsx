import React from 'react';
import styled from 'styled-components';

const TIME = styled.time`
    .date-time {
        margin: 20px;
    }
`;

const Datetime = () => {
    const date = new Date()
    return (
        <TIME className="date-time">
            {`${date.toLocaleDateString()} - ${date.toLocaleTimeString()}`}
        </TIME>
    );
};

export default Datetime;