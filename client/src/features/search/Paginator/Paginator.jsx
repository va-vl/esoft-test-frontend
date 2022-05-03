import * as React from 'react';
import PropTypes from 'prop-types';
//
import { Button } from '@components';
import styles from './Paginator.module.scss';

export const Paginator = ({ page, pages, onChange }) => (
  <div className={styles.paginator}>
    {Array.from({ length: pages }).map((_, index) => (
      <Button
        key={index}
        disabled={index + 1 === +page}
        className={styles.button}
        onClick={() => {
          onChange(`${index + 1}`);
        }}
      >
        {index + 1}
      </Button>
    ))}
  </div>
);

Paginator.propTypes = {
  page: PropTypes.string.isRequired,
  pages: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
