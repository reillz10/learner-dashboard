import 'babel-polyfill'; // general ES2015 polyfill (e.g. promise)
import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  Switch,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Helmet } from 'react-helmet';
import { PrivateRoute } from '@edx/frontend-auth';

import apiClient from './data/apiClient';
import NotFoundPage from './containers/NotFoundPage';
import Header from './containers/Header';
import Footer from './containers/Footer';
import store from './data/store';
import history from './data/history';
import getRouteConfig from './routes';
import './index.scss';

const routes = [];
const routeConfig = getRouteConfig();
routeConfig.publicRoutes.forEach((publicRoute) => {
  routes.push(<Route exact path={publicRoute.path} component={publicRoute.component} />);
});
routeConfig.privateRoutes.forEach((privateRoute) => {
  routes.push(<PrivateRoute
    path={privateRoute.path}
    component={privateRoute.component}
    authenticatedAPIClient={apiClient}
    redirect={process.env.BASE_URL}
  />);
});

const AppWrapper = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Helmet
          titleTemplate="%s - edX Dashboard"
          defaultTitle="edX Dashboard"
        />
        <Header />
        <Switch>
          {routes}
          <Route component={NotFoundPage} />
        </Switch>
        <Footer />
      </div>
    </ConnectedRouter>
  </Provider>
);

if (routeConfig.isCurrentRoutePublic() || apiClient.isAuthenticated()) {
  ReactDOM.render(<AppWrapper />, document.getElementById('root'));
} else {
  apiClient.login(process.env.BASE_URL);
}
