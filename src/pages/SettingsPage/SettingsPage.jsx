import s from './settingsPage.module.css';

const SettingsPage = () => {
  const handleSubmit = e => {};

  const handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  return (
    <section>
      <h2 className={s.title}>Настройки</h2>
      <div className={s.Searchbar}>
        <div className={s.nameWrap}>
          <div>
            <h3>Login</h3>
            <p>Login</p>
          </div>
          <div>
            <h3>Имя</h3>
            <p>Name Surname</p>
          </div>
        </div>

        <div className={s.inputWrapper}>
          <form className={s.password} onSubmit={handleSubmit}>
            <input
              name="q"
              className={s['input-password']}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Введите новый пароль"
              onChange={handleChange}
              required
            />
          </form>
          <form className={s.passwordAgain} onSubmit={handleSubmit}>
            <input
              name="q"
              className={s['input-passwordAgain']}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Повторите пароль"
              onChange={handleChange}
              required
            />
          </form>
          <button className={s.btn}>Сохранить</button>
        </div>
      </div>
    </section>
  );
};

export default SettingsPage;
