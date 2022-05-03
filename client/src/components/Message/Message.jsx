import PropTypes from 'prop-types';
//
import errorSVG from '@assets/error.svg';
import styles from './Message.module.scss';

export const Message = ({ heading = '', image, alt }) => (
  <div className={styles.content}>
    <img width={100} alt={alt} src={image} className={styles.image} />
    {heading && <h2 className={styles.heading}>{heading}</h2>}
  </div>
);

Message.defaultProps = {
  heading: '',
};

Message.propTypes = {
  heading: PropTypes.string,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export const ErrorMessage = ({ message }) => (
  <Message
    heading={message || 'Что-то пошло не так'}
    alt={'Ошибка'}
    image={errorSVG}
  />
);

ErrorMessage.defaultProps = {
  message: undefined,
};

ErrorMessage.propTypes = {
  message: PropTypes.string,
};
