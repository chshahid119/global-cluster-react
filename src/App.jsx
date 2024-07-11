import React, { createContext, useState } from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'

import AdminLogin from './components/AdminLogin'
import BusinessSignUp from './components/BusinessSignUp'
import BusinessLayout from './Layouts/BusinessLayout'
import AdminDashboard from './pages/Admin/Dashboard'
import BusinessDashboard from './pages/Business/Dashboard'
import BusinessProducts, {
  loader as productLoader,
} from './pages/Business/Products'
import BusinessSettings from './pages/Business/Settings'
import BusinessSignOut from './pages/Business/SingOut'
import BusinessSupportTicket from './pages/Business/SupportTicket'
import Login from './pages/Login'

import AdminLayout from './Layouts/AdminLayout'
import UserLayout from './Layouts/UserLayout'
import AdminBonusManagement from './pages/Admin/BonusMangement'
import AdminSupportCenter from './pages/Admin/SupportCenter'
import UserDashboard from './pages/User/Dashboard'
import UserNetwork from './pages/User/Network'
import UserPayOut from './pages/User/Payout'
import UserPermoteAndEArn from './pages/User/PermoteAndEarn'
import UserProducts from './pages/User/Products'
import UserRegister from './pages/User/Register'
import UserRegistrations from './pages/User/Registrations'
import UserSettings from './pages/User/Settings'
import UserSignOut from './pages/User/SignOut'
import UserSupportTicket from './pages/User/SupportTicket'
import UserWallet from './pages/User/Wallet'

import AdminBusinessRegistrations from './pages/Admin/BusinessRegistrations'
import AdminBusinessManage from './pages/Admin/ManageBusiness'
import AdminUserManage from './pages/Admin/ManageUser'
import AdminPayout from './pages/Admin/Payout'
import AdminProducts from './pages/Admin/Products.jsx'
import AdminStafManagement from './pages/Admin/StafManagement'
import AdminUserRanking from './pages/Admin/UserRankings'
import AdminUserRegistrations from './pages/Admin/UserRegistrations'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Navigate
        to="/login"
        replace
      />
    ), // Redirect root to login
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
        path: '',
        element: (
          <Navigate
            to="dashboard"
            replace
          />
        ),
      },
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
        path: '',
        element: (
          <Navigate
            to="dashboard"
            replace
          />
        ),
      },
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
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        path: '',
        element: (
          <Navigate
            to="dashboard"
            replace
          />
        ),
      },
      {
        path: 'dashboard',
        element: <AdminDashboard />,
      },
      {
        path: 'user/registrations',
        element: <AdminUserRegistrations />,
      },
      {
        path: 'business/registrations',
        element: <AdminBusinessRegistrations />,
      },
      {
        path: 'user/manage',
        element: <AdminUserManage />,
      },
      {
        path: 'business/manage',
        element: <AdminBusinessManage />,
      },
      {
        path: 'staff/management',
        element: <AdminStafManagement />,
      },
      {
        path: 'wallet',
        element: <UserWallet />,
      },
      {
        path: 'products',
        element: <AdminProducts />,
      },

      {
        path: 'payout',
        element: <AdminPayout />,
      },
      {
        path: 'user/rankings',
        element: <AdminUserRanking />,
      },
      {
        path: 'bonus/management',
        element: <AdminBonusManagement />,
      },
      {
        path: 'support/center',
        element: <AdminSupportCenter />,
      },
    ],
  },
  {
    path: '*',
    element: (
      <Navigate
        to="/login"
        replace
      />
    ), // Redirect any unmatched paths to login
  },
])
export const ModalContext = createContext()

function App() {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className={`${showModal === true ? 'relative' : null}`}>
      <ModalContext.Provider value={{ showModal, setShowModal }}>
        <RouterProvider router={router} />
      </ModalContext.Provider>
    </div>
  )
}

export default App
