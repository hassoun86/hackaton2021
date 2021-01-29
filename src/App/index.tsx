import React from 'react';
import { Route, Switch } from 'react-router-dom';
import 'assets/main.scss';

export const App: React.FC = () => {
  return (
        <Switch>
          <Route path="/">
            <div>Landing page</div>
          </Route>
          <Route path="/other">
            <div>other page</div>
          </Route>
        </Switch>
  );
};
