import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const SideBarEl = styled.section`
    width: ${props => props.click ? '250px' : '0px' };
    height: 60em;
    background-color: #f6a972;
    transition: width 0.18s linear
`;


const SideBar = ({click}) => {
    const height_ = window.screen.height;
    const [height, setHeight] = useState('');

    useEffect(() => {
        setHeight(height_)
    }, [height_])
   

    return (
        <SideBarEl height={height} click={click}>
        </SideBarEl>
    );
};

export default SideBar;