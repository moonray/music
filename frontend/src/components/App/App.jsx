import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from '../../routes';

const App = () => (
  <div className="App">
    <Switch>
      {routes.map(route =>
        <Route
          exact={route.exact}
          strict={route.strict}
          path={route.path}
          component={route.component}
          key={route.path}
        />,
      )}
    </Switch>
  </div>
);

export default App;
