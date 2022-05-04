import { PlanMenu } from '@features/plan';
import { PageLayout } from '@components/';

const PlanPage = () => (
  <PageLayout heading="Найти на этаже" compact>
    <PlanMenu />
  </PageLayout>
);

export default PlanPage;
