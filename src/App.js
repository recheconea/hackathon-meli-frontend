import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CampaignEdit from './pages/CampaignEdit';

function App() {
  return (
    <div className="App">
      <Container>
        <Nav>
          <Nav.Item>
            Hackathon Frontend
          </Nav.Item>
        </Nav>
        <Router>
          <Switch>
            <Route path="/">
              <CampaignEdit />
            </Route>
          </Switch>
        </Router>
      </Container>
    </div>
  );
}

export default App;
