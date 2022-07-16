import s from './roles.module.css';

import data from './roles.json';

function Roles() {
  const RolesItem = data.map(({ descr, icon, id }) => {
    return (
      <li key={id} className={s.card}>
        <svg className={s.svg}>
          <path d={icon}></path>
        </svg>
        <div className={s.descrBox}>
          <p className={s.descr}>{descr}</p>
        </div>
      </li>
    );
  });

  return (
    <div className={s.wrap}>
      <ul className={s.list}>{RolesItem}</ul>
    </div>
  );
}

export default Roles;
