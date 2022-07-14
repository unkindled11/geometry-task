import s from './sideContainer.module.css';

function SideContainer({ children }) {
  return <div className={s.sideContent}>{children}</div>;
}

export default SideContainer;
