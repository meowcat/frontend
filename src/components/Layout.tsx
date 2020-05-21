import React from "react";
import { Layout, Menu } from "antd";
import { RouteComponentProps } from "@reach/router";
import { Link } from "@reach/router";
const { Header, Content } = Layout;

interface LayoutProps {
  children: React.ReactNode;
  routes: Array<{ name: string; path: string }>;
}

const LayoutComponent = ({
  children,
  routes,
  path,
}: LayoutProps & RouteComponentProps) => (
  <Layout className="layout">
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" selectedKeys={[path || ""]}>
        {routes.map(({ name, path: key }) => (
          <Menu.Item key={key}>
            <Link to={key}>{name}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </Header>
    <Layout className="main">
      <Content className="content">{children}</Content>
    </Layout>
  </Layout>
);

export default LayoutComponent;
