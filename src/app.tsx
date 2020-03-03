import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import { Icon, Nav } from "@culturehq/components";

import "@culturehq/components/dist/main.css";
import "./styles.css";

import Home from "./Home";
import Analytics from "./Analytics";
import Events from "./Events";
import Users from "./Users";

const App: React.FC = () => (
  <StrictMode>
    <Router>
      <Nav className="nav">
        <NavLink exact to="/">
          <Icon icon="home" /> Home
        </NavLink>
        <NavLink to="/analytics">
          <Icon icon="analytics" /> Analytics
        </NavLink>
        <NavLink to="/events">
          <Icon icon="calendar-filled" /> Events
        </NavLink>
        <NavLink to="/users">
          <Icon icon="ios-people" /> Users
        </NavLink>
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
