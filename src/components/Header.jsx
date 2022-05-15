import React from 'react';
import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';

const HeaderEl = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 50px;
    background-color: #ea7f39;
`;
const BurgerMenu = styled.div`
    cursor: pointer;
    width: 50px;
    height: 100%;
`;

const TimerBody = styled.div`
    width: 150px;
    height: 40px;
`;

const Timer = styled.p`
    margin: 0;
    font-size: 30px;
    margin-top: 5px;
    color: black;
`;



const Header = ({ onClickMenu, hours , minutes , seconds }) => {
    

    return (
        <HeaderEl>
            <BurgerMenu>
                <GiHamburgerMenu size="50px" onClick={onClickMenu} />
            </BurgerMenu>
            <TimerBody>
                <Timer>{`${hours.toString().padStart(2, '0')}:${minutes
                    .toString()
                    .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}
                </Timer>
            </TimerBody>
        </HeaderEl>
    );
};

export default Header;