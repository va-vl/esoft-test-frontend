import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Provider } from 'react-redux';
//
import store from '@app/store';
import { ReactComponent as GithubLogo } from '@assets/github-logo.svg';
import { OverlayScrollbar } from '@components';
import styles from './App.module.scss';

const App = () => (
  <>
    <OverlayScrollbar />
    <div className={styles.app}>
      <header className={styles.header}>
        <Link className={styles.header_link} to="/">
          Фильтр
        </Link>
        <Link className={styles.header_link} to="/plan">
          Поиск на плане
        </Link>
      </header>
      <main className={styles.main}>
        <Provider store={store}>
          <Outlet />
        </Provider>
      </main>
      <footer className={styles.footer}>
        <p className={styles.footer_container}>
          <span className={styles.footer_text}>
            Тестовое задание для компании ESoft выполнил:
          </span>
          <a
            href="https://github.com/va-vl"
            target="_blank"
            rel="noreferrer noopener"
            className={styles.footer_link}
          >
            <GithubLogo alt="Github" className={styles.icon} />
          </a>
        </p>
      </footer>
    </div>
  </>
);

export default App;
