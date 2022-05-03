import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
//
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import styles from './CheckboxButton.module.scss';

export const CheckboxButton = React.memo(
  ({ id, label, value, name, onChange, checked }) => {
    const ref = React.useRef(null);

    const handleChange = (event) => {
      onChange(event);
      if (ref?.current) {
        ref.current.blur();
      }
    };

    return (
      <label
        htmlFor={id}
        className={clsx(styles.checkbox, checked && styles.checkbox_checked)}
      >
        <span className={styles.label}>{label}</span>
        <VisuallyHidden>
          <input
            ref={ref}
            id={id}
            value={value}
            name={name}
            type="checkbox"
            checked={checked}
            onChange={handleChange}
          />
        </VisuallyHidden>
      </label>
    );
  }
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
