import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
//
import store from './app/store';
import App from './App';
// import HomePage from '@pages/Home/Home';
// import ApartmentPage from '@pages/Apartment/Apartment';
// import NotFoundPage from '@pages/NotFound/NotFound';
import 'normalize.css';
import './index.scss';

const HomePage = React.lazy(() => import('./pages/Home/Home'));
const ApartmentPage = React.lazy(() => import('./pages/Apartment/Apartment'));
const NotFoundPage = React.lazy(() => import('./pages/NotFound/NotFound'));

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <React.Suspense fallback={<div>загрузка</div>}>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<HomePage />} />
              <Route path="/apartments/:id" element={<ApartmentPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </React.Suspense>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
