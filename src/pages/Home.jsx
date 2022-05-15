import React from 'react';
import Body from '../components/Body';
import styled from 'styled-components';

const Content = styled.section`
    width: 100%;
    height: 810px;
`;


const Home = ({tick}) => {
    

    return (
        <Content>
            <Body tick={tick}/>
        </Content>
    );
};

export default Home;