import Rules from 'components/Rules';
import TopUsers from 'components/TopUsers';
import users from '../../shared/data/users.json';
import DataList from 'components/Datalist';

import s from './mainPage.module.css';

const MainPage = () => {
  return (
    <section>
      <h2 className={s.title}>Главная</h2>
      <Rules title="Главная" />
      <TopUsers items={users} />
      <DataList />
    </section>
  );
};

export default MainPage;
