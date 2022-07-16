import s from './myProfilePage.module.css';
import Roles from 'components/RoleList';

const MyProfilePage = () => {
  return (
    <section>
      <h2 className={s.title}>Мой профиль</h2>
      <div className={s.secondTitleWrapper}>
        <h3 className={s.secondTitle}>Роли доступов :</h3>
      </div>
      <Roles />
    </section>
  );
};

export default MyProfilePage;
