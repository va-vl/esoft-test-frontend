import { Message } from '@components';
import NotFoundSVG from '@assets/not-found.svg';

const NotFoundPage = () => (
  <Message
    heading="Запрашиваемая страница не существует"
    image={NotFoundSVG}
    alt="Не найдено"
  />
);

export default NotFoundPage;
