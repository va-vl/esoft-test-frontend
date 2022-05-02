import PropTypes from 'prop-types';
import clsx from 'clsx';
//
import styles from './Select.module.scss';

export const Select = ({
  id,
  name,
  label,
  value,
  onChange,
  className = '',
  children,
}) => (
  <div className={clsx(styles.select, className)}>
    <label className={styles.label} htmlFor={id}>
      {label}
    </label>
    <select id={id} name={name} onChange={onChange} value={value}>
      {children}
    </select>
  </div>
);

Select.defaultProps = {
  children: null,
  className: '',
};

Select.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
};
