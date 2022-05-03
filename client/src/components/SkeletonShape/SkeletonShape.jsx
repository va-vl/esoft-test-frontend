import * as React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
//
import styles from './SkeletonShape.module.scss';

export const SkeletonShape = ({
  className = '',
  height = '14px',
  ...props
}) => (
  <div
    className={clsx(styles.skeleton, className)}
    style={{ height, ...props }}
  />
);

SkeletonShape.defaultProps = {
  className: '',
  height: '14px',
};

SkeletonShape.propTypes = {
  className: PropTypes.string,
  height: PropTypes.string,
};
