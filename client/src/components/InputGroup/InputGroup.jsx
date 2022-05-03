import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
//
import styles from './InputGroup.module.scss';

export const InputGroup = ({
  children,
  legend,
  stretchContent = false,
  className = '',
}) => (
  <fieldset className={clsx(styles.group, className)}>
    <legend className={styles.legend}>{legend}</legend>
    <span
      className={clsx(
        styles.content,
        stretchContent && styles.content__stretched
      )}
    >
      {children}
    </span>
  </fieldset>
);

InputGroup.defaultProps = {
  children: null,
  className: '',
  stretchContent: false,
};

InputGroup.propTypes = {
  children: PropTypes.node,
  legend: PropTypes.string.isRequired,
  className: PropTypes.string,
  stretchContent: PropTypes.bool,
};
