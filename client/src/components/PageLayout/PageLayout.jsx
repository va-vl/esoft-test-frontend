import PropTypes from 'prop-types';
import clsx from 'clsx';
//
import styles from './PageLayout.module.scss';

export const PageLayout = ({ heading, compact = false, children }) => (
  <>
    <h2 className={clsx(styles.heading, compact && styles.heading__compact)}>
      {heading}
    </h2>
    {children}
  </>
);

PageLayout.defaultProps = {
  compact: false,
};

PageLayout.propTypes = {
  compact: PropTypes.bool,
  heading: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
