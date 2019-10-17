import React from 'react';
import logo from './logo.svg';
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

function App() {
  return (
    <div className="App">
      <Container>
        <Navbar>
          <Navbar.Brand>
            Hackathon Frontend
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
          </Switch>
        </Router>
      </Container>
    </div>
  );
}

export default App;
