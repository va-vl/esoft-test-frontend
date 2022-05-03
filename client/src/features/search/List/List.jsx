import PropTypes from 'prop-types';
//
import { Card } from '../Card/Card';
import { SkeletonShape } from '@components';
import styles from './List.module.scss';

export const ResultsList = ({ data }) => {
  let content;

  if (data === undefined) {
    content = (
      <>
        {[1, 2, 3].map((i) => (
          <li className={styles.item} key={i}>
            <SkeletonShape className={styles.skeleton} />
          </li>
        ))}
      </>
    );
  } else {
    content = (
      <>
        {data.map((props) => (
          <li className={styles.item} key={props.id}>
            <Card {...props} />
          </li>
        ))}
      </>
    );
  }

  return <div className={styles.list}>{content}</div>;
};

ResultsList.defaultProps = {
  data: undefined,
};

ResultsList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      price: PropTypes.number,
      rooms: PropTypes.number,
      area_total: PropTypes.number,
      layout_imgae: PropTypes.string,
    })
  ),
};
