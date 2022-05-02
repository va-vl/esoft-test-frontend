import PropTypes from 'prop-types';
//
import styles from './VisuallyHidden.module.scss';

export const VisuallyHidden = ({ children }) => (
  <span className={styles.hidden}>{children}</span>
);

VisuallyHidden.defaultProps = {
  children: null,
};

VisuallyHidden.propTypes = {
  children: PropTypes.node,
};
