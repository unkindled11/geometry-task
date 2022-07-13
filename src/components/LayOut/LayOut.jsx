import { Outlet } from 'react-router-dom';
// import Sidebar from 'components/Sidebar';
import style from './layOut.module.css';
import Footer from 'components/Footer';
const LayOut = () => {
  return (
    <>
      <section className={style.header}>{/* <Sidebar /> */}</section>

      <Outlet />

      <section className={style.footer}>
        <Footer />
      </section>
    </>
  );
};

export default LayOut;
