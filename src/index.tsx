import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import Experiments from "./views/Experiments";
import Home from "./views/Home";
import Layout from "./components/Layout";

import * as serviceWorker from "./serviceWorker";
import "./scss/index.scss";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
});

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/experiments", name: "Experiments", Component: Experiments },
];
const menuRoutes = routes.map(({ path, name }) => ({ path, name }));

render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Router>
        {routes.map(({ Component, path }) => (
          <Layout key={path} path={path} routes={menuRoutes}>
            <Component path="/" />
          </Layout>
        ))}
      </Router>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
