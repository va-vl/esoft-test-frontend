import * as React from 'react';
import PropTypes from 'prop-types';
//
import styles from './CheckboxButton.module.css';

export const CheckboxButton = ({ id, label, value, name }) => (
  <p className={styles.checkbox}>
    <label htmlFor={id} className={styles.label}>
      {label}
    </label>
    <input
      id={id}
      value={value}
      name={name}
      type="checkbox"
      className={styles.input}
    />
  </p>
);

CheckboxButton.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
