import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import { Icon, Nav } from "@culturehq/components";

import "@culturehq/components/dist/main.css";
import "./styles.css";

import Home from "./Home";
import Analytics from "./Analytics";
import Event from "./Event";
import Events from "./Events";
import NotFound from "./NotFound";
import User from "./User";
import Users from "./Users";

const AppNav: React.FC = () => (
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
);

const AppSwitch: React.FC = () => (
  <div className="content">
    <Switch>
      <Route path="/analytics" component={Analytics} />
      <Route exact path="/events" component={Events} />
      <Route path="/events/:eventId" component={Event} />
      <Route exact path="/users" component={Users} />
      <Route path="/users/:userId" component={User} />
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </div>
);

const App: React.FC = () => (
  <StrictMode>
    <Router>
      <AppNav />
      <AppSwitch />
    </Router>
  </StrictMode>
);

ReactDOM.render(<App />, document.getElementById("main"));
