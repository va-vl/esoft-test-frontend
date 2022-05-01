import * as React from 'react';
import PropTypes from 'prop-types';
//
import styles from './CheckboxButtonGroup.module.css';

export const CheckboxButtonGroup = ({ children, legend }) => (
  <fieldset className={styles.group}>
    {legend && <legend className={styles.legend}>{legend}</legend>}
    {children}
  </fieldset>
);

CheckboxButtonGroup.defaultProps = {
  children: null,
  legend: null,
};

CheckboxButtonGroup.propTypes = {
  children: PropTypes.node,
  legend: PropTypes.string,
};
