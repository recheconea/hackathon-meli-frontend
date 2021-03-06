import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import CampaignEdit from './pages/CampaignEdit';
import CampaignList from './pages/CampaignList';
import CampaignNew from './pages/CampaignNew';
import ContributorNew from './pages/ContributorNew';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          <img src="/images/walrus.png" alt="logo" className="walrus-logo" />
          Hackathon - The Walruses App
        </Navbar.Brand>
      </Navbar>
      <Router>
        <Switch>
          <Route path="/campaign/new">
            <CampaignNew />
          </Route>
          <Route path="/campaign">
            <CampaignEdit />
          </Route>
          <Route path="/">
            <CampaignList />
          </Route>
          <Route path="/contributor/">
            <ContributorNew />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
