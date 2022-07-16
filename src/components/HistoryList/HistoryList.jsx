import s from './history.module.css';

import data from './history.json';

const HistoryList = () => {
  const historyItem = data.map(({ id, date, via, name, img }) => {
    return (
      <li key={id} className={s.card}>
        <div className={s.imgWrapper}>
          <img className={s.img} src={img} alt="" />
        </div>

        <div className={s.descrBox}>
          <p className={s.title}>{date}</p>
          <p className={s.via}>{via}</p>
          <p className={s.name}>{name}</p>
          <button className={s.btn}>Открыть</button>
        </div>
      </li>
    );
  });

  return (
    <div className={s.wrap}>
      <ul className={s.list}>{historyItem}</ul>
    </div>
  );
};

export default HistoryList;
