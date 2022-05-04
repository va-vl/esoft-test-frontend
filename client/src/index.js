import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
//
import store from '@app/store';
import { ReactComponent as Spinner } from '@assets/spinner.svg';
import App from './App';
import NotFoundPage from './pages/NotFound';
import 'normalize.css';
import './index.scss';

const MINIMUM_LOADING_DELAY = 1000;

const HomePage = React.lazy(() =>
  Promise.all([
    import('./pages/Home'),
    new Promise((resolve) => {
      setTimeout(resolve, MINIMUM_LOADING_DELAY);
    }),
  ]).then(([moduleExports]) => moduleExports)
);
const PlanPage = React.lazy(() =>
  Promise.all([
    import('./pages/Plan'),
    new Promise((resolve) => {
      setTimeout(resolve, MINIMUM_LOADING_DELAY);
    }),
  ]).then(([moduleExports]) => moduleExports)
);
const ApartmentPage = React.lazy(() =>
  Promise.all([
    import('./pages/Apartment'),
    new Promise((resolve) => {
      setTimeout(resolve, MINIMUM_LOADING_DELAY);
    }),
  ]).then(([moduleExports]) => moduleExports)
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <React.Suspense
          fallback={
            <div
              style={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Spinner width={150} height={150} />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<HomePage />} />
              <Route path="/apartments/:id" element={<ApartmentPage />} />
              <Route path="/plan" element={<PlanPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </React.Suspense>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
