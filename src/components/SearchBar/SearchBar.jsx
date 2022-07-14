import Clock from 'react-live-clock';

import s from './searchbar.module.css';

const Searchbar = () => {
  const handleSubmit = e => {};

  const handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  return (
    <div className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={s['SearchForm-button']}>
          <span className={s['SearchForm-button-label']}>Search</span>
        </button>

        <input
          name="q"
          className={s['SearchForm-input']}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Введите номер телефона для поиска..."
          onChange={handleChange}
          required
        />
      </form>
      <Clock format={'HH:mm:ss'} ticking={true} />
    </div>
  );
};

export default Searchbar;
