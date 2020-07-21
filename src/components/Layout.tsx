import React from 'react';
import { RouteComponentProps } from '@reach/router';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
  routes: Array<{ name: string; path: string }>;
}

const LayoutComponent = ({
  children,
  routes,
  path,
}: LayoutProps & RouteComponentProps) => (
  <>
    <Header routes={routes} path={path} />
    {children}
  </>
);

export default LayoutComponent;
