import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';

import BusinessSignUp from './components/BusinessSignUp';
import Login from './pages/Login';
import AdminLogin from './components/AdminLogin';
import BusinessLayout from './Layouts/BusinessLayout';
import BusinessDashboard from './pages/Business/Dashboard';
import BusinessProducts from './pages/Business/Products';
import BusinessSupportTicket from './pages/Business/SupportTicket';
import BusinessSettings from './pages/Business/Settings';
import BusinessSignOut from './pages/Business/SingOut';


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
    path: '/business-signup',
    element: <BusinessSignUp />,
  },
  {
    path: '/admin-login',
    element: <AdminLogin />,
  },
  {
    path: '/business',
    element: <BusinessLayout />,
    children: [
      {
        path: 'dashboard',
        element: <BusinessDashboard />,
      },
      {
        path: 'products',
        element: <BusinessProducts />,
      },
      {
        path: 'support-ticket',
        element: <BusinessSupportTicket />,
      },
      {
        path: 'settings',
        element: <BusinessSettings />,
      },
      {
        path: 'sign-out',
        element: <BusinessSignOut />,
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
