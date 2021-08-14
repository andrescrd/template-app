import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from './components/layout/DashboardLayout';
import MainLayout from './components/layout/MainLayout';
import Account from './components/pages/Account';
import CompanyList from './components/pages/CompanyList';
import CustomerList from './components/pages/CustomerList.';
import Dashboard from './components/pages/Dashboard.';
import Login from './components/pages/Login.';
import NotFound from './components/pages/NotFound.';
import ProductList from './components/pages/ProductList.';
import Register from './components/pages/Register.';
import Settings from './components/pages/Settings.';

const Routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'account', element: <Account /> },
      { path: 'companies', element: <CompanyList /> },
      { path: 'customers', element: <CustomerList /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'products', element: <ProductList /> },
      { path: 'settings', element: <Settings /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: '404', element: <NotFound /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default Routes;
