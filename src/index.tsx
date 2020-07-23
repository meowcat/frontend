import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

import Experiments from './views/Experiments/index';
import Home from './views/Home';
import Layout from './components/Layout';

import * as serviceWorker from './serviceWorker';
import './styles/tailwind.css';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/experiments', name: 'Experiments', Component: Experiments },
];
const menuRoutes = routes.map(({ path, name }) => ({ path, name }));

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      {routes.map(({ Component, path }) => (
        <Layout key={path} path={path} routes={menuRoutes}>
          <Component path="/" />
        </Layout>
      ))}
    </Router>
  </ApolloProvider>
);

if (process.env.NODE_ENV !== 'production') {
  import('react-axe').then((axe) => {
    axe.default(React, ReactDOM, 1000);
    ReactDOM.render(<App />, document.getElementById('root'));
  });
} else {
  ReactDOM.render(<App />, document.getElementById('root'));
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
