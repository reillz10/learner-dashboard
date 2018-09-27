import DashboardPage from './containers/DashboardPage';

/* eslint-disable no-underscore-dangle */
class RouteConfiguration {
  constructor(routes) {
    this._allRoutes = new Map();
    this._publicRoutes = new Map();
    this._privateRoutes = new Map();
    routes.forEach((route) => {
      this._allRoutes.set(route.path, route);
      if (route.private) {
        this._privateRoutes.set(route.path, route);
      } else {
        this._publicRoutes.set(route.path, route);
      }
    });
  }

  get publicRoutes() {
    return Array.from(this._publicRoutes.values());
  }

  set publicRoutes(routes) {
    this._publicRoutes = routes;
  }

  get privateRoutes() {
    return Array.from(this._privateRoutes.values());
  }

  set privateRoutes(routes) {
    this._privateRoutes = routes;
  }

  isCurrentRoutePublic() {
    const currentRoute = this._allRoutes.get(window.location.pathname);
    return currentRoute ? !currentRoute.private : true;
  }
}
/* eslint-enable no-underscore-dangle */

export default function getRouteConfig() {
  return new RouteConfiguration([
    { path: '/', component: DashboardPage, private: false },
  ]);
}
