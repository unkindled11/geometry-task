import { useState } from 'react';
import { initialState } from './initialState';

import s from './authForm.module.css';

const AuthForm = ({ login }) => {
  const [form, setForm] = useState(initialState);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onClickSignIn = e => {
    login({ ...form });
    setForm({ ...initialState });
  };

  const { email, password } = form;

  // useEffect(() => {
  //   let interval = setInterval(() => {
  //     if (emailField.current) {
  //       setForm(emailField.current.value);
  //       clearInterval(interval);
  //     }
  //   }, 100);
  // });

  return (
    <div className={s.wrap}>
      <div className={s.formWrap}>
        <div className={s.titleWrap}>
          <h2 className={s.title}>Пожалуйста, войдите в систему.</h2>
        </div>
        <form action="" autoComplete="off" className={s.form}>
          <div className={s.wrapInput}>
            <input
              type="text"
              onChange={handleChange}
              name="email"
              className={s.input}
              placeholder="Login"
              value={email}
              autoComplete="off"
            />
            <input
              onChange={handleChange}
              name="password"
              type="password"
              className={s.input}
              value={password}
              placeholder="Password"
              autoComplete="off"
            />
          </div>

          <div className={s.wrapButton}>
            <button
              className={s.buttonSignIn}
              onClick={onClickSignIn}
              type="button"
            >
              <svg className={s.arrow} width="10px">
                <path d="M31 16l-15-15v9h-16v12h16v9z"></path>
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AuthForm;
