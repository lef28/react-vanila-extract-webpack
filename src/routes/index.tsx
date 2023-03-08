import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainLayout from '../layouts/main';
import Page1 from '../pages/page1';
import Page2 from '../pages/page2';
import MainProvider from '../store/main';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/page1',
        element: <Page1 />,
      },
      {
        path: '/page2',
        element: <Page2 />,
      },
    ],
  },
]);

function Router() {
  return (
    <MainProvider>
      <RouterProvider router={router} />
    </MainProvider>
  );
}

export default Router;
