# Esoft Test Task

Решение тестового задания на позицию Frontend Developer в компании Esoft.

## Демо

- Фронтенд: https://esoft-test-frontend.netlify.app
- Бэкенд: https://esoft-test-backend.herokuapp.com/api/
- Бэкенд документация: https://esoft-test-backend.herokuapp.com/doc

## О проекте

Приложение для фильтрации и сортировки квартир в секции многоквартирного дома. Фичи:

- Вывод сокращённой информации о квартирах из базы данных по запросу. Запрос позволяет фильтровать данные о квартирах по стоимости, этажу, числу комнат и площадям, а также сортировать результаты по стоимости или общей площади. Форма для ввода требуемых жилой площади, площади кухни и допустимых этажей скрыта.
- Фильтр поддерживает пагинацию;
- Есть отдельная страница с информацией о квартире, а также страница с графическим выбором квартиры по плану секции;
- Адаптивная вёрстка с использование SASS modules;
- Собственный API написанный на NestJS;

## Стэк

### Клиент

1. **react**;
2. [**craco**](https://github.com/gsoft-inc/craco) + [**craco-alias**](https://github.com/risenforces/craco-alias) (Apache) - библиотека для переопределения настроек CRA, здесь используется для поддержки алиасов импорта: `import ... from '@features/'`;
3. [**@reduxjs/toolkit**](https://redux-toolkit.js.org/introduction/getting-started#an-existing-app) + (**react-redux**)[https://react-redux.js.org/introduction/getting-started] (MIT) - используется для работы с RTK Query, позволяет создавать ленивые запросы с кэшированием прямо в сторе ;
4. [**react-router-dom**](https://reactrouter.com/docs/en/v6/getting-started/overview) (MIT) - обеспечение клиентского роутинга;
5. [**prop-types**](https://www.npmjs.com/package/prop-types) (MIT) - динамический тайп-чекинг;
6. [**clsx**](https://www.npmjs.com/package/clsx) (MIT) - управление классами;
7. [**normalize.css**](https://necolas.github.io/normalize.css/) (MIT) - для нормализации настроек CSS по умолчанию;
8. [**sass**](https://sass-scss.ru/install/) (MIT) - используется ради переменных (по большей части - только брейкпоинтов);
9. [**konva**](https://konvajs.org) + [**react-konva**](https://konvajs.org/docs/react/index.html) (MIT) - библиотеки для работы с Canvas API, **react-konva** позволяет декларативно описывать состояние `<canvas>` и фигур на нём;
10. [**use-image**](https://www.npmjs.com/package/use-image) (MIT) - хук для загрузки изображений, применяемый в работе с **konva**.

### Сервер

1. **NestJS** - используется для создания CRUD сервиса. Дополнительные модули:
   1.1. **@nestjs/config** - загрузка конфигурации и переменных окружения;
   1.2. **@nestjs/typeorm** - для работы с **TypeORM**;
   1.3. **@nestjs/swagger** - модуль для привязки документации к NestJS-приложению;
2. [**helmet**](https://helmetjs.github.io) (MIT) - для безопасности при обработке запросов;
3. [**class-validator**](https://github.com/typestack/class-validator) + [**class-transformer**](https://github.com/typestack/class-transformer) (MIT) - для валидации и первичной обработки данных с помощью декораторов;
4. [**pg**](https://www.npmjs.com/package/pg) (MIT) - клиент для PostgreSQL;
5. [**TypeORM**](https://typeorm.io) (MIT) - пакет для работы с базами данных;
6. [**swagger-ui-express**](https://www.npmjs.com/package/swagger-ui-express) (MIT) - пакет для создания документации;
7. [**docker**](https://www.docker.com) (Proprietary?) - для запуска базы данных в изолироавнной среде;

## Установка

1. Скачать исходный код приложения можно одноми из нескольких способов:
   - Командой `git clone https://github.com/va-vl/esoft-test-frontend.git` из терминала;
   - Скачать и распаковать ZIP-архив со [страницы проекта на github](https://github.com/va-vl/esoft-test-frontend);
2. Если необходимо - установить yarn на компьютер командой `npm install -g yarn`;
3. Перейти в директорию клиента `cd ./esoft-test-frontend/client`;
4. Выполнить команду `yarn`;
5. По завершении установки - перейти в директорию бэкенда `cd ../server`;
6. Выполнить команду `yarn`;

## Запуск

### Клиент

Переименовать `.env.example` в `.env` и запустить приложение командой `npm run start`. Рекомендуемую версию node см. в `./nvmrc`.

### Сервер

Для запуска приложения в режиме разработки достаточно переименовать `.env.example` в `.env` и запустить докеризированное приложение командой `docker compose up`. В этом случае:

- Приложение будет доступно по адресу `localhost:5000/api`;
  - OpenAPI документация доступна по адресу `localhost:5000/doc`;
- База данных - по адресу `localhost:5432`;
- pgAdmin - `localhost:5050`;
