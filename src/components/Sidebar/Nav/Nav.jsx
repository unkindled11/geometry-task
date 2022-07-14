import { NavLink } from 'react-router-dom';

import s from './nav.module.css';

const Nav = () => {
  const getActiveLink = ({ isActive }) =>
    isActive ? s.linkActive + ' ' + s.link : s.link;
  return (
    <>
      <div className={s.userWrapper}>
        <NavLink className={getActiveLink} to="/profile">
          Name Surname
        </NavLink>
      </div>

      <NavLink className={getActiveLink} to="/">
        Главная
      </NavLink>

      <NavLink className={getActiveLink} to="/fio">
        ФИО
      </NavLink>

      <NavLink className={getActiveLink} to="/phone-numeber">
        Телефон
      </NavLink>

      <NavLink className={getActiveLink} to="/inn">
        ИНН
      </NavLink>

      <NavLink className={getActiveLink} to="/passport">
        Паспорт
      </NavLink>

      <NavLink className={getActiveLink} to="/car">
        Авто
      </NavLink>

      <NavLink className={getActiveLink} to="/e-mail">
        E-mail
      </NavLink>

      <NavLink className={getActiveLink} to="/telegram">
        TelegramID
      </NavLink>

      <NavLink className={getActiveLink} to="/vk">
        ВК
      </NavLink>

      <NavLink className={getActiveLink} to="/contacts-name">
        Подпись в контактах
      </NavLink>

      <NavLink className={getActiveLink} to="/id">
        ID
      </NavLink>

      <NavLink className={getActiveLink} to="/hlr-request">
        HLR-запрос
      </NavLink>
    </>
  );
};

export default Nav;
