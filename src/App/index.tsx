import React from 'react';
import { Route, Switch } from 'react-router-dom';
import 'assets/main.scss';
import { LandingPage } from './components/LandingPage';
import { SelectRider } from './components/SelectRider';

export const App: React.FC = () => {
  return (
        <Switch>
          <Route path="/select-rider">
            <SelectRider />
          </Route>
          <Route path="/other">
            <div>Other page</div>
          </Route>
          <Route path="/">
            <LandingPage/>
          </Route>
        </Switch>
  );
};
