import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
//
import { ReactComponent as GithubLogo } from '../../assets/github-logo.svg';
import styles from './App.module.css';

export const App = () => {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <Link className={styles.header_link} to="/">
          На главную
        </Link>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={styles.footer}>
        <p className={styles.footer_container}>
          <span className={styles.footer_text}>
            Тестовое задание для компании ESoft выполнил:
          </span>
          <a
            className={styles.footer_link}
            href="https://github.com/va-vl"
            target="_blank"
            rel="noreferrer noopener"
          >
            <GithubLogo alt="Github" className={styles.icon} />
          </a>
          <a
            href="https://hh.ru/resume/0d83cbcdff08dfc96f0039ed1f70517773504a"
            target="_blank"
            rel="noreferrer noopener"
            className={styles.footer_link}
          >
            CV
          </a>
        </p>
      </footer>
    </div>
  );
};
