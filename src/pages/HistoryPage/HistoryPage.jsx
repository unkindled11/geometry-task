import s from './historyPage.module.css';
import HistoryList from 'components/HistoryList';

const HistoryPage = () => {
  return (
    <section>
      <h2 className={s.title}>История поиска</h2>
      <div className={s.wrapper}>
        <HistoryList />
      </div>
    </section>
  );
};

export default HistoryPage;
