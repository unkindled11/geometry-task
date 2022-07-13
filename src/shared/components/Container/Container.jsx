import PropTypes from 'prop-types';

import s from './container.module.css';

function Container({ children }) {
  return <div className={s.container}>{children}</div>;
}

Container.defaultProps = {
  title: '',
};
Container.propTypes = {
  title: PropTypes.string,
};

export default Container;
