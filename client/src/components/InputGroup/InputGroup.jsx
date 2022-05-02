import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
//
import styles from './InputGroup.module.scss';

export const InputGroup = ({ children, className = '', legend }) => (
  <fieldset className={clsx(styles.group, className)}>
    <legend className={styles.legend}>{legend}</legend>
    <span className={styles.content}>{children}</span>
  </fieldset>
);

InputGroup.defaultProps = {
  children: null,
  className: '',
};

InputGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  legend: PropTypes.string.isRequired,
};
