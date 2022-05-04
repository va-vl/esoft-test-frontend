import { ApartmentDashboard } from '@features/apartment';
import { PageLayout } from '@components';

const ApartmentPage = () => (
  <PageLayout heading="Информация о квартире">
    <ApartmentDashboard />
  </PageLayout>
);

export default ApartmentPage;
