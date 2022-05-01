import * as React from 'react';
//
import { SearchPanel } from '@features/search';
import styles from './Home.module.css';

const HomePage = () => (
  <>
    <section className={styles.hero}>
      <h2 className={styles.hero_heading}>Подобрать квартиру</h2>
    </section>
    <div>
      <SearchPanel />
    </div>
  </>
);

export default HomePage;
