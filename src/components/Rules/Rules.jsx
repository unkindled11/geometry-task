import s from './rules.module.css';

const Rules = ({ title }) => {
  return (
    <>
      <div className={s.rulesBox}>
        <h3 className={s.rulesTitle}>Правила поиска :</h3>
        <p className={s.action}>Каждое действие логируется.</p>
        <ol className={s.list}>
          <li>
            Ф.И.О, формат : Иванов Иван Иванович, если какой-то части информации
            нету, необходимо ввести прочерк, например если мы не знаем имя, то
            вводить необходимо так: Иванов - Иванович, дата рождения в формате:
            ддмм.тит (ФИО быстрый - только на русском языке)
          </li>
          <li>PhoneID, формат : XXXXXXXXXX // X - 0-9(10 цифр)</li>
          <li>ИНН, формат: ХХХХХХХХХХ И Х - 0-9 (10 цифр)</li>
          <li>
            Серия и номер паспорта, формат: ХХ УУУУУУ И ХХ - буквы укр. алфавита
            (пробел обязательно)
          </li>
          <li>
            Госномер автомобиля, формат: ХХО00ОХХ // ХХ - буквы укр. алфавита
          </li>
          <li>E-mail, формат : xxx@yyy.zzz</li>
          <li>TelegramID, формат : XXXXXXXXXX // X - 0-9(10 цифр)</li>
          <li>VK, формат : vk.com/idXXX // ХХХ - обязательно ID (не ник)</li>
          <li>IР, формат : ХХХ.ХХХ.ХХХ.ХХХ // 0-255</li>
          <li>Index, формат : XXXXX // X - 0-9(до 5 цифр)</li>
        </ol>
        <p className={s.max}>
          Максимальный вывод в таблице :{' '}
          <span className={s.people}>500 человек</span>
        </p>
      </div>
    </>
  );
};

export default Rules;
