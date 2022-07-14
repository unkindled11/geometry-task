import { Outlet } from 'react-router-dom';
import Sidebar from 'components/Sidebar';
import style from './layOut.module.css';
import Footer from 'components/Footer';
import MainContainer from 'shared/components/MainContainer';
import SideContainer from 'shared/components/SideContainer';
const LayOut = () => {
  return (
    <MainContainer>
      <section className={style.header}>
        <Sidebar />
      </section>
      <SideContainer>
        <Outlet />
      </SideContainer>
      <section className={style.footer}>
        <Footer />
      </section>
    </MainContainer>
  );
};

export default LayOut;
