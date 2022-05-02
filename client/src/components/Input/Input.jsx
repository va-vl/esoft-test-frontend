import * as React from 'react';
import PropTypes from 'prop-types';
//
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import styles from './Input.module.scss';

export const Input = React.memo(
  ({ id, name, value, placeholder = 0, onChange }) => (
    <p className={styles.container}>
      <VisuallyHidden>
        <label className={styles.label} htmlFor={id}>
          {name}
        </label>
      </VisuallyHidden>
      <input
        className={styles.input}
        id={id}
        name={name}
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </p>
  )
);

Input.displayName = 'Input';

Input.defaultProps = {
  placeholder: '',
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
