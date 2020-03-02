import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Icon, Nav } from "@culturehq/components";

import "@culturehq/components/dist/main.css";
import "./styles.css";

import Analytics from "./Analytics";
import Events from "./Events";
import Users from "./Users";

const Home: React.FC = () => (
  <h1>Welcome to CultureHQ!</h1>
);

const App: React.FC = () => (
  <StrictMode>
    <Router>
      <Nav className="nav">
        <Link to="/">
          <Icon icon="home" /> Home
        </Link>
        <Link to="/analytics">
          <Icon icon="analytics" /> Analytics
        </Link>
        <Link to="/events">
          <Icon icon="calendar-filled" /> Events
        </Link>
        <Link to="/users">
          <Icon icon="ios-people" /> Users
        </Link>
      </Nav>
      <div className="content">
        <Switch>
          <Route path="/analytics">
            <Analytics />
          </Route>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  </StrictMode>
);

ReactDOM.render(<App />, document.getElementById("main"));
