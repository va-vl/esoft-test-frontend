import * as React from 'react';
import { useParams } from 'react-router-dom';
//
import { useGetApartmentQuery } from '@app/apiSlice';
import { ErrorMessage } from '@components';
import { DashboardLayout } from './Layout';

export const Dashboard = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useGetApartmentQuery(id);

  if (isLoading) {
    return <div>Loading</div>;
  } else if (isError || !data) {
    return <ErrorMessage message={error?.message} />;
  }

  return <DashboardLayout {...data} />;
};
