import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useLogin from 'shared/hooks/useLogin';
import { useEffect } from 'react';

import { signIn } from '../../redux/auth/auth-operation';

import AuthForm from '../../components/AuthForm';
import Container from 'shared/components/Container';

import s from './authPage.module.css';

const AuthPage = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const isLogin = useLogin();

  useEffect(() => {
    if (isLogin) navigate('/');
  }, [isLogin, navigate]);

  const loginUser = data => {
    dispatch(signIn(data));
  };
  return (
    <section className={s.authPage}>
      <Container>
        <AuthForm login={loginUser} />
      </Container>
    </section>
  );
};
export default AuthPage;
