import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
//
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import styles from './CheckboxButton.module.scss';

export const CheckboxButton = React.memo(
  ({ id, label, value, name, onChange, checked }) => (
    <label
      htmlFor={id}
      className={clsx(styles.checkbox, checked && styles.checkbox_checked)}
    >
      {label}
      <VisuallyHidden>
        <input
          id={id}
          value={value}
          name={name}
          type="checkbox"
          checked={checked}
          onChange={onChange}
        />
      </VisuallyHidden>
    </label>
  )
);

CheckboxButton.displayName = 'CheckboxButton';

CheckboxButton.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};
