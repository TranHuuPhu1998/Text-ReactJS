import React, { lazy, Suspense, useEffect } from 'react';
import { Spin } from 'antd';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Layout from './library/layout/index';
import routes from './routes/routes';
const NotFound = lazy(() => import('features/not-found'));

const DelayedFallback = () => {
  useEffect(() => {
    return () => {
      clearTimeout(100);
    };
  }, []);

  return <Spin size="large" />;
};

const RenderApp = () => {
  return (
    <Layout>
      <Suspense fallback={<DelayedFallback />}>
        <Switch>
          {routes?.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={() => {
                  return React.createElement(route.component);
                }}
              />
            );
          })}
          <Route path="*" exact component={NotFound} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </Layout>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <RenderApp />
    </Router>
  );
};

export default App;
