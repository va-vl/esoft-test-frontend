import { Outlet } from 'react-router-dom';
//
import { Layout } from '../../components';
import { useGetApartmentsQuery } from '../../app/apiSlice';

export const App = () => {
  const { isFetching, isError, error } = useGetApartmentsQuery();

  let content;

  if (isFetching) {
    content = <h3>Now loading</h3>;
  } else if (isError) {
    content = <h3>{JSON.stringify(error)}</h3>;
  } else {
    content = <Outlet />;
  }

  return <Layout>{content}</Layout>;
};
