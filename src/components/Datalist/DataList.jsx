import s from './dataList.module.css';

import data from './data.json';

function DataList() {
  const dataItem = data.map(({ number, descr, icon, id }) => {
    return (
      <li key={id} className={s.card}>
        <div className={s.descrBox}>
          <p className={s.title}>{number}</p>
          <p className={s.descr}>{descr}</p>
        </div>
        <svg className={s.svg}>
          <path d={icon}></path>
        </svg>
      </li>
    );
  });

  return (
    <div className={s.wrap}>
      <ul className={s.list}>{dataItem}</ul>
    </div>
  );
}

export default DataList;
