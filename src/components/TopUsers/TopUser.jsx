import s from './topUsers.module.css';

const TopUsers = ({ items }) => {
  const element = items.map(item => (
    <tr className={s.row} key={item.id}>
      <td className={s.rowElement}>{item.number}</td>
      <td className={s.rowElement}>{item.login}</td>
      <td className={s.rowElement}>{item.fio}</td>
      <td className={s.rowElement}>{item.requests}</td>
    </tr>
  ));

  return (
    <div className={s.allBox}>
      <div className={s.a}>
        <h3 className={s.title}>Топ-5 пользователей</h3>
      </div>

      <table className={s.transactionHistory}>
        <thead className={s.head}>
          <tr className={s.row}>
            <th className={s.th}>#</th>
            <th>Login</th>
            <th>ФИО</th>
            <th>Кол-во (карт./запросов)</th>
          </tr>
        </thead>

        <tbody>{element}</tbody>
      </table>
    </div>
  );
};

export default TopUsers;
