import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import NotFound from '../containers/NotFound';
import Home from '../containers/Home';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
      <Route component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
