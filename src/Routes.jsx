import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { SecureViewWrapper } from './Components/SecureViewWrapper';
import { ActionsView } from './Features/Enduser/Actions/views/ActionsView';
import { Ranking } from './Features/Enduser/Ranking/views/Ranking';
import { UserProfile } from './Features/Enduser/UserProfile/views/UserProfile';
import { Rewards } from './Features/Enduser/Rewards/views/Rewards';
import { LandingPage } from './Features/Enduser/Actions/views/LandingPage';
import { CreateActionPage } from './Features/Admin/CreateActions/views/CreateActionPage';
import { Login } from './Components/Login/Login';
import { Demo } from './Features/Admin/Audience/GetData';
import { SpotifyPlayerWidget } from './Components/UI/Integrations/Spotify';
import { AudienceView } from './Features/Admin/Audience/views/AudienceView';
import { ArtistEdit } from './Features/Admin/ArtistEdit/views/ArtistEditPage';
/*
While we're currently supporting backwards compatability, routing should follow these strategies:
-Artist (Admin) pages should start with the route /artist, not use path parameters, be wrapped in <SecureViewWrapper userRole="admin">
-Fan (Enduser) pages that require auth should start with /secure and be wrapped in <SecureViewWrapper userRole="enduser">
-Enduser landing pages that do not require auth will use the path parameter /:artist
*/
export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/test">
          <SpotifyPlayerWidget />
        </Route>
        <Route path="/login/:service?">
          <Login />
        </Route>
        {/* support backwards compatability for secure/create-action-page (to be removed later on) */}
        <Route
          exact
          path={[
            '/',
            '/artist/create',
            '/admin/create-fan-magnet',
            '/artist/secure/create-action-page',
          ]}
        >
          <SecureViewWrapper userRole="admin">
            <CreateActionPage type="landing" />
          </SecureViewWrapper>
        </Route>
        <Route
          path={['/admin/create-accelerator', '/artist/create-accelerator']}
        >
          <SecureViewWrapper userRole="admin">
            <CreateActionPage type="action" />
          </SecureViewWrapper>
        </Route>

        <Route path="/admin/integration">
          <SecureViewWrapper userRole="admin">
            <CreateActionPage type="integration" />
          </SecureViewWrapper>
        </Route>

        <Route path="/artist/audience">
          <SecureViewWrapper userRole="admin">
            <AudienceView />
          </SecureViewWrapper>
        </Route>

        <Route path="/artist/info">
          <SecureViewWrapper userRole="admin">
            <ArtistEdit />
          </SecureViewWrapper>
        </Route>

        <Route path="/secure/:artist/ranking">
          <SecureViewWrapper userRole="enduser">
            <Ranking />
          </SecureViewWrapper>
        </Route>
        <Route path="/secure/:artist/profile">
          <SecureViewWrapper userRole="enduser">
            <UserProfile />
          </SecureViewWrapper>
        </Route>
        <Route path="/secure/:artist/rewards">
          <SecureViewWrapper userRole="enduser">
            <Rewards />
          </SecureViewWrapper>
        </Route>
        <Route path="/secure/:artist/:page?">
          <SecureViewWrapper userRole="enduser">
            <ActionsView />
          </SecureViewWrapper>
        </Route>
        <Route path="/:artist/:page?">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
};
