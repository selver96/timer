import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const SideBarEl = styled.section`
    width: ${props => props.click ? '250px' : '0px'};
    height: 60em;
    background-color: #f6a972;
    transition: width 0.15s linear
`;



const SideBar = ({ click }) => {

    return (
        <SideBarEl click={click}>
        </SideBarEl>
    );
};

export default SideBar;