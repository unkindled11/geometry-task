import s from './passportPage.module.css';
import Rules from 'components/Rules';

const PassportPage = () => {
  const handleSubmit = e => {};

  const handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  return (
    <section>
      <h2 className={s.title}>Поиск по Паспорту</h2>
      <div className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={handleSubmit}>
          <button className={s['SearchForm-button']} type="submit">
            <span></span>
          </button>

          <input
            name="q"
            className={s['SearchForm-input']}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Введите паспортные данные согласно правилам."
            onChange={handleChange}
            required
          />

          <input
            name="q"
            className={s['SearchForm-input-date']}
            type="date"
            autoComplete="off"
            autoFocus
            required
          />
        </form>
      </div>
      <Rules title="ВК" />
    </section>
  );
};

export default PassportPage;
