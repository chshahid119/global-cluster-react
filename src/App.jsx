import React, { createContext, useState } from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';

import BusinessSignUp from './components/BusinessSignUp';
import Login from './pages/Login';
import AdminLogin from './components/AdminLogin';
import BusinessLayout from './Layouts/BusinessLayout';
import BusinessDashboard from './pages/Business/Dashboard';
import BusinessProducts from './pages/Business/Products'; // Import should be before usage
import BusinessSupportTicket from './pages/Business/SupportTicket';
import BusinessSettings from './pages/Business/Settings';
import BusinessSignOut from './pages/Business/SingOut';

import UserLayout from './Layouts/UserLayout';
import UserDashboard from './pages/User/UserDashboard';
import UserNetwork from './pages/User/UserNetwork';
import UserRegister from './pages/User/UserRegister';
import UserRegistrations from './pages/User/UserRegistrations';
import UserRemoteAndEarn from './pages/User/UserRemoteAndEarn';
import UserWallet from './pages/User/UserWallet';
import UserPayOut from './pages/User/UserPayOut';
import UserSupportTicket from './pages/User/UserSupportTicket';
import UserSettings from './pages/User/UserSettings';
import UserSignOut from './pages/User/UserSignOut';
import UserProducts from './pages/User/UserProducts';

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
        element: <BusinessProducts />, // Ensure BusinessProducts is imported correctly
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
    path: '/user',
    element: <UserLayout />,
    children: [
      {
        path: 'dashboard',
        element: <UserDashboard />,
      },
      {
        path: 'network',
        element: <UserNetwork />,
      },
      {
        path: 'register',
        element: <UserRegister />,
      },
      {
        path: 'registrations',
        element: <UserRegistrations />,
      },
      {
        path: 'remote-and-earn',
        element: <UserRemoteAndEarn />,
      },
      {
        path: 'products',
        element: <UserProducts />,
      },
      {
        path: 'wallet',
        element: <UserWallet />,
      },
      {
        path: 'payout',
        element: <UserPayOut />,
      },
      {
        path: 'support-ticket',
        element: <UserSupportTicket />,
      },
      {
        path: 'settings',
        element: <UserSettings />,
      },
      {
        path: 'sign-out',
        element: <UserSignOut />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/login" replace />, // Redirect any unmatched paths to login
  },
]);

export const ModalContext = createContext();

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={`${showModal === true ? 'relative' : null}`}>
      <ModalContext.Provider value={{ showModal, setShowModal }}>
        <RouterProvider router={router} />
      </ModalContext.Provider>
    </div>
  );
}

export default App;
