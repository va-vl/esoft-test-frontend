import { Link } from 'react-router-dom';
//
import { ReactComponent as GithubLogo } from '../../assets/github-logo.svg';
import styles from './Layout.module.css';

export const Layout = ({ children }) => (
  <div className={styles.app}>
    <header className={styles.header}>
      <Link className={styles.header_link} to="/">
        На главную
      </Link>
    </header>
    <main className={styles.main}>{children}</main>
    <footer className={styles.footer}>
      <p>Тестовое задание для компании ESoft выполнил:</p>
      <a
        className={styles.footer_link}
        href="https://github.com"
        target="_blank"
        rel="noreferrer noopener"
      >
        <GithubLogo />
      </a>
      <a
        href="https://hh.ru/resume/0d83cbcdff08dfc96f0039ed1f70517773504a"
        target="_blank"
        rel="noreferrer noopener"
        className={styles.footer_link}
      >
        CV
      </a>
    </footer>
  </div>
);
