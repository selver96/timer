import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Home from './pages/Home';
import styled from 'styled-components';
import { useState } from 'react';
import Footer from './components/Footer';

const MainLayout = styled.section`
    display: flex;
    flex-direction: row;
    width: 100%;
`;

const BodyLayout = styled.section`
    width: 100%;
`;

function App({ hours = 1, minutes = 0, seconds = 0 }) {
  const [over, setOver] = useState(false);
  const [[h, m, s], setTime] = useState([hours, minutes, seconds]);
  const [click, setClick] = useState(false);

  const tick = () => {
    if (over) return;

    if (h === 0 && m === 0 && s === 0) {
      setOver(true);
    } else if (m === 0 && s === 0) {
      setTime([h - 1, 59, 59]);
    } else if (s == 0) {
      setTime([h, m - 1, 59]);
    } else {
      setTime([h, m, s - 1]);
    }
  };

  const onClickMenu = () => {
    setClick(!click);
  }

  return (
    <MainLayout>
      <SideBar click={click} />
      <BodyLayout>
        <Header onClickMenu={onClickMenu} hours={h} minutes={m} seconds={s} />
        <Home tick={tick} />
        <Footer />
      </BodyLayout>
    </MainLayout>
  );
}

export default App;
