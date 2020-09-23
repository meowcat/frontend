import React from 'react';
import { RouteComponentProps, Redirect } from '@reach/router';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
  routes: Array<{ name: string; path: string }>;
}

const Layout = ({
  children,
  routes,
  path,
}: LayoutProps & RouteComponentProps) =>
  localStorage.getItem('token') ? (
    <>
      <Header routes={routes} path={path} />
      {children}
    </>
  ) : (
    <Redirect to="/signin" noThrow />
  );

export default Layout;
