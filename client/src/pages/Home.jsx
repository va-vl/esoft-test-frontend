import * as React from 'react';
//
import { PageLayout } from '@components/';
import { SearchMenu } from '@features/search';

const HomePage = () => (
  <PageLayout heading="Подобрать квартиру">
    <SearchMenu />
  </PageLayout>
);

export default HomePage;
