import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
//
import styles from './Button.module.css';

export const Button = ({
  type = 'button',
  isLoading = false,
  className = '',
  children,
  ...props
}) => (
  <button type={type} className={clsx(styles.button, className)} {...props}>
    {isLoading ? 'Загрузка' : children}
  </button>
);

Button.defaultProps = {
  type: 'button',
  isLoading: false,
  className: '',
};

Button.propTypes = {
  type: PropTypes.string,
  isLoading: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
