import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';

import BusinessDashBoard from './features/Business/BusinessDashBoard';
import AppLayout from './ui/AppLayout';
import AdminDashboard from './features/Admin/AdminDashboard';
import UserDashboard from './features/User/UserDashboard';
import BusinessSignUp from './features/Business/BusinessSignUp';
import Login from './features/Authentication/Login';
import AdminLogin from './features/Admin/AdminLogin';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/login" replace />, // Redirect root to login
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/business-signUp',
    element: <BusinessSignUp />,
  },
  {
    path: '/admin-login',
    element: <AdminLogin />,
  },
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/business-dashboard',
        element: <BusinessDashBoard />,
      },
      {
        path: '/admin-dashboard',
        element: <AdminDashboard />,
      },
      {
        path: '/user-dashboard',
        element: <UserDashboard />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/login" replace />, // Redirect any unmatched paths to login
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
