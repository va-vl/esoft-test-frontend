import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
//
import { ReactComponent as Spinner } from '@assets/spinner.svg';
import styles from './Button.module.scss';

export const Button = ({
  type = 'button',
  isLoading = false,
  className = '',
  children,
  ...props
}) => (
  <button type={type} className={clsx(styles.button, className)} {...props}>
    {isLoading && <Spinner className={styles.spinner} />}
    {children}
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
