import s from './vkPage.module.css';
import Rules from 'components/Rules';

const VkPage = () => {
  const handleSubmit = e => {};

  const handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  return (
    <section>
      <h2 className={s.title}>Поиск по ВК</h2>
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
            placeholder="Введите VK id согласно правилам"
            onChange={handleChange}
            required
          />
        </form>
      </div>
      <Rules title="ВК" />
    </section>
  );
};

export default VkPage;
