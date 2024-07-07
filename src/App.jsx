import React, { createContext, useState } from 'react';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';

import AdminLogin from './components/AdminLogin';
import BusinessSignUp from './components/BusinessSignUp';
import BusinessLayout from './Layouts/BusinessLayout';
import BusinessDashboard from './pages/Business/Dashboard';
import BusinessProducts, {
  loader as productLoader,
} from './pages/Business/Products';
import BusinessSettings from './pages/Business/Settings';
import BusinessSignOut from './pages/Business/SingOut';
import BusinessSupportTicket from './pages/Business/SupportTicket';
import Login from './pages/Login';

import UserLayout from './Layouts/UserLayout';
import UserDashboard from './pages/User/Dashboard';
import UserNetwork from './pages/User/Network';
import UserPayOut from './pages/User/Payout';
import UserPermoteAndEArn from './pages/User/PermoteAndEarn';
import UserProducts from './pages/User/Products';
import UserRegister from './pages/User/Register';
import UserRegistrations from './pages/User/Registrations';
import UserSettings from './pages/User/Settings';
import UserSignOut from './pages/User/SignOut';
import UserSupportTicket from './pages/User/SupportTicket';
import UserWallet from './pages/User/Wallet';

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
        loader: productLoader,
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
        path: 'promote-and-earn',
        element: <UserPermoteAndEArn />,
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
