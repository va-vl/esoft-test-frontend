import * as React from 'react';
//
import { Container } from '@components';
import { SearchMenu } from '@features/search';
import styles from './Home.module.scss';

const HomePage = () => (
  <Container>
    <h2 className={styles.heading}>Подобрать квартиру</h2>
    <SearchMenu />
  </Container>
);

export default HomePage;
