import * as React from 'react';
//
import { SearchMenu } from '@features/search';
import styles from './Home.module.scss';

const HomePage = () => (
  <div className={styles.home}>
    <h2 className={styles.heading}>Подобрать квартиру</h2>
    <SearchMenu />
  </div>
);

export default HomePage;
