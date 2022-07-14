import s from './mainContainer.module.css';

function MainContainer({ children }) {
  return <div className={s.mainContent}>{children}</div>;
}

export default MainContainer;
