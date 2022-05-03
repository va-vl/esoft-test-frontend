import * as React from 'react';
//
import { SearchMenu } from '@features/search';
import styles from './Home.module.scss';

const HomePage = () => (
  <>
    <h2 className={styles.heading}>Подобрать квартиру</h2>
    <SearchMenu />
  </>
);

export default HomePage;
