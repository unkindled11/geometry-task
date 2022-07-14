import Nav from './Nav';
import MainContainer from 'shared/components/MainContainer';

import s from './sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={s.sideBar}>
      {/* <div className={s.userWrapper}>
        <img
          src="https://cdn.vectorstock.com/i/1000x1000/25/35/sad-smile-icon-symbol-smiley-face-yellow-cartoon-vector-26202535.webp"
          alt="Avatar"
          className={s.avatar}
        />
        <p>Name</p>
      </div> */}
      <Nav />
    </div>
  );
};

export default Sidebar;
