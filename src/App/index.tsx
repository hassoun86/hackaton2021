import React from 'react';
import { Route, Switch } from 'react-router-dom';
import 'assets/main.scss';
import { LandingPage } from './components/LandingPage';
import { SelectRider } from './components/SelectRider';
import { SearchDestination } from './marcin/SearchDestination';

export const App: React.FC = () => {
  return (
        <Switch>
          <Route path="/select-rider">
            <SelectRider />
          </Route>
          <Route path="/search-destination">
            <SearchDestination />
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
